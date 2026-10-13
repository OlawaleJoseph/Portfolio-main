"use client";

import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";
import { useTheme } from "@/lib/theme";
import { MathUtils } from "three";

// Lime reads on dark; on light backgrounds the scene needs a deeper green to stay visible.
const ACCENT = { dark: "#d8ff5c", light: "#5f8f12" };

function Orb({ accent }: { accent: string }) {
  const group = useRef<Group>(null);

  // Ease the whole group toward the pointer for a parallax tilt.
  useFrame(({ pointer }, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y = MathUtils.damp(g.rotation.y, pointer.x * 0.6, 3, delta);
    g.rotation.x = MathUtils.damp(g.rotation.x, -pointer.y * 0.4, 3, delta);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.25, 24]} />
          <MeshDistortMaterial
            color="#6b8226"
            emissive="#1f2a06"
            roughness={0.18}
            metalness={0.55}
            distort={0.36}
            speed={1.6}
          />
        </mesh>
        <mesh scale={1.55}>
          <icosahedronGeometry args={[1.25, 1]} />
          <meshBasicMaterial color={accent} wireframe transparent opacity={0.22} />
        </mesh>
      </Float>
      <Sparkles count={90} scale={7} size={2.2} speed={0.35} color={accent} opacity={0.8} />
    </group>
  );
}

export default function HeroScene() {
  const accent = ACCENT[useTheme()];
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  // Stop rendering when the hero is scrolled out of view.
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapper} style={{ position: "absolute", inset: 0 }}>
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
        eventPrefix="client"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 5, 3]} intensity={2.2} />
        <directionalLight position={[-5, -2, -2]} intensity={1.4} color="#6fa8ff" />
        <pointLight position={[0, 0, 4]} intensity={6} color={ACCENT.dark} distance={10} />
        <Orb accent={accent} />
      </Canvas>
    </div>
  );
}
