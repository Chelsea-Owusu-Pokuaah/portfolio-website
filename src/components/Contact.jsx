import React, { useState } from "react";
import { Section } from "./Section";

export function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    const form = event.target;
    if (!form.checkValidity()) {
      return;
    }
    setStatus("submitting");
    setError("");

    // Basic backend-free submission using FormSubmit / Formspree style endpoints.
    // Replace the action URL with your actual endpoint.
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
          form.reset();
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch(() => {
        setStatus("error");
        setError("Something went wrong. Please try again or email me directly.");
      });
  };

  return (
    <Section id="contact" title="Contact" eyebrow="Get In Touch">
      <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <div>
          <p className="section-subtitle">
            Whether you&apos;re exploring collaborations, research
            opportunities, or just want to talk about intelligent systems and
            AI, I&apos;d love to hear from you.
          </p>

          <form
            method="POST"
            action="https://formspree.io/f/your-form-id"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            noValidate
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Name <span className="text-accent-error">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="input-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Email <span className="text-accent-error">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-base"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Message <span className="text-accent-error">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="input-base min-h-[150px] resize-y"
                placeholder="How can I help?"
              />
            </div>

            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio website"
            />

            <button
              type="submit"
              className="btn-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-accent-success mt-2">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-accent-error mt-2">{error}</p>
            )}
          </form>
          <p className="mt-3 text-xs text-text-muted">
            Note: Replace the form action URL with your actual FormSubmit,
            Formspree, or Web3Forms endpoint.
          </p>
        </div>

        <aside className="space-y-4">
          <div className="card">
            <h3 className="text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">
              Direct Contact
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Prefer email or LinkedIn? Reach out directly via any of the
              channels below.
            </p>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-text-muted">Email</dt>
                <dd>
                  <a
                    href="mailto:chelsea.owusu@ashesi.edu.gh"
                    className="text-primary hover:text-primary-dark underline-offset-4 hover:underline"
                  >
                    chelsea.owusu@ashesi.edu.gh
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-text-muted">LinkedIn</dt>
                <dd>
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
              <div>
                <dt className="text-text-muted">GitHub</dt>
                <dd>
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
            <h3 className="text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">
              Availability
            </h3>
            <p className="text-sm text-text-secondary">
              Open to opportunities in AI/ML engineering, intelligent systems,
              and research collaborations, especially those focused on
              real-world impact in emerging markets.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

