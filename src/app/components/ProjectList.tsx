import { useState } from "react";

const projects = [
  { id: "01", title: "Aurum Financial", category: "Brand Identity", year: "2025" },
  { id: "02", title: "Verd Cosmetics", category: "Packaging System", year: "2025" },
  { id: "03", title: "Slate Fintech", category: "UI / UX Design", year: "2024" },
  { id: "04", title: "Mori Architecture", category: "Brand Identity", year: "2024" },
  { id: "05", title: "Pale Vineyard", category: "Packaging / Print", year: "2024" },
  { id: "06", title: "Nox Hotels", category: "Brand Identity", year: "2023" },
  { id: "07", title: "Crest Editorial", category: "Art Direction", year: "2023" },
  { id: "08", title: "Orb Technology", category: "UI / UX Design", year: "2023" },
];

export function ProjectList() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      style={{
        padding: "80px 0 120px",
        fontFamily: "'Inter', sans-serif",
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        <div style={{ marginBottom: "64px" }}>
          <p style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}>
            All Projects
          </p>
        </div>

        <div>
          {projects.map((project, i) => (
            <a
              key={project.id}
              href="#"
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto auto",
                alignItems: "center",
                gap: "24px",
                padding: "28px 0",
                borderBottom: "1px solid #e5e5e5",
                textDecoration: "none",
                color: hovered === project.id ? "#000" : "#000",
                transition: "all 0.2s ease",
                opacity: hovered !== null && hovered !== project.id ? 0.3 : 1,
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "#aaa",
                }}
              >
                {project.id}
              </span>

              <span
                style={{
                  fontSize: "clamp(20px, 2.5vw, 36px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: "1",
                  transform: hovered === project.id ? "translateX(8px)" : "translateX(0)",
                  transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                  display: "inline-block",
                }}
              >
                {project.title}
              </span>

              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                  textAlign: "right",
                }}
              >
                {project.category}
              </span>

              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#aaa",
                  textAlign: "right",
                  minWidth: "48px",
                }}
              >
                {project.year}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
