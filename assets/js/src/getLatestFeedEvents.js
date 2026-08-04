const apiParams = { // This is configuration for Sheets API call with spreadsheets that are setup as READONLY
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const sheetParams = { // Construct the necessary parameters object for using the `spreadhseets.values.get()` method
  spreadsheetId: '1MTAbNLbdd112LiyhmMLhocx_najdvePMxoRzIvMh8Uo', // ID of Google Sheets workbook
  range: 'EVENTS' // Spreadsheet to get data from in the workbook
  // range: 'TEST_SHEET_2' // Spreadsheet for development
};
const parent = document.getElementById('EventsSlider'); // Element built into the pages' HTML markup
// Error message for potential issues when fetching the events using the gapi
const errorMessage = `
<div>
    <div class="events mx-0 row">
      <div class="events__left col-2 px-0 py-4 text-center"></div>
      <div class="events__right events__info-wrapper pt-2 col-10">
        <span class="events__title">Whoops!</span>
        <span class="events__location events--relative-up">It looks like something went wrong while trying to load the events. <br>
        You can try <a id="eventsReload" class="btn btn-sm btn-outline-primary" href="#">reloading the page</a>.</span>
      </div>
    </div>
</div>
<div>
    <div class="events mx-0 row">
      <div class="events__left col-2 px-0 py-4 text-center"></div>
      <div class="events__right events__info-wrapper pt-2 col-10">
        <span class="events__title">We want to help!</span>
        <span class="events__location events--relative-up">If the issue persists please contact us at
        <a href="mailto:Library@kcc.edu">library@kcc.edu</a> or <a href="tel:+18158028400">815-802-8400</a>.</span>
      </div>
    </div>
</div><div></div>`;

function adjustIframeHeight() {
  const hoursWidget = document.getElementById('hoursWidget');

  hoursWidget.parentElement.setAttribute(
    'style',
    `padding-bottom: ${hoursWidget.contentWindow.document.body.scrollHeight}px;`
  );
}

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
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

function getLatestFeedEvents() {
  return gapi.load('client', () => {
    return gapi.client.init(apiParams).then(() => {
      return gapi.client.sheets.spreadsheets.values.get(sheetParams);
    }).then(response => {
      return import('./createEventsFeedHtml').then(({ default: createEventsFeedHtml }) => {
        const result = createEventsFeedHtml(response, parent);
        const eventsList = parent.querySelectorAll('.eventsSlide'); // Make a NodeList containing each slide
        const slidesToScrollValue = (eventsList.length > 9) ? 3 : 1;

        // Set number of slides scrolled to 3 when there are a lot of slides (more than 9, otherwise its too tedious to click/swipe through)
        slickParams.slidesToScroll = slidesToScrollValue;
        slickParams.responsive[0].settings.slidesToScroll = slidesToScrollValue;
        slickParams.responsive[0].settings.slidesToScroll = 1; // Sets slidesToScroll to 1 for screens that only show 1 at a time

        $(parent).slick(slickParams); // Initiate slick-carousel // Also see slickParams comments for more info on slick-carousel
      });
    }).then(() => {
      const delay = 250;
      let throttled = false;

      adjustIframeHeight();

      window.addEventListener('resize', () => {
        if (!throttled) {
          
          adjustIframeHeight();
          
          throttled = true;

          window.setTimeout(() => {
            throttled = false;
          }, delay);
        }
      });

    }, err => {
      console.error('Execute error:', err);
      // In case of error
      parent.innerHTML = errorMessage;
      $(parent).slick(slickParams);

      const reloadBtn = document.getElementById('eventsReload');
          
      reloadBtn.addEventListener('click', () => window.location.reload());
    });
  });
}

export default getLatestFeedEvents;
