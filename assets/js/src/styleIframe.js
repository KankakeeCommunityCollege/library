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

function styleIframe() {
  if ( ! document.querySelector('.iframeTableStyling') )
    return;

  const iframe = document.querySelector('.iframeTableStyling');
  const style = createStyleEl();


  console.log(iframe);
  iframe.addEventListener('load', ()=> {
    console.log(iframe.contentDocument.head);

    const iframeHead = iframe.contentDocument.head;
    iframeHead.appendChild(style);
  });
}

export default styleIframe;