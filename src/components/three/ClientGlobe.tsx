"use client";

import dynamic from "next/dynamic";
import type { Client } from "@/lib/types";
import styles from "./ClientGlobe.module.css";

const GlobeScene = dynamic(() => import("./GlobeScene"), {
  ssr: false,
  loading: () => <p className={styles.loading}>Loading globe…</p>,
});

export function ClientGlobe({ clients }: { clients: Client[] }) {
  return (
    <div className={styles.wrap}>
      <GlobeScene clients={clients} />
      <p className={styles.hint}>Drag to spin · click a brand to visit</p>
    </div>
  );
}
