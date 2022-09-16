"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Get Countries",l={unversionedId:"terra/get-countries",id:"terra/get-countries",title:"Get Countries",description:"The /api/countries/ routes return countries in the world.",source:"@site/docs/terra/get-countries.md",sourceDirName:"terra",slug:"/terra/get-countries",permalink:"/docs/terra/get-countries",draft:!1,editUrl:"https://github.com/revoltgames/docs/tree/main/docs/terra/get-countries.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Error Responses",permalink:"/docs/terra/errors-responses"},next:{title:"Get Cities",permalink:"/docs/terra/get-cities"}},p={},c=[{value:"Get all countries",id:"get-all-countries",level:2},{value:"Get countries by ids",id:"get-countries-by-ids",level:2},{value:"Find a country covering a specific location",id:"find-a-country-covering-a-specific-location",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-countries"},"Get Countries"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/countries/")," routes return countries in the world. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"All ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/countries/")," routes accept an optionnal ",(0,o.kt)("inlineCode",{parentName:"p"},"lang")," parameter, which defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"en"),". This parameter changes the language of the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field for every returned countries. See ",(0,o.kt)("a",{parentName:"p",href:"./langcodes"},"Langcodes")," for availables ",(0,o.kt)("inlineCode",{parentName:"p"},"langcodes"))),(0,o.kt)("h2",{id:"get-all-countries"},"Get all countries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET https://terra.neopolis.app/api/countries/findAll?limit=100&offset=0\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example Response"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "ok"\n    "data": [\n        {\n            "continent": "North America",\n            "id": "ABW",\n            "name": "Aruba",\n            "population": 107000\n        },\n        (...)\n    ]\n}\n')))),(0,o.kt)("h2",{id:"get-countries-by-ids"},"Get countries by ids"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET https://terra.neopolis.app/api/countries/findByIds?country_ids=ABW,ESP&lang=fr\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example Response"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "ok"\n    "data": [\n        {\n            "continent": "North America",\n            "id": "ABW",\n            "name": "Aruba",\n            "population": 107000\n        },\n        (...)\n    ]\n}\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All ",(0,o.kt)("inlineCode",{parentName:"p"},"country_ids")," is a list of comma separate country_ids (3 letter ISO code, all uppercase). It is possible to have only 1 country in the list to get a specific country.")),(0,o.kt)("h2",{id:"find-a-country-covering-a-specific-location"},"Find a country covering a specific location"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET https://terra.neopolis.app/api/countries/findByLocation?land_id=8818699b1bfffff&lang=fr\n")),(0,o.kt)("p",null,"OR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET https://terra.neopolis.app/api/countries/findByLocation?lat=45.9&lng=1.5&lang=fr\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example Response"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "ok"\n    "data":\n        {\n            "continent": "North America",\n            "id": "ABW",\n            "name": "Aruba",\n            "population": 107000\n        },\n}\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If no country covers the given location, a country with id ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_COUNTRY")," and name ",(0,o.kt)("inlineCode",{parentName:"p"},"International Waters")," is returned.")))}u.isMDXComponent=!0}}]);