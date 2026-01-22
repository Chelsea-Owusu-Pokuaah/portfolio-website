import React from "react";
import { Section } from "./Section";

const PROJECTS = [
  {
    title: "Medical Speech Transcription System using Transformers",
    role: "Deep Learning Engineer",
    timeline: "Feb 2025 - May 2025",
    description:
      "End-to-end automatic speech recognition system tailored for voice-recorded medical notes from African doctors, handling diverse accents and domain-specific terminology.",
    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "Deep Learning",
      "Transfer Learning"
    ],
    achievements: [
      "Improved transcription accuracy for African-accented English in medical contexts",
      "Demonstrated effectiveness of Transformer architectures for low-resource accent scenarios",
      "Implemented robust preprocessing, normalization, and audio segmentation pipeline"
    ],
    github: "",
    demo: ""
  },
  {
    title: "TikTok-inspired Edutainment Mobile Application",
    role: "Frontend & Backend Developer",
    timeline: "Jan 2025 - Apr 2025",
    description:
      "Mobile application delivering educational content in an engaging short-video format with AI-based vector similarity search for personalized recommendations.",
    technologies: ["Flutter", "Dart", "Firebase", "Qdrant", "FastAPI", "Figma"],
    achievements: [
      "Designed intuitive UI/UX to enhance user engagement",
      "Implemented robust backend with Firebase authentication and data management",
      "Integrated vector similarity search for accurate, personalized content retrieval"
    ],
    github: "",
    demo: ""
  },
  {
    title: "Time Box Application",
    role: "Java Engineering Intern",
    timeline: "Jul 2023",
    description:
      "Time management application for IT Consortium to streamline task allocation and improve team collaboration.",
    technologies: ["Java", "Git"],
    achievements: [
      "Improved staff time management efficiency by approximately 20%",
      "Implemented version control best practices",
      "Conducted performance testing to identify and resolve bottlenecks"
    ],
    github: "",
    demo: ""
  },
  {
    title: "Database System for Mobile App (Joyful Way Incorporated)",
    role: "Database Designer & Administrator Intern",
    timeline: "Nov 2023 - Dec 2024",
    description:
      "Designed and implemented an efficient database system to power a mobile app, including legacy system migration to a modern DBMS.",
    technologies: ["SQL", "MySQL", "MongoDB", "Database Design"],
    achievements: [
      "Created an efficient system for data storage and retrieval",
      "Successfully migrated legacy systems to modern DBMS",
      "Improved scalability and performance through database optimization"
    ],
    github: "",
    demo: ""
  }
];

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      eyebrow="Selected Work"
    >
      <p className="section-subtitle">
        A selection of projects that showcase my focus on intelligent systems,
        speech and language technologies, and user-centered engineering.
      </p>
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article key={project.title} className="card flex flex-col h-full">
            <div className="aspect-video mb-4 rounded-lg bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center text-white font-semibold text-sm">
              <span>Project Preview</span>
            </div>
            <header className="mb-3">
              <h3 className="text-lg font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="text-xs text-text-muted uppercase tracking-wide mt-1">
                {project.role} • {project.timeline}
              </p>
            </header>
            <p className="text-sm text-text-secondary mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 mb-4">
              {project.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
            <div className="mt-auto flex gap-3 pt-3 border-t border-slate-200">
              <a
                href={project.github || "#"}
                className="text-xs font-medium text-primary hover:text-primary-dark underline-offset-4 hover:underline"
                aria-label={`View GitHub repository for ${project.title}${
                  project.github ? "" : " (placeholder)"
                }`}
              >
                GitHub
              </a>
              <a
                href={project.demo || "#"}
                className="text-xs font-medium text-primary hover:text-primary-dark underline-offset-4 hover:underline"
                aria-label={`View live demo for ${project.title}${
                  project.demo ? "" : " (placeholder)"
                }`}
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

