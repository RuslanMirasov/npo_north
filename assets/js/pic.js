export const initPicsPositions = () => {
  const pics = document.querySelectorAll('[data-pic]');

  if (pics.length === 0) return;

  const adjustTooltipPosition = tooltipEl => {
    const rect = tooltipEl.getBoundingClientRect();
    const padding = 10;

    tooltipEl.style.left = '';
    tooltipEl.style.right = '';

    if (rect.left < padding) {
      tooltipEl.style.left = '-30px';
    } else if (rect.right > window.innerWidth - padding) {
      tooltipEl.style.right = '-30px';
    }
  };

  pics.forEach(pic => {
    adjustTooltipPosition(pic);
  });
};

export const initPicsClick = () => {
  const parent = document.querySelector('[data-addresses]');

  if (!parent) return;

  const picToggle = e => {
    const pic = e.target.hasAttribute('data-addresse') ? e.target : null;
    const picActive = parent.querySelector('.active');

    if (!pic && !picActive) return;

    if ((!pic && picActive) || (picActive && picActive === pic)) {
      picActive.classList.remove('active');
      picActive.querySelector('[data-pic]').style.pointerEvents = 'none';
      return;
    }

    if (picActive) {
      picActive.classList.remove('active');
      picActive.querySelector('[data-pic]').style.pointerEvents = 'none';
    }

    pic.classList.add('active');
    setTimeout(() => {
      pic.querySelector('[data-pic]').style.pointerEvents = 'all';
    }, 400);
  };

  parent.addEventListener('click', picToggle);
};
