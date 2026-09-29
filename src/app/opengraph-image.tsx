import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${site.name} — mechanical contractor`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #08090b 0%, #16191e 55%, #2a1310 100%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 6,
              background: "linear-gradient(135deg, #d1362f, #7f1410)",
              border: "2px solid #c87137",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f2ab6b",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f5f6f8", fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
              MAVRON
            </span>
            <span style={{ color: "#9aa2ad", fontSize: 15, letterSpacing: 5 }}>
              PROTECTION GROUP
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#f5f6f8",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Mechanical systems, built to hold.
          </span>
          <span style={{ color: "#c3c9d1", fontSize: 26, marginTop: 24, maxWidth: 880 }}>
            Plumbing · HVAC-R · VDC/BIM · Prefabrication · Aftercare
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 120, height: 4, background: "linear-gradient(90deg,#b5231f,#e08a45)" }} />
          <span style={{ color: "#6b7280", fontSize: 20 }}>British Columbia, Canada</span>
        </div>
      </div>
    ),
    size
  );
}
