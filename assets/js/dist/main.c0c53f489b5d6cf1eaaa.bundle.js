!function(){"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e].call(i.exports,i,i.exports,o),i.exports}o.m=n,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+"."+o.h()+".bundle.js"},o.miniCssF=function(e){},o.h=function(){return"c0c53f489b5d6cf1eaaa"},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="kcc-library:",o.l=function(n,r,i,l){if(e[n])e[n].push(r);else{var u,s;if(void 0!==i)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var d=a[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",t+i),u.src=n),e[n]=[r];var f=function(t,r){u.onerror=u.onload=null,clearTimeout(b);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/assets/js/dist/",function(){var e={792:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var l=o.p+o.u(t),u=new Error;o.l(l,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",u.name="ChunkLoadError",u.type=i,u.request=l,r[1](u)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,l=n[0],u=n[1],s=n[2],a=0;if(l.some((function(t){return 0!==e[t]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);s&&s(o)}for(t&&t(n);a<l.length;a++)i=l[a],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkkcc_library=self.webpackChunkkcc_library||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();const i=document.getElementById("LoadingEvents"),l=window.location.pathname,u={dots:!1,infinite:!1,slidesToShow:3,prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>',responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:1}}]};window.addEventListener("load",(()=>{Promise.resolve().then((()=>{if("/"==l)return $(i).slick(u),new Promise(((e,t)=>{o.e(479).then(o.bind(o,479)).then((n=>{let{default:r}=n;return r(e,t,u)}))})).then((()=>{const e=document.getElementById("EventsSlider"),t=e.querySelectorAll(".eventsSlide").length>9?3:1;u.slidesToScroll=t,u.responsive[0].settings.slidesToScroll=t,u.responsive[1].settings.slidesToScroll=1,$(e).slick(u)}))})).then((()=>{"/"==l&&o.e(861).then(o.bind(o,861)).then((e=>{let{default:t}=e;return t()}))})).then((()=>{"/tutoring/"==l&&o.e(654).then(o.bind(o,654)).then((e=>{let{default:t}=e;return t()}))}))}))}();