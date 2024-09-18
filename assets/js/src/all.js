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
const eventsLoader = document.getElementById('LoadingEvents');
const tutoringPagePath = '/tutoring/'; // Path to the tutoring page
const path = window.location.pathname;
// Same parameters are used for initializing slick in the `./getLatestFeedEvents.js` module
const slickParams = { // Slick carousel info found at: <https://kenwheeler.github.io/slick/>
  dots: false, // No dots bellow the slider
  infinite: false, // No looping of slides at end
  slidesToShow: 3, // How many slides are visible at a time
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

window.addEventListener('load', () => {
  Promise.resolve()
    .then(() => {
      if (document.getElementById('EventsSlider')) {
        $(eventsLoader).slick(slickParams);
        return new Promise((res, rej) => {
          import('./getLatestFeedEvents').then(({ default: getLatestFeedEvents }) => {
            return getLatestFeedEvents(res, rej, slickParams);
          })
        }).then(() => {
          const eventsSlider = document.getElementById('EventsSlider');
          const eventsList = eventsSlider.querySelectorAll('.eventsSlide'); // Make a NodeList containing each slide
          // Set number of slides scrolled to 3 when there are a lot of slides (more than 9, otherwise its too tedious to click/swipe through)
          const slidesScrolled = (eventsList.length > 9) ? 3 : 1;
          
          slickParams.slidesToScroll = slidesScrolled; // Set the slidesToScroll parameters accordingly (x3)
          // Also set slidesToScroll for responsive breakpoints
          slickParams.responsive[0].settings.slidesToScroll = slidesScrolled;
          slickParams.responsive[1].settings.slidesToScroll = 1; // Sets slidesToScroll to 1 for screens that only show 1 at a time
          $(eventsSlider).slick(slickParams); // Initiate slick-carousel // Also see slickParams comments for more info on slick-carousel
        })
      }
    })
    .then(() => {
      if (document.getElementById('hoursWidget')) {
        import('./styleHours').then(({ default: styleHours }) => styleHours());
      }
    })
    .then(() => {
      if (document.querySelector('.iframeJSHeight')) {
        import('./setIframeHeight').then(({ default: setIframeHeight }) => setIframeHeight());
      }
    })
});
