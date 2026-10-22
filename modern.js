/* ============================================================
   modern.js — නවීන පෙනුම සඳහා කුඩා අන්තර්ක්‍රියා
   1) Scroll කළ විට header එකට සෙවනැල්ල
   3) කොටස් මෘදුව දිස්වීම (scroll reveal)
   4) මුල් පිටුවේ nav සබැඳිය active කිරීම
   ============================================================ */
(function () {
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Scroll reveal --- */
  var targets = document.querySelectorAll(
    ".section-block, .doc-article > div > section, .info-card, .footer-grid"
  );
  if ("IntersectionObserver" in window && targets.length) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    targets.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* --- මුල් පිටුවේ nav active --- */
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  if (navLinks.length && "IntersectionObserver" in window) {
    var map = {};
    navLinks.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var h = en.target.querySelector("[id]") || en.target;
        var l = map[h.id];
        if (!l) return;
        if (en.isIntersecting) {
          navLinks.forEach(function (x) { x.classList.remove("is-active"); });
          l.classList.add("is-active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el.closest(".section-block") || el);
    });
  }
})();
