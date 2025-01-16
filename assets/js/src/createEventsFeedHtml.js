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
 * @param {Array} event - An array representing a single event
 * @param {Number} i - An index for working through the array (starting at 4 where the first category should be)
 * @param {Array} cats - An array for gathering multiple categories
 * @returns - Returns a modified event array with the categories gathered into an array
 */
function gatherCategories(event, i = 4, cats = [event[3], event[4]]) {
  const start = event.slice(0, 3);

  i += 1; // work through the array until we hit the libcal URL

  const nextItemIsCategory = (event[i].trim().search(/^https:\/\//) === -1);

  if (nextItemIsCategory) {
    cats.push(event[i]);
    return gatherCategories(event, i, cats); // Check the next ones too
  } else {
    const end = event.slice(i);

    return [...start, cats, ...end];
  }
}

/**
 * 
 * @param {Array} data - An array where each item is an event
 * 
 */
// Example array of events:
//  [
//    [
//      "Resume Development",                                                            // title
//      "https://kankakee.libcal.com/event/13802341",                                    // LibCal URL
//      `*Date:* Thursday, January 16, 2025                                              // description
//       *Time:* 11:45am - 12:45pm
//       *Presenter:* César Avalos
//       *Location:* Online
//       
//       Whether you have never written a resume, or you just want to spruce up your 
//       current draft, this workshop will teach you the fundamentals of putting 
//       together a resume that will get you noticed.
//       ...`,
//       "Workshop",                                                                     // category (may be missing or have additional categories after)
//       "https://kankakee.libcal.com/event/13802341",                                   // LibCal URL (again)
//       "13802341",                                                                     // event ID
//       "2025-01-16",                                                                   // date
//       "11:45:00",                                                                     // start time
//       "12:45:00",                                                                     // end time
//       `Whether you have never written a resume, or you just want to spruce up your    // description (no date/time details at top)
//        current draft, this workshop will teach you the fundamentals of putting
//        ...`,
//       "Online",                                                                       // location
//       "César Avalos",                                                                 // presenter
//       "TRUE",                                                                         // registrations
//       "40",                                                                           // seats (total)
//       "0",                                                                            // attending
//       "TRUE",                                                                         // wait-list
//       "KCC Students"                                                                  // audience
//    ],
//    [
//      // Other events omitted for brevity
//    ]
//  ]

// If the 4th item (category) for an event is missing (or has multiple categories) it throws the rest of the event data off.
// This function checks the 4th item and adjusts the event data if its missing by inserting an empty string.
// If the event has multiple categories it collects them into an array
function checkData(data) {
  return (
    data.map(event => {
      const eventHasCategory = (event[3].trim().search(/^https:\/\//) === -1);
      const multipleCategories = (event[4].trim().search(/^https:\/\//) === -1);

      if (eventHasCategory) { // 4th item is category
        if (multipleCategories) { // multiple categories need to get collected in to an array
          return gatherCategories(event);
        }
        return event; // single category event can be returned as-is
      } else { // 4th item is NOT category - inject empty string for category slot
        const start = event.slice(0, 3);
        const end = event.slice(3);
        // Add empty string for 4th item
        return [...start, '', ...end];
      }
    })
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
  const data = checkData(values.slice(1)); // First row is not needed
  const noEvents = (values[1][0] == '#N/A' || data.length == 0); // If first cell of the second row contains "#N/A" or the length is 0 there are no events
  const html = (noEvents) ? noEventsHandler() : loopOverEvents(data);

  parent.innerHTML = html;
  if (!noEvents) {
    return import('./createEventModals').then(({ default: createEventModals }) => {
      return createEventModals(data);
    })
  }
  return;
}

export default createEventsFeedHtml;
