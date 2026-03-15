// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 10
    ? 'rgba(79,142,247,0.15)' : 'rgba(79,142,247,0.10)';
});

// Active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { threshold: 0.35, rootMargin: '-60px 0px 0px 0px' });
sections.forEach(s => sectionObs.observe(s));

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal, .project-card, .post-row, .info-block, .contact-link').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i * 0.05) + 's';
  revealObs.observe(el);
});

// Mobile nav
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
}
function closeMobileNav() { if (mobileNav) mobileNav.classList.remove('open'); }
document.addEventListener('click', (e) => {
  if (mobileNav && burger && !mobileNav.contains(e.target) && !burger.contains(e.target))
    closeMobileNav();
});
