export function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#000",
        padding: "120px 48px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "end",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: "32px",
            }}
          >
            Next Project
          </p>
          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 80px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: "1.0",
              color: "#fff",
              margin: "0 0 48px",
            }}
          >
            Let's build<br />
            something<br />
            lasting.
          </h2>
          <ContactLink>hello@form-studio.co</ContactLink>
        </div>

        <div style={{ paddingBottom: "8px" }}>
          <div
            style={{
              borderTop: "1px solid #222",
              paddingTop: "40px",
            }}
          >
            {[
              { label: "New Business", value: "hello@form-studio.co" },
              { label: "Press", value: "press@form-studio.co" },
              { label: "New York", value: "+1 212 555 0140" },
              { label: "London", value: "+44 20 7946 0720" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 0",
                  borderBottom: "1px solid #222",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "14px", fontWeight: 300, color: "#888" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={`mailto:${children}`}
      style={{
        display: "inline-block",
        fontSize: "clamp(14px, 1.5vw, 18px)",
        fontWeight: 300,
        color: "#fff",
        textDecoration: "none",
        borderBottom: "1px solid #333",
        paddingBottom: "4px",
        transition: "border-color 0.2s",
        letterSpacing: "0.02em",
        fontFamily: "'Inter', sans-serif",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#fff")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#333")}
    >
      {children}
    </a>
  );
}
