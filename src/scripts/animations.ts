import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(): void {
  if (typeof window === "undefined") return;

  // ── Hero: parallax floating code lines ──
  const codeLines = document.querySelectorAll<HTMLElement>(".code-line");
  codeLines.forEach((line, i) => {
    const speed = parseFloat(line.dataset.speed || "0.1");
    // Scroll parallax
    gsap.to(line, {
      y: () => window.innerHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: line.closest("section") || line,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // ── Continuous floating wobble (rotation) ──
    const wobbleAmp = 4 + speed * 5; // ±1° to ±1.75°
    const wobbleDur = 7 + speed * 15; // 4.2s to 5.25s
    gsap.to(line, {
      rotation: wobbleAmp * (i % 2 === 0 ? 1 : -1),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: wobbleDur,
    });

    // ── Continuous horizontal drift ──
    const driftAmp = 16 + speed * 30; // 10px to 12.5px
    const driftDur = 4 + speed * 18; // 5.2s to 6.7s
    gsap.to(line, {
      x: driftAmp * (i % 2 === 0 ? 1 : -1),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: driftDur,
    });
  });

  // ── Hero: stats count-up (once) ──
  document.querySelectorAll<HTMLElement>(".stat-value").forEach((el) => {
    const target = el.dataset.count || el.textContent || "0";
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) return;
    const suffix = target.replace(/[0-9.]/g, "");
    ScrollTrigger.create({
      trigger: el.closest("section") || el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: num.toString(),
            duration: 1.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: () => {
              el.textContent = Math.round(parseFloat(el.textContent || "0")) + suffix;
            },
          }
        );
      },
    });
  });

  // ── Helper: reveal/hide elements based on section scroll ──
  function createReveal(
    sectionSelector: string,
    targetSelector: string,
    from: gsap.TweenVars,
    to: gsap.TweenVars
  ): void {
    const section = document.querySelector(sectionSelector);
    if (!section) return;
    const targets = section.querySelectorAll<HTMLElement>(targetSelector);
    if (targets.length === 0) return;

    // Set initial hidden state
    gsap.set(targets, from);

    ScrollTrigger.create({
      trigger: section,
      start: "top 85%",
      onEnter: () => gsap.to(targets, { ...to, overwrite: "auto" }),
      onLeaveBack: () => gsap.set(targets, from),
    });
  }

  // ── About ──
  createReveal("#about", ".about-reveal",
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
  );

  // ── Skills: tags ──
  createReveal("#skills", ".skill-tag",
    { y: 30, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.04, ease: "back.out(1.5)" }
  );

  // ── Skills: photo ──
  createReveal("#skills", ".skill-photo",
    { y: 60, opacity: 0, scale: 0.92 },
    { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
  );

  // ── Experience: items ──
  createReveal("#experience", ".exp-item",
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out" }
  );

  // ── Experience: awards & certs ──
  createReveal("#experience", ".award-card, .cert-card",
    { y: 30, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
  );

  // ── Projects: cards ──
  createReveal("#projects", ".project-card",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out" }
  );

  // ── Contact ──
  createReveal("#contact", ".contact-reveal",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
  );

  requestAnimationFrame(() => ScrollTrigger.refresh());
}
