"use client";

import dynamic from "next/dynamic";
import { useCanRender3D } from "@/lib/use-can-render-3d";
import styles from "./Hero3D.module.css";

// three.js stays out of the initial bundle and never runs on the server.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export function Hero3D() {
  const can3D = useCanRender3D();
  if (!can3D) return null;
  return (
    <div className={styles.scene} aria-hidden="true">
      <HeroScene />
    </div>
  );
}
