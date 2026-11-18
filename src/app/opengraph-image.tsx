import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.headlines[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#101814",
          color: "#e9eee9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#9aa59e" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#9fd9b5" }} />
          {site.name} · Shopify engineering studio
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.08, letterSpacing: -2, maxWidth: 980 }}>{site.headlines[0]}</div>
        <div style={{ fontSize: 26, color: "#9fd9b5" }}>Theme rebuilds · Script-tag cleanup · CRO · Shopify Plus</div>
      </div>
    ),
    size,
  );
}
