import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Aurum",
    category: "Identity",
    year: "2025",
    description: "Full brand identity for a luxury financial advisory firm.",
    size: "large",
    bg: "#f0ede8",
  },
  {
    id: 2,
    title: "Verd",
    category: "Packaging",
    year: "2025",
    description: "Sustainable packaging system for a plant-based cosmetics brand.",
    size: "small",
    bg: "#e8ece8",
  },
  {
    id: 3,
    title: "Slate",
    category: "UI/UX",
    year: "2024",
    description: "Digital design system for a fintech startup.",
    size: "small",
    bg: "#e8eaec",
  },
  {
    id: 4,
    title: "Mori",
    category: "Identity",
    year: "2024",
    description: "Brand strategy and visual identity for a modern architecture studio.",
    size: "medium",
    bg: "#ece8ec",
  },
  {
    id: 5,
    title: "Pale",
    category: "Packaging",
    year: "2024",
    description: "Premium wine label and packaging design.",
    size: "medium",
    bg: "#ece8e8",
  },
];

export function WorkGrid() {
  return (
    <section
      style={{
        padding: "120px 48px",
        maxWidth: "1440px",
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(36px, 4vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: "1",
            color: "#000",
          }}
        >
          Selected<br />Work
        </h2>
        <span style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888" }}>
          2023–2025
        </span>
      </div>

      {/* Asymmetric grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "auto",
          gap: "24px",
        }}
      >
        <ProjectCard project={projects[0]} style={{ gridColumn: "1 / 8", gridRow: "1" }} tall />
        <ProjectCard project={projects[1]} style={{ gridColumn: "8 / 13", gridRow: "1" }} />
        <ProjectCard project={projects[2]} style={{ gridColumn: "1 / 5", gridRow: "2" }} />
        <ProjectCard project={projects[3]} style={{ gridColumn: "5 / 10", gridRow: "2" }} />
        <ProjectCard project={projects[4]} style={{ gridColumn: "10 / 13", gridRow: "2" }} />
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  style,
  tall,
}: {
  project: (typeof projects)[0];
  style: React.CSSProperties;
  tall?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...style,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        style={{
          background: project.bg,
          height: tall ? "480px" : "320px",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          transform: hovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.04) 40px)",
          }}
        />

        {/* Project number */}
        <span
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "rgba(0,0,0,0.35)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {String(project.id).padStart(2, "0")}
        </span>

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "32px",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              fontFamily: "'Inter', sans-serif",
              lineHeight: "1.6",
            }}
          >
            {project.description}
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            View Project
            <span style={{ fontSize: "16px" }}>→</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "16px",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#000",
              margin: "0 0 4px",
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            {project.category}
          </span>
        </div>
        <span style={{ fontSize: "12px", color: "#aaa", fontWeight: 300 }}>{project.year}</span>
      </div>
    </div>
  );
}
