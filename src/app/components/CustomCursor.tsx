import { useEffect, useRef, useState } from "react";

const TEXT_TAGS = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "LI", "A", "LABEL", "TD", "TH", "BLOCKQUOTE", "PRE", "CODE", "EM", "STRONG"]);

function isTextNode(el: HTMLElement): boolean {
  if (TEXT_TAGS.has(el.tagName)) {
    const computed = window.getComputedStyle(el).cursor;
    if (computed === "pointer") return false;
    return true;
  }
  const computed = window.getComputedStyle(el).cursor;
  return computed === "text";
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ibeamRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const [hovered, setHovered] = useState(false);
  const [isText, setIsText] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setHidden(false);
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        (target.closest("a") || target.closest("button") ||
          target.tagName === "A" || target.tagName === "BUTTON" ||
          window.getComputedStyle(target).cursor === "pointer") &&
        !isTextNode(target);

      setHovered(!!isInteractive);
      setIsText(!isInteractive && isTextNode(target));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", updateCursorType);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      if (ibeamRef.current) {
        ibeamRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", updateCursorType);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const dotSize = clicking ? 6 : 8;
  const ringSize = hovered ? 32 : clicking ? 24 : 36;
  const ringOpacity = hovered ? 1 : 0.5;

  return (
    <>
      {/* I-beam cursor — shown on text */}
      <div
        ref={ibeamRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: hidden || !isText ? 0 : 1,
          transition: "opacity 0.15s ease",
          willChange: "transform",
          mixBlendMode: "difference",
          transform: "translate(-100px, -100px)",
        }}
      >
        <IBeam />
      </div>

      {/* Inner dot — snaps instantly, hidden when over text */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 9999,
          marginLeft: `-${dotSize / 2}px`,
          marginTop: `-${dotSize / 2}px`,
          opacity: hidden || isText ? 0 : 1,
          transition: "width 0.15s ease, height 0.15s ease, margin 0.15s ease, opacity 0.15s ease",
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      />

      {/* Outer ring — lags behind, hidden when over text */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          borderRadius: "50%",
          border: "1px solid #fff",
          pointerEvents: "none",
          zIndex: 9998,
          marginLeft: `-${ringSize / 2}px`,
          marginTop: `-${ringSize / 2}px`,
          opacity: hidden || isText ? 0 : ringOpacity,
          transition: "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), margin 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.15s ease",
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      />

      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}

function IBeam() {
  const w = 2;
  const h = 20;
  const capW = 6;

  return (
    <svg
      width={capW * 2 + 2}
      height={h + 4}
      viewBox={`0 0 ${capW * 2 + 2} ${h + 4}`}
      style={{
        display: "block",
        transform: `translate(-${capW + 1}px, -${(h + 4) / 2}px)`,
        overflow: "visible",
      }}
    >
      {/* Top cap */}
      <line x1={1} y1={2} x2={capW * 2 + 1} y2={2} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      {/* Stem */}
      <line x1={capW + 1} y1={2} x2={capW + 1} y2={h + 2} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bottom cap */}
      <line x1={1} y1={h + 2} x2={capW * 2 + 1} y2={h + 2} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
