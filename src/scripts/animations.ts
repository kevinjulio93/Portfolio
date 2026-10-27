import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(): void {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  // ── 1. Hero Entrance Choreography (Matches Shot 1 Video 00:00–00:03) ──
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl
    .from(
      ".hero-word-outline",
      { y: 24, opacity: 0, duration: 0.7 }
    )
    .from(
      ".hero-word-solid",
      { y: 24, opacity: 0, duration: 0.7 },
      "-=0.5"
    )
    .from(
      "#hero-portrait-stage",
      { y: 34, opacity: 0, scale: 0.98, duration: 0.85 },
      "-=0.45"
    )
    .from(
      ".hero-left-block, .hero-right-block",
      { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 },
      "-=0.45"
    );

  // ── 2. Section Scroll Reveals (immediateRender: false so elements never stay hidden) ──
  function revealSectionItems(sectionSelector: string, itemSelector: string, stagger = 0.08) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(itemSelector);
    if (!items.length) return;

    gsap.from(items, {
      y: 24,
      opacity: 0,
      duration: 0.65,
      stagger,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        start: "top 88%",
        once: true,
      },
    });
  }

  revealSectionItems("#projects", ".project-card", 0.1);
  revealSectionItems("#skills", ".service-accordion-item", 0.07);
  revealSectionItems("#experience", ".exp-row", 0.08);

  requestAnimationFrame(() => ScrollTrigger.refresh());
}
