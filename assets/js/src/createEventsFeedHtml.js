const PARENT = document.getElementById('EventsSlider');
const monthNames = [
  'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
];

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
    let [ title,link,,,,eventId,date,,,descShort,,location,,,,,, ] = event; 
    const d = new Date(date);

    return html += `
<div>
  <a href="#eventId${eventId}" role="button" data-toggle="modal" class="events__link">
    <div class="events mx-0 row">
      <div class="events__left col-2 px-0 py-4 text-center">
        <span class="events__month">${monthNames[d.getMonth()]}</span>
        <pan class="events__date">${d.getDate() + 1}</span>
      </div>
      <div class="events__right events__info-wrapper pt-1 col-10">
        <span class="events__title">${title}</span>
        <span class="events__description mt-2">${descShort}</span>
        <span class="events__location mt-2">${location}</span>
      </div>
    </div>
  </a>
</div>`;
  });
  return html;
}

function createEventsFeedHtml(response) {
  const values = response.result.values;
  const data = values.slice(1, values.length);
  let html = '';

  data.length === 0 ? html = noEventsHandler(html) : html = loopOverEvents(data, html);
  PARENT.innerHTML = html;
  import('./createEventModals').then(({default: createEventModals}) => createEventModals(response))
}

export default createEventsFeedHtml;