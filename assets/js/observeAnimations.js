export function observeAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length || typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const el = entry.target;
        const mode = el.getAttribute('data-animate');

        if (entry.isIntersecting) {
          el.classList.add('animate');

          if (mode === 'once') {
            observer.unobserve(el);
          }
        } else {
          // Если повторяемая — убираем класс при выходе
          if (mode === 'repeat') {
            el.classList.remove('animate');
          }
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach(el => observer.observe(el));
}
