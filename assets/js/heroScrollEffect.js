import { throttle, debounce } from './helpers.js';

export function initHeroScrollEffect() {
  const heroLight = document.querySelector('[data-hero-light]');
  const heroWrapper = document.querySelector('.hero-wrapper');
  const scrollContainer = document.querySelector('.scroll-container');

  if (!heroLight || !heroWrapper || !scrollContainer) return;

  // Храним текущие параметры
  let maxTranslateVW;
  let scrollTriggerPx;
  let heroHeight;

  // Функция для установки размеров
  const updateSizes = () => {
    maxTranslateVW = 40;
    scrollTriggerPx = window.innerWidth * (maxTranslateVW / 100);
    heroHeight = window.innerHeight;
    scrollContainer.style.height = `${scrollTriggerPx + heroHeight}px`;
  };

  // Основной обработчик скролла
  const handleScroll = throttle(() => {
    const scrollTop = window.scrollY;

    const rect = scrollContainer.getBoundingClientRect();
    const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

    if (!isVisible) return;

    if (scrollTop < scrollTriggerPx) {
      const progress = (scrollTop / scrollTriggerPx) * maxTranslateVW;
      heroLight.style.transform = `translate(${progress}vw, 0%)`;
      heroWrapper.style.position = 'fixed';
    } else {
      heroLight.style.transform = `translate(${maxTranslateVW}vw, 0%)`;
      heroWrapper.style.position = 'relative';
    }
  }, 16);

  // Удаляем старый обработчик и переинициализируем
  const reinit = debounce(() => {
    updateSizes();
    handleScroll(); // применим сразу положение
  }, 150);

  if (window.innerWidth < 1024) {
    heroLight.style.transform = `translate(${maxTranslateVW}vw, 0%)`;
    heroWrapper.style.position = 'relative';
    return;
  }

  // Начальная инициализация
  updateSizes();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', reinit);
  window.addEventListener('orientationchange', reinit);
}
