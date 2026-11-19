/* ============================================================
   site.js — සියලු පිටු සඳහා පොදු:
   1) අඩවි සැකසුම් (සම්බන්ධ වීමේ ඊමේල් ලිපිනය)
   2) Google Analytics — සියලු අමුත්තන් සඳහා load වේ
   ============================================================ */

/* ▼▼▼ මෙහි ඔබගේ ඊමේල් ලිපිනය ඇතුළත් කරන්න (උදා: "name@gmail.com") ▼▼▼ */
window.SITE_CONFIG = {
  contactEmail: "buddhisteducationallibrary@gmail.com"
};
/* ▲▲▲ */

(function () {
  var GA_ID = "G-T3XSZLHD76";

  /* Google Analytics සියලු අමුත්තන් සඳහා load වේ (cookie notice නොමැත).
     දැන්වීම් / පුද්ගලීකරණ විශේෂාංග අක්‍රීයයි; IP නිර්නාමිකයි. */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  (function loadAnalytics() {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  })();

  function tr(key) {
    return window.I18N ? window.I18N.t(key) : key;
  }

  /* ---------- DOM ready ---------- */
  function fillEmail() {
    // data-contact-email අඩංගු අංග පිරවීම
    var email = (window.SITE_CONFIG && window.SITE_CONFIG.contactEmail) || "";
    // ඊමේල් ලිපිනයක් නොමැති නම් (footer වැනි තැන්වල) එම අංගය සඟවන්න
    document.querySelectorAll("[data-hide-if-no-email]").forEach(function (el) {
      el.hidden = !email;
    });
    // © වසර
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
    document.querySelectorAll("[data-contact-email]").forEach(function (el) {
      if (email) {
        el.textContent = email;
        if (el.tagName === "A") el.setAttribute("href", "mailto:" + email);
      } else {
        el.textContent = tr("email.notset");
      }
    });
  }

  function onReady() {
    fillEmail();
  }

  // භාෂාව වෙනස් වූ විට විවෘත Cookie සැකසුම් සහ ඊමේල් පෙළ යාවත්කාලීන කිරීම
  document.addEventListener("languagechange", function () {
      fillEmail();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();