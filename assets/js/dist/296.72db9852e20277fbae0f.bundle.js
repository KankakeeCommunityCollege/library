(self.webpackChunkkcc_library=self.webpackChunkkcc_library||[]).push([[296],{9128:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.r(t),e(4916),e(5306),e(4747),e(2222),e(6992),e(1539),e(3948),e(7042),e(2526),e(1817),e(2165),e(8783),e(8309),e(1038);var a=document.getElementById("eventsModals");t.default=function(n){var t=n.result.values;if(1!=t.length){var e="";e=function(n,t){return n.forEach((function(n){var e,a,l,i=(l=18,function(n){if(Array.isArray(n))return n}(a=n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,a,l=[],i=!0,o=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(n){o=!0,a=n}finally{try{i||null==e.return||e.return()}finally{if(o)throw a}}return l}}(a,l)||function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(a,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],c=i[1],s=i[2],u=i[3],d=(i[4],i[5]),v=(i[6],i[7],i[8],i[9],i[10],i[11],i[12],i[13]),f=i[14],p=i[15];return i[16],i[17],t+='\n<div class="modal fade" id="eventId'.concat(d,'" tabindex="-1" aria-labelledby="eventTitle').concat(d,'" aria-hidden="true">\n  <div class="modal-dialog modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title typography__h5" id="eventTitle').concat(d,'">').concat(o,'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        ').concat("TRUE"==v?'<p><strong>Registration is required:</strong>&nbsp;<a href="'.concat(c,'">').concat(c,"</a><br>There are ").concat(f-p," seats available.</p>"):"",'\n        <div class="card mb-3">\n          <div class="card-header">\n            <h6 class="typography__h6">').concat(u,'</h6>\n          </div>\n          <div class="card-body">\n            <p><strong>Event link:</strong>&nbsp;<a class="links__external" href="').concat(c,'">').concat(c,"</a></p>\n            <p>").concat((e=s,e.replace(/^\*([^\*]+:)\*(.+)$/gm,"<strong>$1</strong>$2").replace(/\*\b([^\*]+)\b\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>")),'</div></p>\n          </div>\n        <p>\n          <a href="').concat(c,'"\n            class="btn btn-primary"\n            target="_blank"\n            rel="noopener  noreferrer">View full event details&nbsp;<svg xmlns="http://www.w3.org/2000/svg"\n              height="24" width="24"\n              viewBox="0 0 24 24"\n              class="svg__new-tab">\n              <path d="M0 0h24v24H0V0z" fill="none"/>\n              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>\n            </svg>\n          </a>\n        </p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>')})),t}(t.slice(1,t.length),e),a.innerHTML=e}}},1530:function(n,t,e){"use strict";var r=e(8710).charAt;n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},7007:function(n,t,e){"use strict";e(4916);var r=e(1320),a=e(2261),l=e(7293),i=e(5112),o=e(8880),c=i("species"),s=RegExp.prototype;n.exports=function(n,t,e,u){var d=i(n),v=!l((function(){var t={};return t[d]=function(){return 7},7!=""[n](t)})),f=v&&!l((function(){var t=!1,e=/a/;return"split"===n&&((e={}).constructor={},e.constructor[c]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return t=!0,null},e[d](""),!t}));if(!v||!f||e){var p=/./[d],g=t(d,""[n],(function(n,t,e,r,l){var i=t.exec;return i===a||i===s.exec?v&&!l?{done:!0,value:p.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}}));r(String.prototype,n,g[0]),r(s,d,g[1])}u&&o(s[d],"sham",!0)}},647:function(n,t,e){var r=e(7908),a=Math.floor,l="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;n.exports=function(n,t,e,c,s,u){var d=e+n.length,v=c.length,f=o;return void 0!==s&&(s=r(s),f=i),l.call(u,f,(function(r,l){var i;switch(l.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,e);case"'":return t.slice(d);case"<":i=s[l.slice(1,-1)];break;default:var o=+l;if(0===o)return r;if(o>v){var u=a(o/10);return 0===u?r:u<=v?void 0===c[u-1]?l.charAt(1):c[u-1]+l.charAt(1):r}i=c[o-1]}return void 0===i?"":i}))}},7651:function(n,t,e){var r=e(4326),a=e(2261);n.exports=function(n,t){var e=n.exec;if("function"==typeof e){var l=e.call(n,t);if("object"!=typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(n))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(n,t)}},2261:function(n,t,e){"use strict";var r,a,l=e(7066),i=e(2999),o=e(2309),c=e(30),s=e(9909).get,u=e(9441),d=e(8173),v=RegExp.prototype.exec,f=o("native-string-replace",String.prototype.replace),p=v,g=(r=/a/,a=/b*/g,v.call(r,"a"),v.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),h=i.UNSUPPORTED_Y||i.BROKEN_CARET,x=void 0!==/()??/.exec("")[1];(g||x||h||u||d)&&(p=function(n){var t,e,r,a,i,o,u,d=this,b=s(d),y=b.raw;if(y)return y.lastIndex=d.lastIndex,t=p.call(y,n),d.lastIndex=y.lastIndex,t;var m=b.groups,E=h&&d.sticky,I=l.call(d),w=d.source,$=0,R=n;if(E&&(-1===(I=I.replace("y","")).indexOf("g")&&(I+="g"),R=String(n).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==n[d.lastIndex-1])&&(w="(?: "+w+")",R=" "+R,$++),e=new RegExp("^(?:"+w+")",I)),x&&(e=new RegExp("^"+w+"$(?!\\s)",I)),g&&(r=d.lastIndex),a=v.call(E?e:d,R),E?a?(a.input=a.input.slice($),a[0]=a[0].slice($),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:g&&a&&(d.lastIndex=d.global?a.index+a[0].length:r),x&&a&&a.length>1&&f.call(a[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a&&m)for(a.groups=o=c(null),i=0;i<m.length;i++)o[(u=m[i])[0]]=a[u[1]];return a}),n.exports=p},7066:function(n,t,e){"use strict";var r=e(9670);n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.dotAll&&(t+="s"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},2999:function(n,t,e){var r=e(7293),a=function(n,t){return RegExp(n,t)};t.UNSUPPORTED_Y=r((function(){var n=a("a","y");return n.lastIndex=2,null!=n.exec("abcd")})),t.BROKEN_CARET=r((function(){var n=a("^r","gy");return n.lastIndex=2,null!=n.exec("str")}))},9441:function(n,t,e){var r=e(7293);n.exports=r((function(){var n=RegExp(".","string".charAt(0));return!(n.dotAll&&n.exec("\n")&&"s"===n.flags)}))},8173:function(n,t,e){var r=e(7293);n.exports=r((function(){var n=RegExp("(?<a>b)","string".charAt(5));return"b"!==n.exec("b").groups.a||"bc"!=="b".replace(n,"$<a>c")}))},4916:function(n,t,e){"use strict";var r=e(2109),a=e(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},5306:function(n,t,e){"use strict";var r=e(7007),a=e(7293),l=e(9670),i=e(7466),o=e(9958),c=e(4488),s=e(1530),u=e(647),d=e(7651),v=e(5112)("replace"),f=Math.max,p=Math.min,g="$0"==="a".replace(/./,"$0"),h=!!/./[v]&&""===/./[v]("a","$0");r("replace",(function(n,t,e){var r=h?"$":"$0";return[function(n,e){var r=c(this),a=null==n?void 0:n[v];return void 0!==a?a.call(n,r,e):t.call(String(r),n,e)},function(n,a){if("string"==typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var c=e(t,this,n,a);if(c.done)return c.value}var v=l(this),g=String(n),h="function"==typeof a;h||(a=String(a));var x=v.global;if(x){var b=v.unicode;v.lastIndex=0}for(var y=[];;){var m=d(v,g);if(null===m)break;if(y.push(m),!x)break;""===String(m[0])&&(v.lastIndex=s(g,i(v.lastIndex),b))}for(var E,I="",w=0,$=0;$<y.length;$++){m=y[$];for(var R=String(m[0]),S=f(p(o(m.index),g.length),0),A=[],_=1;_<m.length;_++)A.push(void 0===(E=m[_])?E:String(E));var k=m.groups;if(h){var T=[R].concat(A,S,g);void 0!==k&&T.push(k);var O=String(a.apply(void 0,T))}else O=u(R,g,S,A,k,a);S>=w&&(I+=g.slice(w,S)+O,w=S+R.length)}return I+g.slice(w)}]}),!!a((function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")}))||!g||h)}}]);