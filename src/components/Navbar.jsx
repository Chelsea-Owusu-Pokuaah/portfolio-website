import React from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export function Navbar({ activeSection }) {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="section-container flex items-center justify-between h-16">
        <button
          type="button"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
          onClick={() => handleScroll("hero")}
        >
          <span className="text-lg md:text-xl font-bold font-heading text-primary">
            Chelsea Owusu
          </span>
          <span className="hidden md:inline-flex text-xs px-2 py-1 rounded-full bg-primary-light/10 text-primary-dark">
            AI/ML Engineer
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleScroll(section.id)}
              className={`relative transition-colors hover:text-primary ${
                activeSection === section.id ? "text-primary" : ""
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Simple mobile menu: scroll buttons stacked in small dropdown */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg border border-slate-200 py-2">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleScroll(section.id)}
                  className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-surface hover:text-primary"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}

