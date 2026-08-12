import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({
  name,
  description,
  tags,
  githubUrl,
  liveUrl,
  status, // "live" | "progress"
}) {
  const isLive = status === "live";

  return (
    <article className="project-card">
      <div className="project-card-head">
        <h3>{name}</h3>
        <span className={`status-badge ${isLive ? "live" : "progress"}`}>
          <span className="status-dot" />
          {isLive ? "Live" : "In Progress"}
        </span>
      </div>

      <p className="project-desc">{description}</p>

      <div className="tech-tags">
        {tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={15} strokeWidth={1.75} />
            Code
          </a>
        )}
        {isLive && liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={15} strokeWidth={1.75} />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
