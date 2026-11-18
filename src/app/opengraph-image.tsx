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
            "linear-gradient(135deg, #071426 0%, #242830 62%, #005AC8 100%)",
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
              background: "#242830",
              border: "2px solid #C0C0C0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="50" height="34" viewBox="0 0 450 295" fill="none" aria-hidden="true">
              <path fill="#F5F7FA" d="M7,6 76,6 223,122 229,121 372,6 443,8 438,17 438,50 221,185 77,289 7,289 43,259 176,166 73,87 73,214 7,249Z M432,84 435,84 435,122 439,125 439,289 373,289 372,173 307,214 229,214Z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#F5F7FA", fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
              MAVRON
            </span>
            <span style={{ color: "#C0C0C0", fontSize: 15, letterSpacing: 5 }}>
              MECHANICAL GROUP
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#F5F7FA",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Mechanical systems, built to hold.
          </span>
          <span style={{ color: "#C0C0C0", fontSize: 26, marginTop: 24, maxWidth: 880 }}>
            HVAC-R · Plumbing · Trade Partners · Aftercare
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 120, height: 4, background: "linear-gradient(90deg,#C0C0C0,#007BFF)" }} />
          <span style={{ color: "#64748B", fontSize: 20 }}>British Columbia, Canada</span>
        </div>
      </div>
    ),
    size
  );
}
