(self.webpackChunkkcc_library=self.webpackChunkkcc_library||[]).push([[176],{4176:function(n,t,r){"use strict";function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}r.r(t),r(4747),r(2222),r(6992),r(1539),r(3948),r(7042),r(8674),r(8783),r(2526),r(1817),r(2165),r(8309),r(1038);var o=document.getElementById("EventsSlider"),a=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];t.default=function(n){var t=n.result.values,c=t.slice(1,t.length),i="#N/A"==t[1][0]||0==c.length,s="";if(s=i?'\n<div>\n    <div class="events mx-0 row">\n      <div class="events__left col-2 px-0 py-4 text-center"></div>\n      <div class="events__right events__info-wrapper pt-1 col-10">\n        <span class="events__title">No upcoming events in the next month</span>\n        <span class="events__location">You can try checking the\n          <a href="https://kankakee.libcal.com/calendar/library?cid=14001&t=m&d=0000-00-00&cal=14001&inc=0"\n            target="_blank" rel="noopener noreferrer">\n          events calendar</a> for future events or check back later.</span>\n      </div>\n    </div>\n</div>':function(n,t){return n.forEach((function(n){var r,o,c=(o=17,function(n){if(Array.isArray(n))return n}(r=n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,a=[],c=!0,i=!1;try{for(r=r.call(n);!(c=(e=r.next()).done)&&(a.push(e.value),!t||a.length!==t);c=!0);}catch(n){i=!0,o=n}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(r,o)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=c[0],s=c[5],l=c[6],u=c[9],f=c[11],v=new Date(l);return t+='\n<div class="eventsSlide">\n    <div class="events row">\n      <div class="events__left col-2 px-0 py-4 text-center">\n        <span class="events__month">'.concat(a[v.getMonth()],'</span>\n        <pan class="events__date">').concat(v.getDate()+1,'</span>\n      </div>\n      <div class="events__right events__info-wrapper pt-1 col-10">\n        <a href="#eventId').concat(s,'" role="button" data-toggle="modal" class="events__link">\n          <span class="events__title">').concat(i,'</span>\n          <span class="events__description mt-2">').concat(u,'</span>\n          <span class="events__location mt-2">').concat(f,"</span>\n        </a>\n      </div>\n    </div>\n</div>")})),t}(c,s),o.innerHTML=s,!i)return r.e(296).then(r.bind(r,9128)).then((function(t){return(0,t.default)(n)}))}},8533:function(n,t,r){"use strict";var e=r(2092).forEach,o=r(9341)("forEach");n.exports=o?[].forEach:function(n){return e(this,n,arguments.length>1?arguments[1]:void 0)}},8457:function(n,t,r){"use strict";var e=r(9974),o=r(7908),a=r(3411),c=r(7659),i=r(7466),s=r(6135),l=r(1246);n.exports=function(n){var t,r,u,f,v,p,d=o(n),h="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,_=void 0!==g,m=l(d),b=0;if(_&&(g=e(g,y>2?arguments[2]:void 0,2)),null==m||h==Array&&c(m))for(r=new h(t=i(d.length));t>b;b++)p=_?g(d[b],b):d[b],s(r,b,p);else for(v=(f=m.call(d)).next,r=new h;!(u=v.call(f)).done;b++)p=_?a(f,g,[u.value,b],!0):u.value,s(r,b,p);return r.length=b,r}},1194:function(n,t,r){var e=r(7293),o=r(5112),a=r(7392),c=o("species");n.exports=function(n){return a>=51||!e((function(){var t=[];return(t.constructor={})[c]=function(){return{foo:1}},1!==t[n](Boolean).foo}))}},9341:function(n,t,r){"use strict";var e=r(7293);n.exports=function(n,t){var r=[][n];return!!r&&e((function(){r.call(null,t||function(){throw 1},1)}))}},3411:function(n,t,r){var e=r(9670),o=r(9212);n.exports=function(n,t,r,a){try{return a?t(e(r)[0],r[1]):t(r)}catch(t){throw o(n),t}}},6135:function(n,t,r){"use strict";var e=r(7593),o=r(3070),a=r(9114);n.exports=function(n,t,r){var c=e(t);c in n?o.f(n,c,a(0,r)):n[c]=r}},2222:function(n,t,r){"use strict";var e=r(2109),o=r(7293),a=r(3157),c=r(111),i=r(7908),s=r(7466),l=r(6135),u=r(5417),f=r(1194),v=r(5112),p=r(7392),d=v("isConcatSpreadable"),h=9007199254740991,y="Maximum allowed index exceeded",g=p>=51||!o((function(){var n=[];return n[d]=!1,n.concat()[0]!==n})),_=f("concat"),m=function(n){if(!c(n))return!1;var t=n[d];return void 0!==t?!!t:a(n)};e({target:"Array",proto:!0,forced:!g||!_},{concat:function(n){var t,r,e,o,a,c=i(this),f=u(c,0),v=0;for(t=-1,e=arguments.length;t<e;t++)if(m(a=-1===t?c:arguments[t])){if(v+(o=s(a.length))>h)throw TypeError(y);for(r=0;r<o;r++,v++)r in a&&l(f,v,a[r])}else{if(v>=h)throw TypeError(y);l(f,v++,a)}return f.length=v,f}})},1038:function(n,t,r){var e=r(2109),o=r(8457);e({target:"Array",stat:!0,forced:!r(7072)((function(n){Array.from(n)}))},{from:o})},7042:function(n,t,r){"use strict";var e=r(2109),o=r(111),a=r(3157),c=r(1400),i=r(7466),s=r(5656),l=r(6135),u=r(5112),f=r(1194)("slice"),v=u("species"),p=[].slice,d=Math.max;e({target:"Array",proto:!0,forced:!f},{slice:function(n,t){var r,e,u,f=s(this),h=i(f.length),y=c(n,h),g=c(void 0===t?h:t,h);if(a(f)&&("function"!=typeof(r=f.constructor)||r!==Array&&!a(r.prototype)?o(r)&&null===(r=r[v])&&(r=void 0):r=void 0,r===Array||void 0===r))return p.call(f,y,g);for(e=new(void 0===r?Array:r)(d(g-y,0)),u=0;y<g;y++,u++)y in f&&l(e,u,f[y]);return e.length=u,e}})},8309:function(n,t,r){var e=r(9781),o=r(3070).f,a=Function.prototype,c=a.toString,i=/^\s*function ([^ (]*)/,s="name";e&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(n){return""}}})},4747:function(n,t,r){var e=r(7854),o=r(8324),a=r(8533),c=r(8880);for(var i in o){var s=e[i],l=s&&s.prototype;if(l&&l.forEach!==a)try{c(l,"forEach",a)}catch(n){l.forEach=a}}}}]);