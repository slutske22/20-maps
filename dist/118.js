(function(){var e={},t=this||window,n=t.webpackJsonp=t.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{181:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n.n(a)()(!0);o.push([e.i,".esri-scroll-zoom-toggle{padding:0.7em 1.5em}.esri-scroll-zoom-toggle--inner-wrapper{display:flex;flex-direction:row;align-items:center;cursor:pointer}.esri-scroll-zoom-toggle--input-checkbox{margin-left:1em;margin-bottom:6px;cursor:pointer}\n","",{version:3,sources:["webpack://src/components/mapcomponents/ScrollZoom.scss"],names:[],mappings:"AAAA,yBACC,mBAAoB,CACpB,wCAGA,YAAa,CACb,kBAAmB,CACnB,kBAAmB,CACnB,cAAe,CACf,yCAGA,eAAgB,CAChB,iBAAkB,CAClB,cAAe",sourcesContent:[".esri-scroll-zoom-toggle {\n\tpadding: 0.7em 1.5em;\n}\n\n.esri-scroll-zoom-toggle--inner-wrapper {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tcursor: pointer;\n}\n\n.esri-scroll-zoom-toggle--input-checkbox {\n\tmargin-left: 1em;\n\tmargin-bottom: 6px;\n\tcursor: pointer;\n}\n"],sourceRoot:""}]),t.default=o},212:function(e,t,n){var a=n(99),o=n(181);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},i=a(o,r);if(!o.locals||e.hot.invalidate){var s=o.locals;e.hot.accept(181,(function(){"string"==typeof(o=(o=n(181)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!n||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(n&&"default"===a||e[a]))return!1;return!0}(s,o.locals)?(s=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},213:function(e,t,n){"use strict";var a=n(2),o=n.n(a),r=n(3),i=n(108),s=n.n(i),l=n(6),c=n(5),p=n(284),u=n.n(p),m=n(275),f=n.n(m),d=n(266),g=n.n(d),h=n(287),b=n.n(h),v=n(278),w=n.n(v),y=n(157),x=n(188),A=n.n(x),E=n(151),O=n(183);n(212);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var M,C,j,k=(M=function(e,t){return(M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}M(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===("undefined"==typeof Reflect?"undefined":S(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},T="esri-widget esri-scroll-zoom-toggle",P="esri-scroll-zoom-toggle--inner-wrapper",W="esri-scroll-zoom-toggle--input-checkbox",B=function(e){function t(t){var n=e.call(this,t)||this;return n.enabled=!1,n._toggleZoomOnScroll=function(){n.enabled=!n.enabled,n.enabled?(n.view.navigation.mouseWheelZoomEnabled=!0,n.view.navigation.browserTouchPanEnabled=!0):(n.view.navigation.mouseWheelZoomEnabled=!1,n.view.navigation.browserTouchPanEnabled=!1)},n}return k(t,e),t.prototype.render=function(){return Object(O.tsx)("div",{class:T},Object(O.tsx)("div",{class:P,onclick:this._toggleZoomOnScroll},Object(O.tsx)("div",null,"Enable Scroll Zoom"),Object(O.tsx)("input",{type:"checkbox",class:W,checked:this.enabled})))},_([Object(E.property)(),Object(O.renderable)()],t.prototype,"enabled",void 0),t=_([Object(E.subclass)("esri.widgets.ScrollZoom")],t)}(A.a),z=function(){return(z=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},F=function(e){var t=e.metadata,n=e.sources,r=e.customFeatures,i=e.customFeaturesPerPage,s=e.customMapDOM,l=e.pageRefs,p=e.currentPage,m=e.mapState,d=m.basemap,h=m.layers,v=m.position,x=m.customBehavior,A=Object(a.useRef)(null),E=Object(a.useState)(null),O=E[0],S=E[1],M=Object(a.useState)(!0),C=M[0],j=M[1],k=Object(a.useState)(null),_=k[0],T=k[1];return Object(a.useEffect)((function(){var e=new f.a({basemap:d||null,layers:h}),a=z(z({container:A.current,map:e},v),{navigation:{mouseWheelZoomEnabled:!1,browserTouchPanEnabled:!1}}),i=t.sceneview?new b.a(a):new g.a(a);(S({map:e,view:i}),t.fullWidthMap&&!t.sceneview)&&(document.querySelector("#"+t.name+" .esri-ui-top-left").style.left="calc(30% - 10px)");if(t.fullWidthMap&&t.sceneview){var s=document.querySelector("#"+t.name+' div[class^="SideCar"]');s.style.left="40px",s.style.width="500px",s.style.transition="all 0.5s";var l=new w.a({view:i,expandIconClass:"esri-icon-question",expandTooltip:"Information",expanded:!0});i.ui.add([{component:l,position:"top-left",index:0}]),l.container.addEventListener("click",(function(){l.expanded?(s.style.left="40px",s.style.opacity="1",s.style.pointerEvents="auto",s.style.transition="all 0.5s"):(s.style.left="35px",s.style.opacity="0",s.style.pointerEvents="none",s.style.transition="none")}));var p=new B({view:i});i.ui.add(p,"top-right")}document.createElement("div").innerHTML="Data sources here";var m=new w.a({view:i,expandIconClass:"clipboard-icon",expandTooltip:"Data Sources",collapseTooltip:"Close",content:u.a.renderToStaticMarkup(o.a.createElement(c.a,{sources:n,theme:t.theme}))});i.ui.add(m,"bottom-right"),t.disableSpinnerAfterInitialLoad?y.whenTrueOnce(i,"updating",(function(){j(!0)})):y.whenTrue(i,"updating",(function(){j(!0)})),y.whenFalse(i,"updating",(function(){j(!1)})),r&&r({map:e,view:i,layers:h})}),[]),Object(a.useEffect)((function(){O&&(O.map.layers=h)}),[h]),Object(a.useEffect)((function(){O&&(O.map.basemap=d)}),[d,O]),Object(a.useEffect)((function(){O&&v&&O.view.goTo({target:v.center,zoom:v.zoom},{duration:1e3})}),[v]),Object(a.useEffect)((function(){if(O)if(x){var e=O.map,t=O.view;_&&_();var n=x({map:e,view:t});T((function(){return n}))}else _&&_()}),[x,O]),Object(a.useEffect)((function(){if(O&&i){var e=O.view,t=O.map,n=i({map:t,view:e,layers:h,pageRefs:l,currentPage:p});if(n)return n}}),[O,p,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"arcgis-map "+t.name,ref:A}),s&&O&&s(O),C&&o.a.createElement(c.c,null))},R=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},G=r.b.section.withConfig({displayName:"ChapterTemplate__Wrapper",componentId:"sc-1cxnsi8-0"})(C||(C=R(["\n\twidth: 100%;\n\theight: ",";\n\tmin-height: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: ",";\n\t/* scroll-snap-stop: always;\n\tscroll-snap-align: start; */\n"],["\n\twidth: 100%;\n\theight: ",";\n\tmin-height: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: ",";\n\t/* scroll-snap-stop: always;\n\tscroll-snap-align: start; */\n"])),(function(e){return e.height||100*e.screensTall+"vh"||"auto"}),(function(e){return"light"===e.maptheme?"":"#242424"})),D=r.b.div.withConfig({displayName:"ChapterTemplate__Trigger",componentId:"sc-1cxnsi8-1"})(j||(j=R(["\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 3px;\n\twidth: 3px;\n\tpointer-events: none;\n"],["\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 3px;\n\twidth: 3px;\n\tpointer-events: none;\n"])));t.a=function(e){e.customMap;var t=e.data,n=t.metadata,r=t.sources,i=t.customFeatures,p=t.customFeaturesPerPage,u=t.customMapDOM,m=t.customChapterDOM,f=t.pages,d=Object(a.useState)(0),g=d[0],h=d[1],b=Object(a.useContext)(l.a).dispatch,v={};return Object(a.useMemo)((function(){return o.a.createElement(G,{maptheme:n.theme,id:n.name,screensTall:f.length>1?f.length:1},o.a.createElement(c.i,{floating:n.fullWidthMap},f.map((function(e,t){return o.a.createElement(c.d,{floating:n.fullWidthMap,ref:function(e){return v[t]=e},key:n.name+"-page-"+t},o.a.createElement(c.e,{theme:n.theme,floating:n.fullWidthMap},o.a.createElement(c.g,null,e.title),o.a.createElement(c.f,{floating:n.fullWidthMap},e.content)),o.a.createElement(s.a,{onChange:function(e){e&&(b({type:"SET_NAV",payload:n.name}),h(t))}},(function(e){e.isVisible;return o.a.createElement(D,null)})))}))),o.a.createElement(s.a,{partialVisibility:!0},(function(e){var t=e.isVisible;return o.a.createElement(c.b,{fullWidth:n.fullWidthMap,className:"arcgis-map-"+n.theme},t&&o.a.createElement(F,{mapState:f[g].mapState,customFeatures:i,customFeaturesPerPage:p,customMapDOM:u,metadata:n,sources:r,pageRefs:v,currentPage:g}))})),m&&m)}),[g])}},2303:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(455),i=n.n(r),s=n(325),l=n.n(s),c=n(452),p=n.n(c),u=new l.a({url:"https://tiles.arcgis.com/tiles/WQ9KVmV6xGGMnCiQ/arcgis/rest/services/Moon_Basemap_Tile0to9/MapServer",maxScale:0,listMode:"hide"}),m=new l.a({url:"https://tiles.arcgis.com/tiles/FF3qnCUixr5w9JQi/arcgis/rest/services/Moon_Geology/MapServer",maxScale:0}),f=new p.a({url:"https://tiles.arcgis.com/tiles/WQ9KVmV6xGGMnCiQ/arcgis/rest/services/Moon_Elevation_Surface/ImageServer"}),d=n(5),g={metadata:{name:"moon",theme:"light",fullWidthMap:!0,sceneview:!0,disableSpinnerAfterInitialLoad:!0},sources:[{name:"Lunar Basemap",url:"https://www.arcgis.com/home/item.html?id=d18cc887533a49e68083cfbcce4c9ae0"},{name:"Lunar Elevation",url:"https://www.arcgis.com/home/item.html?id=5a59a9343a3a49b983f80afc392985e5"},{name:"Lunar Geology 2020",url:"https://www.arcgis.com/home/item.html?id=2397d35e4aa54f9dba9e31a2e5282429"}],pages:[{title:"Lunar Geology",content:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"2020 probably has you ready to abandon Earth altogether for more pristine pastures. With plans to"," ",o.a.createElement(d.h,{theme:"light",link:"https://www.nasa.gov/specials/artemis/",linkTitle:'"Artemis: Humanity\'s Return to the Moon", NASA.gov, Retrieved Dec 17, 2020'},"return to the moon")," ","in 2024, scientific knowledge about our oldest satellite is at an all time high in 2020. This year, NASA and the"," ",o.a.createElement(d.h,{theme:"light",link:"https://www.usgs.gov/news/usgs-releases-first-ever-comprehensive-geologic-map-moon",linkTitle:'"USGS Releases First-Ever Comprehensive Geologic Map of the Moon", usgs.gov, Apr 20, 2020, Retrieved Dec 17, 2020'},"USGS released the most detailed geological maps of the moon ever created"),". What looks like a child's finger painting is the culmination of decades of research in geophysics and astronomy."),o.a.createElement("p",null,"Explore the moon's geography and topography using the map controls on the left, or by panning and zooming with your mouse. Toggle the geography layer on and off in the upper right corner.")),mapState:{position:{camera:{position:{x:7,y:0,z:61e5},tilt:0,heading:0}},layers:[u,m]}}],customFeatures:function(e){var t=e.map,n=e.view;t.ground.layers.add(f);var a=new i.a({view:n});n.ui.add(a,"top-right")}},h=n(213);t.default=function(){return o.a.createElement(h.a,{data:g})}}}]);
//# sourceMappingURL=118.js.map