/**
 * 
 * Custom JavaScript written by https://github.com/wdzajicek for:
 * @copyright Copyright © 2021 Kankakee Community College
 * 
 * @author Wesley Zajicek
 * https://github.com/wdzajicek
 *
 */
import '../../scss/main.scss'; // Import the main SCSS file for compilation via Webpack 5

// Placeholder <div> built into DOM contains 3 placeholder/loading slides. Helps eliminate page-repaint when events are loaded.
const EVENTS_LOADER = document.getElementById('LoadingEvents');
const TUTORING_PAGE_PATH = '/tutoring/'; // Path to the tutoring page
const path = window.location.pathname;
// Parameter Object to configure slick-carousel
// Same parameters are used with slick() in the `./getLatestFeedEvents.js` module
const SLICK_PARAMS = { // Slick carousel info found at: <https://kenwheeler.github.io/slick/>
  dots: false, // No dots bellow the slider
  infinite: false, // No lopping of slides
  autoplay: false, // Do not play once loaded
  slidesToShow: 3, // 3 slides visible at-a-time
  slidesToScroll: 1, // scroll/swipe one at a time
  adaptiveHeight: false,
  prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',  // Custom Prev < buttons for slick
  nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>',  // Custom Next > buttons for slick
  responsive: [ // Change slides to show and slides to scroll at different device sizes
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
const LATEST_NEWS_FEED_PARAMS = {
  path: 'getLatestFeedEvents',
  defaultFn() {
    return this.path;
  },
  arg: SLICK_PARAMS
}
// Finally, some functions!
function loadModule(module) { // Webpack 5 provides the dynamic ES6 import() functionality
  const moduleIsObject = typeof module == 'object';
  let defaultFn;

  moduleIsObject ? defaultFn = module.defaultFn && module : defaultFn = module;
  import(`./${ moduleIsObject ? module.path : module}`)
    .then(({ default: defaultFn }) => {
      moduleIsObject ? defaultFn(module.arg) : defaultFn();
    })
}

document.addEventListener('DOMContentLoaded', () => {
  Promise.resolve()
    .then(() => path == '/' ? $(EVENTS_LOADER).slick(SLICK_PARAMS) : null)
    .then(() => path == '/' ? loadModule(LATEST_NEWS_FEED_PARAMS) : null)
    .then(() => path == '/' ? loadModule('styleHours') : null)
    .then(() => path == TUTORING_PAGE_PATH ? loadModule('setIframeHeight') : null)
    .then(() => path == TUTORING_PAGE_PATH ? loadModule('styleIframe') : null)
});
