"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Installation d\xe9taill\xe9e",l={unversionedId:"installation/linux/linux",id:"installation/linux/linux",title:"Installation d\xe9taill\xe9e",description:"Ubuntu 22.04",source:"@site/docs/installation/linux/linux.md",sourceDirName:"installation/linux",slug:"/installation/linux/",permalink:"/jitsibox-pro/en/docs/installation/linux/",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/tree/wiki/i18n/en/docusaurus-plugin-content-docs/current/installation/linux/linux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Branchement du materiel",permalink:"/jitsibox-pro/en/docs/installation/branchement/"},next:{title:"Installation d\xe9taill\xe9e",permalink:"/jitsibox-pro/en/docs/installation/windows/"}},s={},p=[{value:"Etape 1: Mise a jour &amp; telechargement des packages",id:"etape-1-mise-a-jour--telechargement-des-packages",level:3},{value:"Etape 2: Creation des dossiers",id:"etape-2-creation-des-dossiers",level:3},{value:"Etape 3: Installation Edge",id:"etape-3-installation-edge",level:3},{value:"Etape 4: Display Link Driver",id:"etape-4-display-link-driver",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-d\xe9taill\xe9e"},"Installation d\xe9taill\xe9e"),(0,i.kt)("p",null,"Ubuntu 22.04"),(0,i.kt)("h3",{id:"etape-1-mise-a-jour--telechargement-des-packages"},"Etape 1: Mise a jour & telechargement des packages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install dkms libc6-dev git npm wget unzip xinit unclutter xorg openbox pulseaudio apt-transport-https plymouth-themes plymouth-label \n")),(0,i.kt)("h3",{id:"etape-2-creation-des-dossiers"},"Etape 2: Creation des dossiers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root-directory\n\u251c\u2500\u2500 opt\n\u2502   \u2514\u2500\u2500 jitsi (dossier globale du projet)\n\u2502       \u251c\u2500\u2500 display-link-driver (installation driver de l\\'ecran touch)\n\u2502       \u251c\u2500\u2500 nodejs (installation NodeJS)\n\u2502       \u251c\u2500\u2500 monitor1 (configuration de l\\'ecran TV)\n\u2502       \u251c\u2500\u2500 monitor2 (configuration de l\\'ecran touch)\n\u2502       \u2514\u2500\u2500 jitsi-box-pro (projet git)\n\u2514\u2500\u2500 usr\n\u2502   \u2514\u2500\u2500 share\n\u2502       \u2514\u2500\u2500 plymouth\n\u2502           \u2514\u2500\u2500 themes\n\u2502               \u2514\u2500\u2500 jitsi-box-pro (pour afficher les logos au boot)\n\u2514\u2500\u2500 home\n\u2502   \u2514\u2500\u2500 jitsi-box-pro\n\u2502       \u2514\u2500\u2500 .config\n\u2502           \u2514\u2500\u2500 openbox (scripts de demarrage)\n\u2514\u2500\u2500 etc\n    \u2514\u2500\u2500 systemd\n        \u2514\u2500\u2500 system\n            \u2514\u2500\u2500 x11-autologin.service (service de autologin)\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo install -d -m 0755 -o jitsi-box-pro -g jitsi-box-pro /opt/jitsi/display-link-driver /opt/jitsi/nodejs /opt/jitsi/kiosk /opt/jitsi/monitor1 /opt/jitsi/monitor2 /usr/share/plymouth/themes/jitsi-box-pro /home/jitsi-box-pro/.config/openbox\n")),(0,i.kt)("h3",{id:"etape-3-installation-edge"},"Etape 3: Installation Edge"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -\nsudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main"\nsudo apt update && sudo apt install microsoft-edge-stable -y\n')),(0,i.kt)("h3",{id:"etape-4-display-link-driver"},"Etape 4: Display Link Driver"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo curl https://www.synaptics.com/sites/default/files/exe_files/2022-08/DisplayLink%20USB%20Graphics%20Software%20for%20Ubuntu5.6.1-EXE.zip --output /opt/jitsi/display-link-driver/driver.zip\n")))}u.isMDXComponent=!0}}]);