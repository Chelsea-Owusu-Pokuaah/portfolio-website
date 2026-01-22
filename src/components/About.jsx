import React from "react";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About" eyebrow="Background">
      <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            I&apos;m a Computer Science graduate from Ashesi University (Magna
            Cum Laude, 3.79/4.0) currently pursuing my Master&apos;s in
            Intelligent Computing Systems. My passion lies in AI/ML engineering,
            particularly in speech and language technologies, where I build
            intelligent systems that solve real-world problems.
          </p>
          <p>
            With experience spanning engineering internships at IT Consortium
            and Goldman Sachs to developing cutting-edge AI applications, I
            specialize in creating systems that are both technically robust and
            user-centered. My work focuses on making AI accessible and
            impactful, especially in underrepresented contexts like
            African-accented speech recognition.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Education
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">
                  Master of Science in Intelligent Computing Systems
                </span>{" "}
                - Ashesi University (Sep 2025 - Dec 2026)
              </li>
              <li>
                <span className="font-semibold">
                  Bachelor of Science in Computer Science
                </span>{" "}
                - Ashesi University, Magna Cum Laude (Sep 2021 - June 2025)
              </li>
              <li>Dean&apos;s List - 2022/2023</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Beyond the code
            </h3>
            <p>
              When I&apos;m not experimenting with new ML architectures, I&apos;m
              exploring the latest developments in AI/ML, contributing to
              open-source projects, or mentoring students as a Peer Academic
              Advisor. I&apos;m passionate about making technology education more
              accessible and building systems that address unique challenges in
              diverse contexts.
            </p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card">
            <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
              Quick Info
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">Location</dt>
                <dd className="text-text-secondary">Accra, Ghana</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">Email</dt>
                <dd className="text-text-secondary">
                  <a
                    href="mailto:chelsea.owusu@ashesi.edu.gh"
                    className="text-primary hover:text-primary-dark underline-offset-4 hover:underline"
                  >
                    chelsea.owusu@ashesi.edu.gh
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">LinkedIn</dt>
                <dd className="text-text-secondary">
                  <a
                    href="https://www.linkedin.com/in/chelsea-owusu"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary-dark underline-offset-4 hover:underline"
                  >
                    /chelsea-owusu
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">GitHub</dt>
                <dd className="text-text-secondary">
                  <a
                    href="https://github.com/Chelsea-Owusu-Pokuaah"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary-dark underline-offset-4 hover:underline"
                  >
                    @Chelsea-Owusu-Pokuaah
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
              Resume
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              View my full experience, projects, and achievements in a
              downloadable format.
            </p>
            <a
              href="#"
              className="btn-primary w-full justify-center"
              aria-label="Download Chelsea Owusu CV (placeholder link)"
            >
              Download CV (PDF)
            </a>
            <p className="mt-2 text-xs text-text-muted">
              Replace this link with your actual resume URL when available.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

