export function observeAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length || typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (!el.classList.contains('animate')) {
            el.classList.add('animate');
          }
          observer.unobserve(el); // отключаем наблюдение после анимации
        }
      });
    },
    {
      threshold: 0.3, // когда 10% элемента видно
    }
  );

  elements.forEach(el => observer.observe(el));
}
