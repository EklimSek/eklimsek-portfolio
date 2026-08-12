import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function ProfileCard() {
  const photoRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = photoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (photoRef.current) {
      photoRef.current.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    }
  };

  return (
    <div className="profile-card">

      <div
        className="profile-photo-wrap"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Replace src with your own photo in /public */}
        <img
          ref={photoRef}
          className="profile-photo"
          src="/profile-image.PNG"
          alt="Portrait of Lim"
        />
      </div>

      <h1>Eklim Sek</h1>
      <span className="profile-role">Frontend Developer</span>
      <p className="profile-tagline">
        I build clean, fast interfaces and full-stack products — currently focused on
        Backend integration and architectural design system.
      </p>

      <div className="profile-location">
        <MapPin size={14} strokeWidth={1.75} />
        Phnom Penh, Cambodia
      </div>

      <div className="profile-socials">
        <a href="https://github.com/EklimSek" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={18} strokeWidth={1.75} />
        </a>
        <a href="https://www.linkedin.com/in/eklim-sek-4565b2379/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} strokeWidth={1.75} />
        </a>
        <a href="mailto:eklimsek2005@gmail.com" aria-label="Email">
          <Mail size={18} strokeWidth={1.75} />
        </a>
      </div>
    </div>
  );
}
