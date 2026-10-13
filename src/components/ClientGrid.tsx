"use client";

import { useState } from "react";
import { useCanRender3D, useMediaQuery } from "@/lib/use-can-render-3d";
import type { Client, ClientType } from "@/lib/types";
import { ClientCard } from "./ClientCard";
import { SectionHeading } from "./SectionHeading";
import { ShopifyIcon } from "./ShopifyIcon";
import { ClientGlobe } from "./three/ClientGlobe";
import { typeLabels } from "./TypeBadge";
import styles from "./ClientGrid.module.css";

type Filter = "all" | ClientType;
type View = "globe" | "grid";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "shopify", label: typeLabels.shopify },
  { value: "other", label: typeLabels.other },
];

export function ClientGrid({ clients }: { clients: Client[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [chosenView, setView] = useState<View | null>(null);
  const can3D = useCanRender3D();
  const finePointer = useMediaQuery("(pointer: fine)");

  // Globe by default on desktop; grid on touch (drag-to-spin fights page scroll) or without WebGL.
  const view: View = can3D ? (chosenView ?? (finePointer ? "globe" : "grid")) : "grid";

  const count = (f: Filter) => (f === "all" ? clients.length : clients.filter((c) => c.type === f).length);
  const visible = filter === "all" ? clients : clients.filter((c) => c.type === filter);

  const controls = (
    <div className={styles.controls}>
      {can3D && (
        <div className={styles.pills} role="group" aria-label="Display as">
          {(["globe", "grid"] as const).map((v) => (
            <button
              key={v}
              type="button"
              className={`${styles.pill} ${view === v ? styles.active : ""}`}
              aria-pressed={view === v}
              onClick={() => setView(v)}
            >
              {v === "globe" ? "3D globe" : "Grid"}
            </button>
          ))}
        </div>
      )}
      <div className={styles.pills} role="group" aria-label="Filter clients">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={`${styles.pill} ${filter === f.value ? styles.active : ""}`}
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.value === "shopify" && <ShopifyIcon />}
            {f.label}
            <span className={styles.count}>{count(f.value)}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <SectionHeading eyebrow="Selected clients" title="Brands I've built for" aside={controls} />
      {/* Keyed by filter so items remount and replay their entrance animation. */}
      {view === "globe" ? (
        <ClientGlobe key={filter} clients={visible} />
      ) : (
        <ul key={filter} className={styles.grid}>
          {visible.map((c, i) => (
            <ClientCard key={c.slug} client={c} index={i} />
          ))}
        </ul>
      )}
    </>
  );
}
