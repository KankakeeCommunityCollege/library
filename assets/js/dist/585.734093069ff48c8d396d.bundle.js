"use strict";(self.webpackChunkkcc_library=self.webpackChunkkcc_library||[]).push([[585],{585:function(e,n,t){t.r(n);const s=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."],a=e=>e.replace(/^0(\d)$/,"$1"),c=e=>e.replace(/(\d{4})-(\d{2})-(\d{2})/g,((e,n,t,s)=>`${a(t)}/${a(s)}/${n}`));function r(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[e[3],e[4]];const s=e.slice(0,3);return n+=1,-1===e[n].trim().search(/^https:\/\//)?(t.push(e[n]),r(e,n,t)):[...s,t,...e.slice(n)]}function l(e){return e.map((e=>{const n=-1===e[3].trim().search(/^https:\/\//),t=-1===e[4].trim().search(/^https:\/\//);return n?t?r(e):e:[...e.slice(0,3),"",...e.slice(3)]}))}n.default=function(e,n){const a=e.result.values,r=l(a.slice(1)),i="#N/A"==a[1][0]||0==r.length,o=i?'\n<div>\n    <div class="events mx-0 row">\n      <div class="events__left col-2 px-0 py-4 text-center"></div>\n      <div class="events__right events__info-wrapper pt-1 col-10">\n        <span class="events__title">No upcoming events in the next month</span>\n        <span class="events__location">You can try checking the\n          <a href="https://kankakee.libcal.com/calendar/library?cid=14001&t=m&d=0000-00-00&cal=14001&inc=0"\n            target="_blank" rel="noopener noreferrer">\n          events calendar</a> for future events or check back later.</span>\n      </div>\n    </div>\n</div>':function(e){return[...e].map((e=>{let[n,,,,,t,a,r,,l,i,o,p,,,,,]=e;const d=-1!==l.search(/\d?\d:\d\d:\d\d/g)?i:l,v=""!==d?`<span class="events__description mt-2">${d}</span>`:"",_=""===o?p:o,h=-1!==t.search(/https?:\/\/kankakee\..+$/g)?a:t;let u=new Date(c(a));return u instanceof Date&&!isNaN(u)||(u=new Date(c(r))),`\n<div class="eventsSlide">\n    <div class="events row">\n      <div class="events__left col-2 px-0 py-4 text-center">\n        <span class="events__month">${s[u.getMonth()]}</span>\n        <pan class="events__date">${u.getDate()}</span>\n      </div>\n      <div class="events__right events__info-wrapper pt-1 col-10">\n        <a href="#eventId${h}" role="button" data-bs-toggle="modal" class="events__link">\n          <span class="events__title">${n}</span>\n          ${v}\n          <span class="events__location mt-2">${_}</span>\n        </a>\n      </div>\n    </div>\n</div>`})).join("")}(r);if(n.innerHTML=o,!i)return Promise.all([t.e(635),t.e(683)]).then(t.bind(t,683)).then((e=>{let{default:n}=e;return n(r)}))}}}]);