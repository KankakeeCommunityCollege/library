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

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('EventsSlider')) {
    import('../../scss/bootstrap-badges.scss');
    import('./getLatestFeedEvents')
      .then(({ default: getLatestFeedEvents }) => getLatestFeedEvents());
  }

  if (document.getElementById('hoursWidget')) {
    import('./styleHours').then(({ default: styleHours }) => styleHours());
  }

  if (document.querySelector('.iframeJSHeight')) {
    import('./setIframeHeight').then(({ default: setIframeHeight }) => setIframeHeight());
  }

});
