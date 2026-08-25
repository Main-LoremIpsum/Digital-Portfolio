/* ==========================================================================
   Padayon Café — Shared behavior & render helpers
   ========================================================================== */
const Padayon = (() => {

  function formatPrice(n) {
    return "₱" + n.toLocaleString("en-PH");
  }

  function starIcon(filled) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true" style="fill:${filled ? "var(--color-star)" : "var(--color-star-off)"}">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.6L12 17.6 6.2 20.6l1.1-6.6L2.5 9.4l6.6-.9L12 2.5Z"/>
    </svg>`;
  }

  function renderStars(rating, max = 5) {
    let out = '<span class="stars" role="img" aria-label="' + rating + ' out of ' + max + ' stars">';
    for (let i = 1; i <= max; i++) out += starIcon(i <= Math.round(rating));
    out += "</span>";
    return out;
  }

  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = open
        ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><use href="#icon-close"/></svg>'
        : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><use href="#icon-menu"/></svg>';
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><use href="#icon-menu"/></svg>';
    }));
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("in")); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(el => obs.observe(el));
  }

  function initFooterYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function initNavActive() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a[data-nav]").forEach(a => {
      if (a.getAttribute("data-nav") === path) a.classList.add("active");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initReveal();
    initFooterYear();
    initNavActive();
  });

  return { formatPrice, renderStars, starIcon };
})();
