import React from "react";

export function Footer() {
  return (
    <footer className="bg-background-alt border-t border-border mt-8">
      <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-text-muted">
        <div>
          <p>
            &copy; {new Date().getFullYear()} Chelsea Owusu. All rights
            reserved.
          </p>
          <p className="mt-1">
            Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#hero"
            className="text-primary hover:text-primary-dark underline-offset-4 hover:underline"
          >
            Back to top
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/Chelsea-Owusu-Pokuaah"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chelsea-owusu"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

