import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
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
          justifyContent: "flex-end",
          padding: 80,
          background: "radial-gradient(circle at 85% 15%, rgba(216,255,92,0.25), #0c0c0d 55%)",
          color: "#f2f0eb",
        }}
      >
        <div style={{ fontSize: 88, lineHeight: 1, letterSpacing: -2 }}>{profile.name}</div>
        <div style={{ fontSize: 56, color: "#d8ff5c", marginTop: 16 }}>{profile.role}</div>
        <div style={{ fontSize: 26, color: "#9a978f", marginTop: 36 }}>
          React · Next.js · Node.js · Shopify
        </div>
      </div>
    ),
    size,
  );
}
