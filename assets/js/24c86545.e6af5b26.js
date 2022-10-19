"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[5187],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),i=a(7294),l=a(6010),r=a(2389),s=a(7392),o=a(7094),c=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a;const{lazy:r,block:m,defaultValue:u,values:k,groupId:h,className:A}=e,N=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===u?u:null!=(t=null!=u?u:null==(a=N.find((e=>e.props.default)))?void 0:a.props.value)?t:N[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:x}=(0,o.U)(),[I,v]=(0,i.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:R}=(0,c.o5)();if(null!=h){const e=g[h];null!=e&&e!==I&&y.some((t=>t.value===e))&&v(e)}const G=e=>{const t=e.currentTarget,a=E.indexOf(t),n=y[a].value;n!==I&&(R(t),v(n),null!=h&&x(h,String(n)))},B=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var i;const t=E.indexOf(e.currentTarget)-1;a=null!=(i=E[t])?i:E[E.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},A)},y.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>E.push(e),onKeyDown:B,onFocus:G,onClick:G},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),r?(0,i.cloneElement)(N.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function u(e){const t=(0,r.Z)();return i.createElement(m,(0,n.Z)({key:String(t)},e))}},3358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),l=a(5488),r=a(5162);const s={},o="Roadmap",c={unversionedId:"Roadmap/roadmap",id:"Roadmap/roadmap",title:"Roadmap",description:"",source:"@site/docs/Roadmap/roadmap.md",sourceDirName:"Roadmap",slug:"/Roadmap/",permalink:"/jitsibox-pro/docs/Roadmap/",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/Roadmap/roadmap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fonctionnement de l'application",permalink:"/jitsibox-pro/docs/structure/fonctionnement/"},next:{title:"Menu d'administration",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/menu-admin/"}},p={},d=[],m={toc:d};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"roadmap"},"Roadmap"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(7859).Z,title:"Roadmap",width:"272",height:"275"})),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"fonctionnel",label:"Ajout fonctionnel",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Menu d'administration"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/menu-admin/redemarrage"},"Red\xe9marrage")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/menu-admin/language"},"Choix de la langue (EN/FR)")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/menu-admin/reseaux"},"Param\xe8tres r\xe9seaux")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/menu-admin/administration-distance"},"Administration \xe0 distance")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/menu-admin/rename"},"Changer le nom de la box")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/menu-admin/affichage-fonctionnalites"},"Afficher / Masquer les boutons")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/menu-admin/test-compatabilite"},"Test compatibilit\xe9")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hors Appel"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/hors-appel/assistance"},"Lancement d'un appel (v1.0)")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/hors-appel/assistance"},"Assistance")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/hors-appel/planification"},"Planification: One Click")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/hors-appel/call-via-conf-number"},"Code de conf\xe9rence"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Entrer dans une conf\xe9rence via son code plut\xf4t que via son nom"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En cours de conf\xe9rence"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/diffusion-contenu"},"Diffusion de contenu")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/afficher-tchat"},"Afficher Tchat")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/afficher-participants"},"Afficher la liste des participants")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/mode-affichage"},"Changer le mode d'affichage")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/duree-appel"},"Dur\xe9e d'appel")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/gestion-volume"},"Gestion du volume")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/gestion-camera"},"Gestion du camera")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/qualite-appel"},"Modification de la qualit\xe9 de l'appel")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/fonctionnel/pendant-appel/parametres-avances"},"Param\xe8tres avanc\xe9s (Lobby, Pin de conf\xe9rence)")))))),(0,i.kt)(r.Z,{value:"optimisationindows",label:"Optimisation",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/optimisation/formatage"}," Formatage et analyse du code ")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/optimisation/logger-actions"},"Logger les actions")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Plan de Test",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/optimisation/plan-test/test-unitaires"},"Unitaires")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/optimisation/plan-test/test-intergration"},"Int\xe9gration")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/optimisation/plan-test/test-end-to-end"},"End-to-end")))))),(0,i.kt)(r.Z,{value:"securisation",label:"Securisation",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/securisation/audit-conf"},"Audit de configuration")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/securisation/audit-code"},"Audit de code")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/securisation/durcissement"},"Durcissement")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Roadmap/securisation/optimisation-ssi"},"Optimisation SSI"))))))}u.isMDXComponent=!0},7859:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);