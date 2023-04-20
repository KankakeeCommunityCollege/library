const PARENT = document.getElementById('EventsSlider');
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
  (match, p1, p2, p3) => {
    return `${removeZeroPrefix(p2)}/${removeZeroPrefix(p3)}/${p1}`;
  }
);

function noEventsHandler(html) {
  return html = `
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
</div>`;
}

function loopOverEvents(data, html) {
  data.forEach(event => {
    // Destructuring-assignment of each item used from in the feed.
    let [title, , , , , eventId, date, , , descShort, , location, , , , , ,] = event;
    const d = new Date(formatDate(date));

    return html += `
<div class="eventsSlide">
    <div class="events row">
      <div class="events__left col-2 px-0 py-4 text-center">
        <span class="events__month">${monthNames[d.getMonth()]}</span>
        <pan class="events__date">${d.getDate()}</span>
      </div>
      <div class="events__right events__info-wrapper pt-1 col-10">
        <a href="#eventId${eventId}" role="button" data-toggle="modal" class="events__link">
          <span class="events__title">${title}</span>
          <span class="events__description mt-2">${descShort}</span>
          <span class="events__location mt-2">${location}</span>
        </a>
      </div>
    </div>
</div>`;
  });
  return html;
}

/**
 *
 * @const {boolean} NO_EVENTS - Tests if the Google Sheet has any events.
 *                              Returns `true` if there are no events, `false` if there are.
 *
 */
function createEventsFeedHtml(response) {
  const values = response.result.values;
  const data = values.slice(1, values.length);
  const NO_EVENTS = (values[1][0] == '#N/A' || data.length == 0); // If first cell of the second row contains "#N/A" or the length is 0 there are no events
  let html = '';

  NO_EVENTS ? html = noEventsHandler(html) : html = loopOverEvents(data, html);
  PARENT.innerHTML = html;
  if (!NO_EVENTS) {
    return import('./createEventModals').then(({ default: createEventModals }) => {
      return createEventModals(response)
    })
  }
  return;
}

export default createEventsFeedHtml;
