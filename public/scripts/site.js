/* ── Header ── */
const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });
}

let lastScroll = 0;
const setHeaderState = () => {
  if (!header) return;
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 24);
  header.classList.toggle("header-hide", y > 400 && y > lastScroll);
  lastScroll = y;
};
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

/* ── Reveal with stagger ── */
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          /* stagger children within grids */
          const staggerChildren = el.querySelectorAll(
            ".feature-card, .product-card, .post-card, .deployment-card, .proof-item, .process-step, .story-stat, .feature-list li"
          );
          if (staggerChildren.length > 0) {
            staggerChildren.forEach((child, i) => {
              child.style.transitionDelay = `${i * 80}ms`;
              child.classList.add("stagger-in");
            });
          }
          el.classList.add("visible");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

/* ── Counter animation for metrics ── */
const animateCounters = () => {
  const counters = document.querySelectorAll(".metric strong, .story-stat strong");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent.trim();
          const match = text.match(/^([\d.]+)(.*)$/);
          if (match) {
            const target = parseFloat(match[1]);
            const suffix = match[2];
            const duration = 1400;
            const start = performance.now();
            const isInt = Number.isInteger(target);
            const step = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = isInt
                ? Math.round(target * eased)
                : (target * eased).toFixed(1);
              el.textContent = current + suffix;
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((c) => counterObserver.observe(c));
};
animateCounters();

/* ── Parallax hero ── */
const hero = document.querySelector(".hero");
if (hero) {
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < 1200) {
            hero.style.backgroundPositionY = `center, center, ${-y * 0.18}px`;
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/* ── Scroll progress bar ── */
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.prepend(progressBar);
window.addEventListener(
  "scroll",
  () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = (window.scrollY / h) * 100;
    progressBar.style.width = p + "%";
  },
  { passive: true }
);

/* ── Model jump buttons ── */
document.querySelectorAll("[data-model-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(
      button.getAttribute("data-model-jump")
    );
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ── Magnetic hover on CTA buttons ── */
document.querySelectorAll(".button-primary, .nav-cta").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translateY(-2px) translate(${x * 0.12}px, ${y * 0.12}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});

/* ── Tilt on feature / product / deployment cards ── */
document.querySelectorAll(".feature-card, .product-card, .deployment-card, .decision-v2-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-4px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* ── Deployment Selector Tabs ── */
const deploymentTabs = document.querySelectorAll(".decision-v2-tab");
const deploymentPanels = document.querySelectorAll(".decision-v2-panel");
const deploymentImages = document.querySelectorAll(".decision-v2-image");
const tabIndicator = document.querySelector(".tab-indicator");

function positionIndicator(tab) {
  if (!tabIndicator || !tab) return;
  const tabsContainer = tab.closest(".decision-v2-tabs");
  if (!tabsContainer) return;
  const containerRect = tabsContainer.getBoundingClientRect();
  const tabRect = tab.getBoundingClientRect();
  tabIndicator.style.left = (tabRect.left - containerRect.left) + "px";
  tabIndicator.style.width = tabRect.width + "px";
}

/* Init indicator on first active tab */
const firstActive = document.querySelector(".decision-v2-tab.active");
if (firstActive) {
  requestAnimationFrame(() => positionIndicator(firstActive));
  window.addEventListener("resize", () => positionIndicator(document.querySelector(".decision-v2-tab.active")));
}

if (deploymentTabs.length > 0 && deploymentPanels.length > 0) {
  deploymentTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = tab.getAttribute("data-tab-index");

      /* Update tab states */
      deploymentTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      /* Slide indicator */
      positionIndicator(tab);

      /* Crossfade images */
      deploymentImages.forEach((img) => img.classList.remove("active"));
      const targetImage = document.querySelector(`.decision-v2-image[data-image-index="${index}"]`);
      if (targetImage) targetImage.classList.add("active");

      /* Update panel states with re-trigger animation */
      deploymentPanels.forEach((p) => {
        p.classList.remove("active");
        p.style.animation = "none";
      });
      const targetPanel = document.querySelector(`.decision-v2-panel[data-panel-index="${index}"]`);
      if (targetPanel) {
        void targetPanel.offsetHeight;
        targetPanel.style.animation = "";
        targetPanel.classList.add("active");
      }
    });
  });
}

/* ── Mouse-following glow on deployment cards ── */
document.querySelectorAll(".decision-v2-card").forEach((card) => {
  const glow = card.querySelector(".dv2-card-glow");
  if (!glow) return;
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left - 100) + "px";
    glow.style.top = (e.clientY - rect.top - 100) + "px";
  });
});

/* ── Section Gradient Scroll System ── */
(function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const sgSections = document.querySelectorAll("[data-sg]");
  if (!sgSections.length) return;

  /* Inject gradient elements into each section */
  sgSections.forEach((section) => {
    /* Ensure section has position:relative for absolute children */
    const pos = getComputedStyle(section).position;
    if (pos === "static") section.style.position = "relative";

    /* Wave blob */
    const wave = document.createElement("div");
    wave.className = "sg-wave";
    section.appendChild(wave);

    /* Top scan line */
    const scan = document.createElement("div");
    scan.className = "sg-scan";
    section.appendChild(scan);

    /* Corner glows */
    const glowL = document.createElement("div");
    glowL.className = "sg-corner-glow sg-corner-glow--left";
    section.appendChild(glowL);

    const glowR = document.createElement("div");
    glowR.className = "sg-corner-glow sg-corner-glow--right";
    section.appendChild(glowR);
  });

  /* Trigger animation on scroll entry */
  const sgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const section = entry.target;

        /* Reset any previous run */
        section.classList.remove("sg-active");
        void section.offsetHeight; /* force reflow */

        /* Fire */
        section.classList.add("sg-active");

        /* Auto-clean after animation completes */
        const cleanup = () => {
          section.classList.remove("sg-active");
        };
        setTimeout(cleanup, 2600);
      });
    },
    { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
  );

  sgSections.forEach((s) => sgObserver.observe(s));
})();

/* ── Scroll Darkening: sections darken as they scroll past ── */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const sections = document.querySelectorAll(".section, .hero, .proof-ribbon-section");
  if (!sections.length) return;

  /* Inject a darkening overlay div into each section */
  sections.forEach((section) => {
    const pos = getComputedStyle(section).position;
    if (pos === "static") section.style.position = "relative";

    const overlay = document.createElement("div");
    overlay.className = "scroll-darken-overlay";
    section.insertBefore(overlay, section.firstChild);
  });

  let ticking = false;

  const update = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const overlay = section.querySelector(".scroll-darken-overlay");
      if (!overlay) return;

      let progress = 0;

      if (rect.bottom <= 0) {
        /* Entirely above viewport */
        progress = 1;
      } else if (rect.top < 0) {
        /* Partially scrolled past */
        const scrolledPast = -rect.top;
        progress = Math.min(scrolledPast / (rect.height * 0.6), 1);
      } else {
        progress = 0;
      }

      overlay.style.opacity = (progress * 0.72).toFixed(3);
    });

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
})();
