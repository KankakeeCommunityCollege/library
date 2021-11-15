/**
 * 
 * Custom JS to build modals for the Library Events RSS feed
 * 
 * Library Events have an RSS for "events in the next month" from the LibCal system
 * RSS is imported into Google Sheets spreadsheet (to bypass CORS for fetch() or or XMLHttpRequest())
 * Spreadsheet is then fetched using Google Sheets API v4
 * @constant {object} PARENT = The parent element (built into the HTML) that receives the modal-html built by this module
 * @param {object} response - The response object from the Google API `spreadsheets.values.get()` method
 * @constant {array} values - The values from the `spreadsheets.values.get()` call. The sheet's contents is represented as an array, holding one array for each row in the sheet.
 * values = [ // Represents the spreadsheet contents:
 *  ["row-1, cell-1 contents", "row-1, cell-2 contents" ],
 *  ["row-2, cell-1 contents", "row-2, cell-2 contents" ]
 * ]
 *
 * The modals contain more information for each event and the link to the event in LibCal
 * Modals are opened by clicking on an event in the events-slider/carousel
 * 
 */
const PARENT = document.getElementById('eventsModals'); // Built into library homepage's HTML

function formatDescriptionText(string) {
  const strongInfo = string.replace(/^\*([^\*]+:)\*(.+)$/gm, `<strong>$1</strong>$2`);
  const strong = strongInfo.replace(/\*\b([^\*]+)\b\*/g, `<strong>$1</strong>`);
  return strong.replace(/\n/g, '<br>');
}

function loopOverEvents(data, html) {
  data.forEach(event => {
    let [ // These variables correspond to each column from the events in the Google Sheet
      title,
      link,
      descriptionLong,
      category,,
      eventId,,,,,,,,
      registrationRequired,
      seats,
      attending,,
    ] = event;

    // Bootstrap 4 markup for a modal
    return html += `
<div class="modal fade" id="eventId${eventId}" tabindex="-1" aria-labelledby="eventTitle${eventId}" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title typography__h5" id="eventTitle${eventId}">${title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ${registrationRequired == 'TRUE' ? `<p><strong>Registration is required:</strong>&nbsp;<a href="${link}">${link}</a><br>There are ${seats - attending} seats available.</p>` : ''}
        <div class="card mb-3">
          <div class="card-header">
            <h6 class="typography__h6">${category}</h6>
          </div>
          <div class="card-body">
            <p><strong>Event link:</strong>&nbsp;<a class="links__external" href="${link}">${link}</a></p>
            <p>${formatDescriptionText(descriptionLong)}</div></p>
          </div>
        <p>
          <a href="${link}"
            class="btn btn-primary"
            target="_blank"
            rel="noopener  noreferrer">View full event details&nbsp;<svg xmlns="http://www.w3.org/2000/svg"
              height="24" width="24"
              viewBox="0 0 24 24"
              class="svg__new-tab">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
          </a>
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
  });
  return html;
}

function createEventModals(response) {
  const values = response.result.values;

  // We don't need any modals if there are no upcoming events
  if (values.length == 1)
    return;

  // The firs array/row of values is a heading-cell of info about the sheet, and not data that we need.
  const data = values.slice(1, values.length);
  let html = '';

  html = loopOverEvents(data, html);
  PARENT.innerHTML = html;
}

export default createEventModals;