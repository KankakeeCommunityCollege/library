/**
 * @see https://datatables.net/ for DataTables configuration
 */
const dataTablesSettings = {
  paging: false, // Don't paginate
  info: false, // Don't add table info to keep it clean
  filter: false, // Don't add filter field to keep table clean
  ordering: false, // Don't allow ordering of table - it's a table of dates so ordering doesn't make sense
  order: [] // Tells datatables to maintain whatever order the data is already in
}

function initiateDataTablesOnTable(table) {
  const $table = $(table);
  
  /**
   * @see https://datatables.net/
   * @todo update to the new version DataTables that doesn't require jQuery
   */
  $(table).DataTable(dataTablesSettings);
  new $.fn.dataTable.Responsive($table, dataTablesSettings);
}

function styleHours() {
  const iframe = document.getElementById('hoursWidget'); // Iframe built into the page
  const iframeHeight = iframe.contentDocument.body.offsetHeight;

  iframe.addEventListener('load', _e => {
    const tablesList = iframe.contentDocument.body.querySelectorAll('table.table');

    [...tablesList].forEach(table => {
      table.classList.add('responsive'); // DataTables class
      initiateDataTablesOnTable(table);
    });

    iframe.width = '100%';
    iframe.height = iframeHeight + 20;
  });
}

export default styleHours;
