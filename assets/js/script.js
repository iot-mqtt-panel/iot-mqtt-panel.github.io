(function(){
  'use strict';

  // Mobile menu toggle
  window.toggleMobileMenu = function(){
    var nav = document.querySelector('.nav');
    if(!nav) return;
    if(window.getComputedStyle(nav).display === 'none'){
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
      nav.style.padding = '16px';
      nav.style.background = 'rgba(0,0,0,0.85)';
    } else {
      nav.style.display = '';
      nav.style.flexDirection = '';
      nav.style.background = '';
    }
  };

  // Smooth scroll for anchor links
  document.addEventListener('click', function(e){
    var a = e.target.closest('a');
    if(!a) return;
    var href = a.getAttribute('href');
    if(href && href.indexOf('#') === 0){
      var target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  });

  // Back to top
  var backBtn = document.getElementById('backToTop');
  function updateBackBtn(){
    if(!backBtn) return;
    if(window.scrollY > 300) backBtn.classList.remove('hidden'); else backBtn.classList.add('hidden');
  }
  window.scrollToTop = function(){ window.scrollTo({top:0,behavior:'smooth'}); };
  window.addEventListener('scroll', updateBackBtn);
  document.addEventListener('DOMContentLoaded', updateBackBtn);

  // IntersectionObserver for animate-in
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('animate-in');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.feature-card, .card').forEach(function(el){ io.observe(el); });
  });

})();