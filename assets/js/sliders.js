export const initSliders = () => {
  const sliders = document.querySelectorAll('[data-swiper]');
  if (!sliders.length) return;

  sliders.forEach(slider => {
    const prevBtn = slider.querySelector('[data-prev]');
    const nextBtn = slider.querySelector('[data-next]');

    new Swiper(slider, {
      speed: 1000,
      allowTouchMove: false,
      simulateTouch: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });
  });
};
