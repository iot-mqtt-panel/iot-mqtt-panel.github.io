(function () {
  'use strict';

  // ✅ Mobile menu toggle
  document.addEventListener('DOMContentLoaded', function () {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn && nav) {
      mobileBtn.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('mobile-open');
        mobileBtn.classList.toggle('active', isOpen);

        // Inline styles for safety fallback (if CSS missing)
        if (isOpen) {
          nav.style.display = 'flex';
          nav.style.flexDirection = 'column';
          nav.style.gap = '12px';
          nav.style.padding = '16px';
          nav.style.background = 'rgba(0,0,0,0.85)';
        } else {
          nav.style.display = '';
          nav.style.flexDirection = '';
          nav.style.gap = '';
          nav.style.padding = '';
          nav.style.background = '';
        }
      });
    }
  });

  // ✅ Smooth scroll for anchor links
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // ✅ Back to top
  const backBtn = document.getElementById('backToTop');

  function updateBackBtn() {
    if (!backBtn) return;
    if (window.scrollY > 300) backBtn.classList.remove('hidden');
    else backBtn.classList.add('hidden');
  }

  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', updateBackBtn);
  document.addEventListener('DOMContentLoaded', updateBackBtn);

  // ✅ Animate-in using IntersectionObserver
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.addEventListener('DOMContentLoaded', function () {
    document
      .querySelectorAll('.feature-card, .card, .download-card')
      .forEach((el) => io.observe(el));
  });
})();
