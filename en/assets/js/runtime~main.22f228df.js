(()=>{"use strict";var e,t,r,o,a,n={},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=c,e=[],f.O=(t,r,o,a)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var c=!0,b=0;b<r.length;b++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](r[b])))?r.splice(b--,1):(c=!1,a<n&&(n=a));if(c){e.splice(d--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(a,n),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({20:"24930526",45:"69100919",53:"935f2afb",65:"773af2c3",85:"1f391b9e",195:"c4f5d8e4",267:"7862c03c",321:"9f55a17f",322:"ec03cb40",342:"bb9b86f5",354:"0bbb8c18",374:"1e0439bc",414:"393be207",442:"566eb727",448:"e5a18cc3",514:"1be78505",556:"e1db0ea6",655:"a3a7c815",740:"6f6810a9",912:"e2448e7b",918:"17896441",937:"c3b33eed",940:"09b25b94"}[e]||e)+"."+{20:"d46e347f",45:"7a7787ac",53:"600221e1",65:"21b8106e",85:"3d79b5c9",195:"e2339459",210:"df4c4acb",267:"71fceadc",321:"92614a28",322:"c95b033d",342:"157aa31f",354:"35573527",374:"5941eb85",414:"49abeb73",442:"7ec82739",448:"ca38a8bd",514:"863841d5",556:"0d66ece6",655:"e1a09618",740:"085ef56f",912:"2c87c7df",918:"553a39b6",937:"0796b33f",940:"36464b70",972:"d16ea531"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="new-project:",f.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var c,b;if(void 0!==r)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var u=i[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){c=u;break}}c||(b=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",a+r),c.src=e),o[e]=[t];var l=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),b&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/jitsibox-pro/en/",f.gca=function(e){return e={17896441:"918",24930526:"20",69100919:"45","935f2afb":"53","773af2c3":"65","1f391b9e":"85",c4f5d8e4:"195","7862c03c":"267","9f55a17f":"321",ec03cb40:"322",bb9b86f5:"342","0bbb8c18":"354","1e0439bc":"374","393be207":"414","566eb727":"442",e5a18cc3:"448","1be78505":"514",e1db0ea6:"556",a3a7c815:"655","6f6810a9":"740",e2448e7b:"912",c3b33eed:"937","09b25b94":"940"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=f.p+f.u(t),c=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,o[1](c)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],c=r[1],b=r[2],i=0;if(n.some((t=>0!==e[t]))){for(o in c)f.o(c,o)&&(f.m[o]=c[o]);if(b)var d=b(f)}for(t&&t(r);i<n.length;i++)a=n[i],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(d)},r=self.webpackChunknew_project=self.webpackChunknew_project||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();