// ─── NAV SCROLL EFFECT ───────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 10
    ? 'rgba(255,255,255,0.08)'
    : 'rgba(255,255,255,0.06)';
});

// ─── ACTIVE NAV LINKS ─────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.35, rootMargin: '-60px 0px 0px 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ─── SCROLL REVEAL ────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll(
  '.project-card, .timeline-item, .post-row, .info-block, .about-text, .contact-link'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i * 0.06) + 's';
  revealObserver.observe(el);
});

// ─── MOBILE NAV ──────────────────────────────
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
}

function closeMobileNav() {
  if (mobileNav) mobileNav.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (mobileNav && burger &&
      !mobileNav.contains(e.target) &&
      !burger.contains(e.target)) {
    closeMobileNav();
  }
});
