const vacanciesBtn = document.querySelector('[data-load-more]');
const vacancies = document.querySelectorAll('[data-vacancy]');
const limit = 5;

let total = limit;

const initPagination = () => {
  vacancies.forEach((vacancy, index) => {
    if (index <= total - 1) {
      vacancy.classList.add('visible');
    }
  });
};

const updatePaginationUi = () => {
  const conter = document.querySelector('[data-vacancies-counter]');
  const conterActive = document.querySelector('[data-vacancies-active-counter]');
  const range = document.querySelector('[data-range]');

  const procent = (total * 100) / vacancies.length;

  conter.innerHTML = vacancies.length;
  conterActive.innerHTML = total;
  range.style.width = `${procent}%`;
};

const loadMoreVacancies = e => {
  const button = e.currentTarget;
  button.classList.add('loading');
  total += limit;

  if (total >= vacancies.length) {
    total = vacancies.length;
  }

  updatePaginationUi();

  setTimeout(() => {
    initPagination();
    button.classList.remove('loading');
    if (total >= vacancies.length) {
      button.classList.add('hidden');
    }
  }, 800);
};

if (vacanciesBtn) {
  initPagination();
  updatePaginationUi();
  vacanciesBtn.addEventListener('click', loadMoreVacancies);
}
