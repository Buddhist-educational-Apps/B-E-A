// ==========================================
// Firebase SDK Dynamic Loader
// ==========================================
(function loadFirebase(callback) {
  if (typeof firebase !== 'undefined') {
    callback();
    return;
  }
  
  const appScript = document.createElement('script');
  appScript.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js';
  appScript.onload = function() {
    const dbScript = document.createElement('script');
    dbScript.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js';
    dbScript.onload = callback;
    document.head.appendChild(dbScript);
  };
  document.head.appendChild(appScript);
})(function() {
  // ==========================================
  // Firebase Configuration
  // ==========================================
  const firebaseConfig = {
    apiKey: "AIzaSyDEjIe7xsjQCqcPp2dHpWZufZ-SIM9BXCo",
    authDomain: "buddhist-apps.firebaseapp.com",
    databaseURL: "https://buddhist-apps-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "buddhist-apps",
    storageBucket: "buddhist-apps.firebasestorage.app",
    messagingSenderId: "59827119271",
    appId: "1:59827119271:web:522edb63f4bed3191de782"
  };

  let db = null;
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    console.log("✅ Firebase initialized successfully");
  } catch (e) {
    console.error("❌ Firebase initialization error:", e);
  }

  // ==========================================
  // BASE URL
  // ==========================================
  const BASE_URL = "https://buddhist-educational-apps.github.io/B-E-A";

  // ==========================================
  // බෞද්ධ අධ්‍යාපනික Apps දත්ත
  // ==========================================
  const appsData = [
    {
      id: 1,
      title: "අභිධර්ම මාතිකා (Matika)",
      category: "අභිධර්මය",
      platform: "Android / Web",
      badgeType: "tag-gold",
      description: "අභිධර්ම මාතිකා සහ ධම්මසංගණී විග්‍රහයන් අධ්‍යයනයට නිර්මාණය කළ සුවිශේෂී මෘදුකාංගය.",
      apkUrl: "https://play.google.com/store/apps/details?id=app.vercel.matika_snowy.twa",
      webUrl: "https://pavara9803-ctrl.github.io/Matika/",
      screenshots: [
        BASE_URL + "/screenshots/matika-1.webp",
        BASE_URL + "/screenshots/matika-2.webp",
        BASE_URL + "/screenshots/matika-3.webp",
        BASE_URL + "/screenshots/matika-4.webp",
        BASE_URL + "/screenshots/matika-5.webp"
      ],
      installGuide: {
        android: [
          "පහත <strong>\"බාගත කරන්න (APK)\"</strong> බොත්තම ඔබන්න",
          "එය ඔබව Google Play Store එකට ගෙන යනු ඇත",
          "<strong>\"Install\"</strong> බොත්තම ඔබන්න",
          "Installation එක අවසන් වූ පසු <strong>\"Open\"</strong> ඔබන්න",
          "දැන් ඔබගේ Home Screen එකේ අයිකනය දිස්වේ! 🎉"
        ],
        ios: [
          "ඉහළ <strong>\"Online භාවිතය\"</strong> බොත්තම ඔබන්න",
          "Safari browser එකේ යෙදුම විවෘත වේ",
          "පහළ ඇති <strong>Share</strong> බොත්තම (⬆️) ඔබන්න",
          "<strong>\"Add to Home Screen\"</strong> තෝරන්න",
          "<strong>\"Add\"</strong> ඔබන්න - දැන් Home Screen එකේ! 🎉"
        ],
        desktop: [
          "ඉහළ <strong>\"Online භාවිතය\"</strong> බොත්තම ඔබන්න",
          "Address bar එකේ දකුණේ ඇති <strong>install icon</strong> (➕) ඔබන්න",
          "හෝ browser මෙනුවෙන් <strong>\"Install\"</strong> තෝරන්න",
          "<strong>\"Install\"</strong> බොත්තම ඔබන්න",
          "Desktop එකේ යෙදුමක් ලෙස දිස්වේ! 🎉"
        ]
      }
    },
    {
      id: 2,
      title: "රූපසිද්ධි (Rupasiddhi)",
      category: "පාලි ව්‍යාකරණ",
      platform: "Android / Web",
      badgeType: "tag-blue",
      description: "පදරුපසිද්ධි ග්‍රන්ථය ඇසුරින් පාලි නාම හා ආඛ්‍යාත පද සාධනයන් හදාරන මෘදුකාංගය.",
      apkUrl: "https://github.com/pavara9803-ctrl/Rupasiddhi/releases/latest/download/Rupasiddhi.apk",
      webUrl: "https://rupasiddhi.vercel.app/",
      screenshots: [
        BASE_URL + "/screenshots/rupasiddhi-1.webp",
        BASE_URL + "/screenshots/rupasiddhi-2.webp",
        BASE_URL + "/screenshots/rupasiddhi-3.webp",
        BASE_URL + "/screenshots/rupasiddhi-4.webp"
      ],
      installGuide: {
        android: [
          "පහත <strong>\"බාගත කරන්න (APK)\"</strong> බොත්තම ඔබන්න",
          "APK ගොනුව බාගත වේ (Rupasiddhi.apk)",
          "Notifications එකෙන් <strong>\"Install\"</strong> ඔබන්න",
          "හෝ <strong>Settings → Security → Unknown Sources</strong> සක්‍රීය කරන්න",
          "APK ගොනුව ඔබා <strong>\"Install\"</strong> තෝරන්න",
          "දැන් Home Screen එකේ අයිකනය දිස්වේ! 🎉"
        ],
        ios: [
          "ඉහළ <strong>\"Online භාවිතය\"</strong> බොත්තම ඔබන්න",
          "Safari browser එකේ යෙදුම විවෘත වේ",
          "පහළ ඇති <strong>Share</strong> බොත්තම (⬆️) ඔබන්න",
          "<strong>\"Add to Home Screen\"</strong> තෝරන්න",
          "<strong>\"Add\"</strong> ඔබන්න - දැන් Home Screen එකේ! 🎉"
        ],
        desktop: [
          "ඉහළ <strong>\"Online භාවිතය\"</strong> බොත්තම ඔබන්න",
          "Address bar එකේ දකුණේ ඇති <strong>install icon</strong> (➕) ඔබන්න",
          "හෝ browser මෙනුවෙන් <strong>\"Install\"</strong> තෝරන්න",
          "<strong>\"Install\"</strong> බොත්තම ඔබන්න",
          "Desktop එකේ යෙදුමක් ලෙස දිස්වේ! 🎉"
        ]
      }
    },
    {
      id: 3,
      title: "බෞද්ධ වර්ෂය (Buddhist Era)",
      category: "දින දර්ශන",
      platform: "Android / Web",
      badgeType: "tag-gold",
      description: "ශ්‍රී බුද්ධ වර්ෂය, පොහොය දින සහ විශේෂ බෞද්ධ දින දර්ශන පහසුවෙන් ගණනය කර බලාගැනීමේ මෘදුකාංගය.",
      apkUrl: "https://play.google.com/store/apps/details?id=app.vercel.buddhist_era.twa",
      webUrl: "https://buddhist-era.vercel.app/",
      screenshots: [
        BASE_URL + "/screenshots/bc-1.webp",
        BASE_URL + "/screenshots/bc-2.webp",
        BASE_URL + "/screenshots/bc-3.webp",
        BASE_URL + "/screenshots/bc-4.webp",
        BASE_URL + "/screenshots/bc-5.webp"
      ],
      installGuide: {
        android: [
          "පහත <strong>\"බාගත කරන්න (APK)\"</strong> බොත්තම ඔබන්න",
          "එය ඔබව Google Play Store වෙත ගෙන යනු ඇත",
          "<strong>\"Install\"</strong> ඔබන්න - Home Screen එකේ අයිකනය දිස්වේ! 🎉"
        ],
        ios: [
          "ඉහළ <strong>\"Online භාවිතය\"</strong> බොත්තම ඔබන්න",
          "Safari browser එකේ පහළ ඇති <strong>Share</strong> බොත්තම (⬆️) ඔබන්න",
          "<strong>\"Add to Home Screen\"</strong> තෝරන්න - දැන් Home Screen එකේ! 🎉"
        ],
        desktop: [
          "ඉහළ <strong>\"Online භාවිතය\"</strong> බොත්තම ඔබන්න",
          "Address bar එකේ දකුණේ ඇති <strong>install icon</strong> (➕) ඔබන්න",
          "<strong>\"Install\"</strong> තෝරන්න - Desktop App එකක් ලෙස දිස්වේ! 🎉"
        ]
      }
    },
    {
      id: 4,
      title: "පාලි සිංහල ශබ්දකෝෂය (DPSD)",
      category: "පාලි ශබ්දකෝෂ",
      platform: "Android / Web",
      badgeType: "tag-blue",
      description: "Digital Pali-Sinhala Dictionary (DPSD) - ත්‍රිපිටක පාලි පාඨ සහ වචනාර්ථ පහසුවෙන් සිංහලෙන් සෙවිය හැකි විද්‍යුත් ශබ්දකෝෂය.",
      apkUrl: "https://apkpure.com/ශබ්දකෝෂය/com.pali_sinhala_dictionary.twa",
      webUrl: "https://pali-sinhala-dictionary.github.io/DPSD/",
      screenshots: [
        BASE_URL + "/screenshots/DPSD-1.webp",
        BASE_URL + "/screenshots/DPSD-2.webp",
        BASE_URL + "/screenshots/DPSD-3.webp",
        BASE_URL + "/screenshots/DPSD-4.webp",
        BASE_URL + "/screenshots/DPSD-5.webp"
      ],
      installGuide: {
        android: [
          "පහත <strong>\"බාගත කරන්න (APK)\"</strong> බොත්තම ඔබන්න",
          "Chrome browser එකේ මෙනුවෙන් (⋮) <strong>\"Install App\"</strong> හෝ <strong>\"Add to Home screen\"</strong> තෝරන්න",
          "දැන් Home Screen එකේ යෙදුමක් ලෙස භාවිතා කළ හැක! 🎉"
        ],
        ios: [
          "ඉහළ <strong>\"Online භාවිතය\"</strong> බොත්තම ඔබන්න",
          "Safari browser එකේ පහළ ඇති <strong>Share</strong> (⬆️) ඔබන්න",
          "<strong>\"Add to Home Screen\"</strong> තෝරා <strong>Add</strong> ඔබන්න! 🎉"
        ],
        desktop: [
          "ඉහළ <strong>\"Online භාවිතය\"</strong> බොත්තම ඔබන්න",
          "Address bar එකේ දකුණු පස ඇති Install අයිකනය ඔබන්න",
          "<strong>\"Install\"</strong> ඔබන්න! 🎉"
        ]
      }
    }
  ];

  // ==========================================
  // PDF පොත් නාමාවලිය දත්ත
  // ==========================================
  const booksData = [
    {
      id: 1,
      title: "අභිධර්ම මාතිකා අධ්‍යන ප්‍රවේශය - කඩුවෙල අතුලඤාණ හිමි 2023",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "4.3 MB",
      pdfUrl: BASE_URL + "/pdfs/Abhidhamma-matika.pdf",
      countKey: "abhidhamma-matika"
    },
    {
      id: 2,
      title: "අභිධර්ම චිත්තවීථි විනිශ්චය - කඩුවෙල අතුලඤාණ හිමි",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "5.7 MB",
      pdfUrl: BASE_URL + "/pdfs/Abhidhamma-cittaveeti.pdf",
      countKey: "abhidhamma-cittaveeti"
    },
    {
      id: 3,
      title: "ධාතුකථා ප්‍රකරණ අධ්‍යයන ප්‍රවේශය - කඩුවෙල අතුලඤාණ හිමි 2023",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "5.9 MB",
      pdfUrl: BASE_URL + "/pdfs/Abhidhamma-dhatukata.pdf",
      countKey: "abhidhamma-dhatukata"
    },
    {
      id: 4,
      title: "පට්ඨාන ත්‍රි රාශිය - නාඋයනේ අරියධම්ම හිමි, කඩුවෙල අතුලඤාණ හිමි 2022",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "3.3 MB",
      pdfUrl: BASE_URL + "/pdfs/Abhidhamma-patthanathree.pdf",
      countKey: "abhidhamma-pattana3"
    },
    {
      id: 5,
      title: "පට්ඨාන ප්‍රකරණ අධ්‍යයන ප්‍රවේශය - කඩුවෙල අතුලඤාණ හිමි 2024",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "12 MB",
      pdfUrl: BASE_URL + "/pdfs/Abhidhamma-patthanaa.pdf",
      countKey: "abhidhamma-pattanaA"
    },
    {
      id: 6,
      title: "පට්ඨාන ප්‍රකරණ අධ්‍යයන ප්‍රවේශය, ශුද්ධ සංඛ්‍යා සහ ස්වරූපාරූඪ - කඩුවෙල අතුලඤාණ හිමි 2023",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "1.4 MB",
      pdfUrl: BASE_URL + "/pdfs/Abhidhamma-patthanas.pdf",
      countKey: "abhidhamma-pattanaS"
    },
    {
      id: 7,
      title: "පට්ඨාන මහාපකරණ සන්නය 2 - කඩුවෙල අතුලඤාණ හිමි 2023",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "4.3 MB",
      pdfUrl: BASE_URL + "/pdfs/Abhidhamma-patthanamps.pdf",
      countKey: "abhidhamma-pattanaMPS"
    },
    {
      id: 8,
      title: "සමුට්ඨානසීස",
      category: "විනය",
      folder: "විනය",
      downloads: 0,
      size: "2 MB",
      pdfUrl: BASE_URL + "/pdfs/vinaya/Samutthanaseesa.pdf",
      countKey: "vinaya-samutthanaseesa"
    },
    {
      id: 9,
      title: "සප්තදසකාරය",
      category: "විනය",
      folder: "විනය",
      downloads: 0,
      size: "2 MB",
      pdfUrl: BASE_URL + "/pdfs/vinaya/Sapthadasakaraya.pdf",
      countKey: "vinaya-sapthadasakaraya"
    },
    {
      id: 10,
      title: "සීමා",
      category: "විනය",
      folder: "විනය",
      downloads: 0,
      size: "2 MB",
      pdfUrl: BASE_URL + "/pdfs/vinaya/Seema.pdf",
      countKey: "vinaya-seema"
    }
  ];

  // ==========================================
  // Render Functions
  // ==========================================
  function renderContent() {
    renderApps(appsData);
    renderBooks(booksData);
    loadAllDownloadCounts();
  }

  // ==========================================
  // Apps Render කිරීම
  // ==========================================
  function renderApps(apps) {
    const container = document.getElementById("appsContainer");
    if (!container) return;

    if (apps.length === 0) {
      container.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted); grid-column: 1/-1;">සොයන ලද යෙදුම හමු නොවීය.</div>`;
      return;
    }

    container.innerHTML = apps.map(app => {
      const screenshotsHTML = app.screenshots && app.screenshots.length > 0 ? `
        <div class="app-screenshots">
          <div class="screenshots-scroll">
            ${app.screenshots.map((img, index) => `
              <img src="${img}" 
                   alt="${app.title} - Screenshot${index + 1}" 
                   class="screenshot-img"
                   width="220"
                   height="180"
                   loading="lazy"
                   onclick="openLightbox('${img}', '${app.title}')">
            `).join("")}
          </div>
        </div>
      ` : "";

      const installGuideHTML = app.installGuide ? `
        <div class="install-guide">
          <button class="install-guide-toggle" onclick="toggleInstallGuide(this)">
            <span class="install-guide-icon">📲</span>
            <span class="install-guide-text">යෙදුම ස්ථාපනය කරගන්නා ආකාරය</span>
            <span class="install-guide-arrow">▼</span>
          </button>
          
          <div class="install-guide-content">
            <div class="install-tabs">
              <button class="install-tab active" onclick="switchInstallTab(this, 'android-${app.id}')">
                🤖 Android
              </button>
              <button class="install-tab" onclick="switchInstallTab(this, 'ios-${app.id}')">
                🍎 iOS
              </button>
              <button class="install-tab" onclick="switchInstallTab(this, 'desktop-${app.id}')">
                💻 Computer
              </button>
            </div>

            <div class="install-panel active" id="android-${app.id}">
              <ol class="install-steps">
                ${app.installGuide.android.map(step => `<li>${step}</li>`).join("")}
              </ol>
              <div class="install-tip">
                💡 <strong>ඉඟිය:</strong> Progressive Web App (PWA) තාක්ෂණය නිසා Browser එක හරහාම පහසුවෙන් Install කරගත හැක.
              </div>
            </div>

            <div class="install-panel" id="ios-${app.id}">
              <ol class="install-steps">
                ${app.installGuide.ios.map(step => `<li>${step}</li>`).join("")}
              </ol>
              <div class="install-tip">
                💡 <strong>වැදගත්:</strong> iOS එකේ Safari browser එක භාවිතා කර "Add to Home Screen" තෝරන්න.
              </div>
            </div>

            <div class="install-panel" id="desktop-${app.id}">
              <ol class="install-steps">
                ${app.installGuide.desktop.map(step => `<li>${step}</li>`).join("")}
              </ol>
              <div class="install-tip">
                💡 <strong>ඉඟිය:</strong> Chrome හෝ Edge browser භාවිතා කරන්න.
              </div>
            </div>
          </div>
        </div>
      ` : "";

      return `
        <div class="app-box">
          <div class="app-header">
            <h3 class="app-title">${app.title}</h3>
            <span class="tag ${app.badgeType}">${app.category}</span>
          </div>
          <p class="app-desc">${app.description}</p>
          ${screenshotsHTML}
          <div class="app-actions">
            <a href="${app.apkUrl}" ${app.apkUrl.endsWith('.apk') ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="btn-apk">
              <span>📥</span> බාගත කරන්න (APK)
            </a>
            <a href="${app.webUrl}" target="_blank" rel="noopener noreferrer" class="btn-web">
              Online භාවිතය ↗
            </a>
          </div>
          ${installGuideHTML}
        </div>
      `;
    }).join("");
  }

  // ==========================================
  // Books Table Render කිරීම (විවෘත වන විට Files සැඟවී තිබේ)
  // ==========================================
  function renderBooks(books) {
    const container = document.getElementById("pdfFileList");
    if (!container) return;

    if (books.length === 0) {
      container.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted);">සොයන ලද පොත හමු නොවීය.</div>`;
      return;
    }

    const grouped = {};
    books.forEach(book => {
      const folder = book.folder || "වෙනත්";
      if (!grouped[folder]) grouped[folder] = [];
      grouped[folder].push(book);
    });

    container.innerHTML = Object.keys(grouped).map(folderName => `
      <div class="folder-group">
        <div class="folder-header" onclick="toggleFolder(this)">
          <span class="folder-arrow">▶</span>
          <span class="folder-icon">📁</span>
          <span class="folder-name">${folderName}</span>
          <span class="folder-count">(${grouped[folderName].length} පොත්)</span>
        </div>
        <div class="folder-books" style="display: none;">
          ${grouped[folderName].map(book => `
            <a href="${book.pdfUrl}" 
               class="table-row" 
               onclick="handleDownload('${book.countKey}')"
               target="_blank" 
               rel="noopener noreferrer">
              <div class="file-col-title">
                <span class="pdf-badge">PDF</span>
                <span class="file-text">${book.title}</span>
              </div>
              <span class="file-col-cat">${book.category}</span>
              <span class="file-col-count" id="count-${book.countKey}">${book.downloads}</span>
              <span class="file-col-size">${book.size}</span>
            </a>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  // ==========================================
  // ෆෝල්ඩරය විවෘත කිරීම සහ වැසීම
  // ==========================================
  function toggleFolder(headerElement) {
    const folderGroup = headerElement.parentElement;
    const folderBooks = folderGroup.querySelector(".folder-books");
    const arrow = headerElement.querySelector(".folder-arrow");

    const isOpen = folderGroup.classList.contains("open");

    if (isOpen) {
      folderGroup.classList.remove("open");
      folderBooks.style.display = "none";
      if (arrow) arrow.textContent = "▶";
    } else {
      folderGroup.classList.add("open");
      folderBooks.style.display = "block";
      if (arrow) arrow.textContent = "▼";
    }
  }

  // ==========================================
  // Install Guide Toggle
  // ==========================================
  function toggleInstallGuide(button) {
    const content = button.nextElementSibling;
    const arrow = button.querySelector(".install-guide-arrow");
    
    const isOpen = content.classList.contains("open");
    
    if (isOpen) {
      content.classList.remove("open");
      arrow.textContent = "▼";
    } else {
      content.classList.add("open");
      arrow.textContent = "▲";
    }
  }

  // ==========================================
  // Install Tab Switch
  // ==========================================
  function switchInstallTab(tabButton, panelId) {
    const tabContainer = tabButton.parentElement;
    tabContainer.querySelectorAll(".install-tab").forEach(t => {
      t.classList.remove("active");
    });
    
    const guideContent = tabButton.closest(".install-guide-content");
    guideContent.querySelectorAll(".install-panel").forEach(p => {
      p.classList.remove("active");
    });
    
    tabButton.classList.add("active");
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) targetPanel.classList.add("active");
  }

  // ==========================================
  // Lightbox
  // ==========================================
  function openLightbox(imageSrc, title) {
    const existing = document.getElementById("lightbox");
    if (existing) existing.remove();

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
      <img src="${imageSrc}" alt="${title}" class="lightbox-img">
      <p class="lightbox-caption" style="color: var(--accent-gold); margin-top: 14px; font-family: var(--font-heading); font-size: 1.15rem; text-align: center;">${title}</p>
    `;
    lightbox.onclick = function(e) {
      if (e.target === lightbox) closeLightbox();
    };
    document.body.appendChild(lightbox);

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) lightbox.remove();
  }

  // ==========================================
  // Firebase Download Count Functions
  // ==========================================
  function loadAllDownloadCounts() {
    if (!db) {
      console.warn("⚠️ Firebase not initialized");
      return;
    }
    booksData.forEach(book => {
      if (book.countKey) {
        getDownloadCount(book.countKey);
      }
    });
  }

  function getDownloadCount(countKey) {
    db.ref('downloads/' + countKey).once('value')
      .then(snapshot => {
        const count = snapshot.val() || 0;
        updateCountDisplay(countKey, count);
      })
      .catch(error => {
        console.error('Error reading count:', error);
        updateCountDisplay(countKey, 0);
      });
  }

  function incrementDownloadCount(countKey) {
    if (!db || !countKey) return;
    
    const ref = db.ref('downloads/' + countKey);
    ref.transaction(current => {
      return (current || 0) + 1;
    }).then(result => {
      if (result.committed) {
        updateCountDisplay(countKey, result.snapshot.val());
      }
    }).catch(error => {
      console.error('Error incrementing count:', error);
    });
  }

  function updateCountDisplay(countKey, value) {
    const element = document.getElementById(`count-${countKey}`);
    if (element) {
      element.textContent = value;
    }
  }

  function handleDownload(countKey) {
    if (countKey) {
      incrementDownloadCount(countKey);
    }
  }

  // ==========================================
  // Live Search with Dropdown Results
  // ==========================================
  let searchDebounceTimer = null;

  function handleSearchInput() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    if (!input) return;

    const query = input.value.trim();

    if (clearBtn) {
      if (query.length > 0) {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }

    if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(function() {
      performSearch(query);
    }, 150);
  }

  function handleSearchFocus() {
    const input = document.getElementById('searchInput');
    if (input && input.value.trim().length > 0) {
      performSearch(input.value.trim());
    }
  }

  function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    const resultsInner = resultsContainer ? resultsContainer.querySelector('.search-results-inner') : null;
    if (!resultsContainer || !resultsInner) return;

    if (!query || query.length === 0) {
      resultsContainer.classList.add('hidden');
      return;
    }

    const lowerQuery = query.toLowerCase();

    const matchedApps = appsData.filter(function(app) {
      return app.title.toLowerCase().includes(lowerQuery) ||
             app.category.toLowerCase().includes(lowerQuery) ||
             app.description.toLowerCase().includes(lowerQuery);
    });

    const matchedBooks = booksData.filter(function(book) {
      return book.title.toLowerCase().includes(lowerQuery) ||
             book.category.toLowerCase().includes(lowerQuery);
    });

    const totalResults = matchedApps.length + matchedBooks.length;

    if (totalResults === 0) {
      resultsInner.innerHTML = 
        '<div class="search-no-results" style="padding: 24px; text-align: center;">' +
          '<div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>' +
          '<div style="font-weight: 600; color: var(--text-bright); margin-bottom: 4px;">"' + escapeHtml(query) + '" සඳහා ප්‍රතිඵල හමු නොවීය</div>' +
          '<div style="font-size: 0.85rem; color: var(--text-muted);">වෙනත් වචනයක් උත්සාහ කරන්න</div>' +
        '</div>';
      resultsContainer.classList.remove('hidden');
      return;
    }

    let html = '';

    if (matchedApps.length > 0) {
      html += '<div class="search-section">';
      html += '<div class="search-section-title">📱 යෙදුම් <span class="search-section-count">' + matchedApps.length + '</span></div>';
      
      matchedApps.forEach(function(app) {
        html += 
          '<a href="' + app.webUrl + '" target="_blank" rel="noopener noreferrer" class="search-result-item">' +
            '<div class="search-result-icon app-icon">📱</div>' +
            '<div class="search-result-content">' +
              '<div class="search-result-title">' + highlightMatch(app.title, query) + '</div>' +
              '<div class="search-result-meta">' +
                '<span class="tag ' + app.badgeType + '" style="font-size: 0.7rem; padding: 1px 6px;">' + app.category + '</span>' +
              '</div>' +
            '</div>' +
            '<div style="color: var(--accent-gold); font-size: 1rem;">↗</div>' +
          '</a>';
      });
      
      html += '</div>';
    }

    if (matchedBooks.length > 0) {
      html += '<div class="search-section">';
      html += '<div class="search-section-title">📄 ග්‍රන්ථ <span class="search-section-count">' + matchedBooks.length + '</span></div>';
      
      matchedBooks.forEach(function(book) {
        html += 
          '<a href="' + book.pdfUrl + '" target="_blank" rel="noopener noreferrer" class="search-result-item" onclick="handleDownload(\'' + book.countKey + '\')">' +
            '<div class="search-result-icon book-icon">📄</div>' +
            '<div class="search-result-content">' +
              '<div class="search-result-title">' + highlightMatch(book.title, query) + '</div>' +
              '<div class="search-result-meta">' +
                '<span style="color: var(--text-muted);">' + book.category + '</span> • ' +
                '<span style="color: var(--accent-green); font-weight: 600;">' + book.size + '</span>' +
              '</div>' +
            '</div>' +
            '<div style="color: var(--accent-gold); font-size: 1rem;">↗</div>' +
          '</a>';
      });
      
      html += '</div>';
    }

    resultsInner.innerHTML = html;
    resultsContainer.classList.remove('hidden');
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    
    const escapedText = escapeHtml(text);
    const escapedQuery = escapeHtml(query);
    const regex = new RegExp('(' + escapeRegex(escapedQuery) + ')', 'gi');
    
    return escapedText.replace(regex, '<mark style="background: rgba(246, 190, 78, 0.35); color: inherit; padding: 0 2px; border-radius: 3px;">$1</mark>');
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function clearSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    const resultsContainer = document.getElementById('searchResults');
    
    if (input) {
      input.value = '';
      input.focus();
    }
    if (clearBtn) clearBtn.classList.add('hidden');
    if (resultsContainer) resultsContainer.classList.add('hidden');
  }

  document.addEventListener('click', function(event) {
    const searchWrapper = document.querySelector('.search-wrapper');
    const resultsContainer = document.getElementById('searchResults');
    
    if (searchWrapper && resultsContainer && !searchWrapper.contains(event.target)) {
      resultsContainer.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const resultsContainer = document.getElementById('searchResults');
      if (resultsContainer) resultsContainer.classList.add('hidden');
    }
  });

  function filterItems() {
    handleSearchInput();
  }

  // ==========================================
  // Global Function Bindings
  // ==========================================
  window.toggleFolder = toggleFolder;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.handleDownload = handleDownload;
  window.filterItems = filterItems;
  window.renderContent = renderContent;
  window.toggleInstallGuide = toggleInstallGuide;
  window.switchInstallTab = switchInstallTab;
  window.handleSearchInput = handleSearchInput;
  window.handleSearchFocus = handleSearchFocus;
  window.clearSearch = clearSearch;

  // ==========================================
  // පිටුව Load වූ පසු ආරම්භ කිරීම
  // ==========================================
  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", renderContent);
  } else {
    renderContent();
  }
});