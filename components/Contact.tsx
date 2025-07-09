"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Integrate with Formspree, Resend, or backend here
    //new things
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 min-h-[60vh] py-20 px-4 md:px-16 flex flex-col items-start gap-10"
    >
      <div>
        <h2 className="text-3xl font-bold">Let’s Connect</h2>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Whether it's about a project, collaboration, or just a hello — I’d love
          to hear from you.
        </p>
      </div>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-full border border-border bg-background text-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-full border border-border bg-background text-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your message"
            required
            rows={5}
            className="w-full border border-border bg-background text-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-foreground text-background px-6 py-2 rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-600 text-sm">Thanks! I'll get back to you soon.</p>
      )}

      <p className="text-sm text-muted-foreground">
        Or email me directly at{" "}
        <a
          href="mailto:simbamahla@gmail.com"
          className="underline text-foreground"
        >
          simbamahla@gmail.com
        </a>
      </p>
    </section>
  );
}
