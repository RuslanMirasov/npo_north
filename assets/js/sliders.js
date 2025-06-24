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

let swiperInstance = null;

export const initRecipeSlider = () => {
  const recipeSlider = document.querySelector('[data-recipes]');

  if (!recipeSlider) return;

  const initSwiper = () => {
    swiperInstance = new Swiper(recipeSlider, {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
    });
  };

  const destroySwiper = () => {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767) {
      if (!swiperInstance) initSwiper();
    } else {
      destroySwiper();
    }
  };

  // Инициализация на старте
  handleResize();

  // Обработка ресайза
  window.addEventListener('resize', handleResize);
};
