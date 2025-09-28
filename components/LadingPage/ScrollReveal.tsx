'use client';

import { useEffect } from "react";

const SECTION_SELECTOR = "main section";

export default function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(SECTION_SELECTOR),
    );

    if (!sections.length) {
      return undefined;
    }

    sections.forEach((section) => {
      section.classList.add("section-transition");
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      sections.forEach((section) => {
        section.classList.add("section-visible");
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
