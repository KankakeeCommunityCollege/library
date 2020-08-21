function watchForCollapseOpen(el) {
  const jQueryCollapseEl = $(el);

  jQueryCollapseEl.on('shown.bs.collapse', (e)=> {
    const visibleIframe = e.target.querySelector('.iframeJSHeight');

    if ( visibleIframe.contentDocument ) {
      const height = visibleIframe.contentDocument.body.offsetHeight;

      return visibleIframe.height = height + 20;
    }
  });
}

function setIframeHeight() {

  if ( ! document.querySelector('#accordion .collapse .iframeJSHeight') )
    return;

  const collapseContentNodeList = document.querySelectorAll('.collapse');

  for (let i = 0, len = collapseContentNodeList.length; i < len; i++ ) {
    const el = collapseContentNodeList[i];

    el.querySelector('.iframeJSHeight') ? watchForCollapseOpen(el) : null;
  }
}

export default setIframeHeight;