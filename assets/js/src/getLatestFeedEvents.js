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
const PARENT = document.getElementById('Events');

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
    })
  });
}

export default getLatestFeedEvents;