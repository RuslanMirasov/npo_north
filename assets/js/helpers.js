export const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const hidePreloader = () => {
  const preloader = document.querySelector('[data-preloader]');
  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 200);
};

export const initNavigationMenu = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.navigation ');
  const menuLinks = document.querySelectorAll('.menu__link');

  const toggleMenu = () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  };

  burger.addEventListener('click', toggleMenu);
  menuLinks.forEach(link => link.addEventListener('click', toggleMenu));
};

export const observeCounters = () => {
  const counters = document.querySelector('[data-counters]');
  if (!counters) return;

  function onScroll() {
    const rect = counters.getBoundingClientRect();

    if (rect.top <= 0) {
      counters.classList.add('fixed');
      return;
    }

    counters.classList.remove('fixed');
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
};
