import { hidePreloader, initNavigationMenu, observeCounters, observeMapButton } from './helpers.js';
import { initScrollToBlock } from './scrollToBlock.js';
import { initHeroScrollEffect } from './heroScrollEffect.js';
import { observeAnimations } from './observeAnimations.js';

initHeroScrollEffect();
initNavigationMenu();
initScrollToBlock();
observeCounters();
observeMapButton();
observeAnimations();
hidePreloader();
