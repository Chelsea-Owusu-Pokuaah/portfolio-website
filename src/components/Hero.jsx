import React from "react";

export function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="section-padding bg-gradient-to-br from-primary to-secondary text-white"
    >
      <div className="section-container flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-primary-light/80">
            AI/ML Engineer &amp; Intelligent Systems Developer
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Chelsea Owusu
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-6 max-w-xl">
            Building intelligent systems that bridge technology and real-world
            impact, with a focus on speech and language technologies for
            underrepresented contexts.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="badge bg-white/10 text-white border border-white/20">
              Intelligent Computing Systems
            </span>
            <span className="badge bg-white/10 text-white border border-white/20">
              Speech &amp; Language Processing
            </span>
            <span className="badge bg-white/10 text-white border border-white/20">
              Applied Machine Learning
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <button type="button" className="btn-primary" onClick={handleScrollToProjects}>
              View My Projects
            </button>
            <button type="button" className="btn-secondary" onClick={handleScrollToContact}>
              Get In Touch
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/10 border-4 border-white/40 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Placeholder avatar */}
              <span className="text-5xl md:text-6xl font-heading font-bold">
                CO
              </span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/30">
              <p className="text-xs font-medium tracking-wide text-slate-50">
                Based in Accra, Ghana
              </p>
              <p className="text-[11px] text-slate-200">
                MSc Intelligent Computing Systems @ Ashesi University
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

