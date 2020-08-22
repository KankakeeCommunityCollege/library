function createStyleEl() {
  const style = document.createElement('style');
  const styleRules = `
table {
  border: none;
}
  `;
  const css = document.createTextNode(styleRules);
  
  style.type = 'text/css';
  style.appendChild(css);
  return style;
}

function createDataTablesScript() {
  const script = document.createElement('script');
  
  script.type = 'text/javascript';
  const code = `
  function go() {
    return $('#Data').DataTable();
  });
  go();
  `;
  const scriptCode = document.createTextNode(code);
  return script.appendChild(scriptCode);
}

function styleIframe() {
  if ( ! document.querySelector('.iframeTableStyling') )
    return;

  const iframe = document.querySelector('.iframeTableStyling');
  //const style = createStyleEl();


  console.log(iframe);
  iframe.addEventListener('load', ()=> {
    console.log(iframe.contentDocument.body.querySelector('table.table'));
    const table = iframe.contentDocument.body.querySelector('table.table');
    const script = createDataTablesScript();
    
    table.classList.add('table', 'table-striped', 'responsive');
    table.id = 'Data';
    const list = table.querySelectorAll('th');
    console.log(list);

    for (let i = 0, len = list.length; i < len; i++ ) {
      const th = list[i];
      
      i === 0 || i === 1 ? th.classList.add('all') : th.classList.add('none');
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