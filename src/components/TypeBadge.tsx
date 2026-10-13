import type { ClientType } from "@/lib/types";
import styles from "./TypeBadge.module.css";

export const typeLabels: Record<ClientType, string> = {
  shopify: "Shopify",
  other: "Custom web",
};

export function TypeBadge({ type, className = "" }: { type: ClientType; className?: string }) {
  return <span className={`${styles.badge} ${styles[type]} ${className}`}>{typeLabels[type]}</span>;
}
