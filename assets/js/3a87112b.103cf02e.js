"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Introduction",l={unversionedId:"terra/intro",id:"terra/intro",title:"Introduction",description:"This documentation is still WIP. If you notice any typo, broken link or other issue for the API or documentation, make sure to file a Github Issue by clicking on the Report an issue button at the top right corner.",source:"@site/docs/terra/intro.md",sourceDirName:"terra",slug:"/terra/intro",permalink:"/docs/terra/intro",draft:!1,editUrl:"https://github.com/revoltgames/docs/tree/main/docs/terra/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Terra API",permalink:"/docs/category/terra-api"},next:{title:"Getting Started",permalink:"/docs/terra/getting-started"}},s={},d=[{value:"Terra entities",id:"terra-entities",level:2},{value:"Lands and h3Geo",id:"lands-and-h3geo",level:2},{value:"Lands and biomes",id:"lands-and-biomes",level:2},{value:"Country translations",id:"country-translations",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This documentation is still WIP. If you notice any typo, broken link or other issue for the API or documentation, make sure to file a Github Issue by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Report an issue")," button at the top right corner.")),(0,r.kt)("p",null,"Terra is a database of real-world data indexed on h3. This data is served via an API for geolocalised games like Neopolis and Neoland."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cultural data (country, closest city)"),(0,r.kt)("li",{parentName:"ul"},"Natural data (biomes: urban, forst, desert, etc)"),(0,r.kt)("li",{parentName:"ul"},"Curated Places (real world buildings)")),(0,r.kt)("admonition",{title:"Disclaimer",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"At the time of writing (18/08/2022), the API is available for testing only. It is NOT fully compatible with either Neopolis or Neoland."),(0,r.kt)("p",{parentName:"admonition"},"The list of differences includes :"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Countries & cities are not the same as in Neoland or Neopolis. The ids are also different"),(0,r.kt)("li",{parentName:"ul"},"The land informations (ex: closest city or even associated country) may be different"),(0,r.kt)("li",{parentName:"ul"},"The places are currently only in v2 (incompatible with Neoland) and are NOT kept up-to-date")),(0,r.kt)("p",{parentName:"admonition"},"The Terra Database will be updated regularly for solving these incompatibility issues & other bugs that may arrise.")),(0,r.kt)("h2",{id:"terra-entities"},"Terra entities"),(0,r.kt)("p",null,"Terra has 4 main entities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countries"),", all soverain states in the world (used to categorize lands)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cities")," a curated list of all cities in the world (used for closest city in lands)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lands")," are the building blocks of Terra and are associated to a ",(0,r.kt)("inlineCode",{parentName:"li"},"closest city")," and to ",(0,r.kt)("inlineCode",{parentName:"li"},"biomes"),". Their ids are h3 indexes of resolution 8."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"places")," defines a real-world point of interest (building, station, shop, office, etc...)")),(0,r.kt)("h2",{id:"lands-and-h3geo"},"Lands and h3Geo"),(0,r.kt)("p",null,"Each land is identified by a unique h3 index of resolution 8, representing a geospatial hexagon with en edge length of ~460m. For more info on h3, see ",(0,r.kt)("a",{parentName:"p",href:"https://h3geo.org/"},"the official documentation"),"."),(0,r.kt)("h2",{id:"lands-and-biomes"},"Lands and biomes"),(0,r.kt)("p",null,"All lands have a ",(0,r.kt)("inlineCode",{parentName:"p"},"main_biome")," , which is the most dominant biome in the given land. It il also possible to get the biome details, in percentage for all biomes in the land."),(0,r.kt)("p",null,"For a complete list of available biomes, see ",(0,r.kt)("a",{parentName:"p",href:"./biomes"},"Biomes")),(0,r.kt)("h2",{id:"country-translations"},"Country translations"),(0,r.kt)("p",null,"Country names can be translated in a various langages using the ",(0,r.kt)("inlineCode",{parentName:"p"},"lang")," parameter. To see all available langcodes, see ",(0,r.kt)("a",{parentName:"p",href:"./langcodes"},"Langcodes")))}u.isMDXComponent=!0}}]);