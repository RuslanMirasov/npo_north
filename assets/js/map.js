let map;
let placemark;

const initTabs = () => {
  const tabButtons = document.querySelectorAll('[data-tab-button]');

  const showTab = e => {
    const tabButton = e.currentTarget;
    const tabNumber = tabButton.dataset.tabButton;

    if (!tabNumber) return;

    const activeTabButton = document.querySelector(`[data-tab-button].active`);
    const activeTab = document.querySelector(`[data-tab].active`);
    const target = document.querySelector(`[data-tab="${tabNumber}"]`);

    activeTabButton?.classList.remove('active');
    activeTab?.classList.remove('active');
    tabButton.classList.add('active');
    target.classList.add('active');

    // Получаем новые координаты и описание
    const centerMobil = JSON.parse(tabButton.dataset.centerMobil);
    const centerDesktop = JSON.parse(tabButton.dataset.centerDesktop);
    const address = JSON.parse(tabButton.dataset.address);
    const description = tabButton.dataset.description;

    updateMap(centerMobil, centerDesktop, address, description);
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', showTab);
  });
};

// ymaps.ready(() =>
//   init([55.624891, 37.675697], [55.626029, 37.673639], [55.625669, 37.675729], '115304, г. Москва, ул. Каспийская, д. 22, стр. 5, корп. 1')
// );

const updateMap = (centerMobil, centerDesktop, address, description) => {
  const zoom = window.innerWidth <= 767 ? 16 : 17;
  const center = window.innerWidth <= 767 ? centerMobil : centerDesktop;

  if (!map) {
    map = new ymaps.Map(
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
  } else {
    map.setCenter(center, zoom);
    if (placemark) map.geoObjects.remove(placemark);
  }

  placemark = new ymaps.Placemark(
    address,
    {
      balloonContent: description,
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../assets/img/svg/pin.svg',
      iconImageSize: [73, 92],
      iconImageOffset: [-36.5, -92],
    }
  );

  map.geoObjects.add(placemark);
};

ymaps.ready(() => {
  const activeButton = document.querySelector('[data-tab-button].active');
  if (activeButton) {
    const centerMobil = JSON.parse(activeButton.dataset.centerMobil);
    const centerDesktop = JSON.parse(activeButton.dataset.centerDesktop);
    const address = JSON.parse(activeButton.dataset.address);
    const description = activeButton.dataset.description;

    updateMap(centerMobil, centerDesktop, address, description);
  }
});

initTabs();
