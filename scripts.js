/* American Inn  Main Scripts */

(function () {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function () {
          navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
    if (window.scrollY > 40) navbar.classList.add('scrolled');
})();

(function () {
    var toggle = document.querySelector('.nav-toggle');
    var links  = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function () {
          var open = links.classList.toggle('open');
          toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
          a.addEventListener('click', function () { links.classList.remove('open'); });
    });
    document.addEventListener('click', function (e) {
          var navbar = document.getElementById('navbar');
          if (navbar && !navbar.contains(e.target)) links.classList.remove('open');
    });
})();

(function () {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
          var href = a.getAttribute('href');
          if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
    });
})();

(function () {
    var targets = document.querySelectorAll('.card, .amenity-card, .event-item, .feature, .section-header');
    if (!('IntersectionObserver' in window)) return;
    var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
                  if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            observer.unobserve(entry.target);
                  }
          });
    }, { threshold: 0.12 });
    targets.forEach(function (el) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(24px)';
          el.style.transition = 'opacity .5s ease, transform .5s ease';
          observer.observe(el);
    });
})();

(function () {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function () {
          var btn = form.querySelector('button[type="submit"]');
          if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
          setTimeout(function () {
                  if (btn) { btn.textContent = 'Send Message'; btn.disabled = false; }
          }, 6000);
    });
})();

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
          var target = document.querySelector(this.getAttribute('href'));
          if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});
