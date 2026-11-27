const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const yearEl = document.getElementById('year');
const contactForm = document.getElementById('contactForm');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();

    if (!name || !email) {
      alert('Please fill in both your name and email.');
      return;
    }

    alert(`Thanks, ${name}! Your message has been recorded.`);
    contactForm.reset();
  });
}
