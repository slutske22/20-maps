(function(){var e={"esri/tasks/support/FeatureSet":187},t=this||window,n=t.webpackJsonp=t.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[96,32,188],{1010:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r)()(!0);o.push([e.i,"#energy-legend-container{border:0.25px solid lightgray}.renewables-popup__x-axis-labels{display:flex;flex-direction:row;width:308px;justify-content:space-between;margin-left:51px;width:calc(100% - 50px)}.renewables-popup__x-axis-labels .label{transform:rotate(270deg);transform-origin:0 0}#renewables .esri-legend__layer-table.esri-legend__layer-table--size-ramp:first-child{display:none}#renewables .esri-feature-content{width:100%}#renewables .esri-feature-content>div{width:100%}\n","",{version:3,sources:["webpack://src/components/chapters/renewables/styles.scss"],names:[],mappings:"AAAA,yBACC,6BAA8B,CAC9B,iCAGA,YAAa,CACb,kBAAmB,CACnB,WAAY,CACZ,6BAA8B,CAC9B,gBAAiB,CACjB,uBAAwB,CACxB,wCAGA,wBAAyB,CACzB,oBAAqB,CACrB,sFAIC,YAAa,CAFf,kCAME,UAAW,CANb,sCASG,UAAW",sourcesContent:["#energy-legend-container {\n\tborder: 0.25px solid lightgray;\n}\n\n.renewables-popup__x-axis-labels {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 308px;\n\tjustify-content: space-between;\n\tmargin-left: 51px;\n\twidth: calc(100% - 50px);\n}\n\n.renewables-popup__x-axis-labels .label {\n\ttransform: rotate(270deg);\n\ttransform-origin: 0 0;\n}\n\n#renewables {\n\t.esri-legend__layer-table.esri-legend__layer-table--size-ramp:first-child {\n\t\tdisplay: none;\n\t}\n\n\t.esri-feature-content {\n\t\twidth: 100%;\n\n\t\t& > div {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),t.default=o},181:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r)()(!0);o.push([e.i,".esri-scroll-zoom-toggle{padding:0.7em 1.5em}.esri-scroll-zoom-toggle--inner-wrapper{display:flex;flex-direction:row;align-items:center;cursor:pointer}.esri-scroll-zoom-toggle--input-checkbox{margin-left:1em;margin-bottom:6px;cursor:pointer}\n","",{version:3,sources:["webpack://src/components/mapcomponents/ScrollZoom.scss"],names:[],mappings:"AAAA,yBACC,mBAAoB,CACpB,wCAGA,YAAa,CACb,kBAAmB,CACnB,kBAAmB,CACnB,cAAe,CACf,yCAGA,eAAgB,CAChB,iBAAkB,CAClB,cAAe",sourcesContent:[".esri-scroll-zoom-toggle {\n\tpadding: 0.7em 1.5em;\n}\n\n.esri-scroll-zoom-toggle--inner-wrapper {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tcursor: pointer;\n}\n\n.esri-scroll-zoom-toggle--input-checkbox {\n\tmargin-left: 1em;\n\tmargin-bottom: 6px;\n\tcursor: pointer;\n}\n"],sourceRoot:""}]),t.default=o},187:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n(117),n(159),n(174),n(166),n(155),n(152),n(151),n(170),n(163),n(194)],void 0===(o=function(e,t,n,r,o,a,i,l,s,c,p,u){var f=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),d=function(e){function t(t){var n=e.call(this,t)||this;return n.displayFieldName=null,n.exceededTransferLimit=!1,n.features=[],n.fields=null,n.geometryType=null,n.hasM=!1,n.hasZ=!1,n.queryGeometry=null,n.spatialReference=null,n}return n.__extends(t,e),t.prototype.readFeatures=function(e,t){for(var n=c.fromJSON(t.spatialReference),r=[],a=0;a<e.length;a++){var i=e[a],s=o.fromJSON(i),p=i.geometry&&i.geometry.spatialReference;l.isSome(s.geometry)&&!p&&(s.geometry.spatialReference=n),r.push(s)}return r},t.prototype.writeGeometryType=function(e,t,n,r){if(e)f.write(e,t,n,r);else{var o=this.features;if(o)for(var a=0,i=o;a<i.length;a++){var s=i[a];if(s&&l.isSome(s.geometry))return void f.write(s.geometry.type,t,n,r)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var n=this.features;if(n)for(var r=0,o=n;r<o.length;r++){var a=o[r];a&&l.isSome(a.geometry)&&a.geometry.spatialReference&&(t.spatialReference=a.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var n=0;n<t.features.length;n++){var r=t.features[n];if(r.geometry){var o=e&&e[n];r.geometry=o&&o.toJSON()||r.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,n=t[0],r=t[1],o=e.translate,a=o[0],i=o[1],s=this.features,c=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-a)/n)}),(function(e){return Math.round((i-e)/r)})),p=0,u=s.length;p<u;p++)c(l.unwrap(s[p].geometry))||(s.splice(p,1),p--,u--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this.geometryType,t=this.features,n=this.transform;if(!n)return this;for(var r=n.translate,o=r[0],a=r[1],i=n.scale,s=i[0],c=i[1],p=this._getHydrationFunction(e,(function(e){return e*s+o}),(function(e){return a-e*c})),u=0,f=t;u<f.length;u++){var d=f[u].geometry;l.isSome(d)&&p(d)}return this},t.prototype._quantizePoints=function(e,t,n){for(var r,o,a=[],i=0,l=e.length;i<l;i++){var s=e[i];if(i>0){var c=t(s[0]),p=n(s[1]);c===r&&p===o||(a.push([c-r,p-o]),r=c,o=p)}else r=t(s[0]),o=n(s[1]),a.push([r,o])}return a.length>0?a:null},t.prototype._getQuantizationFunction=function(e,t,n){var r=this;return"point"===e?function(e){return e.x=t(e.x),e.y=n(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var o=p.isPolygon(e)?e.rings:e.paths,a=[],i=0,l=o.length;i<l;i++){var s=o[i],c=r._quantizePoints(s,t,n);c&&a.push(c)}return a.length>0?(p.isPolygon(e)?e.rings=a:e.paths=a,e):null}:"multipoint"===e?function(e){var o;return(o=r._quantizePoints(e.points,t,n)).length>0?(e.points=o,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,n){return"point"===e?function(e){e.x=t(e.x),e.y=n(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var r,o,a=p.isPolygon(e)?e.rings:e.paths,i=0,l=a.length;i<l;i++)for(var s=a[i],c=0,u=s.length;c<u;c++){var f=s[c];c>0?(r+=f[0],o+=f[1]):(r=f[0],o=f[1]),f[0]=t(r),f[1]=n(o)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax)}:"multipoint"===e?function(e){for(var r,o,a=e.points,i=0,l=a.length;i<l;i++){var s=a[i];i>0?(r+=s[0],o+=s[1]):(r=s[0],o=s[1]),s[0]=t(r),s[1]=n(o)}}:void 0},n.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),n.__decorate([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),n.__decorate([s.property({type:[o],json:{write:!0}})],t.prototype,"features",void 0),n.__decorate([s.reader("features")],t.prototype,"readFeatures",null),n.__decorate([s.property({type:[u],json:{write:!0}})],t.prototype,"fields",void 0),n.__decorate([s.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],t.prototype,"geometryType",void 0),n.__decorate([s.writer("geometryType")],t.prototype,"writeGeometryType",null),n.__decorate([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),n.__decorate([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),n.__decorate([s.property({types:r.geometryTypes,json:{read:p.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),n.__decorate([s.property({type:c,json:{write:!0}})],t.prototype,"spatialReference",void 0),n.__decorate([s.writer("spatialReference")],t.prototype,"writeSpatialReference",null),n.__decorate([s.property({json:{write:!0}})],t.prototype,"transform",void 0),n.__decorate([s.subclass("esri.tasks.support.FeatureSet")],t)}(i.JSONSupport);return d.prototype.toJSON.isDefaultToJSON=!0,d||(d={}),d}.apply(null,r))||(e.exports=o)},1989:function(e,t,n){var r=n(99),o=n(1010);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(1010,(function(){"string"==typeof(o=(o=n(1010)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},212:function(e,t,n){var r=n(99),o=n(181);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(181,(function(){"string"==typeof(o=(o=n(181)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},213:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(3),i=n(108),l=n.n(i),s=n(6),c=n(5),p=n(284),u=n.n(p),f=n(275),d=n.n(f),m=n(266),y=n.n(m),g=n(287),h=n.n(g),v=n(278),b=n.n(v),w=n(157),_=n(188),x=n.n(_),A=n(151),C=n(183);n(212);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var S,O,j,T=(S=function(e,t){return(S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}S(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),B=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":E(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},M="esri-widget esri-scroll-zoom-toggle",k="esri-scroll-zoom-toggle--inner-wrapper",P="esri-scroll-zoom-toggle--input-checkbox",R=function(e){function t(t){var n=e.call(this,t)||this;return n.enabled=!1,n._toggleZoomOnScroll=function(){n.enabled=!n.enabled,n.enabled?(n.view.navigation.mouseWheelZoomEnabled=!0,n.view.navigation.browserTouchPanEnabled=!0):(n.view.navigation.mouseWheelZoomEnabled=!1,n.view.navigation.browserTouchPanEnabled=!1)},n}return T(t,e),t.prototype.render=function(){return Object(C.tsx)("div",{class:M},Object(C.tsx)("div",{class:k,onclick:this._toggleZoomOnScroll},Object(C.tsx)("div",null,"Enable Scroll Zoom"),Object(C.tsx)("input",{type:"checkbox",class:P,checked:this.enabled})))},B([Object(A.property)(),Object(C.renderable)()],t.prototype,"enabled",void 0),t=B([Object(A.subclass)("esri.widgets.ScrollZoom")],t)}(x.a),F=function(){return(F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},G=function(e){var t=e.metadata,n=e.sources,a=e.customFeatures,i=e.customFeaturesPerPage,l=e.customMapDOM,s=e.pageRefs,p=e.currentPage,f=e.mapState,m=f.basemap,g=f.layers,v=f.position,_=f.customBehavior,x=Object(r.useRef)(null),A=Object(r.useState)(null),C=A[0],E=A[1],S=Object(r.useState)(!0),O=S[0],j=S[1],T=Object(r.useState)(null),B=T[0],M=T[1];return Object(r.useEffect)((function(){var e=new d.a({basemap:m||null,layers:g}),r=F(F({container:x.current,map:e},v),{navigation:{mouseWheelZoomEnabled:!1,browserTouchPanEnabled:!1}}),i=t.sceneview?new h.a(r):new y.a(r);(E({map:e,view:i}),t.fullWidthMap&&!t.sceneview)&&(document.querySelector("#"+t.name+" .esri-ui-top-left").style.left="calc(30% - 10px)");if(t.fullWidthMap&&t.sceneview){var l=document.querySelector("#"+t.name+' div[class^="SideCar"]');l.style.left="40px",l.style.width="500px",l.style.transition="all 0.5s";var s=new b.a({view:i,expandIconClass:"esri-icon-question",expandTooltip:"Information",expanded:!0});i.ui.add([{component:s,position:"top-left",index:0}]),s.container.addEventListener("click",(function(){s.expanded?(l.style.left="40px",l.style.opacity="1",l.style.pointerEvents="auto",l.style.transition="all 0.5s"):(l.style.left="35px",l.style.opacity="0",l.style.pointerEvents="none",l.style.transition="none")}));var p=new R({view:i});i.ui.add(p,"top-right")}document.createElement("div").innerHTML="Data sources here";var f=new b.a({view:i,expandIconClass:"clipboard-icon",expandTooltip:"Data Sources",collapseTooltip:"Close",content:u.a.renderToStaticMarkup(o.a.createElement(c.a,{sources:n,theme:t.theme}))});i.ui.add(f,"bottom-right"),t.disableSpinnerAfterInitialLoad?w.whenTrueOnce(i,"updating",(function(){j(!0)})):w.whenTrue(i,"updating",(function(){j(!0)})),w.whenFalse(i,"updating",(function(){j(!1)})),a&&a({map:e,view:i,layers:g})}),[]),Object(r.useEffect)((function(){C&&(C.map.layers=g)}),[g]),Object(r.useEffect)((function(){C&&(C.map.basemap=m)}),[m,C]),Object(r.useEffect)((function(){C&&v&&C.view.goTo({target:v.center,zoom:v.zoom},{duration:1e3})}),[v]),Object(r.useEffect)((function(){if(C)if(_){var e=C.map,t=C.view;B&&B();var n=_({map:e,view:t});M((function(){return n}))}else B&&B()}),[_,C]),Object(r.useEffect)((function(){if(C&&i){var e=C.view,t=C.map,n=i({map:t,view:e,layers:g,pageRefs:s,currentPage:p});if(n)return n}}),[C,p,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"arcgis-map "+t.name,ref:x}),l&&C&&l(C),O&&o.a.createElement(c.c,null))},z=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},N=a.b.section.withConfig({displayName:"ChapterTemplate__Wrapper",componentId:"sc-1cxnsi8-0"})(O||(O=z(["\n\twidth: 100%;\n\theight: ",";\n\tmin-height: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: ",";\n\t/* scroll-snap-stop: always;\n\tscroll-snap-align: start; */\n"],["\n\twidth: 100%;\n\theight: ",";\n\tmin-height: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: ",";\n\t/* scroll-snap-stop: always;\n\tscroll-snap-align: start; */\n"])),(function(e){return e.height||100*e.screensTall+"vh"||"auto"}),(function(e){return"light"===e.maptheme?"":"#242424"})),D=a.b.div.withConfig({displayName:"ChapterTemplate__Trigger",componentId:"sc-1cxnsi8-1"})(j||(j=z(["\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 3px;\n\twidth: 3px;\n\tpointer-events: none;\n"],["\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 3px;\n\twidth: 3px;\n\tpointer-events: none;\n"])));t.a=function(e){e.customMap;var t=e.data,n=t.metadata,a=t.sources,i=t.customFeatures,p=t.customFeaturesPerPage,u=t.customMapDOM,f=t.customChapterDOM,d=t.pages,m=Object(r.useState)(0),y=m[0],g=m[1],h=Object(r.useContext)(s.a).dispatch,v={};return Object(r.useMemo)((function(){return o.a.createElement(N,{maptheme:n.theme,id:n.name,screensTall:d.length>1?d.length:1},o.a.createElement(c.i,{floating:n.fullWidthMap},d.map((function(e,t){return o.a.createElement(c.d,{floating:n.fullWidthMap,ref:function(e){return v[t]=e},key:n.name+"-page-"+t},o.a.createElement(c.e,{theme:n.theme,floating:n.fullWidthMap},o.a.createElement(c.g,null,e.title),o.a.createElement(c.f,{floating:n.fullWidthMap},e.content)),o.a.createElement(l.a,{onChange:function(e){e&&(h({type:"SET_NAV",payload:n.name}),g(t))}},(function(e){e.isVisible;return o.a.createElement(D,null)})))}))),o.a.createElement(l.a,{partialVisibility:!0},(function(e){var t=e.isVisible;return o.a.createElement(c.b,{fullWidth:n.fullWidthMap,className:"arcgis-map-"+n.theme},t&&o.a.createElement(G,{mapState:d[y].mapState,customFeatures:i,customFeaturesPerPage:p,customMapDOM:u,metadata:n,sources:a,pageRefs:v,currentPage:y}))})),f&&f)}),[y])}},2292:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(325),i=n.n(a),l=n(222),s=n.n(l),c={type:"simple",symbol:{type:"simple-line",color:"lightgrey",width:"1px"}},p=n(764),u=n.n(p),f=n(767),d=n.n(f),m=n(864),y=["value_2000","value_2001","value_2002","value_2003","value_2004","value_2005","value_2006","value_2007","value_2008","value_2009","value_2010","value_2011","value_2012","value_2013","value_2014","value_2015","value_2016","value_2017"],g=new(n.n(m).a)({fields:y,normalizeField:null}),h=new d.a({value:g}),v={content:[{type:"text",text:'\n         <div class="renewables-popup">\n            <h2>{SHORT_NAME}</h2>\n\t\t\t\t<p>Renewable Energy as % of Total Fine Energy Consumption Through the Years<p>\n         </div>\n      '},new u.a({mediaInfos:[h]}),{type:"text",text:'\n\t\t\t\t<div class="renewables-popup__x-axis-labels">\n\t\t\t\t\t<span class="label">2000</span>\n\t\t\t\t\t<span class="label">2017</span>\n\t\t\t\t</div>\n\t\t\t'}],fieldInfos:y.map((function(e){return{fieldName:e,label:e.split("_")[1]}}))};y.map((function(e){return'<div class="label">'+e.split("_")[1]+"</div>"})).join("");var b=new i.a({url:"https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/EqualEarthBasemap/VectorTileServer",legendEnabled:!1}),w=new s.a({url:"https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/Renewable_Energy_Percent_of_Total_Final_Energy_Consumption_Country_Polygons/FeatureServer",popupTemplate:v}),_=[new s.a({url:"https://services.arcgis.com/nGt4QxSblgDfeJn9/arcgis/rest/services/Graticule/FeatureServer/8",renderer:c,legendEnabled:!1}),new s.a({url:"https://services.arcgis.com/nGt4QxSblgDfeJn9/arcgis/rest/services/Graticule/FeatureServer/3",renderer:c,legendEnabled:!1})],x=n(5),A=n(300),C=n.n(A),E=(n(1989),function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,l=a.length;i<l;i++,o++)r[o]=a[i];return r}),S={metadata:{name:"renewables",fullWidthMap:!1,theme:"light"},sources:[{name:"Indicator 7.2.1: Renewable energy share in the total final energy consumption (percent)",url:"https://www.arcgis.com/home/item.html?id=3cece1f2bb4e49efa22d45bc34076805"}],pages:[{title:"Renewable Energy by Percent",content:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"The very real possibility of"," ",o.a.createElement(x.h,{theme:"light",link:"https://www.carbonbrief.org/analysis-why-scientists-think-100-of-global-warming-is-due-to-humans",linkTitle:'"Analysis: Why scientists think 100% of global warming is due to humans", Hausfather, Z., carbonbrief.org, Dec 12, 2017, Retrieved Dec 24, 2020'},"human behavior")," ","as a large, if not primary contributing factor to global warming, combined with the"," ",o.a.createElement(x.h,{theme:"light",link:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3866387/",linkTitle:'"The future of oil supply", Miller, R., Philos Trans A Math Phys Eng Sci. Jan 13, 2014, Retrieved from ncbi.nlm.nih.gov on Dec 24, 2020'},"finite nature")," ","of our other primary fuel sources, requires us to change."),o.a.createElement("p",null,"The United Nations established the"," ",o.a.createElement(x.h,{theme:"light",link:"https://unstats.un.org/sdgs/",linkTitle:'"Sustainable Development Goals", unstats.un.org, Retrieved Dec 24, 2020'},"Sustainable Development Goals (SDG)")," ","to guide the world's leaders on how to prepare for the future. Since 2000,"," ",o.a.createElement(x.h,{theme:"light",link:"https://unstats.un.org/sdgs/metadata/files/Metadata-07-02-01.pdf",linkTitle:'"Indicator 7.2.1: Renewable energy share in the total final energy consumption", unstats.un.org, Retrieved Dec 24, 2020'},"Indicator 7.2.1")," ","of the SDG has been measuring every country's renewable energy use as a percentage of its total energy consumption."),o.a.createElement("p",{style:{flexGrow:1}},"Click a country to see how much of its energy use has been from renewable sources, and how that number has evolved in the last 20 years."),o.a.createElement("div",{className:"arcgis-map-light"},o.a.createElement("div",{id:"energy-legend-container",className:"esri-component esri-legend esri-widget esri-widget--panel"}))),mapState:{position:{center:{x:0,y:0},zoom:1},layers:E([b],_,[w])}}],customFeatures:function(e){var t=e.view;new C.a({view:t,container:"energy-legend-container",layerInfos:[{layer:w,title:"Renewables as % of Total Energy Use"}]});t.when((function(){t.popup.dockEnabled=!0,t.popup.dockOptions={position:"bottom-left"}}))}},O=n(213);t.default=function(){return o.a.createElement(O.a,{data:S})}}}]);
//# sourceMappingURL=96.js.map