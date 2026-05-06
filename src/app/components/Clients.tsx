import { useEffect, useRef } from "react";

const clients = [
  "Aurum Group",
  "Verd Beauty",
  "Slate Capital",
  "Mori Studio",
  "Pale Wines",
  "Nox Hotels",
  "Crest Media",
  "Orb Systems",
  "Arc Ventures",
  "Holm Nordic",
  "Dusk Agency",
  "Lune Studio",
];

export function Clients() {
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);

  return (
    <section
      style={{
        padding: "80px 0",
        fontFamily: "'Inter', sans-serif",
        borderTop: "1px solid #e5e5e5",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 48px",
          marginBottom: "40px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#888",
          }}
        >
          Clients
        </p>
      </div>

      {/* Marquee row 1 — left to right */}
      <div style={{ overflow: "hidden", marginBottom: "0" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee-left 28s linear infinite",
          }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "48px",
                paddingRight: "48px",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#000",
                  whiteSpace: "nowrap",
                }}
              >
                {client}
              </span>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc", display: "inline-block", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right to left */}
      <div style={{ overflow: "hidden", marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee-right 36s linear infinite",
          }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "48px",
                paddingRight: "48px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  whiteSpace: "nowrap",
                }}
              >
                {client}
              </span>
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#ddd", display: "inline-block", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
