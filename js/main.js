/**
 * hamburger menu
 */
const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  });
});