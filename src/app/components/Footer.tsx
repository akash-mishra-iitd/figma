export function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid #1a1a1a",
        padding: "40px 48px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          FORM
        </span>

        <span style={{ fontSize: "12px", fontWeight: 300, color: "#444", letterSpacing: "0.04em" }}>
          © 2026 Form Studio. All rights reserved.
        </span>

        <div style={{ display: "flex", gap: "32px" }}>
          {["Instagram", "Dribbble", "LinkedIn", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              style={{
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#444",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#444")}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
