!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({2:function(e,t,n){"use strict";function o(e){$(e).on("shown.bs.collapse",(function(e){var t=e.target.querySelector(".iframeJSHeight");if(t.contentDocument){var n=t.contentDocument.body.offsetHeight;return t.height=n+20}}))}n.r(t);var r=function(){if(document.querySelector("#accordion .collapse .iframeJSHeight"))for(var e=document.querySelectorAll(".collapse"),t=0,n=e.length;t<n;t++){var r=e[t];r.querySelector(".iframeJSHeight")&&o(r)}};var a=function(){if(document.querySelector(".iframeTableStyling")){var e=document.querySelector(".iframeTableStyling");console.log(e),e.addEventListener("load",(function(){var t=e.contentDocument.body.querySelector("table.table"),n=t.querySelector("caption");t.classList.add("table","table-striped","responsive"),t.id="Data",n.style="caption-side: top; font-size: 1.1rem;";for(var o=t.querySelectorAll("th"),r=0,a=o.length;r<a;r++){var i=o[r];0===r||1===r?i.classList.add("all"):i.classList.add("min-desktop")}$(t).DataTable({paging:!1,info:!1});var l=$(t);new $.fn.dataTable.Responsive(l,{info:!1})}))}},i={paging:!1,info:!1,filter:!1,ordering:!1,order:[]};function l(e){var t=$(e);$(e).DataTable(i),new $.fn.dataTable.Responsive(t,i)}var c=function(){if("/"==window.location.pathname){var e=document.querySelector("#hoursWidget");e.addEventListener("load",(function(){for(var t=e.contentDocument.body.querySelector("ul.nav.nav-pills.s-lc-fhw-pills"),n=e.contentDocument.body.querySelectorAll("table.table"),o=0,r=n.length;o<r;o++){var a=n[o];a.classList.add("responsive"),l(a)}var i=e.contentDocument.body.offsetHeight;t.style="display: none;",e.width="100%",e.height=i+20}))}};document.addEventListener("DOMContentLoaded",(function(){r(),a(),c()}))}});