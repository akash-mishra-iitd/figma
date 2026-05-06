export function About() {
  return (
    <section
      id="studio"
      style={{
        padding: "120px 48px",
        maxWidth: "1440px",
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "32px",
          }}
        >
          The Studio
        </p>
        <h2
          style={{
            fontSize: "clamp(36px, 4vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: "1.0",
            color: "#000",
            margin: "0",
          }}
        >
          We believe great<br />
          design is invisible.
        </h2>
      </div>

      <div>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 300,
            color: "#444",
            lineHeight: "1.8",
            marginBottom: "32px",
          }}
        >
          FORM is a branding studio founded on the principle that the most powerful identities are those that communicate with precision and restraint. We work with ambitious companies to build visual systems that endure.
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 300,
            color: "#888",
            lineHeight: "1.8",
          }}
        >
          Based in New York and London. Working globally with clients across luxury, finance, architecture, and technology.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "32px",
            marginTop: "56px",
            borderTop: "1px solid #e5e5e5",
            paddingTop: "40px",
          }}
        >
          {[
            { num: "87", label: "Projects" },
            { num: "14", label: "Awards" },
            { num: "7", label: "Years" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: "clamp(28px, 3vw, 48px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#000",
                  lineHeight: "1",
                  marginBottom: "8px",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
