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
              background: "#08090b",
              border: "2px solid #45494b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="50" height="34" viewBox="0 0 450 295" fill="none" aria-hidden="true">
              <path fill="#ffffff" d="M7,6 76,6 223,122 229,121 372,6 443,8 438,17 438,50 221,185 77,289 7,289 43,259 176,166 73,87 73,214 7,249Z M432,84 435,84 435,122 439,125 439,289 373,289 372,173 307,214 229,214Z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f5f6f8", fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
              MAVRON
            </span>
            <span style={{ color: "#9aa2ad", fontSize: 15, letterSpacing: 5 }}>
              MECHANICAL GROUP
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
