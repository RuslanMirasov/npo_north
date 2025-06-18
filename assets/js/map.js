ymaps.ready(init);

function init() {
  const zoom = window.innerWidth <= 767 ? 16 : 17;
  const center = window.innerWidth <= 767 ? [55.626364, 37.675713] : [55.625643, 37.673672];

  const map = new ymaps.Map(
    'map',
    {
      center,
      zoom,
      controls: ['zoomControl'],
    },
    {
      zoomControlPosition: {
        right: 10,
        bottom: 10,
      },
    }
  );

  map.behaviors.disable('scrollZoom');

  const placemark = new ymaps.Placemark(
    [55.625669, 37.675729],
    {
      balloonContent: 'Адрес здесь', // можно заменить на нужный текст
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../assets/img/svg/pin.svg', // путь к вашей иконке
      iconImageSize: [73, 92],
      iconImageOffset: [-36.5, -92],
    }
  );

  map.geoObjects.add(placemark);
}
