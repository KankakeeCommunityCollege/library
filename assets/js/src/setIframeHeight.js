// ================================================================== //
// iframe elements inside a collapsed Bootstrap 5 element do not      //
//  render at the correct hight. This module is a fix to adjust       //
//  the iframe height when it's collapsed parent element is expanded  //
// ================================================================== //
function watchForCollapseOpen(item) {
  /**
   * @see https://getbootstrap.com/docs/5.3/components/collapse/#events for info on BS5 collapse event:
   *  'shown.bs.collapse' event is a Bootstrap 5 event that can be picked up with addEventListener()
   */
  item.addEventListener('shown.bs.collapse', e => {
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

  const collapseList = document.querySelectorAll('.collapse');

  [...collapseList].forEach(item => {
    if (item.querySelector('.iframeJSHeight')) {
      watchForCollapseOpen(item);
    }
  });
}

export default setIframeHeight;
