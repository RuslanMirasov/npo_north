ymaps.ready(init);

function init() {
  const zoom = window.innerWidth <= 767 ? 16 : 17;
  const center = window.innerWidth <= 767 ? [55.624891, 37.675697] : [55.626029, 37.673639];

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
        bottom: window.innerWidth <= 767 ? 300 : 30,
      },
    }
  );

  map.behaviors.disable('scrollZoom');

  const placemark = new ymaps.Placemark(
    [55.625669, 37.675729],
    {
      balloonContent: '115304, г. Москва, ул. Каспийская, д. 22, стр. 5, корп. 1', // можно заменить на нужный текст
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
