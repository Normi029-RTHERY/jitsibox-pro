"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},r="Modification de la qualit\xe9 de l'appel",l={unversionedId:"Roadmap/fonctionnel/pendant-appel/qualite-appel",id:"Roadmap/fonctionnel/pendant-appel/qualite-appel",title:"Modification de la qualit\xe9 de l'appel",description:"Cette fonctionnalit\xe9 permet de changer la qualit\xe9 de votre appel.",source:"@site/docs/Roadmap/fonctionnel/pendant-appel/qualite-appel.md",sourceDirName:"Roadmap/fonctionnel/pendant-appel",slug:"/Roadmap/fonctionnel/pendant-appel/qualite-appel",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/pendant-appel/qualite-appel",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/Roadmap/fonctionnel/pendant-appel/qualite-appel.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Param\xe8tres avanc\xe9s (Lobby, Pin de conf\xe9rence)",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/pendant-appel/parametres-avances"},next:{title:"Diffusion de contenu",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/pendant-appel/diffusion-contenu"}},p={},d=[{value:"API &amp; Commands",id:"api--commands",level:2},{value:"Commands",id:"commands",level:3},{value:"Commands",id:"commands-1",level:3},{value:"Events",id:"events",level:3}],c={toc:d};function s(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modification-de-la-qualit\xe9-de-lappel"},"Modification de la qualit\xe9 de l'appel"),(0,o.kt)("p",null,"Cette fonctionnalit\xe9 permet de changer la qualit\xe9 de votre appel. "),(0,o.kt)("p",null,"Voici un exemple du bouton:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(6830).Z,width:"58",height:"35"})),(0,o.kt)("p",null,"Le bouton durant un appel:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(1011).Z,width:"863",height:"329"})),(0,o.kt)("p",null,"Voici le panneau de r\xe9glage de la qualit\xe9 d'appel:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(2290).Z,width:"311",height:"247"})),(0,o.kt)("h2",{id:"api--commands"},"API & Commands"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GET")," : Renvoie le param\xe8tre de qualit\xe9 vid\xe9o actuel. ",(0,o.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe-functions#getvideoquality"},"(Lien)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api.getVideoQuality();\n")),(0,o.kt)("h3",{id:"commands-1"},"Commands"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SET")," : D\xe9finit la r\xe9solution vid\xe9o d'envoi et de r\xe9ception. Le r\xe9glage de la hauteur de la r\xe9solution est impl\xe9ment\xe9 en utilisant un seul argument. ",(0,o.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe-commands#setvideoquality"},"(Lien)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api.executeCommand('setVideoQuality', 1080);\n")),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Event")," : Fournit des notifications d'\xe9v\xe9nements concernant les modifications des param\xe8tres de qualit\xe9 vid\xe9o. ",(0,o.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe-events#videoqualitychanged"},"(Lien)")," "),(0,o.kt)("p",null,"L'\xe9couteur re\xe7oit un objet ayant la structure suivante :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n    videoQuality: num\xe9ro // la hauteur de la r\xe9solution li\xe9e au nouveau param\xe8tre de qualit\xe9 vid\xe9o.\n}\n")))}s.isMDXComponent=!0},6830:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1011:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/changer-qualite-1-46fbbf16f3d3a20dfda9ecd4e9fd239a.png"},2290:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/changer-qualite-2-244114a0a5226011aff133050bb00189.png"}}]);