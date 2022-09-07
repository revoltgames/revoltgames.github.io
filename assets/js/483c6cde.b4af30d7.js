"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:10},l="References",i={unversionedId:"terra/references",id:"terra/references",title:"References",description:"Terra data sources",source:"@site/docs/terra/references.md",sourceDirName:"terra",slug:"/terra/references",permalink:"/docs/terra/references",draft:!1,editUrl:"https://github.com/revoltgames/docs/tree/main/docs/terra/references.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Langcodes",permalink:"/docs/terra/langcodes"},next:{title:"Stats by country",permalink:"/docs/terra/stats_by_country"}},s={},u=[{value:"Terra data sources",id:"terra-data-sources",level:2},{value:"Interesting unused sata sources",id:"interesting-unused-sata-sources",level:2},{value:"Other useful links",id:"other-useful-links",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"references"},"References"),(0,n.kt)("h2",{id:"terra-data-sources"},"Terra data sources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.naturalearthdata.com/"},"Natural Earth")," for countries, cities & disputed areas"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://glad.earthengine.app/view/global-land-cover-land-use-v1#lon=2.0060298696900736;lat=45.990660878201936;zoom=7;"},"Global Land cover and land use")," for biomes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.foursquare.com/docs/places-database"},"Foursquare Flat Files")," for places"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.foursquare.com/docs/places-api-overview"},"Foursquare Places API v3")," for places"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stefangabos.github.io/world_countries/"},"Country names"))),(0,n.kt)("h2",{id:"interesting-unused-sata-sources"},"Interesting unused sata sources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/earth-engine/datasets/catalog"},"Google Earth Data Catalog")," (natural)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.openstreetmap.org/#map=6/46.449/2.210"},"Open Street Map")," (cultural, natural, POIs, roads, parcs)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ghsl.jrc.ec.europa.eu/degurbaDefinitions.php"},"Global Human Settlement Layer")," (Urban landuse)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gadm.org/data.html"},"GADM")," (administrative)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://osmlanduse.org/#12/8.7/49.4/0/"},"OSM Landuse")," (natural)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://geoservices.ign.fr/catalogue"},"IGN")," (Natural, Cultural, Roads, Parcs, Elevation)")),(0,n.kt)("h2",{id:"other-useful-links"},"Other useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://h3geo.org/"},"H3Geo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/maps/documentation/gaming/playable-transition"},"Playable Locations API Design Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/maps/documentation/gaming/semantic-tile-transition"},"Semantic Tile Proto and Example Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://qgis.org/"},"QGIS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Shapefile"},"Shapefile format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://geoserver.org/"},"GeoServer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-index-bit-layout?collection=@nrabinowitz/h3"},"H3 index bit layout"))))}c.isMDXComponent=!0}}]);