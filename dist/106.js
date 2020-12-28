(function(){var e={"esri/tasks/support/FeatureSet":187},t=this||window,n=t.webpackJsonp=t.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[106,32,188],{181:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r)()(!0);o.push([e.i,".esri-scroll-zoom-toggle{padding:0.7em 1.5em}.esri-scroll-zoom-toggle--inner-wrapper{display:flex;flex-direction:row;align-items:center;cursor:pointer}.esri-scroll-zoom-toggle--input-checkbox{margin-left:1em;margin-bottom:6px;cursor:pointer}\n","",{version:3,sources:["webpack://src/components/mapcomponents/ScrollZoom.scss"],names:[],mappings:"AAAA,yBACC,mBAAoB,CACpB,wCAGA,YAAa,CACb,kBAAmB,CACnB,kBAAmB,CACnB,cAAe,CACf,yCAGA,eAAgB,CAChB,iBAAkB,CAClB,cAAe",sourcesContent:[".esri-scroll-zoom-toggle {\n\tpadding: 0.7em 1.5em;\n}\n\n.esri-scroll-zoom-toggle--inner-wrapper {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tcursor: pointer;\n}\n\n.esri-scroll-zoom-toggle--input-checkbox {\n\tmargin-left: 1em;\n\tmargin-bottom: 6px;\n\tcursor: pointer;\n}\n"],sourceRoot:""}]),t.default=o},187:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n(117),n(159),n(174),n(166),n(155),n(152),n(151),n(170),n(163),n(194)],void 0===(o=function(e,t,n,r,o,a,i,s,l,c,p,u){var m=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),d=function(e){function t(t){var n=e.call(this,t)||this;return n.displayFieldName=null,n.exceededTransferLimit=!1,n.features=[],n.fields=null,n.geometryType=null,n.hasM=!1,n.hasZ=!1,n.queryGeometry=null,n.spatialReference=null,n}return n.__extends(t,e),t.prototype.readFeatures=function(e,t){for(var n=c.fromJSON(t.spatialReference),r=[],a=0;a<e.length;a++){var i=e[a],l=o.fromJSON(i),p=i.geometry&&i.geometry.spatialReference;s.isSome(l.geometry)&&!p&&(l.geometry.spatialReference=n),r.push(l)}return r},t.prototype.writeGeometryType=function(e,t,n,r){if(e)m.write(e,t,n,r);else{var o=this.features;if(o)for(var a=0,i=o;a<i.length;a++){var l=i[a];if(l&&s.isSome(l.geometry))return void m.write(l.geometry.type,t,n,r)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var n=this.features;if(n)for(var r=0,o=n;r<o.length;r++){var a=o[r];a&&s.isSome(a.geometry)&&a.geometry.spatialReference&&(t.spatialReference=a.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var n=0;n<t.features.length;n++){var r=t.features[n];if(r.geometry){var o=e&&e[n];r.geometry=o&&o.toJSON()||r.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,n=t[0],r=t[1],o=e.translate,a=o[0],i=o[1],l=this.features,c=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-a)/n)}),(function(e){return Math.round((i-e)/r)})),p=0,u=l.length;p<u;p++)c(s.unwrap(l[p].geometry))||(l.splice(p,1),p--,u--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this.geometryType,t=this.features,n=this.transform;if(!n)return this;for(var r=n.translate,o=r[0],a=r[1],i=n.scale,l=i[0],c=i[1],p=this._getHydrationFunction(e,(function(e){return e*l+o}),(function(e){return a-e*c})),u=0,m=t;u<m.length;u++){var d=m[u].geometry;s.isSome(d)&&p(d)}return this},t.prototype._quantizePoints=function(e,t,n){for(var r,o,a=[],i=0,s=e.length;i<s;i++){var l=e[i];if(i>0){var c=t(l[0]),p=n(l[1]);c===r&&p===o||(a.push([c-r,p-o]),r=c,o=p)}else r=t(l[0]),o=n(l[1]),a.push([r,o])}return a.length>0?a:null},t.prototype._getQuantizationFunction=function(e,t,n){var r=this;return"point"===e?function(e){return e.x=t(e.x),e.y=n(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var o=p.isPolygon(e)?e.rings:e.paths,a=[],i=0,s=o.length;i<s;i++){var l=o[i],c=r._quantizePoints(l,t,n);c&&a.push(c)}return a.length>0?(p.isPolygon(e)?e.rings=a:e.paths=a,e):null}:"multipoint"===e?function(e){var o;return(o=r._quantizePoints(e.points,t,n)).length>0?(e.points=o,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,n){return"point"===e?function(e){e.x=t(e.x),e.y=n(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var r,o,a=p.isPolygon(e)?e.rings:e.paths,i=0,s=a.length;i<s;i++)for(var l=a[i],c=0,u=l.length;c<u;c++){var m=l[c];c>0?(r+=m[0],o+=m[1]):(r=m[0],o=m[1]),m[0]=t(r),m[1]=n(o)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax)}:"multipoint"===e?function(e){for(var r,o,a=e.points,i=0,s=a.length;i<s;i++){var l=a[i];i>0?(r+=l[0],o+=l[1]):(r=l[0],o=l[1]),l[0]=t(r),l[1]=n(o)}}:void 0},n.__decorate([l.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),n.__decorate([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),n.__decorate([l.property({type:[o],json:{write:!0}})],t.prototype,"features",void 0),n.__decorate([l.reader("features")],t.prototype,"readFeatures",null),n.__decorate([l.property({type:[u],json:{write:!0}})],t.prototype,"fields",void 0),n.__decorate([l.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:m.read}}})],t.prototype,"geometryType",void 0),n.__decorate([l.writer("geometryType")],t.prototype,"writeGeometryType",null),n.__decorate([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),n.__decorate([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),n.__decorate([l.property({types:r.geometryTypes,json:{read:p.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),n.__decorate([l.property({type:c,json:{write:!0}})],t.prototype,"spatialReference",void 0),n.__decorate([l.writer("spatialReference")],t.prototype,"writeSpatialReference",null),n.__decorate([l.property({json:{write:!0}})],t.prototype,"transform",void 0),n.__decorate([l.subclass("esri.tasks.support.FeatureSet")],t)}(i.JSONSupport);return d.prototype.toJSON.isDefaultToJSON=!0,d||(d={}),d}.apply(null,r))||(e.exports=o)},212:function(e,t,n){var r=n(99),o=n(181);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var s=o.locals;e.hot.accept(181,(function(){"string"==typeof(o=(o=n(181)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(s,o.locals)?(s=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},213:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(3),i=n(108),s=n.n(i),l=n(6),c=n(5),p=n(284),u=n.n(p),m=n(275),d=n.n(m),f=n(266),y=n.n(f),h=n(287),g=n.n(h),v=n(278),w=n.n(v),b=n(157),x=n(188),_=n.n(x),O=n(151),S=n(183);n(212);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E,j,T,k=(E=function(e,t){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),C=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":A(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},P="esri-widget esri-scroll-zoom-toggle",M="esri-scroll-zoom-toggle--inner-wrapper",N="esri-scroll-zoom-toggle--input-checkbox",R=function(e){function t(t){var n=e.call(this,t)||this;return n.enabled=!1,n._toggleZoomOnScroll=function(){n.enabled=!n.enabled,n.enabled?(n.view.navigation.mouseWheelZoomEnabled=!0,n.view.navigation.browserTouchPanEnabled=!0):(n.view.navigation.mouseWheelZoomEnabled=!1,n.view.navigation.browserTouchPanEnabled=!1)},n}return k(t,e),t.prototype.render=function(){return Object(S.tsx)("div",{class:P},Object(S.tsx)("div",{class:M,onclick:this._toggleZoomOnScroll},Object(S.tsx)("div",null,"Enable Scroll Zoom"),Object(S.tsx)("input",{type:"checkbox",class:N,checked:this.enabled})))},C([Object(O.property)(),Object(S.renderable)()],t.prototype,"enabled",void 0),t=C([Object(O.subclass)("esri.widgets.ScrollZoom")],t)}(_.a),F=function(){return(F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},z=function(e){var t=e.metadata,n=e.sources,a=e.customFeatures,i=e.customFeaturesPerPage,s=e.customMapDOM,l=e.pageRefs,p=e.currentPage,m=e.mapState,f=m.basemap,h=m.layers,v=m.position,x=m.customBehavior,_=Object(r.useRef)(null),O=Object(r.useState)(null),S=O[0],A=O[1],E=Object(r.useState)(!0),j=E[0],T=E[1],k=Object(r.useState)(null),C=k[0],P=k[1];return Object(r.useEffect)((function(){var e=new d.a({basemap:f||null,layers:h}),r=F(F({container:_.current,map:e},v),{navigation:{mouseWheelZoomEnabled:!1,browserTouchPanEnabled:!1}}),i=t.sceneview?new g.a(r):new y.a(r);(A({map:e,view:i}),t.fullWidthMap&&!t.sceneview)&&(document.querySelector("#"+t.name+" .esri-ui-top-left").style.left="calc(30% - 10px)");if(t.fullWidthMap&&t.sceneview){var s=document.querySelector("#"+t.name+' div[class^="SideCar"]');s.style.left="40px",s.style.width="500px",s.style.transition="all 0.5s";var l=new w.a({view:i,expandIconClass:"esri-icon-question",expandTooltip:"Information",expanded:!0});i.ui.add([{component:l,position:"top-left",index:0}]),l.container.addEventListener("click",(function(){l.expanded?(s.style.left="40px",s.style.opacity="1",s.style.pointerEvents="auto",s.style.transition="all 0.5s"):(s.style.left="35px",s.style.opacity="0",s.style.pointerEvents="none",s.style.transition="none")}));var p=new R({view:i});i.ui.add(p,"top-right")}document.createElement("div").innerHTML="Data sources here";var m=new w.a({view:i,expandIconClass:"clipboard-icon",expandTooltip:"Data Sources",collapseTooltip:"Close",content:u.a.renderToStaticMarkup(o.a.createElement(c.a,{sources:n,theme:t.theme}))});i.ui.add(m,"bottom-right"),t.disableSpinnerAfterInitialLoad?b.whenTrueOnce(i,"updating",(function(){T(!0)})):b.whenTrue(i,"updating",(function(){T(!0)})),b.whenFalse(i,"updating",(function(){T(!1)})),a&&a({map:e,view:i,layers:h})}),[]),Object(r.useEffect)((function(){S&&(S.map.layers=h)}),[h]),Object(r.useEffect)((function(){S&&(S.map.basemap=f)}),[f,S]),Object(r.useEffect)((function(){S&&v&&S.view.goTo({target:v.center,zoom:v.zoom},{duration:1e3})}),[v]),Object(r.useEffect)((function(){if(S)if(x){var e=S.map,t=S.view;C&&C();var n=x({map:e,view:t});P((function(){return n}))}else C&&C()}),[x,S]),Object(r.useEffect)((function(){if(S&&i){var e=S.view,t=S.map,n=i({map:t,view:e,layers:h,pageRefs:l,currentPage:p});if(n)return n}}),[S,p,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"arcgis-map "+t.name,ref:_}),s&&S&&s(S),j&&o.a.createElement(c.c,null))},B=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},I=a.b.section.withConfig({displayName:"ChapterTemplate__Wrapper",componentId:"sc-1cxnsi8-0"})(j||(j=B(["\n\twidth: 100%;\n\theight: ",";\n\tmin-height: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: ",";\n\t/* scroll-snap-stop: always;\n\tscroll-snap-align: start; */\n"],["\n\twidth: 100%;\n\theight: ",";\n\tmin-height: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: ",";\n\t/* scroll-snap-stop: always;\n\tscroll-snap-align: start; */\n"])),(function(e){return e.height||100*e.screensTall+"vh"||"auto"}),(function(e){return"light"===e.maptheme?"":"#242424"})),W=a.b.div.withConfig({displayName:"ChapterTemplate__Trigger",componentId:"sc-1cxnsi8-1"})(T||(T=B(["\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 3px;\n\twidth: 3px;\n\tpointer-events: none;\n"],["\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 3px;\n\twidth: 3px;\n\tpointer-events: none;\n"])));t.a=function(e){e.customMap;var t=e.data,n=t.metadata,a=t.sources,i=t.customFeatures,p=t.customFeaturesPerPage,u=t.customMapDOM,m=t.customChapterDOM,d=t.pages,f=Object(r.useState)(0),y=f[0],h=f[1],g=Object(r.useContext)(l.a).dispatch,v={};return Object(r.useMemo)((function(){return o.a.createElement(I,{maptheme:n.theme,id:n.name,screensTall:d.length>1?d.length:1},o.a.createElement(c.i,{floating:n.fullWidthMap},d.map((function(e,t){return o.a.createElement(c.d,{floating:n.fullWidthMap,ref:function(e){return v[t]=e},key:n.name+"-page-"+t},o.a.createElement(c.e,{theme:n.theme,floating:n.fullWidthMap},o.a.createElement(c.g,null,e.title),o.a.createElement(c.f,{floating:n.fullWidthMap},e.content)),o.a.createElement(s.a,{onChange:function(e){e&&(g({type:"SET_NAV",payload:n.name}),h(t))}},(function(e){e.isVisible;return o.a.createElement(W,null)})))}))),o.a.createElement(s.a,{partialVisibility:!0},(function(e){var t=e.isVisible;return o.a.createElement(c.b,{fullWidth:n.fullWidthMap,className:"arcgis-map-"+n.theme},t&&o.a.createElement(z,{mapState:d[y].mapState,customFeatures:i,customFeaturesPerPage:p,customMapDOM:u,metadata:n,sources:a,pageRefs:v,currentPage:y}))})),m&&m)}),[y])}},2291:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(157),i=n(5),s=n(488),l=n.n(s),c=n(222),p=n.n(c),u=l.a.fromId("topo-vector"),m=new p.a({url:"https://services.arcgis.com/6dxqrE38upDMg1va/arcgis/rest/services/AKiditarod2Trail/FeatureServer"}),d=new p.a({url:"https://services.arcgis.com/6dxqrE38upDMg1va/arcgis/rest/services/Captions/FeatureServer",popupEnabled:!0,renderer:{type:"simple",symbol:{type:"simple-marker",color:"rgba(153, 51, 51, 0)",size:"7px",outline:{color:"rgba(153, 51, 51, 1)",width:2}}},popupTemplate:{title:"{NAME}",content:"\n      <p>\n         {Caption}\n      </p>\n   "}}),f={metadata:{name:"iditarod",fullWidthMap:!1,theme:"light",sceneview:!0},sources:[{name:"Iditarod Trail",url:"https://www.arcgis.com/home/item.html?id=1cfe0c84b2994fed86ea14877cf73776"},{name:"Iditarod Checkpoints",url:"https://www.arcgis.com/home/item.html?id=8963bceb9b274eed97d3f8524e6f3b10"}],pages:[{title:"Iditarod",content:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Animals have helped us maintain our sense of normalcy in more ways than just being our pets. The"," ",o.a.createElement(i.h,{theme:"light",link:"https://www.alaskacenters.gov/explore/culture/dog-mushing/iditarod",linkTitle:'"Iditarod", Heckart, A., Alaska Centers, Public Lands Information, Retrieved November 24, 2020'},"Iditarod"),", the world's most famous dog sledding race, took place as usual this year. Norway's"," ",o.a.createElement(i.h,{theme:"light",link:"https://iditarod.com/race/2020/mushers/994-Thomas-Waerner/",linkTitle:'"Musher Details: Thomas Waerner", Iditarod.com, Retrieved November 24, 2020'},"Thomas Waerner")," ","was 2020's winner, with a race time of just over 9 days and 10 hours."," "),o.a.createElement("p",null,"Though there can be only one winner, all contestants are champions of social distancing, traveling almost 1,000 miles through the Alaskan wilderness with their dogs as company. Despite a drastic rise in COVID cases as we near the end of 2020, Iditarod 2021 will"," ",o.a.createElement(i.h,{theme:"light",link:"https://www.usnews.com/news/health-news/articles/2020-09-24/iditarod-preps-for-any-scenario-as-2021-race-plans-proceed",linkTitle:'"Iditarod Preps for Any Scenario as 2021 Race Plans Proceed", Associated Press, U.S. News, September 24, 2020, Retrieved November 24, 2020'},"still take place"),". However, last year's champion"," ",o.a.createElement(i.h,{theme:"light",link:"https://apnews.com/article/travel-alaska-anchorage-coronavirus-pandemic-iditarod-trail-sled-dog-race-bf860c9124c57b81b68a15fae7ffeaaf",linkTitle:'"Virus restrictions lead Norwegian champ to drop Iditarod", Thiessen, M., APNews.com, November 24, 2020, Retrieved November 24, 2020'},"will not be in attendance")," ","due to COVID-related travel restrictions."),o.a.createElement("p",null,"Click on a checkpoint for more information.")),mapState:{position:{center:[-100,38],zoom:2},basemap:u,layers:[m,d]}}],customFeatures:function(e){var t=e.view;a.watch(u,"loaded",(function(){t.goTo({center:[-157,62],zoom:6},{duration:5e3})}))}},y=n(213);t.default=function(){return o.a.createElement(y.a,{data:f})}}}]);
//# sourceMappingURL=106.js.map