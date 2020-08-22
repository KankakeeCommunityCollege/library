function makeAccordionLinkable() {

  if ( ! document.querySelector('#accordion') )
    return;
  
  if (window.location.hash) {
    const hash = window.location.hash.replace(/(^\/|\/$)/g, '');
    if ( document.querySelector(hash) ) {
      const collapse = document.querySelector(hash + '.collapse');
      $(collapse).collapse('show');
    }
  }
}

export default makeAccordionLinkable;