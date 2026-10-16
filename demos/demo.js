/* Shared helpers for Shaheer's demo projects
   - hides the black demo bar when the demo is shown inside the portfolio page
   - scroll-reveal for elements with [data-rv] */
(function () {
  var inFrame = false;
  try { inFrame = window.self !== window.top; } catch (e) { inFrame = true; }
  if (inFrame) document.documentElement.classList.add("in-frame");

  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.addEventListener("DOMContentLoaded", function () {
    var els = document.querySelectorAll("[data-rv]");
    if (!("IntersectionObserver" in window) || reduce) { els.forEach(function (e) { e.classList.add("rv-in"); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("rv-in"); io.unobserve(x.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
  });
})();
