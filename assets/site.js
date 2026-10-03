(() => {
  'use strict';
  const picker = document.getElementById('language');
  const sections = [...document.querySelectorAll('[data-lang]')];
  const supported = picker ? [...picker.options].map(option => option.value) : [];
  if (!picker || !sections.length) return;
  const storageKey = 'archessoft_language';
  const normalize = value => {
    if (!value) return null;
    const lower = value.toLowerCase();
    if (lower === 'zh' || lower.startsWith('zh-cn') || lower.startsWith('zh-sg') || lower.startsWith('zh-hans')) return supported.includes('zh-Hans') ? 'zh-Hans' : null;
    return supported.find(code => code.toLowerCase() === lower || lower.startsWith(code.toLowerCase() + '-')) || null;
  };
  let saved;
  try { saved = localStorage.getItem(storageKey); } catch (_) { /* Storage can be unavailable in private browsers. */ }
  const url = new URL(window.location.href);
  const hashLanguage = url.hash.startsWith('#lang-') ? url.hash.slice(6) : null;
  const initial = normalize(url.searchParams.get('lang')) || normalize(hashLanguage) || normalize(saved) ||
    (navigator.languages || [navigator.language]).map(normalize).find(Boolean) || 'en';
  const show = (language, updateUrl) => {
    const code = normalize(language) || 'en';
    sections.forEach(section => { section.hidden = section.dataset.lang !== code; });
    picker.value = code;
    document.documentElement.lang = code;
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    const heading = document.querySelector(`[data-lang="${code}"] h1`);
    if (heading) document.title = `${heading.textContent} · ${document.body.dataset.app} · ArchesSoft`;
    document.querySelectorAll('[data-language-link]').forEach(link => {
      const target = new URL(link.href, window.location.href);
      target.searchParams.set('lang', code);
      link.href = target.href;
    });
    try { localStorage.setItem(storageKey, code); } catch (_) { /* The policy remains readable without storage. */ }
    if (updateUrl) {
      const next = new URL(window.location.href);
      next.searchParams.set('lang', code);
      next.hash = '';
      history.replaceState(null, '', next);
    }
  };
  show(initial, false);
  picker.addEventListener('change', event => show(event.target.value, true));
})();
