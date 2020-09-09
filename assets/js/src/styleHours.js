const HOURS_WEEK_BUTTON = '[href="#s-lc-fhw-week"]';
const HOURS_MONTH_BUTTON = '[href="#s-lc-fhw-month"]';
const HOURS_IFRAME = '#hoursWidget';
const TIME_VALUES = 'span.s-lc-time';
const DataTables_SETTINGS_OBJ = {
  paging: false,
  info: false,
  filter: false,
  ordering: false,
  order: []
}

function initiateDataTablesOnTable(table) {
  const $table = $(table);
  
  $(table).DataTable(DataTables_SETTINGS_OBJ);
  new $.fn.dataTable.Responsive($table, DataTables_SETTINGS_OBJ);
}

function styleHours() {
  if ( window.location.pathname != '/' )
    return;

  const iframe = document.querySelector(HOURS_IFRAME);

  iframe.addEventListener('load', ()=> {
    const tablesList = iframe.contentDocument.body.querySelectorAll('table.table');

    for (let i = 0, len = tablesList.length; i < len; i++ ) {
      const table = tablesList[i];
      
      table.classList.add('responsive');
      initiateDataTablesOnTable(table);
    }

    const iframeHeight = iframe.contentDocument.body.offsetHeight;

    iframe.width = '100%';
    iframe.height = iframeHeight + 20;
  });
}

export default styleHours;