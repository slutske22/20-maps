(function(){var e={"esri/tasks/support/FeatureSet":187},t=this||window,n=t.webpackJsonp=t.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[95,32,188],{181:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r)()(!0);o.push([e.i,".esri-scroll-zoom-toggle{padding:0.7em 1.5em}.esri-scroll-zoom-toggle--inner-wrapper{display:flex;flex-direction:row;align-items:center;cursor:pointer}.esri-scroll-zoom-toggle--input-checkbox{margin-left:1em;margin-bottom:6px;cursor:pointer}\n","",{version:3,sources:["webpack://src/components/mapcomponents/ScrollZoom.scss"],names:[],mappings:"AAAA,yBACC,mBAAoB,CACpB,wCAGA,YAAa,CACb,kBAAmB,CACnB,kBAAmB,CACnB,cAAe,CACf,yCAGA,eAAgB,CAChB,iBAAkB,CAClB,cAAe",sourcesContent:[".esri-scroll-zoom-toggle {\n\tpadding: 0.7em 1.5em;\n}\n\n.esri-scroll-zoom-toggle--inner-wrapper {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tcursor: pointer;\n}\n\n.esri-scroll-zoom-toggle--input-checkbox {\n\tmargin-left: 1em;\n\tmargin-bottom: 6px;\n\tcursor: pointer;\n}\n"],sourceRoot:""}]),t.default=o},187:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n(117),n(159),n(174),n(166),n(155),n(152),n(151),n(170),n(163),n(194)],void 0===(o=function(e,t,n,r,o,a,i,s,l,c,u,p){var f=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),d=function(e){function t(t){var n=e.call(this,t)||this;return n.displayFieldName=null,n.exceededTransferLimit=!1,n.features=[],n.fields=null,n.geometryType=null,n.hasM=!1,n.hasZ=!1,n.queryGeometry=null,n.spatialReference=null,n}return n.__extends(t,e),t.prototype.readFeatures=function(e,t){for(var n=c.fromJSON(t.spatialReference),r=[],a=0;a<e.length;a++){var i=e[a],l=o.fromJSON(i),u=i.geometry&&i.geometry.spatialReference;s.isSome(l.geometry)&&!u&&(l.geometry.spatialReference=n),r.push(l)}return r},t.prototype.writeGeometryType=function(e,t,n,r){if(e)f.write(e,t,n,r);else{var o=this.features;if(o)for(var a=0,i=o;a<i.length;a++){var l=i[a];if(l&&s.isSome(l.geometry))return void f.write(l.geometry.type,t,n,r)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var n=this.features;if(n)for(var r=0,o=n;r<o.length;r++){var a=o[r];a&&s.isSome(a.geometry)&&a.geometry.spatialReference&&(t.spatialReference=a.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var n=0;n<t.features.length;n++){var r=t.features[n];if(r.geometry){var o=e&&e[n];r.geometry=o&&o.toJSON()||r.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,n=t[0],r=t[1],o=e.translate,a=o[0],i=o[1],l=this.features,c=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-a)/n)}),(function(e){return Math.round((i-e)/r)})),u=0,p=l.length;u<p;u++)c(s.unwrap(l[u].geometry))||(l.splice(u,1),u--,p--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this.geometryType,t=this.features,n=this.transform;if(!n)return this;for(var r=n.translate,o=r[0],a=r[1],i=n.scale,l=i[0],c=i[1],u=this._getHydrationFunction(e,(function(e){return e*l+o}),(function(e){return a-e*c})),p=0,f=t;p<f.length;p++){var d=f[p].geometry;s.isSome(d)&&u(d)}return this},t.prototype._quantizePoints=function(e,t,n){for(var r,o,a=[],i=0,s=e.length;i<s;i++){var l=e[i];if(i>0){var c=t(l[0]),u=n(l[1]);c===r&&u===o||(a.push([c-r,u-o]),r=c,o=u)}else r=t(l[0]),o=n(l[1]),a.push([r,o])}return a.length>0?a:null},t.prototype._getQuantizationFunction=function(e,t,n){var r=this;return"point"===e?function(e){return e.x=t(e.x),e.y=n(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var o=u.isPolygon(e)?e.rings:e.paths,a=[],i=0,s=o.length;i<s;i++){var l=o[i],c=r._quantizePoints(l,t,n);c&&a.push(c)}return a.length>0?(u.isPolygon(e)?e.rings=a:e.paths=a,e):null}:"multipoint"===e?function(e){var o;return(o=r._quantizePoints(e.points,t,n)).length>0?(e.points=o,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,n){return"point"===e?function(e){e.x=t(e.x),e.y=n(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var r,o,a=u.isPolygon(e)?e.rings:e.paths,i=0,s=a.length;i<s;i++)for(var l=a[i],c=0,p=l.length;c<p;c++){var f=l[c];c>0?(r+=f[0],o+=f[1]):(r=f[0],o=f[1]),f[0]=t(r),f[1]=n(o)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax)}:"multipoint"===e?function(e){for(var r,o,a=e.points,i=0,s=a.length;i<s;i++){var l=a[i];i>0?(r+=l[0],o+=l[1]):(r=l[0],o=l[1]),l[0]=t(r),l[1]=n(o)}}:void 0},n.__decorate([l.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),n.__decorate([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),n.__decorate([l.property({type:[o],json:{write:!0}})],t.prototype,"features",void 0),n.__decorate([l.reader("features")],t.prototype,"readFeatures",null),n.__decorate([l.property({type:[p],json:{write:!0}})],t.prototype,"fields",void 0),n.__decorate([l.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],t.prototype,"geometryType",void 0),n.__decorate([l.writer("geometryType")],t.prototype,"writeGeometryType",null),n.__decorate([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),n.__decorate([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),n.__decorate([l.property({types:r.geometryTypes,json:{read:u.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),n.__decorate([l.property({type:c,json:{write:!0}})],t.prototype,"spatialReference",void 0),n.__decorate([l.writer("spatialReference")],t.prototype,"writeSpatialReference",null),n.__decorate([l.property({json:{write:!0}})],t.prototype,"transform",void 0),n.__decorate([l.subclass("esri.tasks.support.FeatureSet")],t)}(i.JSONSupport);return d.prototype.toJSON.isDefaultToJSON=!0,d||(d={}),d}.apply(null,r))||(e.exports=o)},1978:function(e,t,n){var r=n(99),o=n(977);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var s=o.locals;e.hot.accept(977,(function(){"string"==typeof(o=(o=n(977)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(s,o.locals)?(s=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},212:function(e,t,n){var r=n(99),o=n(181);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var s=o.locals;e.hot.accept(181,(function(){"string"==typeof(o=(o=n(181)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(s,o.locals)?(s=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},213:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(3),i=n(108),s=n.n(i),l=n(6),c=n(5),u=n(284),p=n.n(u),f=n(275),d=n.n(f),m=n(266),y=n.n(m),h=n(287),g=n.n(h),v=n(278),w=n.n(v),b=n(157),A=n(188),x=n.n(A),S=n(151),_=n(183);n(212);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var O,T,j,P=(O=function(e,t){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),M=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":E(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},F="esri-widget esri-scroll-zoom-toggle",C="esri-scroll-zoom-toggle--inner-wrapper",k="esri-scroll-zoom-toggle--input-checkbox",R=function(e){function t(t){var n=e.call(this,t)||this;return n.enabled=!1,n._toggleZoomOnScroll=function(){n.enabled=!n.enabled,n.enabled?(n.view.navigation.mouseWheelZoomEnabled=!0,n.view.navigation.browserTouchPanEnabled=!0):(n.view.navigation.mouseWheelZoomEnabled=!1,n.view.navigation.browserTouchPanEnabled=!1)},n}return P(t,e),t.prototype.render=function(){return Object(_.tsx)("div",{class:F},Object(_.tsx)("div",{class:C,onclick:this._toggleZoomOnScroll},Object(_.tsx)("div",null,"Enable Scroll Zoom"),Object(_.tsx)("input",{type:"checkbox",class:k,checked:this.enabled})))},M([Object(S.property)(),Object(_.renderable)()],t.prototype,"enabled",void 0),t=M([Object(S.subclass)("esri.widgets.ScrollZoom")],t)}(x.a),B=function(){return(B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},N=function(e){var t=e.metadata,n=e.sources,a=e.customFeatures,i=e.customFeaturesPerPage,s=e.customMapDOM,l=e.pageRefs,u=e.currentPage,f=e.mapState,m=f.basemap,h=f.layers,v=f.position,A=f.customBehavior,x=Object(r.useRef)(null),S=Object(r.useState)(null),_=S[0],E=S[1],O=Object(r.useState)(!0),T=O[0],j=O[1],P=Object(r.useState)(null),M=P[0],F=P[1];return Object(r.useEffect)((function(){var e=new d.a({basemap:m||null,layers:h}),r=B(B({container:x.current,map:e},v),{navigation:{mouseWheelZoomEnabled:!1,browserTouchPanEnabled:!1}}),i=t.sceneview?new g.a(r):new y.a(r);(E({map:e,view:i}),t.fullWidthMap&&!t.sceneview)&&(document.querySelector("#"+t.name+" .esri-ui-top-left").style.left="calc(30% - 10px)");if(t.fullWidthMap&&t.sceneview){var s=document.querySelector("#"+t.name+' div[class^="SideCar"]');s.style.left="40px",s.style.width="500px",s.style.transition="all 0.5s";var l=new w.a({view:i,expandIconClass:"esri-icon-question",expandTooltip:"Information",expanded:!0});i.ui.add([{component:l,position:"top-left",index:0}]),l.container.addEventListener("click",(function(){l.expanded?(s.style.left="40px",s.style.opacity="1",s.style.pointerEvents="auto",s.style.transition="all 0.5s"):(s.style.left="35px",s.style.opacity="0",s.style.pointerEvents="none",s.style.transition="none")}));var u=new R({view:i});i.ui.add(u,"top-right")}document.createElement("div").innerHTML="Data sources here";var f=new w.a({view:i,expandIconClass:"clipboard-icon",expandTooltip:"Data Sources",collapseTooltip:"Close",content:p.a.renderToStaticMarkup(o.a.createElement(c.a,{sources:n,theme:t.theme}))});i.ui.add(f,"bottom-right"),t.disableSpinnerAfterInitialLoad?b.whenTrueOnce(i,"updating",(function(){j(!0)})):b.whenTrue(i,"updating",(function(){j(!0)})),b.whenFalse(i,"updating",(function(){j(!1)})),a&&a({map:e,view:i,layers:h})}),[]),Object(r.useEffect)((function(){_&&(_.map.layers=h)}),[h]),Object(r.useEffect)((function(){_&&(_.map.basemap=m)}),[m,_]),Object(r.useEffect)((function(){_&&v&&_.view.goTo({target:v.center,zoom:v.zoom},{duration:1e3})}),[v]),Object(r.useEffect)((function(){if(_)if(A){var e=_.map,t=_.view;M&&M();var n=A({map:e,view:t});F((function(){return n}))}else M&&M()}),[A,_]),Object(r.useEffect)((function(){if(_&&i){var e=_.view,t=_.map,n=i({map:t,view:e,layers:h,pageRefs:l,currentPage:u});if(n)return n}}),[_,u,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"arcgis-map "+t.name,ref:x}),s&&_&&s(_),T&&o.a.createElement(c.c,null))},D=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},z=a.b.section.withConfig({displayName:"ChapterTemplate__Wrapper",componentId:"sc-1cxnsi8-0"})(T||(T=D(["\n\twidth: 100%;\n\theight: ",";\n\tmin-height: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: ",";\n\t/* scroll-snap-stop: always;\n\tscroll-snap-align: start; */\n"],["\n\twidth: 100%;\n\theight: ",";\n\tmin-height: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: ",";\n\t/* scroll-snap-stop: always;\n\tscroll-snap-align: start; */\n"])),(function(e){return e.height||100*e.screensTall+"vh"||"auto"}),(function(e){return"light"===e.maptheme?"":"#242424"})),W=a.b.div.withConfig({displayName:"ChapterTemplate__Trigger",componentId:"sc-1cxnsi8-1"})(j||(j=D(["\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 3px;\n\twidth: 3px;\n\tpointer-events: none;\n"],["\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 3px;\n\twidth: 3px;\n\tpointer-events: none;\n"])));t.a=function(e){e.customMap;var t=e.data,n=t.metadata,a=t.sources,i=t.customFeatures,u=t.customFeaturesPerPage,p=t.customMapDOM,f=t.customChapterDOM,d=t.pages,m=Object(r.useState)(0),y=m[0],h=m[1],g=Object(r.useContext)(l.a).dispatch,v={};return Object(r.useMemo)((function(){return o.a.createElement(z,{maptheme:n.theme,id:n.name,screensTall:d.length>1?d.length:1},o.a.createElement(c.i,{floating:n.fullWidthMap},d.map((function(e,t){return o.a.createElement(c.d,{floating:n.fullWidthMap,ref:function(e){return v[t]=e},key:n.name+"-page-"+t},o.a.createElement(c.e,{theme:n.theme,floating:n.fullWidthMap},o.a.createElement(c.g,null,e.title),o.a.createElement(c.f,{floating:n.fullWidthMap},e.content)),o.a.createElement(s.a,{onChange:function(e){e&&(g({type:"SET_NAV",payload:n.name}),h(t))}},(function(e){e.isVisible;return o.a.createElement(W,null)})))}))),o.a.createElement(s.a,{partialVisibility:!0},(function(e){var t=e.isVisible;return o.a.createElement(c.b,{fullWidth:n.fullWidthMap,className:"arcgis-map-"+n.theme},t&&o.a.createElement(N,{mapState:d[y].mapState,customFeatures:i,customFeaturesPerPage:u,customMapDOM:p,metadata:n,sources:a,pageRefs:v,currentPage:y}))})),f&&f)}),[y])}},2304:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(5),i=n(222),s=n.n(i),l=n(300),c=n.n(l),u=(n(1978),new s.a({url:"https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Swarms_Public/FeatureServer",outFields:["*"],definitionExpression:"STARTDATE >= date'1-1-2020' AND FINISHDATE <= date'12-1-2020'"})),p=new s.a({url:"https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Bands_Public/FeatureServer",outFields:["*"],definitionExpression:"STARTDATE >= date'1-1-2020' AND FINISHDATE <= date'12-1-2020'"}),f=new s.a({url:"https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Adults_Public/FeatureServer",outFields:["*"],definitionExpression:"STARTDATE >= date'1-1-2020' AND FINISHDATE <= date'12-1-2020'"}),d=new s.a({url:"https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Hoppers_Public/FeatureServer",outFields:["*"],definitionExpression:"STARTDATE >= date'1-1-2020' AND FINISHDATE <= date'12-1-2020'"}),m={metadata:{name:"locusts",theme:"light",fullWidthMap:!0},sources:[{name:"Locust Swarms in Africa",url:"https://www.arcgis.com/home/item.html?id=b3f84bff1c514484be7f4d65098f9372"},{name:"Locust Bands in Africa",url:"https://www.arcgis.com/home/item.html?id=07ccb27a6ea34fb0bd600d37fb1005f3"},{name:"Locust Adults in Africa",url:"https://www.arcgis.com/home/item.html?id=0a95c9b5ea6d42eaa232948ae618f690"},{name:"Locust Hoppers",url:"https://www.arcgis.com/home/item.html?id=969749ccd9f546d29730a60f72bebb42"}],customFeatures:function(e){var t=e.view,n=new c.a({view:t,layout:"side-by-side",layerInfos:[{layer:u,title:"Swarms"},{layer:p,title:"Bands"},{layer:f,title:"Adults"},{layer:d,title:"Hoppers"}]});t.ui.add(n,"top-right")},pages:[{title:"Locusts in Africa",content:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"This year, North and Easy Africa saw"," ",o.a.createElement(a.h,{theme:"light",link:"https://www.npr.org/sections/goatsandsoda/2020/06/14/876002404/locusts-are-a-plague-of-biblical-scope-in-2020-why-and-what-are-they-exactly",linkTitle:'"Locusts Are A Plague Of Biblical Scope In 2020" Baskar, P., NPR, June 14, 2020, Retrieved Dec 5, 2020'},"record")," ","swarms of locusts. The infestation is"," ",o.a.createElement(a.h,{theme:"light",link:"https://foodtank.com/news/2020/08/locust-swarms-threaten-food-security-in-horn-of-africa/#:~:text=The%20Horn%20of%20Africa%20is,to%20the%20International%20Rescue%20Committee.",linkTitle:'"Locust Swarms Threaten Food Security in Horn of Africa", Bonifield, J., foodtank.com, Aug 2020, Retrieved Dec 5, 2020'},"affecting food security")," ","in East African countries like Kenya, Somalia and Ethiopia. Swarms extend as far as Southwest Asia and the Middle East."),o.a.createElement("p",null,"This map shows reports of locust non-flying bands, flying swarms, adults groups, and hopper groups (juveniles) reported in 2020 alone.")),mapState:{basemap:"topo-vector",layers:[u,p,f,d],position:{center:[35,21],zoom:4}}}]},y=n(213);t.default=function(){return o.a.createElement(y.a,{data:m})}},977:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r)()(!0);o.push([e.i,"#locusts .esri-legend{width:90px !important}\n","",{version:3,sources:["webpack://src/components/chapters/locusts/styles.scss"],names:[],mappings:"AAAA,sBAEM,qBAAsB",sourcesContent:["#locusts {\n   .esri-legend {\n      width: 90px !important;\n   }\n}"],sourceRoot:""}]),t.default=o}}]);
//# sourceMappingURL=95.js.map