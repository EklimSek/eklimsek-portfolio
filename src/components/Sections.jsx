import { Github, Linkedin, Mail, Send } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiFigma,
  SiCloudinary,
  SiOpenjdk,
  SiSpringboot,
  SiDocker,
} from "react-icons/si";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Responsive Design", icon: null },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Java", icon: SiOpenjdk },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Redis", icon: SiRedis },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <span className="section-eyebrow">01 — Who I am</span>
      <h2>About Me</h2>
      <p className="about-text">
        I'm Eklim Sek, a junior majoring in Software Development at American University of Phnom Penh,
        based in Phnom Penh, Cambodia. I focus on frontend development with
        React, and build full-stack systems using Node.js, MongoDB, and
        Spring Boot with MySQL.
      </p>
      <p className="about-text">
        My work includes a full-stack e-commerce platform — covering the design
        system, authentication, caching, and payment infrastructure — and a
        role-based clinic management system across relational and document
        databases. I'm currently looking for a frontend developer internship
        where I can build on that foundation with a real team.
      </p>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <span className="section-eyebrow">— What I work with</span>
      <h2>Technologies</h2>
      <div className="skills-grid">
        {SKILL_GROUPS.map(({ category, skills }) => (
          <div key={category} className="skill-group">
            <h3 className="skill-category">{category}</h3>
            <div className="tech-tags">
              {skills.map(({ name, icon: Icon }) => (
                <span key={name} className="tech-tag skill-tag">
                  {Icon && <Icon size={14} />}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <span className="section-eyebrow">02 — What I've built</span>
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
          name="E-Commerce Platform"
          description="A full-stack e-commerce platform with JWT authentication, Redis caching, Cloudinary image uploads, and Bakong KHQR payment integration with live order polling."
          tags={["React", "Vite", "Node.js", "Express", "MongoDB", "Redis", "Bakong KHQR"]}
          githubUrl="https://github.com/EklimSek/e-commerce-project"
          liveUrl="https://your-deployed-link.onrender.com"
          status="live"
        />
        <ProjectCard
          name="Smart Clinic Management System"
          description="A full-stack clinic management system built with Spring Boot, supporting Admin, Doctor, and Patient roles for appointment scheduling and prescription management — with a deliberate dual-database architecture (MySQL for relational data, MongoDB for flexible prescription records)."
          tags={["Java", "Spring Boot", "MySQL", "MongoDB", "JWT", "Thymeleaf", "Docker"]}
          githubUrl="https://github.com/EklimSek/java-database-capstone"
          liveUrl="#"
          status="progress"
        />
        {/* <ProjectCard
          name="Simple Portfolio"
          description="Add a one-sentence description of your next project here."
          tags={["React", "Placeholder"]}
          githubUrl="#"
          liveUrl="#"
          status="progress"
        /> */}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <span className="section-eyebrow">03 — Where I studied</span>
      <h2>Education</h2>
      <div className="edu-entry">
        <span className="edu-school">American University of Phnom Penh</span>
        <span className="edu-program">Bachelor's in Software Development</span>
        <span className="edu-meta">Expected Graduation — 2028</span>
        <p className="edu-courses">
          Relevant coursework: Software Engineering, Web Development, UX Design,
          Component-Level Design, Database Systems.
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mqpzqvko", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section">
      <span className="section-eyebrow">04 — Let's talk</span>
      <h2>Get in Touch</h2>
      <div className="contact-block">
        <p className="contact-lead">
          I'm currently looking for a frontend developer internship. If you'd like to
          work together or just say hi, drop a message below or reach me directly.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="form-submit" disabled={status === "sending"}>
            <Send size={15} strokeWidth={1.75} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="form-feedback success">Thanks — I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="form-feedback error">Something went wrong. Try emailing me directly.</p>
          )}
        </form>

        <div className="contact-socials">
          <a href="https://github.com/EklimSek" target="_blank" rel="noopener noreferrer">
            <Github size={15} strokeWidth={1.75} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/eklim-sek-4565b2379/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={15} strokeWidth={1.75} />
            LinkedIn
          </a>
          <a href="mailto:eklimsek2005@gmail.com">
            <Mail size={15} strokeWidth={1.75} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
