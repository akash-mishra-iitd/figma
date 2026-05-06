import { CustomCursor } from "./components/CustomCursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WorkGrid } from "./components/WorkGrid";
import { ProjectList } from "./components/ProjectList";
import { About } from "./components/About";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#fff",
        color: "#000",
        overflowX: "hidden",
        position: "relative",
        cursor: "none",
      }}
    >
      <CustomCursor />
      <Nav />

      {/* Hero — full screen */}
      <div style={{ position: "relative" }}>
        <Hero />
      </div>

      {/* Thin divider */}
      <div style={{ width: "100%", height: "1px", background: "#e5e5e5" }} />

      {/* Selected Work Grid */}
      <WorkGrid />

      {/* Project List */}
      <ProjectList />

      {/* About / Studio */}
      <div style={{ borderTop: "1px solid #e5e5e5" }}>
        <About />
      </div>

      {/* Clients Marquee */}
      <Clients />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
