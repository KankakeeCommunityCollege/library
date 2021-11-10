const PARENT = document.getElementById('Events');

function createEventsFeedHtml(response) {
  const values = response.result.values;
  const data = values.slice(1, values.length);
  let html = '';

  data.forEach(event => {
    let [
      title,
      link,
      descLong,
      cat,
      guid,
      eventid,
      date,
      start,
      end,
      descShort,
      campus,
      location,
      presenter,
      reg,
      seats,
      attending,
      wailtlist,
      audience
    ] = event;
    const d = new Date(date);
    const monthNames = [
      'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ];
    return html += `
<div>
  <a href="${link}" class="events__link" target="_blank" rel="noopener noreferrer">
    <div class="events mx-0 row">
      <div class="events__left col-2 px-0 py-4 text-center">
        <span class="events__month">${monthNames[d.getMonth()]}</span>
        <pan class="events__date">${d.getDate()}</span>
      </div>
      <div class="events__right pt-1 col-10">
        <span class="events__title">${title}</span>
        <span class="events__description mt-2">${descShort}</span>
        <span class="events__location mt-2">${location}</span>
      </div>
    </div>
  </a>
</div>`;
  });
  PARENT.innerHTML = html;
}

export default createEventsFeedHtml;