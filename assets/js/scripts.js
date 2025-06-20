import { hidePreloader, initNavigationMenu, observeCounters, observeMapButton, initAccordeons } from './helpers.js';
import { initScrollToBlock } from './scrollToBlock.js';
//import { initHeroScrollEffect } from './heroScrollEffect.js';
import { observeAnimations } from './observeAnimations.js';
import { initPicsPositions, initPicsClick } from './pic.js';

const isAndroid = /Android/i.test(navigator.userAgent);
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isAndroid) document.body.classList.add('is-android');
if (isSafari) document.body.classList.add('is-safari');

//initHeroScrollEffect();
initNavigationMenu();
initScrollToBlock();
observeCounters();
observeMapButton();
observeAnimations();
initAccordeons();
initPicsPositions();
initPicsClick();
hidePreloader();
