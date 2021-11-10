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
const SLICK_PARAMS = { // Slick carousel info found at: <https://kenwheeler.github.io/slick/>
  dots: false, // No dots bellow the slider
  infinite: false, // No lopping of slides
  autoplay: false, // Do not play once loaded
  slidesToShow: 3, // 3 visible
  slidesToScroll: 1, // scroll one at a time
  adaptiveHeight: false,
  prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',  // TODO: change to <button> el
  nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>',  // TODO: change to <button> el
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
const PARENT = document.getElementById('Events');

function getSheetFeed() {
  gapi.client.init(API_PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(SHEET_PARAMS);
  }).then(response => {
    import('./createEventsFeedHtml').then(({ default: createEventsFeedHtml }) => {
      //console.log(response);
      createEventsFeedHtml(response)
    }).then(() => {
      $(PARENT).slick(SLICK_PARAMS)
    })
  }, err => {
    console.error('Execute error:', err);
  })
}

function getLatestFeedEvents() {
  gapi.load('client', getSheetFeed);
}

export default getLatestFeedEvents;