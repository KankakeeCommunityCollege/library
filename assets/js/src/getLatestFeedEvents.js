const SHEET_ID = '1MTAbNLbdd112LiyhmMLhocx_najdvePMxoRzIvMh8Uo';
const SHEET_RANGE = 'Sheet1';
const API_PARAMS = { // This is configuration for API call with spreadsheets that are setup as readonly
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const SHEET_PARAMS = {
  spreadsheetId: SHEET_ID,
  range: SHEET_RANGE
};
const PARENT = document.getElementById('EventsSlider');
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

function getLatestFeedEvents(SLICK_PARAMS) {
  gapi.load('client', () => {
    gapi.client.init(API_PARAMS).then(() => {
      return gapi.client.sheets.spreadsheets.values.get(SHEET_PARAMS);
    }).then(response => {
      import('./createEventsFeedHtml').then(({ default: createEventsFeedHtml }) => {
        createEventsFeedHtml(response)
      }).then(() => {
        $(PARENT).slick(SLICK_PARAMS)
      })
    }, err => {
      console.error('Execute error:', err);
      Promise.resolve()
        .then(() => PARENT.innerHTML = errorMessage)
        .then(() => $(PARENT).slick(SLICK_PARAMS))
        .then(() => {
          const reloadBtn = document.getElementById('eventsReload');

          reloadBtn.addEventListener('click', () => window.location.reload());
        })
    })
  });
}

export default getLatestFeedEvents;