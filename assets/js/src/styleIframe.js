function styleIframe() {
  if ( ! document.querySelector('.iframeTableStyling') )
    return;

  const iframe = document.querySelector('.iframeTableStyling');
  //const style = createStyleEl();


  console.log(iframe);
  iframe.addEventListener('load', ()=> {
    //console.log(iframe.contentDocument.body.querySelector('table.table'));
    const table = iframe.contentDocument.body.querySelector('table.table');
    const caption = table.querySelector('caption');
    
    table.classList.add('table', 'table-striped', 'responsive');
    table.id = 'Data';
    caption.style = 'caption-side: top; font-size: 1.1rem;'
    const list = table.querySelectorAll('th');

    for (let i = 0, len = list.length; i < len; i++ ) {
      const th = list[i];
      
      i === 0 || i === 1 ? th.classList.add('all') : th.classList.add('min-desktop');
    }
    
    $(table).DataTable({
      paging: false,
      info: false//,
      //responsive: true
    });

    const $table = $(table)
    new $.fn.dataTable.Responsive($table, {  // For some reason 'Responsive' extension won't initiate on initial DataTable() call. Only works on iframe after DataTables() has already been initiated
      info: false
    });
  });
}

export default styleIframe;