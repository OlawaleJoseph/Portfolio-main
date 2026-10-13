"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Vector3, type Group } from "three";
import { useTheme } from "@/lib/theme";
import type { Client } from "@/lib/types";
import styles from "./ClientGlobe.module.css";

const RADIUS = 3.2;

/** Evenly distributes n points on a sphere (Fibonacci lattice). */
function spherePoints(n: number, radius: number): [number, number, number][] {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / Math.max(n - 1, 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return [Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius];
  });
}

const world = new Vector3();

function Label({ client, position }: { client: Client; position: [number, number, number] }) {
  const anchor = useRef<Group>(null);
  const label = useRef<HTMLAnchorElement & HTMLSpanElement>(null);

  // Fade and shrink labels as they rotate to the back of the sphere.
  useFrame(() => {
    if (!anchor.current || !label.current) return;
    anchor.current.getWorldPosition(world);
    const depth = (world.z / RADIUS + 1) / 2; // 0 = back, 1 = front
    const el = label.current;
    el.style.opacity = String(0.12 + depth * 0.88);
    el.style.transform = `scale(${0.7 + depth * 0.4})`;
    el.style.pointerEvents = depth > 0.45 ? "auto" : "none";
    el.style.zIndex = String(Math.round(depth * 100));
  });

  const className = `${styles.label} ${client.type === "shopify" ? styles.shopify : styles.other}`;

  return (
    <group ref={anchor} position={position}>
      <Html center zIndexRange={[100, 0]}>
        {client.url ? (
          <a ref={label} href={client.url} target="_blank" rel="noopener noreferrer" className={className}>
            {client.name}
          </a>
        ) : (
          <span ref={label} className={className}>
            {client.name}
          </span>
        )}
      </Html>
    </group>
  );
}

function Globe({ clients }: { clients: Client[] }) {
  const light = useTheme() === "light";
  const points = useMemo(() => spherePoints(clients.length, RADIUS), [clients.length]);
  return (
    <group>
      <mesh>
        <sphereGeometry args={[RADIUS * 0.96, 48, 32]} />
        <meshBasicMaterial color={light ? "#4a7a0c" : "#d8ff5c"} wireframe transparent opacity={light ? 0.12 : 0.06} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[RADIUS * 0.16, 2]} />
        <meshStandardMaterial color="#d8ff5c" emissive="#d8ff5c" emissiveIntensity={0.9} flatShading />
      </mesh>
      {clients.map((c, i) => (
        <Label key={c.slug} client={c} position={points[i]} />
      ))}
    </group>
  );
}

export default function GlobeScene({ clients }: { clients: Client[] }) {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 10.5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={40} />
      <Globe clients={clients} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        enableDamping
        rotateSpeed={0.6}
      />
    </Canvas>
  );
}
