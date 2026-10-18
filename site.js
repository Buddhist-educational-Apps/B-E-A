/* ============================================================
   site.js — සියලු පිටු සඳහා පොදු:
   1) අඩවි සැකසුම් (සම්බන්ධ වීමේ ඊමේල් ලිපිනය)
   2) Cookie / Analytics අවසරය — අවසරය ලැබුණු පසුව පමණක් Google Analytics load වේ
   ============================================================ */

/* ▼▼▼ මෙහි ඔබගේ ඊමේල් ලිපිනය ඇතුළත් කරන්න (උදා: "name@gmail.com") ▼▼▼ */
window.SITE_CONFIG = {
  contactEmail: ""
};
/* ▲▲▲ */

(function () {
  var GA_ID = "G-T3XSZLHD76";
  var KEY = "buddhist_apps_consent";   // "granted" | "denied"

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  var gaLoaded = false;

  function readChoice() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function saveChoice(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
  }

  function loadAnalytics() {
    window["ga-disable-" + GA_ID] = false;
    if (gaLoaded) return;
    gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  function disableAnalytics() {
    window["ga-disable-" + GA_ID] = true;
  }

  var saved = readChoice();
  if (saved === "granted") loadAnalytics();
  else if (saved === "denied") disableAnalytics();

  /* ---------- Cookie banner ---------- */
  function closeBanner() {
    var el = document.getElementById("cookieBanner");
    if (el) el.remove();
  }

  function tr(key) {
    return window.I18N ? window.I18N.t(key) : key;
  }

  function showBanner() {
    closeBanner();
    var wrap = document.createElement("div");
    wrap.id = "cookieBanner";
    wrap.className = "cookie-banner";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-label", tr("cookie.aria"));
    wrap.innerHTML =
      '<p class="cookie-text">' +
        tr("cookie.text") + " " +
        '<a href="privacy.html">' + tr("cookie.privacy") + '</a>' +
      '</p>' +
      '<div class="cookie-actions">' +
        '<button type="button" class="cookie-btn cookie-btn-ghost" id="cookieDeny">' + tr("cookie.deny") + '</button>' +
        '<button type="button" class="cookie-btn cookie-btn-primary" id="cookieAccept">' + tr("cookie.accept") + '</button>' +
      '</div>';
    document.body.appendChild(wrap);

    document.getElementById("cookieAccept").addEventListener("click", function () {
      saveChoice("granted");
      loadAnalytics();
      closeBanner();
    });
    document.getElementById("cookieDeny").addEventListener("click", function () {
      saveChoice("denied");
      disableAnalytics();
      closeBanner();
    });
  }

  window.openCookieSettings = showBanner;

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
    if (!readChoice()) showBanner();
    fillEmail();
  }

  // භාෂාව වෙනස් වූ විට cookie දැන්වීම සහ ඊමේල් පෙළ යාවත්කාලීන කිරීම
  document.addEventListener("languagechange", function () {
    if (document.getElementById("cookieBanner")) showBanner();
    fillEmail();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();