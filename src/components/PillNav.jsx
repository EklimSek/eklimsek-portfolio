import { useEffect, useState } from "react";
import { User, Wrench, FolderCode, GraduationCap, Mail } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderCode },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function PillNav() {
  const [activeId, setActiveId] = useState("about");
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="pill-nav" aria-label="Section navigation">
      {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
        const isExpanded = hoveredId === id || (hoveredId === null && activeId === id);
        return (
          <button
            key={id}
            className={`pill-item${isExpanded ? " active" : ""}`}
            onClick={() => handleClick(id)}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-current={activeId === id ? "true" : undefined}
          >
            <Icon size={18} strokeWidth={1.75} />
            <span className="pill-label">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
