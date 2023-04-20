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
// Same parameters are used for initializing slick in the `./getLatestFeedEvents.js` module
const SLICK_PARAMS = { // Slick carousel info found at: <https://kenwheeler.github.io/slick/>
  dots: false, // No dots bellow the slider
  infinite: false, // No lopping of slides
  slidesToShow: 3,
  prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',  // Custom Prev < buttons for slick
  nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>',  // Custom Next > buttons for slick
  responsive: [ // Change slides to show and slides to scroll at different device sizes
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}
// Finally, some functions!
function loadModule(module) { // Webpack 5 provides the dynamic ES6 import() functionality
  const moduleIsObject = typeof module == 'object';
  let defaultFn;

  moduleIsObject ? defaultFn = module.defaultFn && module : defaultFn = module;
  return import(`./${ moduleIsObject ? module.path : module}`)
    .then(({ default: defaultFn }) => {
      return moduleIsObject ? defaultFn(module.arg) : defaultFn();
    })
}

window.addEventListener('load', () => {
  Promise.resolve()
    .then(() => {
      if (path == '/') {
        $(EVENTS_LOADER).slick(SLICK_PARAMS);
        return new Promise((res, rej) => {
          import('./getLatestFeedEvents').then(({ default: getLatestFeedEvents }) => {
            return getLatestFeedEvents(res, rej, SLICK_PARAMS);
          })
        }).then(() => {
          const EVENTS_SLIDER = document.getElementById('EventsSlider');
          const EVENTS_LIST = EVENTS_SLIDER.querySelectorAll('.eventsSlide'); // Make a NodeList containing each slide
          const slidesScrolled = EVENTS_LIST.length > 9 ? 3 : 1; // Set number of slides scrolled to 3 when there are a lot of slides (more than 9, otherwise its too tedious to click through)
          
          SLICK_PARAMS.slidesToScroll = slidesScrolled; // Set the slidesToScroll parameters accordingly (x3)
          SLICK_PARAMS.responsive[0].settings.slidesToScroll = slidesScrolled;
          SLICK_PARAMS.responsive[1].settings.slidesToScroll = 1; // Sets slidesToScroll to 1 for screens that only show 1 at a time
          $(EVENTS_SLIDER).slick(SLICK_PARAMS); // Initiate slick-carousel // Also see SLICK_PARAMS comments for more info on slick-carousel
        })
      }
    })
    .then(() => path == '/' ? loadModule('styleHours') : null)
    .then(() => {
      if (path == TUTORING_PAGE_PATH) {
        loadModule('setIframeHeight');
      }
    })
});
