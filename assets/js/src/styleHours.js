const iframe = document.getElementById('hoursWidget'); // Iframe built into the page
// /**
//  * @see https://datatables.net/ for DataTables configuration
//  */
// const dataTablesSettings = {
//   paging: false, // Don't paginate
//   info: false, // Don't add table info to keep it clean
//   filter: false, // Don't add filter field to keep table clean
//   ordering: false, // Don't allow ordering of table - it's a table of dates so ordering doesn't make sense
//   order: [] // Tells datatables to maintain whatever order the data is already in
// }

// function initiateDataTablesOnTable(table) {
//   const $table = $(table);
  
//   /**
//    * @see https://datatables.net/
//    * @todo update to the new version DataTables that doesn't require jQuery
//    */
//   $(table).DataTable(dataTablesSettings);
//   new $.fn.dataTable.Responsive($table, dataTablesSettings);
// }

function adjustIframeContents() {
  const iframeHeight = iframe.contentDocument.body.offsetHeight;
  const cellsWithHeaders = iframe.contentDocument.body.querySelectorAll('td[headers]');
  // The widget's headers attributes are not valid causing a WCAG 2a violation.
  // Since they already have scope attributes we can just remove them to prevent a WCAG 2.1 AA violation:
  [...cellsWithHeaders].forEach(cell => cell.removeAttribute('headers'));

  iframe.width = '100%';
  iframe.height = iframeHeight + 20;
}

function styleHours() {
  console.log(`It's running`);

  // Check if the iframe is already loaded
  if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      adjustIframeContents();
  } else {
      // If not, wait for the load event
    iframe.addEventListener('load', adjustIframeContents);
  }
}

export default styleHours;
