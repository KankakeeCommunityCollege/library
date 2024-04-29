const monthNames = [
  'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
];
const removeZeroPrefix = str => str.replace(
  /^0(\d)$/,
  `$1`
);
// Incoming date/strings are in the YYYY-MM-DD format
// Converting to the M/D/YYYY ensures correct date-parsing
const formatDate = str => str.replace(
  /(\d{4})-(\d{2})-(\d{2})/g,
  (_m, p1, p2, p3) => {
    return `${removeZeroPrefix(p2)}/${removeZeroPrefix(p3)}/${p1}`;
  }
);

function noEventsHandler() {
  return (`
<div>
    <div class="events mx-0 row">
      <div class="events__left col-2 px-0 py-4 text-center"></div>
      <div class="events__right events__info-wrapper pt-1 col-10">
        <span class="events__title">No upcoming events in the next month</span>
        <span class="events__location">You can try checking the
          <a href="https://kankakee.libcal.com/calendar/library?cid=14001&t=m&d=0000-00-00&cal=14001&inc=0"
            target="_blank" rel="noopener noreferrer">
          events calendar</a> for future events or check back later.</span>
      </div>
    </div>
</div>`);
}

function loopOverEvents(data) {
  return ([...data].map(event => {
    // Destructuring-assignment of each item used from in the feed.
    let [title, , , , , eventId, date, potentialDate, , descShort, potentialDesc, location, potentialLocation, , , , ,] = event;
    const desc = (descShort.search(/\d?\d:\d\d:\d\d/g) !== -1) ? potentialDesc : descShort;
    const description = (desc !== '') ? `<span class="events__description mt-2">${desc}</span>` : '';
    const loc = (location === '') ? potentialLocation : location;
    const id = (eventId.search(/https?:\/\/kankakee\..+$/g) !== -1) ? date : eventId;
    let d = new Date(formatDate(date));

    if (!(d instanceof Date && !isNaN(d))) {
      d = new Date(formatDate(potentialDate));
    }

    return (`
<div class="eventsSlide">
    <div class="events row">
      <div class="events__left col-2 px-0 py-4 text-center">
        <span class="events__month">${monthNames[d.getMonth()]}</span>
        <pan class="events__date">${d.getDate()}</span>
      </div>
      <div class="events__right events__info-wrapper pt-1 col-10">
        <a href="#eventId${id}" role="button" data-bs-toggle="modal" class="events__link">
          <span class="events__title">${title}</span>
          ${description}
          <span class="events__location mt-2">${loc}</span>
        </a>
      </div>
    </div>
</div>`)
    }).join('')
  );
}

/**
 *
 * @const {boolean} noEvents - Tests if the Google Sheet has any events.
 *                              Returns `true` if there are no events, `false` if there are.
 * @param {object} response - Response object returned from Google Sheets API
 * @param {Element} parent - The element already in the page to injected the feed into
 *
 */
function createEventsFeedHtml(response, parent) {
  const values = response.result.values; // data from the spreadsheet is under `result.values` key
  const data = values.slice(1); // First row is not needed
  const noEvents = (values[1][0] == '#N/A' || data.length == 0); // If first cell of the second row contains "#N/A" or the length is 0 there are no events
  const html = (noEvents) ? noEventsHandler() : loopOverEvents(data);

  parent.innerHTML = html;
  if (!noEvents) {
    return import('./createEventModals').then(({ default: createEventModals }) => {
      return createEventModals(response)
    })
  }
  return;
}

export default createEventsFeedHtml;
