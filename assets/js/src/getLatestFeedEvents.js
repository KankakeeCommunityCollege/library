const SHEET_ID = '1MTAbNLbdd112LiyhmMLhocx_najdvePMxoRzIvMh8Uo'; // ID of the spreadsheet
const SHEET_RANGE = 'EVENTS'; // Which range we want, in this case its set to the entire contents of the `EVENTS` tab spreadsheet
const API_PARAMS = { // This is configuration for Sheets API call with spreadsheets that are setup as READONLY
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const SHEET_PARAMS = { // Construct the necessary parameters object for using the `spreadhseets.values.get()` method
  spreadsheetId: SHEET_ID,
  range: SHEET_RANGE
};
const PARENT = document.getElementById('EventsSlider'); // Element built into the pages' HTML markup
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
/**
 * 
 * @param {function} res - A `resolve()` callback passed from a Promise in `./all.js`. The Promise needs to resolve after the events feed is build
 * @param {function} rej - A `reject()` callback from the same Promise
 * @param {object} SLICK_PARAMS - A parameters object defined in `all.js` for initializing slick
 * @returns returns a resolved Promise so that asynchronous code can be run after the feed is built.
 */
function getLatestFeedEvents(res, rej, SLICK_PARAMS) {
  return gapi.load('client', () => {
    return gapi.client.init(API_PARAMS).then(() => {
      return gapi.client.sheets.spreadsheets.values.get(SHEET_PARAMS);
    }).then(response => {
      return import('./createEventsFeedHtml').then(({ default: createEventsFeedHtml }) => {
        return createEventsFeedHtml(response);
      });
    }).then(() => {
      return res();
    }, err => {
      console.error('Execute error:', err);
      // In case of error
      Promise.resolve()
        .then(() => PARENT.innerHTML = errorMessage) // Inject the error message
        .then(() => $(PARENT).slick(SLICK_PARAMS)) // Initialize slick with same parameters as if it were successful
        .then(() => {
          const reloadBtn = document.getElementById('eventsReload');
          
          reloadBtn.addEventListener('click', () => window.location.reload());
        })
      return rej();
    });
  });
}

export default getLatestFeedEvents;