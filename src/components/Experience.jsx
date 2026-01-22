import React from "react";
import { Section } from "./Section";

const ROLES = [
  {
    title: "Engineering Intern",
    organization: "IT Consortium",
    location: "Accra, Ghana",
    duration: "Jun 2025 - Aug 2025 & Jul 2023",
    bullets: [
      "Configured and customized the Mifos X digital banking platform.",
      "Contributed to engineering documentation and process improvements.",
      "Developed the Time Box application, improving staff time management efficiency by approximately 20%.",
      "Conducted performance testing on Java applications."
    ]
  },
  {
    title: "Database Designer and Administrator Intern",
    organization: "Joyful Way Incorporated",
    location: "Accra, Ghana",
    duration: "Nov 2023 - Dec 2024",
    bullets: [
      "Designed and implemented efficient database systems to support a mobile app.",
      "Managed the complete database lifecycle, from schema design to maintenance.",
      "Led legacy system migration to a modern DBMS, improving scalability and performance."
    ]
  },
  {
    title: "Spring Intern",
    organization: "Goldman Sachs",
    location: "London, United Kingdom",
    duration: "Apr 2023",
    bullets: [
      "Collaborated on real business challenges with a cross-functional global team.",
      "Gained exposure to investment banking, risk management, and large-scale systems.",
      "Strengthened problem-solving, communication, and teamwork skills."
    ]
  },
  {
    title: "Resident Assistant",
    organization: "Ashesi University",
    location: "Berekuso, Ghana",
    duration: "Jan 2024 - Present",
    bullets: [
      "Organized meetings and facilitated community discussions.",
      "Acted as liaison between residents and university administration.",
      "Implemented solutions to improve living conditions and student experience."
    ]
  }
];

export function Experience() {
  return (
    <Section id="experience" title="Experience & Leadership" eyebrow="Journey">
      <p className="section-subtitle">
        Blending engineering internships, leadership roles, and community
        engagement to build not just systems, but resilient teams and
        communities.
      </p>
      <div className="space-y-6">
        {ROLES.map((role) => (
          <article key={`${role.title}-${role.organization}`} className="card">
            <header className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-text-primary">
                  {role.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {role.organization} • {role.location}
                </p>
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide">
                {role.duration}
              </p>
            </header>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              {role.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

