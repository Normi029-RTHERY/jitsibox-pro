"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[5248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>s});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),u=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),s=a,g=f["".concat(d,".").concat(s)]||f[s]||p[s]||r;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={},i="Changer le mode d'affichage",c={unversionedId:"Roadmap/fonctionnel/pendant-appel/mode-affichage",id:"Roadmap/fonctionnel/pendant-appel/mode-affichage",title:"Changer le mode d'affichage",description:"Cette fonctionnalit\xe9 permet de facilement changer l'affichage de votre \xe9cran (Main-Screen).",source:"@site/docs/Roadmap/fonctionnel/pendant-appel/mode-affichage.md",sourceDirName:"Roadmap/fonctionnel/pendant-appel",slug:"/Roadmap/fonctionnel/pendant-appel/mode-affichage",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/pendant-appel/mode-affichage",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/Roadmap/fonctionnel/pendant-appel/mode-affichage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dur\xe9e d'appel",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/pendant-appel/duree-appel"},next:{title:"Mise en place d'outils d'analyse et de formatage de code",permalink:"/jitsibox-pro/docs/Roadmap/optimisation/formatage"}},d={},u=[{value:"API &amp; Commands",id:"api--commands",level:2},{value:"Commands",id:"commands",level:3},{value:"Events",id:"events",level:3}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changer-le-mode-daffichage"},"Changer le mode d'affichage"),(0,a.kt)("p",null,"Cette fonctionnalit\xe9 permet de facilement changer l'affichage de votre \xe9cran (Main-Screen)."),(0,a.kt)("p",null,"Voici un exemple du bouton:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(4955).Z,width:"160",height:"127"})),(0,a.kt)("p",null,"Le bouton durant un appel:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(7449).Z,title:"Changer le mode d'affichage",width:"863",height:"331"})),(0,a.kt)("p",null,"Voici un exemple d'affichage sur l'\xe9cran:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(436).Z,width:"673",height:"683"})),(0,a.kt)("h2",{id:"api--commands"},"API & Commands"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SET")," : Entrer ou sortir du mode de disposition de la vue en mosa\xefque. Aucun argument n'est requis. ",(0,a.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe-commands/#toggletileview"},"(Lien)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"api.executeCommand('toggleTileView');\n")),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event")," : Fournit des notifications d'\xe9v\xe9nements concernant l'entr\xe9e ou la sortie du mode de disposition de la vue en mosa\xefque. ",(0,a.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe-events/#tileviewchanged"},"(Lien)")," "),(0,a.kt)("p",null,"L'\xe9couteur re\xe7oit un objet ayant la structure suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    enabled: boolean, // si la vue des tuiles n'est pas affich\xe9e ou non\n}\n")))}p.isMDXComponent=!0},436:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/affichage-ecran-31ef05905dbdc84db6b5a9adb2f68b56.png"},4955:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},7449:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/changer-affichage-1-8cafa13c30b681cd94be6fefaf200f3f.png"}}]);