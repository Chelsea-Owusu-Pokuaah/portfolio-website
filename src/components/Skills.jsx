import React from "react";
import { Section } from "./Section";

const SKILL_GROUPS = [
  {
    name: "Machine Learning & AI",
    skills: [
      "Language Models",
      "Transformers",
      "Speech and Language Processing",
      "Deep Learning",
      "Transfer Learning",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "NumPy",
      "Pandas"
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      "Python (Advanced)",
      "Java (Intermediate)",
      "JavaScript (Intermediate)",
      "Dart/Flutter (Intermediate)",
      "C++ (Intermediate)",
      "C (Intermediate)",
      "SQL (Advanced)"
    ]
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB", "Neo4j", "Firebase"]
  },
  {
    name: "Tools & Frameworks",
    skills: ["Git", "Docker", "Firebase", "FastAPI", "Figma", "Qdrant Vector DB"]
  }
];

export function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="Capabilities">
      <p className="section-subtitle">
        A snapshot of the technical skills and tools I work with most often,
        from core machine learning frameworks to production engineering tools.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.name} className="card">
            <h3 className="text-base md:text-lg font-semibold text-text-primary mb-3">
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

