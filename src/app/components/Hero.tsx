import { useEffect, useRef } from "react";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="work"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 48px 80px",
        maxWidth: "1440px",
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: "960px" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "40px",
            opacity: 0,
            animation: "fadeUp 0.8s 0.2s forwards cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Branding Studio — Est. 2018
        </p>

        <h1
          ref={headlineRef}
          style={{
            fontSize: "clamp(56px, 8vw, 128px)",
            fontWeight: 900,
            lineHeight: "0.93",
            letterSpacing: "-0.04em",
            color: "#000",
            margin: "0 0 48px",
          }}
        >
          Designing<br />
          timeless<br />
          identities.
        </h1>

        <p
          style={{
            fontSize: "16px",
            fontWeight: 300,
            color: "#555",
            maxWidth: "360px",
            lineHeight: "1.7",
            marginBottom: "56px",
            opacity: 0,
            animation: "fadeUp 0.8s 0.5s forwards cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          We craft visual systems and brand identities for forward-thinking companies.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.8s 0.7s forwards cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <HeroButton primary href="#work">View Work</HeroButton>
          <HeroButton href="#contact">Get in touch</HeroButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          right: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0,
          animation: "fadeUp 0.8s 1.1s forwards cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "64px",
            background: "linear-gradient(to bottom, transparent, #000)",
          }}
        />
        <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function HeroButton({ children, primary, href }: { children: React.ReactNode; primary?: boolean; href?: string }) {
  const base: React.CSSProperties = {
    display: "inline-block",
    padding: "14px 36px",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "all 0.25s ease",
    cursor: "pointer",
    border: "1px solid #000",
    fontFamily: "'Inter', sans-serif",
  };

  const style: React.CSSProperties = primary
    ? { ...base, background: "#000", color: "#fff" }
    : { ...base, background: "transparent", color: "#000" };

  return (
    <a
      href={href}
      style={style}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (primary) {
          el.style.background = "#222";
        } else {
          el.style.background = "#000";
          el.style.color = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (primary) {
          el.style.background = "#000";
        } else {
          el.style.background = "transparent";
          el.style.color = "#000";
        }
      }}
    >
      {children}
    </a>
  );
}
