"use strict";(self.webpackChunkkcc_library=self.webpackChunkkcc_library||[]).push([[683],{683:function(n,e,a){a.r(e),a(635);const t=document.getElementById("eventsModals");e.default=function(n){const e=function(n){return[...n].map((n=>{let[e,a,t,s,,l,r,,,,,,,d,i,o,c]=n;const v=-1!==l.search(/^https?:\/\/kankakee\..+$/g)?r:l;let b,h,p;return""===d?(b=i,h=o,p=c):(b=d,h=i,p=o),`\n<div class="modal fade" id="eventId${v}" tabindex="-1" aria-labelledby="eventTitle${v}" aria-hidden="true">\n  <div class="modal-dialog modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title typography__h5" id="eventTitle${v}">${e}</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        ${"TRUE"==b?`<p><strong>Registration is required:</strong>&nbsp;<a href="${a}">${a}</a><br>There are ${h-p} seats available.</p>`:""}\n        <div class="card mb-3">\n          ${""===s?"":`<div class="card-header">\n  <h6 class="typography__h6">${s}</h6>\n</div>`}\n          <div class="card-body">\n            <p><strong>Event link:</strong>&nbsp;<a class="links__external" target="_blank" rel="noopener noreferrer" href="${a}">${a}</a></p>\n            <p>${g=t,g.replace(/^\*([^\*]+:)\*(.+)$/gm,"<strong>$1</strong>$2").replace(/\*\b([^\*]+)\b\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>")}</div></p>\n          </div>\n        <p>\n          <a href="${a}"\n            class="btn btn-primary"\n            target="_blank"\n            rel="noopener  noreferrer">View full event details&nbsp;<svg xmlns="http://www.w3.org/2000/svg"\n              height="24" width="24"\n              viewBox="0 0 24 24"\n              class="svg__new-tab">\n              <path d="M0 0h24v24H0V0z" fill="none"/>\n              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>\n            </svg>\n          </a>\n        </p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>`;var g})).join("")}(n);return t.innerHTML=e}}}]);