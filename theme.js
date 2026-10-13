/* ============================================================
   Theme Manager - Dark/Light Mode Toggle
   Buddhist Educational Apps
   ============================================================ */

(function () {
  'use strict';

  var STORAGE_KEY = 'buddhist_apps_theme';
  var THEME_DARK = 'dark';
  var THEME_LIGHT = 'light';

  // ============================================================
  // තේමාව යෙදීම
  // ============================================================
  function applyTheme(theme) {
    var html = document.documentElement;
    
    if (theme === THEME_LIGHT) {
      html.classList.remove('dark');
      html.classList.add('light');
      html.setAttribute('data-theme', 'light');
    } else {
      html.classList.add('dark');
      html.classList.remove('light');
      html.setAttribute('data-theme', 'dark');
    }
    
    updateToggleIcon(theme);
  }

  // ============================================================
  // අයිකනය යාවත්කාලීන කිරීම
  // ============================================================
  function updateToggleIcon(theme) {
    var icon = document.getElementById('theme-toggle-icon');
    if (!icon) return;
    
    if (theme === THEME_LIGHT) {
      icon.textContent = '🌙';
      icon.setAttribute('title', 'අඳුරු තේමාවට මාරු වන්න');
    } else {
      icon.textContent = '☀️';
      icon.setAttribute('title', 'ආලෝකමත් තේමාවට මාරු වන්න');
    }
  }

  // ============================================================
  // තේමාව මාරු කිරීම
  // ============================================================
  window.toggleTheme = function () {
    var html = document.documentElement;
    var currentTheme = html.classList.contains('light') ? THEME_LIGHT : THEME_DARK;
    var newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    
    applyTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
    
    console.log('[Theme] Switched to:', newTheme);
  };

  // ============================================================
  // ආරම්භක තේමාව තීරණය කිරීම
  // ============================================================
  function getInitialTheme() {
    // 1. localStorage එකේ සුරැකි තේරීම
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === THEME_LIGHT || saved === THEME_DARK) {
      return saved;
    }
    
    // 2. System preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return THEME_LIGHT;
    }
    
    // 3. Default: Dark
    return THEME_DARK;
  }

  // ============================================================
  // System preference වෙනස් වූ විට (සුරැකි තේරීමක් නැත්නම් පමණක්)
  // ============================================================
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? THEME_LIGHT : THEME_DARK);
      }
    });
  }

  // ============================================================
  // ආරම්භ කිරීම
  // ============================================================
  // DOM load වීමට පෙරම තේමාව යොදන්න (flash එක වැළැක්වීමට)
  applyTheme(getInitialTheme());

  // ============================================================
  // DOM Ready වූ පසු අයිකනය යාවත්කාලීන කරන්න
  // ============================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      updateToggleIcon(getInitialTheme());
    });
  } else {
    updateToggleIcon(getInitialTheme());
  }

})();