import '../../scss/main.scss';
import setIframeHeight from './setIframeHeight.js';
import styleIframe from './styleIframe.js';
import styleHours from './styleHours.js';
//import makeAccordionLinkable from './makeAccordionLinkable.js';
//import './babelTest.js';
const TUTORING_PAGE_PATH = '/tutoring/';
const path = window.location.pathname;

function loadModule(module) {
  import(`./${module}`).then(({ default: module }) => module());
}

document.addEventListener('DOMContentLoaded', () => {
  Promise.resolve()
    .then(() => path == '/' ? loadModule('getLatestFeedEvents') : null)
    .then(() => path == '/' ? loadModule('styleHours') : null)
    .then(() => path == TUTORING_PAGE_PATH ? loadModule('setIframeHeight') : null)
    .then(() => path == TUTORING_PAGE_PATH ? loadModule('styleIframe') : null)
});
