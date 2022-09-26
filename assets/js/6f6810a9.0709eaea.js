"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[740],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,v=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),u=a(7094),c=a(2466);const p="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,a;const{lazy:i,block:m,defaultValue:d,values:v,groupId:h,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,o.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:C}=(0,u.U)(),[w,P]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=h){const e=g[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&P(e)}const O=e=>{const t=e.currentTarget,a=E.indexOf(t),n=b[a].value;n!==w&&(x(t),P(n),null!=h&&C(h,String(n)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;a=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:j,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},5018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const o={},u="Branchements & mat\xe9riels test\xe9s",c={unversionedId:"installation/branchement/branchement",id:"installation/branchement/branchement",title:"Branchements & mat\xe9riels test\xe9s",description:"",source:"@site/docs/installation/branchement/branchement.md",sourceDirName:"installation/branchement",slug:"/installation/branchement/",permalink:"/jitsibox-pro/docs/installation/branchement/",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/installation/branchement/branchement.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Optimisation SSI",permalink:"/jitsibox-pro/docs/Roadmap/securisation/optimisation-ssi"},next:{title:"Installation d\xe9taill\xe9e",permalink:"/jitsibox-pro/docs/installation/linux/"}},p={},s=[{value:"Syst\xe8me d&#39;exploitation",id:"syst\xe8me-dexploitation",level:3},{value:"Ecran Principale",id:"ecran-principale",level:3},{value:"Ecran touch",id:"ecran-touch",level:3},{value:"Camera/Microphone",id:"cameramicrophone",level:3},{value:"Ordinateur (NUC)",id:"ordinateur-nuc",level:3},{value:"Performances:",id:"performances",level:4},{value:"Navigateur",id:"navigateur",level:3},{value:"Pilote d&#39;affichage",id:"pilote-daffichage",level:3},{value:"Plateforme JavaScript",id:"plateforme-javascript",level:3},{value:"Syst\xe8me d&#39;exploitation",id:"syst\xe8me-dexploitation-1",level:3},{value:"Ecran Principale",id:"ecran-principale-1",level:3},{value:"Ecran touch",id:"ecran-touch-1",level:3},{value:"Camera/Microphone",id:"cameramicrophone-1",level:3},{value:"Ordinateur (NUC)",id:"ordinateur-nuc-1",level:3},{value:"Navigateur",id:"navigateur-1",level:3},{value:"Pilote d&#39;affichage",id:"pilote-daffichage-1",level:3},{value:"Plateforme JavaScript",id:"plateforme-javascript-1",level:3}],m={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"branchements--mat\xe9riels-test\xe9s"},"Branchements & mat\xe9riels test\xe9s"),(0,r.kt)("h1",{id:"branchement"},"Branchement"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(9654).Z,width:"1251",height:"563"})),(0,r.kt)("h1",{id:"materiel-test\xe9"},"Materiel Test\xe9"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"syst\xe8me-dexploitation"},"Syst\xe8me d'exploitation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ubuntu 22.04"))),(0,r.kt)("h3",{id:"ecran-principale"},"Ecran Principale"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ecran (1920x1080)"))),(0,r.kt)("h3",{id:"ecran-touch"},"Ecran touch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("a",{parentName:"li",href:"https://www.poly.com/fr/fr/products/video-conferencing/accessories/tc8"},(0,r.kt)("inlineCode",{parentName:"a"},"Polycom TC8 (1280x800)")))),(0,r.kt)("h3",{id:"cameramicrophone"},"Camera/Microphone"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("a",{parentName:"li",href:"https://www.poly.com/fr/fr/products/video-conferencing/studio/studio"},(0,r.kt)("inlineCode",{parentName:"a"},"Polycom Studio")))),(0,r.kt)("h3",{id:"ordinateur-nuc"},"Ordinateur (NUC)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 CPU - ",(0,r.kt)("inlineCode",{parentName:"li"},"Xeon E3-1200 v6 (7eme generation)")),(0,r.kt)("li",{parentName:"ul"},"\u2705 GPU - ",(0,r.kt)("inlineCode",{parentName:"li"},"Iris Plus Graphics 640")),(0,r.kt)("li",{parentName:"ul"},"\u2705 RAM - ",(0,r.kt)("inlineCode",{parentName:"li"},"8 GB"))),(0,r.kt)("h4",{id:"performances"},"Performances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Consommation en veille:\n    - CPU: 16%\n    - RAM: 19%\n\n- Consommation pendant un appel (6 participants):\n    - CPU: 55%\n    - RAM: 21%\n")),(0,r.kt)("h3",{id:"navigateur"},"Navigateur"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft Edge 105.0.1343.27")),(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Chrome 105.0.5195.125")),(0,r.kt)("li",{parentName:"ul"},"\u274c ",(0,r.kt)("inlineCode",{parentName:"li"},"Chromium 105.0.5195.102"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Probleme de recuparation des peripheriques audio/video")))),(0,r.kt)("h3",{id:"pilote-daffichage"},"Pilote d'affichage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Display Link Driver 5.6.1-59.184"))),(0,r.kt)("h3",{id:"plateforme-javascript"},"Plateforme JavaScript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"NodeJS 18.8.0")))),(0,r.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"syst\xe8me-dexploitation-1"},"Syst\xe8me d'exploitation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Windows 10"))),(0,r.kt)("h3",{id:"ecran-principale-1"},"Ecran Principale"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ecran (1920x1080)"))),(0,r.kt)("h3",{id:"ecran-touch-1"},"Ecran touch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("a",{parentName:"li",href:"https://www.poly.com/fr/fr/products/video-conferencing/accessories/tc8"},(0,r.kt)("inlineCode",{parentName:"a"},"Polycom TC8 (1280x800)")))),(0,r.kt)("h3",{id:"cameramicrophone-1"},"Camera/Microphone"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("a",{parentName:"li",href:"https://www.poly.com/fr/fr/products/video-conferencing/studio/studio"},(0,r.kt)("inlineCode",{parentName:"a"},"Polycom Studio")))),(0,r.kt)("h3",{id:"ordinateur-nuc-1"},"Ordinateur (NUC)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 CPU - ",(0,r.kt)("inlineCode",{parentName:"li"},"Xeon E3-1200 v6 (7eme generation)")),(0,r.kt)("li",{parentName:"ul"},"\u2705 GPU - ",(0,r.kt)("inlineCode",{parentName:"li"},"Iris Plus Graphics 640")),(0,r.kt)("li",{parentName:"ul"},"\u2705 RAM - ",(0,r.kt)("inlineCode",{parentName:"li"},"8 GB"))),(0,r.kt)("h3",{id:"navigateur-1"},"Navigateur"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft Edge 105.0.1343.27")),(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Chrome 105.0.5195.125")),(0,r.kt)("li",{parentName:"ul"},"\u274c ",(0,r.kt)("inlineCode",{parentName:"li"},"Chromium 105.0.5195.102"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Probleme de recuparation des peripheriques audio/video")))),(0,r.kt)("h3",{id:"pilote-daffichage-1"},"Pilote d'affichage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"Display Link Driver 5.6.1-59.184"))),(0,r.kt)("h3",{id:"plateforme-javascript-1"},"Plateforme JavaScript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"NodeJS 18.8.0"))))))}d.isMDXComponent=!0},9654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jitsi-detailed-bb6fe04365c3d0f0cb6670b2d9de55c2.png"}}]);