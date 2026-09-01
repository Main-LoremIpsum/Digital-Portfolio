/* ==========================================================================
   BABU — shared behavior
   --------------------------------------------------------------------------
   • Mobile nav drawer (toggle / scrim / ESC / focus return)
   • Scroll-reveal via IntersectionObserver (respects reduced motion)
   • Sticky header elevation
   • Footer year
   • Small render helpers (price, stars)
   ========================================================================== */
const Babu = (() => {
  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function formatPrice(n) {
    return "₱" + n.toLocaleString("en-PH");
  }

  function stars(score, max = 5) {
    const full = Math.round(score);
    let out = "";
    for (let i = 1; i <= max; i++) {
      out += i <= full
        ? '<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path fill="#C9A76B" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.6L12 17.6 6.2 20.6l1.1-6.6L2.5 9.4l6.6-.9L12 2.5z"/></svg>'
        : '<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path fill="#E6D6BB" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.6L12 17.6 6.2 20.6l1.1-6.6L2.5 9.4l6.6-.9L12 2.5z"/></svg>';
    }
    return out;
  }

  /* ---- Nav ---- */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const drawer = document.querySelector(".nav-links");
    const scrim = document.querySelector(".nav-scrim");
    if (!toggle || !drawer) return;

    const close = () => {
      drawer.classList.remove("open");
      if (scrim) scrim.classList.remove("open");
      document.body.style.overflow = "";
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      if (scrim) scrim.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    if (scrim) scrim.addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    // Keep viewport scroll locked while open, restore on resize up to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) close();
    });
  }

  /* ---- Reveal on scroll ---- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    items.forEach((el) => obs.observe(el));
  }

  /* ---- Sticky header elevation ---- */
  function initHeader() {
    const head = document.querySelector(".site-head");
    if (!head) return;
    const apply = () => {
      head.style.boxShadow = window.scrollY > 6 ? "0 6px 24px rgba(31,17,6,.06)" : "";
    };
    window.addEventListener("scroll", apply, { passive: true });
    apply();
  }

  /* ---- Footer year ---- */
  function initFooterYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initReveal();
    initHeader();
    initFooterYear();
  });

  return { formatPrice, stars };
})();