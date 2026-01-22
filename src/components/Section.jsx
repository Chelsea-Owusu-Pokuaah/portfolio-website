import React from "react";

export function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="section-padding bg-background">
      <div className="section-container">
        <div className="mb-8">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-text-muted mb-2">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="section-title">{title}</h2>}
        </div>
        {children}
      </div>
    </section>
  );
}

