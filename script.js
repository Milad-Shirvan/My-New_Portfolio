// ______ THEME TOGGLE ______
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const themeLabel = themeBtn?.querySelector('.theme-label');

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(saved || (prefersDark ? 'dark' : 'light'));

themeBtn?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

function setTheme(mode) {
  root.dataset.theme = mode;
  localStorage.setItem('theme', mode);
  if (themeLabel) themeLabel.textContent = mode === 'dark' ? 'Light' : 'Dark';
  themeBtn?.setAttribute('aria-pressed', mode === 'dark');
}

// ______ MOBILE MENU ______
const menuBtn = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
  }),
);

// ______ SCROLL REVEAL ______
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document
  .querySelectorAll('.reveal')
  .forEach((el) => revealObserver.observe(el));

// ______ ACTIVE NAV ______
const sections = document.querySelectorAll('section[id]');
const navMap = {};
document
  .querySelectorAll('.nav-links a')
  .forEach((a) => (navMap[a.getAttribute('href').slice(1)] = a));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      const link = navMap[e.target.id];
      if (link && e.isIntersecting) {
        Object.values(navMap).forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
sections.forEach((s) => navObserver.observe(s));

// ______ COPY EMAIL ______
window.copyEmail = function (btn) {
  navigator.clipboard.writeText('milad.b.shirvan@gmail.com').then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1800);
  });
};

// ______ FOOTER YEAR ______
document.getElementById('year').textContent = new Date().getFullYear();
