"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[3739],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},i="Code de conf\xe9rence",c={unversionedId:"Roadmap/fonctionnel/hors-appel/call-via-conf-number",id:"Roadmap/fonctionnel/hors-appel/call-via-conf-number",title:"Code de conf\xe9rence",description:"Entrer dans une conference via son code plutot que via son nom",source:"@site/docs/Roadmap/fonctionnel/hors-appel/call-via-conf-number.md",sourceDirName:"Roadmap/fonctionnel/hors-appel",slug:"/Roadmap/fonctionnel/hors-appel/call-via-conf-number",permalink:"/jitsibox-pro/en/docs/Roadmap/fonctionnel/hors-appel/call-via-conf-number",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/tree/wiki/i18n/en/docusaurus-plugin-content-docs/current/Roadmap/fonctionnel/hors-appel/call-via-conf-number.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Assistance",permalink:"/jitsibox-pro/en/docs/Roadmap/fonctionnel/hors-appel/assistance"},next:{title:"Planification: One Click",permalink:"/jitsibox-pro/en/docs/Roadmap/fonctionnel/hors-appel/planification"}},l={},p=[],u={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-de-conf\xe9rence"},"Code de conf\xe9rence"),(0,o.kt)("p",null,"Entrer dans une conference via son code plutot que via son nom"),(0,o.kt)("p",null,"Convertrir le code en nom via l'api du confmapper : ",(0,o.kt)("br",null),(0,o.kt)("br",null),"\nRequ\xeates GET sur un URL avec le param\xe8tre code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Authentification par API Key (cf. mail suivant), dans le header Authorization\n(ex: curl ","[...]"," -H 'Authorization: Api-Key XXXXXXX' )"),(0,o.kt)("li",{parentName:"ul"},'R\xe9sultat en JSON\n(ex: { "name": "webconfconfmapper2022", "code": "0123456789" } )')))}s.isMDXComponent=!0}}]);