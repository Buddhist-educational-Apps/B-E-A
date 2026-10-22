/* ============================================================
   page.js — About / Privacy / Copyright / Contact පිටු සඳහා
   1) "මෙම පිටුවේ" අන්තර්ගත සූචිය (වත්මන් භාෂාවේ h2 වලින් ස්වයංක්‍රීයව)
   2) Scroll-spy — කියවන කොටස සූචියේ highlight වේ
   3) කියවීමේ ප්‍රගති රේඛාව (පිටුවේ ඉහළ)
   ============================================================ */
(function () {
  var article = document.querySelector(".doc-article");
  if (!article) return;

  var tocList = document.getElementById("docToc");
  var tocBox = document.getElementById("docTocBox");
  var heads = [];
  var links = [];

  function isVisible(el) {
    return el.getClientRects().length > 0;   // display:none නම් rects නැත
  }

  function currentLang() {
    return document.documentElement.lang === "en" ? "en" : "si";
  }

  function build() {
    heads = [];
    links = [];
    if (tocList) tocList.innerHTML = "";

    var n = 0;
    article.querySelectorAll("h2").forEach(function (h) {
      if (!isVisible(h)) return;
      n++;
      if (!h.id) h.id = "sec-" + currentLang() + "-" + n;

      if (tocList) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent.trim();
        li.appendChild(a);
        tocList.appendChild(li);
        links.push(a);
      }
      heads.push(h);
    });

    if (tocBox) tocBox.hidden = n < 3;   // කෙටි පිටු වලට සූචිය අනවශ්‍යයි
    update();
  }

  /* ---------- කියවීමේ ප්‍රගති රේඛාව ---------- */
  var bar = document.createElement("div");
  bar.className = "read-progress";
  bar.setAttribute("aria-hidden", "true");
  bar.innerHTML = "<span></span>";
  document.body.appendChild(bar);
  var barFill = bar.firstChild;

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var y = window.scrollY || doc.scrollTop || 0;
    barFill.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";

    if (!links.length) return;
    var idx = -1;
    var line = 140;                                  // header එකට පහළින් කියවන රේඛාව
    for (var i = 0; i < heads.length; i++) {
      if (heads[i].getBoundingClientRect().top <= line) idx = i;
    }
    if (max > 0 && y >= max - 4) idx = heads.length - 1;   // පිටුවේ අග
    links.forEach(function (a, i) {
      var on = i === idx;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      update();
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  document.addEventListener("languagechange", build);
  build();
})();