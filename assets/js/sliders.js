export const initSliders = () => {
  const sliders = document.querySelectorAll('[data-swiper]');
  if (!sliders.length) return;

  sliders.forEach(slider => {
    const slidesPerView = slider.dataset.slidesPerView || 1;
    const spaceBetween = slider.dataset.spaceBetween || 0;
    const spaceBetweenMobile = slider.dataset.spaceBetweenMobile || 0;
    const nextBtn = slider.querySelector('[data-next]');
    const prevBtn = slider.querySelector('[data-prev]');

    new Swiper(slider, {
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: spaceBetweenMobile,
        },
        768: {
          slidesPerView,
          spaceBetween,
        },
      },
    });
  });
};
