import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(): void {
  if (typeof window === "undefined") return;

  // Kill all existing ScrollTriggers to avoid duplicates
  ScrollTrigger.getAll().forEach((st) => st.kill());

  // ── Hero: parallax floating code lines ──
  const codeLines = document.querySelectorAll<HTMLElement>(".code-line");
  codeLines.forEach((line) => {
    const speed = parseFloat(line.dataset.speed || "0.1");
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

  // ── About section ──
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    const aboutChildren = aboutSection.querySelectorAll<HTMLElement>(".about-reveal");
    aboutChildren.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }

  // ── Skills: stagger tags ──
  const skillsSection = document.querySelector("#skills");
  if (skillsSection) {
    const tags = skillsSection.querySelectorAll<HTMLElement>(".skill-tag");
    if (tags.length > 0) {
      gsap.fromTo(
        tags,
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: skillsSection,
            start: "top 85%",
            end: "top 25%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    }

    // Skills photo
    const photo = skillsSection.querySelector<HTMLElement>(".skill-photo");
    if (photo) {
      gsap.fromTo(
        photo,
        { y: 60, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: photo,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    }
  }

  // ── Experience: timeline items ──
  const expSection = document.querySelector("#experience");
  if (expSection) {
    expSection.querySelectorAll<HTMLElement>(".exp-item").forEach((item, i) => {
      gsap.fromTo(
        item,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    });

    // Awards & certs
    expSection.querySelectorAll<HTMLElement>(".award-card, .cert-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: i * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }

  // ── Projects: cards ──
  const projectsSection = document.querySelector("#projects");
  if (projectsSection) {
    projectsSection.querySelectorAll<HTMLElement>(".project-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }

  // ── Contact section ──
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.querySelectorAll<HTMLElement>(".contact-reveal").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }

  // Refresh after layout settles
  setTimeout(() => ScrollTrigger.refresh(), 300);
}
