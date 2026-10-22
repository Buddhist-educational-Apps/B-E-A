/* ============================================================
   i18n.js — සිංහල / English භාෂා පද්ධතිය
   - තෝරාගත් භාෂාව localStorage හි සුරැකේ (buddhist_apps_lang)
   - [data-i18n], [data-i18n-placeholder], [data-i18n-aria], [data-i18n-title]
   - [data-lang="si"] / [data-lang="en"] අන්තර්ගත කොටස් CSS මඟින් සැඟවේ
   - භාෂාව වෙනස් වූ විට "languagechange" සිදුවීම නිකුත් වේ
   ============================================================ */
(function () {
  var KEY = "buddhist_apps_lang";

  var DICT = {
    si: {
      "brand": "පුස්තකාලය",
      "brand.full": "බෞද්ධ ධර්ම පුස්තකාලය",
      "nav.aria": "ප්‍රධාන සබැඳි",
      "nav.home": "මුල් පිටුව",
      "nav.apps": "යෙදුම්",
      "nav.books": "ග්‍රන්ථ",
      "nav.about": "අප ගැන",
      "nav.contact": "සම්බන්ධ වන්න",
      "pages.title": "පිටු",
      "toc.title": "මෙම පිටුවේ",
      "lang.aria": "භාෂාව / Language",
      "theme.toggle": "තේමාව මාරු කරන්න",
      "search.placeholder": "යෙදුම් හෝ ග්‍රන්ථ නාමයෙන් සොයන්න...",
      "search.aria": "සෙවුම් තීරුව",
      "search.clear": "මකන්න",
      "search.apps": "යෙදුම් ({n})",
      "search.books": "ග්‍රන්ථ ({n})",
      "search.none": "ප්‍රතිඵල හමු නොවීය.",

      "hero.eyebrow": "නොමිලේ ලබාගත හැක • Web • Android • iOS",
      "hero.title": "බෞද්ධ ධර්ම පුස්තකාලය හා අධ්‍යාපනික මෘදුකාංග",
      "hero.desc": "අභිධර්ම මාතිකා, පාලි රූපසිද්ධිය, බුද්ධ වර්ෂ දින දර්ශනය, පාලි-සිංහල ශබ්දකෝෂය, ධාතුකථා සහ පට්ඨාන ප්‍රකරණ ඇතුළු උතුම් ත්‍රිපිටක ධර්ම කරුණු පහසුවෙන් පරිශීලනය සඳහා සැකසූ නවීන යෙදුම් සහ ධර්ම ග්‍රන්ථ PDF ගොනු මෙහි අන්තර්ගත වේ.",
      "hero.btn.apps": "යෙදුම් බලන්න",
      "hero.btn.books": "ග්‍රන්ථ (PDF)",
      "banner.title": "බෞද්ධ අධ්‍යාපනික යෙදුම් එකතුව",
      "banner.subtitle": "පාලි භාෂාව, ධර්ම කරුණු සහ ත්‍රිපිටක මූලාශ්‍ර පහසුවෙන් පරිශීලනය කිරීම සඳහා නිර්මාණය කළ ඩිජිටල් මෙවලම්.",
      "banner.btn.apps": "යෙදුම් ගවේෂණය කරන්න",
      "banner.btn.about": "වැඩිදුර විස්තර",
      "banner.blessing": "ධර්ම දානය පිණිස",
      "section.apps.sub": "අභිධර්මය, පාලි ව්‍යාකරණ, දින දර්ශනය සහ ශබ්දකෝෂය — Web, Android සහ iOS සඳහා.",
      "section.books.sub": "ෆෝල්ඩරයක් විවෘත කර ග්‍රන්ථයක් මත ක්ලික් කර නොමිලේ බාගත කරගන්න.",
      "section.apps": "බෞද්ධ අධ්‍යාපනික Apps",
      "section.books": "ධර්ම ග්‍රන්ථ එකතුව (PDF)",
      "table.name": "ගොනු නම",
      "table.category": "ප්‍රවර්ගය",
      "table.downloads": "බාගත කිරීම්",
      "table.size": "ප්‍රමාණය",

      "footer.blurb": "ත්‍රිපිටක ධර්මය හදාරන්නන් සඳහා නොමිලේ ලබාගත හැකි අධ්‍යාපනික යෙදුම් සහ ධර්ම ග්‍රන්ථ PDF එකතුවකි.",
      "footer.explore": "අඩවිය",
      "footer.legal": "නීතිමය තොරතුරු",
      "footer.privacy": "රහස්‍යතා ප්‍රතිපත්තිය",
      "footer.copyright": "ප්‍රකාශන හිමිකම් සහ මූලාශ්‍ර",
      "footer.cookie": "Cookie සැකසුම්",
      "footer.tag": "බෞද්ධ අධ්‍යාපනික මෘදුකාංග සහ pdf ගොනු • Buddhist Educational Tools and PDF Resources",
      "footer.blessing": "බුද්ධසාසනං චිරං තිට්ඨතු!",
      "footer.contact": "සම්බන්ධ වන්න",
      "footer.contactText": "ප්‍රශ්න, යෝජනා හෝ දෝෂ වාර්තා කිරීම් සඳහා අප හා සම්බන්ධ වන්න.",
      "footer.contactCta": "පණිවිඩයක් යවන්න",
      "footer.rightsName": "බෞද්ධ ධර්ම පුස්තකාලය හා මෘදුකාංග",
      "footer.top": "ඉහළට යන්න",
      "footer.free": "නොමිලේ",

      "cookie.aria": "Cookie සහ දත්ත රැස්කිරීම",
      "cookie.text": "අඩවිය භාවිතා වන ආකාරය (පිටු නැරඹීම් වැනි නිර්නාමික සංඛ්‍යාලේඛන) දැනගැනීමට අපි Google Analytics භාවිතා කරමු. ඔබ පිළිගත්තොත් පමණක් එය ක්‍රියාත්මක වේ.",
      "cookie.privacy": "රහස්‍යතා ප්‍රතිපත්තිය",
      "cookie.deny": "ප්‍රතික්ෂේප කරන්න",
      "cookie.accept": "පිළිගන්නවා",
      "email.notset": "(ඊමේල් ලිපිනය තවමත් සකසා නැත)",

      "contact.type.feedback": "ප්‍රතිචාර / යෝජනා",
      "contact.type.bug": "දෝෂ වාර්තාව (Bug report)",
      "contact.type.books": "ග්‍රන්ථ පිළිබඳ විමසීම",
      "contact.type.copyright": "ප්‍රකාශන හිමිකම් ඉල්ලීම / ඉවත් කිරීම",
      "contact.type.other": "වෙනත්",
      "contact.err.fields": "කරුණාකර ඔබගේ නම සහ පණිවිඩය ඇතුළත් කරන්න.",
      "contact.err.noemail": "ඊමේල් ලිපිනය තවමත් සකසා නැති නිසා පණිවිඩය යැවිය නොහැක.",
      "contact.ok": "ඔබගේ ඊමේල් යෙදුම විවෘත වේ. එහිදී පණිවිඩය යවන්න.",
      "contact.mail.subject": "බෞද්ධ ධර්ම පුස්තකාලය",
      "contact.mail.name": "නම",
      "contact.mail.email": "ඊමේල්",
      "contact.mail.type": "වර්ගය",

      "dev.default": "බෞද්ධ අධ්‍යාපනය",
      "card.size": "ප්‍රමාණය",
      "card.reviews": "Reviews",
      "btn.install.play": "Install (Play Store)",
      "btn.download.apk": "බාගත කරන්න (APK)",
      "btn.online": "Online භාවිතය",
      "btn.share": "ශෙයා",
      "btn.share.title": "යෙදුම බෙදාගන්න",
      "guide.toggle": "යෙදුම ස්ථාපනය කරගන්නා ආකාරය",
      "share.text": "{title} - බෞද්ධ අධ්‍යාපනික මෘදුකාංගය:",
      "share.copied": "\"{title}\" යෙදුමේ සබැඳිය Copy කරගන්නා ලදී!",
      "share.prompt": "මෙම සබැඳිය පිටපත් කරගන්න:",
      "apps.empty": "සොයන ලද යෙදුම හමු නොවීය.",
      "books.empty": "සොයන ලද පොත හමු නොවීය.",
      "books.count": "{n} පොත්",
      "dl.title": "{title} බාගත කරගන්න",
      "lightbox.close": "වසන්න"
    },

    en: {
      "brand": "Library",
      "brand.full": "Buddhist Dhamma Library",
      "nav.aria": "Main links",
      "nav.home": "Home",
      "nav.apps": "Apps",
      "nav.books": "Books",
      "nav.about": "About",
      "nav.contact": "Contact",
      "pages.title": "Pages",
      "toc.title": "On this page",
      "lang.aria": "භාෂාව / Language",
      "theme.toggle": "Switch theme",
      "search.placeholder": "Search apps or books by name...",
      "search.aria": "Search",
      "search.clear": "Clear",
      "search.apps": "Apps ({n})",
      "search.books": "Books ({n})",
      "search.none": "No results found.",

      "hero.eyebrow": "Free to use • Web • Android • iOS",
      "hero.title": "Buddhist Dhamma Library & Educational Apps",
      "hero.desc": "Modern apps and Dhamma book PDFs designed for easy study of the Noble Tipiṭaka teachings are gathered here, including the Abhidhamma Mātikā, Pāli Rūpasiddhi, the Buddhist Era calendar, the Pāli–Sinhala dictionary, the Dhātukathā and the Paṭṭhāna treatises.",
      "hero.btn.apps": "Browse apps",
      "hero.btn.books": "Books (PDF)",
      "banner.title": "Buddhist Educational Apps",
      "banner.subtitle": "Digital tools for easy access to Pali, Dhamma teachings, and Tipiṭaka sources.",
      "banner.btn.apps": "Explore apps",
      "banner.btn.about": "Learn more",
      "banner.blessing": "Shared for the gift of Dhamma",
      "section.apps.sub": "Abhidhamma, Pāli grammar, the calendar and the dictionary — for Web, Android and iOS.",
      "section.books.sub": "Open a folder and click a book to download it free.",
      "section.apps": "Buddhist Educational Apps",
      "section.books": "Dhamma Book Collection (PDF)",
      "table.name": "File name",
      "table.category": "Category",
      "table.downloads": "Downloads",
      "table.size": "Size",

      "footer.blurb": "A free collection of educational apps and Dhamma book PDFs for students of the Tipiṭaka.",
      "footer.explore": "Explore",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.copyright": "Copyright & Sources",
      "footer.cookie": "Cookie settings",
      "footer.tag": "Buddhist educational tools and PDF resources",
      "footer.blessing": "May the Buddha's Dispensation endure long!",
      "footer.contact": "Contact",
      "footer.contactText": "Questions, suggestions or bug reports? We'd love to hear from you.",
      "footer.contactCta": "Send a message",
      "footer.rightsName": "Buddhist Dhamma Library & Apps",
      "footer.top": "Back to top",
      "footer.free": "Free",

      "cookie.aria": "Cookies and data collection",
      "cookie.text": "We use Google Analytics to understand how the site is used (anonymous statistics such as page views). It only runs if you accept.",
      "cookie.privacy": "Privacy Policy",
      "cookie.deny": "Decline",
      "cookie.accept": "Accept",
      "email.notset": "(email address not set yet)",

      "contact.type.feedback": "Feedback / suggestions",
      "contact.type.bug": "Bug report",
      "contact.type.books": "Question about a book",
      "contact.type.copyright": "Copyright request / removal",
      "contact.type.other": "Other",
      "contact.err.fields": "Please enter your name and a message.",
      "contact.err.noemail": "The contact email address has not been set up yet, so the message cannot be sent.",
      "contact.ok": "Your email app is opening. Please send the message from there.",
      "contact.mail.subject": "Buddhist Dhamma Library",
      "contact.mail.name": "Name",
      "contact.mail.email": "Email",
      "contact.mail.type": "Type",

      "dev.default": "Buddhist Education",
      "card.size": "Size",
      "card.reviews": "Reviews",
      "btn.install.play": "Install (Play Store)",
      "btn.download.apk": "Download (APK)",
      "btn.online": "Use online",
      "btn.share": "Share",
      "btn.share.title": "Share this app",
      "guide.toggle": "How to install the app",
      "share.text": "{title} - Buddhist educational software:",
      "share.copied": "The link for \"{title}\" has been copied!",
      "share.prompt": "Copy this link:",
      "apps.empty": "No matching apps found.",
      "books.empty": "No matching books found.",
      "books.count": "{n} books",
      "dl.title": "Download {title}",
      "lightbox.close": "Close"
    }
  };

  var lang = "si";
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === "si" || saved === "en") lang = saved;
  } catch (e) {}

  // පිටුව පෙන්වීමට පෙර භාෂා ගුණාංගය සකසන්න (ෆ්ලෑෂ් අඩු කිරීමට)
  document.documentElement.lang = lang;

  function t(key, params) {
    var d = DICT[lang];
    var s = (d && d[key] !== undefined) ? d[key] : (DICT.si[key] !== undefined ? DICT.si[key] : key);
    if (params) {
      Object.keys(params).forEach(function (p) {
        s = s.split("{" + p + "}").join(params[p]);
      });
    }
    return s;
  }

  var titleEl = null, titleSi = null, descEl = null, descSi = null;

  function apply() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });

    // <title> සහ meta description
    titleEl = titleEl || document.querySelector("title");
    if (titleEl) {
      if (titleSi === null) titleSi = titleEl.textContent;
      var tEn = titleEl.getAttribute("data-title-en");
      titleEl.textContent = (lang === "en" && tEn) ? tEn : titleSi;
      document.title = titleEl.textContent;
    }
    descEl = descEl || document.querySelector('meta[name="description"]');
    if (descEl) {
      if (descSi === null) descSi = descEl.getAttribute("content");
      var dEn = descEl.getAttribute("data-content-en");
      descEl.setAttribute("content", (lang === "en" && dEn) ? dEn : descSi);
    }

    // භාෂා බොත්තම් තත්ත්වය
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setLang(next) {
    if (next !== "si" && next !== "en") return;
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: lang } }));
  }

  window.I18N = {
    get lang() { return lang; },
    t: t,
    apply: apply,
    setLang: setLang
  };

  // capture අවධියේදී අල්ලා ගැනීම — වෙනත් script එකක් click එක stopPropagation කළත් බොත්තම ක්‍රියා කරයි
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-set-lang]") : null;
    if (btn) setLang(btn.getAttribute("data-set-lang"));
  }, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();