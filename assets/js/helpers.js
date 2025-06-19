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
    if (window.innerWidth <= 767) {
      document.body.classList.toggle('locked');
    }
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

export const observeMapButton = () => {
  const btn = document.querySelector('[data-fix-button]');
  let paddingTop = -220;

  if (!btn) return;

  if (window.innerWidth < 768) {
    btn.classList.remove('fixed');
    return;
  }

  if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
    paddingTop = -130;
  } else if (window.innerWidth < 1023) {
    paddingTop = -100;
  }

  function onScroll() {
    const parentPosition = btn.closest('.section').getBoundingClientRect().top;
    if (parentPosition < 0) {
      if (parentPosition <= paddingTop) {
        btn.classList.add('fixed');
        return;
      }

      btn.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
};

export const initAccordeons = () => {
  const accordeons = document.querySelector('[data-accordeons]');

  if (!accordeons) return;

  const openFirstAccordeon = () => {
    const firstAccordeon = document.querySelector('.accordeon');
    const firstAccordeonBody = firstAccordeon.querySelector('.accordeon__body');
    firstAccordeon.classList.add('open');
    if (firstAccordeonBody) firstAccordeonBody.style.height = firstAccordeonBody.scrollHeight + 'px';
  };

  const accordeonToggle = e => {
    if (!e.target.hasAttribute('data-accordeon-toggle')) return;

    const accordeon = e.target.closest('.accordeon');
    const accordeonBody = accordeon.querySelector('.accordeon__body');
    const activeAccordeon = e.target.closest('[data-accordeons]')?.querySelector('.accordeon.open');
    const activeAccordeonBody = activeAccordeon?.querySelector('.accordeon__body');

    if (accordeon !== activeAccordeon) {
      activeAccordeon?.classList.remove('open');
      if (activeAccordeonBody) activeAccordeonBody.style.height = '0px';
    }

    if (accordeon.classList.contains('open')) {
      accordeon.classList.remove('open');
      accordeonBody.style.height = '0px';
      return;
    }

    accordeon.classList.add('open');
    accordeonBody.style.height = accordeonBody.scrollHeight + 'px';
  };

  accordeons.addEventListener('click', accordeonToggle);
  openFirstAccordeon();
};
