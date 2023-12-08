(function(){var e={"esri/views/layers/support/ClipArea":176,"esri/views/layers/support/ClipRect":209,"esri/views/2d/layers/LayerView2D":219,"esri/views/layers/support/Geometry":220,"esri/views/layers/support/Path":221,"esri/views/2d/layers/support/ExportStrategy":563,"esri/views/2d/viewStateUtils":564,"esri/layers/support/wmsUtils":612,"esri/layers/support/ExportWMSImageParameters":724,"esri/views/layers/WMSLayerView":1055,"esri/views/2d/layers/WMSLayerView2D":2116},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1055:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(154),r(153),r(151)],void 0===(i=function(e,t,r,n,i,a){Object.defineProperty(t,"__esModule",{value:!0}),t.WMSLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,a,o,s,p,u,l,c,d;return r.__generator(this,(function(r){if(t=this.layer,!e)return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(!(a=t.popupEnabled))return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:a}))];if(o=this.createFetchPopupFeaturesQuery(e),s=o.extent,p=o.width,u=o.height,l=o.x,c=o.y,!(s&&p&&u))throw new n("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:p,height:u});return[2,(d=t.fetchFeatureInfo(s,p,u,l,c))?d.then((function(e){return[e]})):i.resolve([])]}))}))},r.__decorate([a.property()],t.prototype,"layer",void 0),r.__decorate([a.subclass("esri.layers.mixins.WMSLayerView")],t)}(e)}}.apply(null,n))||(e.exports=i)},176:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(155),r(151)],void 0===(i=function(e,t,r,n,i){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([i.subclass("esri.views.layers.support.ClipArea")],t)}(n.JSONSupport)}.apply(null,n))||(e.exports=i)},209:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(151),r(176)],void 0===(i=function(e,t,r,n,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.ClipRect")],t)}(i)}.apply(null,n))||(e.exports=i)},2116:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(154),r(156),r(153),r(151),r(184),r(724),r(544),r(219),r(563),r(218),r(285),r(1055)],void 0===(i=function(e,t,r,n,i,a,o,s,p,u,l,c,d,y,h){var f=i.getLogger("esri.views.2d.layers.WMSLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new u.BitmapContainer,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this.layer,t=this.view;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(a.reject(new n("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))},t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){a.isAbortError(e)||f.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=this.view,n=t.imageMaxHeight,i=t.imageMaxWidth;this.strategy=new c({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:n,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new p({layer:t,view:r}),this.handles.add(this._exportWMSImageParameters.watch("version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"wms")},t.prototype.detach=function(){this.handles.remove("wms"),this.container.removeAllChildren(),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this.view,r=this.container,n=e.x,i=e.y,a=t.spatialReference,o=null,p=0,u=0;r.children.some((function(e){var t=e.width,r=e.height,l=e.resolution,c=e.x,d=e.y,y=c+l*t,h=d-l*r;return n>=c&&n<=y&&i<=d&&i>=h&&(o=new s({xmin:c,ymin:h,xmax:y,ymax:d,spatialReference:a}),p=t,u=r,!0)}));var l=o.width/p,c=Math.round((n-o.xmin)/l),d=Math.round((o.ymax-i)/l);return{extent:o,width:p,height:u,x:c,y:d}},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,n,i){return this.layer.fetchImage(e,t,n,r.__assign({timestamp:this.refreshTimestamp},i))},r.__decorate([o.property()],t.prototype,"strategy",void 0),r.__decorate([o.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),r.__decorate([o.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(h.WMSLayerView(y.RefreshableLayerView(l.LayerView2DMixin(d))))}.apply(null,n))||(e.exports=i)},219:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(169),r(254),r(157),r(151),r(186),r(176),r(209),r(220),r(221)],void 0===(i=function(e,t,r,n,i,a,o,s,p,u,l,c){Object.defineProperty(t,"__esModule",{value:!0});var d=n.ofType({key:"type",base:p,typeMap:{rect:u,path:c,geometry:l}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new d,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.handles.add([a.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),a.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),a.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,n=r.minScale,i=r.maxScale;if(null!=n&&null!=i){var a=!n,o=!i;!a&&e<=n&&(a=!0),!o&&e>=i&&(o=!0),t=a&&o}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([o.property({type:d,set:function(e){var t=i.referenceSetter(e,this._get("clips"),d);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([o.property()],t.prototype,"moving",void 0),r.__decorate([o.property()],t.prototype,"attached",void 0),r.__decorate([o.property()],t.prototype,"container",void 0),r.__decorate([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([o.property()],t.prototype,"updateRequested",void 0),r.__decorate([o.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([o.property()],t.prototype,"view",void 0),r.__decorate([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}.apply(null,n))||(e.exports=i)},220:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(159),r(151),r(215),r(163),r(176)],void 0===(i=function(e,t,r,n,i,a,o,s){var p={base:a,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return r.__extends(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},r.__decorate([i.property({types:p,json:{read:o.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.Geometry")],t)}(s)}.apply(null,n))||(e.exports=i)},221:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(151),r(176)],void 0===(i=function(e,t,r,n,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([n.subclass("esri.views.layers.support.Path")],t)}(i)}.apply(null,n))||(e.exports=i)},563:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(158),r(153),r(151),r(184),r(173),r(178),r(237),r(186),r(564),r(414),r(286)],void 0===(i=function(e,t,r,n,i,a,o,s,p,u,l,c,d,y){var h=s.create(),f=[0,0],v=new y(0,0,0,0);return function(e){function t(t){var n=e.call(this,t)||this;return n._imagePromise=null,n.hidpi=!1,n.imageMaxWidth=2048,n.imageMaxHeight=2048,n.imageRotationSupported=!1,n.imageNormalizationSupported=!1,n.update=i.debounce((function(e,t){return r.__awaiter(n,void 0,void 0,(function(){var n,i,a,o,s,u,l,d,y,h=this;return r.__generator(this,(function(r){return n=e.state,i=p.getInfo(n.spatialReference),a=this.hidpi?e.pixelRatio:1,!e.stationary||this.destroyed?[2]:(this.imageRotationSupported?(f[0]=n.size[0],f[1]=n.size[1]):c.getOuterSize(f,n),o=Math.floor(f[0]*a)>this.imageMaxWidth||Math.floor(f[1]*a)>this.imageMaxHeight,s=i&&(n.extent.xmin<i.valid[0]||n.extent.xmax>i.valid[1]),u=!this.imageNormalizationSupported&&s,l=!o&&!u,d=this.imageRotationSupported?n.rotation:0,l?this._imagePromise=this._singleExport(n,f,d,a,t):(y=Math.min(this.imageMaxWidth,this.imageMaxHeight),u&&(y=Math.min(n.worldScreenWidth,y)),this._imagePromise=this._tiledExport(n,y,d,a,t)),[2,this._imagePromise.then((function(e){h._imagePromise=null;var t=h.container.children.slice();h.container.removeAllChildren(),e.forEach(h.container.addChild,h.container),h.disposeSource&&t.forEach((function(e){h.disposeSource(e.source)}),h)})).catch((function(e){throw h._imagePromise=null,e}))])}))}))}),5e3),n}return r.__extends(t,e),t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),t.prototype.updateExports=function(e){for(var t=0,r=this.container.children;t<r.length;t++){var n=r[t];if(!n.visible||!n.stage)return;e(n)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(n.invalidateTexture(),n.requestRender())}},t.prototype._export=function(e,t,r,n,a,o){var s=this;return i.resolve().then((function(){return s.fetchSource(e,Math.floor(t*a),Math.floor(r*a),{rotation:n,pixelRatio:a,signal:o})})).then((function(r){var i=new l.Bitmap(r);return i.x=e.xmin,i.y=e.ymax,i.resolution=e.width/t,i.rotation=n,i.pixelRatio=a,i}))},t.prototype._singleExport=function(e,t,r,n,i){c.getBBox(h,e.center,e.resolution,t);var a=new o(h[0],h[1],h[2],h[3],e.spatialReference);return this._export(a,t[0],t[1],r,n,i).then((function(e){return[e]}))},t.prototype._tiledExport=function(e,t,r,n,a){var s=this,p=u.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),l=new d(p),c=l.getTileCoverage(e);if(!c)return null;var y=[];return c.forEach((function(i,p,u,c){v.set(i,p,u,c),l.getTileBounds(h,v);var d=new o(h[0],h[1],h[2],h[3],e.spatialReference);y.push(s._export(d,t,t,r,n,a))})),i.all(y)},r.__decorate([a.property()],t.prototype,"_imagePromise",void 0),r.__decorate([a.property()],t.prototype,"container",void 0),r.__decorate([a.property()],t.prototype,"disposeSource",void 0),r.__decorate([a.property()],t.prototype,"fetchSource",void 0),r.__decorate([a.property()],t.prototype,"hidpi",void 0),r.__decorate([a.property()],t.prototype,"imageMaxWidth",void 0),r.__decorate([a.property()],t.prototype,"imageMaxHeight",void 0),r.__decorate([a.property()],t.prototype,"imageRotationSupported",void 0),r.__decorate([a.property()],t.prototype,"imageNormalizationSupported",void 0),r.__decorate([a.property()],t.prototype,"requestUpdate",void 0),r.__decorate([a.property({dependsOn:["_imagePromise"]})],t.prototype,"updating",null),r.__decorate([a.subclass("esri.views.2d.layers.support.ExportStrategy")],t)}(n)}.apply(null,n))||(e.exports=i)},564:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Math.PI/180;t.snapToPixel=function(e,t,r){var n=r.resolution,i=r.size;return e[0]=n*(Math.round(t[0]/n)+i[0]%2*.5),e[1]=n*(Math.round(t[1]/n)+i[1]%2*.5),e},t.getOuterSize=function(e,t){var n=t.rotation*r,i=Math.abs(Math.cos(n)),a=Math.abs(Math.sin(n)),o=t.size,s=o[0],p=o[1];return e[0]=Math.round(p*a+s*i),e[1]=Math.round(p*i+s*a),e},t.getBBox=function(e,t,r,n){var i=t[0],a=t[1],o=n[0],s=n[1],p=.5*r;return e[0]=i-p*o,e[1]=a-p*s,e[2]=i+p*o,e[3]=a+p*s,e},t.bboxIntersects=function(e,t){var r=e[0],n=e[1],i=e[2],a=e[3],o=t[0],s=t[1],p=t[2],u=t[3];return!(r>p||i<o||n>u||a<s)}}.apply(null,n))||(e.exports=i)},612:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(154),r(172),r(184),r(170)],void 0===(i=function(e,t,r,n,i,a){Object.defineProperty(t,"__esModule",{value:!0});var o=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],s={84:4326,83:4269,27:4267};function p(e){return o.some((function(t){var r=t[0],n=t[1];return e>=r&&e<=n}))}function u(e,t){var r=t&&t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function l(e,t,r){var n=u(e,t);return n?n.textContent:r}function c(e,t,r){if(!e)return null;var n,o,s,p,u=parseFloat(e.getAttribute("minx")),l=parseFloat(e.getAttribute("miny")),c=parseFloat(e.getAttribute("maxx")),d=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(l)?-Number.MAX_VALUE:l,o=isNaN(u)?-Number.MAX_VALUE:u,s=isNaN(d)?Number.MAX_VALUE:d,p=isNaN(c)?Number.MAX_VALUE:c):(n=isNaN(u)?-Number.MAX_VALUE:u,o=isNaN(l)?-Number.MAX_VALUE:l,s=isNaN(c)?Number.MAX_VALUE:c,p=isNaN(d)?Number.MAX_VALUE:d);var y=new a({wkid:t});return new i({xmin:n,ymin:o,xmax:s,ymax:p,spatialReference:y})}function d(e,t){var r=u(t,e),i=u("DCPType",r);if(i){var a=u("HTTP",i);if(a){var o=u("Get",a);if(o){var s=function(e,t,r,n){var i=u("OnlineResource",r);return i?i.getAttribute("xlink:href"):null}(0,0,o);if(s)return s.indexOf("&")===s.length-1&&(s=s.substring(0,s.length-1)),function(e,t){var r=[],i=n.urlToObject(e);for(var a in i.query)i.query.hasOwnProperty(a)&&-1===t.indexOf(a.toLowerCase())&&r.push(a+"="+i.query[a]);return i.path+(r.length?"?"+r.join("&"):"")}(s,["service","request"])}}}return null}function y(e,t){var r=e.getElementsByTagName("Operation");if(!r||!r.length){var n=u(t,e).getElementsByTagName("Format");return Array.prototype.slice.call(n).map((function(e){return e.textContent}))}var i=Array.prototype.slice.call(r),a=[];return i.forEach((function(e){if(e.getAttribute("name")===t){var r=e.getElementsByTagName("Format");Array.prototype.slice.call(r).forEach((function(e){a.push(e.textContent)}))}})),a}function h(e,t,r){var n=function(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(n.nodeType===Node.ELEMENT_NODE&&n.nodeName===e)return n}return null}(t,e);if(!n)return r;var i=n.textContent;if(null==i||""===i)return r;var a=Number(i);return isNaN(a)?r:a}function f(e,t,r){if(!e)return null;var n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},o=u("LatLonBoundingBox",e),d=u("EX_GeographicBoundingBox",e),y=null;o&&(y=c(o,4326)),d&&((y=new i(0,0,0,0,new a({wkid:4326}))).xmin=parseFloat(l("westBoundLongitude",d,0)),y.ymin=parseFloat(l("southBoundLatitude",d,0)),y.xmax=parseFloat(l("eastBoundLongitude",d,0)),y.ymax=parseFloat(l("northBoundLatitude",d,0))),o||d||(y=new i(-180,-90,180,90,new a({wkid:4326}))),n.minScale=h(e,"MaxScaleDenominator",0),n.maxScale=h(e,"MinScaleDenominator",0);var v=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)n.name=e.textContent||"";else if("Title"===e.nodeName)n.title=e.textContent||"";else if("Abstract"===e.nodeName)n.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var i=e.getAttribute(v);i&&0===i.indexOf("EPSG:")&&(0===(o=parseInt(i.substring(5),10))||isNaN(o)||y||(y="1.3.0"===t?c(e,o,p(o)):c(e,o)));var a=i&&i.indexOf(":");if(a&&a>-1){var o;0===(o=parseInt(i.substring(a+1,i.length),10))||isNaN(o)||(o=s[o]?s[o]:o);var l="1.3.0"===t?c(e,o,p(o)):c(e,o);n.fullExtents.push(l)}}else if(e.nodeName===v)e.textContent.split(" ").forEach((function(e){0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(s[e]&&(e=s[e]),-1===n.spatialReferences.indexOf(e)&&n.spatialReferences.push(e))}));else if("Style"!==e.nodeName||n.legendURL){if("Layer"===e.nodeName){var d=f(e,t,r);d&&(d.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(d))}}else{var h=u("LegendURL",e);if(h){var m=u("OnlineResource",h);m&&(n.legendURL=m.getAttribute("xlink:href"))}}})),n.extent=y&&y.toJSON(),n}t.parseCapabilities=function(e){if(!e)return null;var t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var n=e.documentElement;if("ServiceExceptionReport"===n.nodeName){var a=Array.prototype.slice.call(n.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new r("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",a)}var o=u("Layer",n);if(!o)return null;var s,p,c,h,v="WMS_Capabilities"===n.nodeName||"WMT_MS_Capabilities"===n.nodeName?n.getAttribute("version"):"1.3.0",m=u("Service",n),g=l("Title",m,"")||l("Name",m,""),_=l("AccessConstraints",m,""),x=l("Abstract",m,""),b=parseInt(l("MaxWidth",m,5e3),10),w=parseInt(l("MaxHeight",m,5e3),10),S=u("Capability",n),M=y(n,"GetMap"),N=d(n,"GetMap"),R=f(o,v,t),E=0;if(Array.prototype.slice.call(S.childNodes).forEach((function(e){"Layer"===e.nodeName&&(0===E?s=e:1===E?(R.name&&(R.name="",R.sublayers.push(f(s,v,t))),R.sublayers.push(f(e,v,t))):R.sublayers.push(f(e,v,t)),E++)})),!R)return null;var O=R.fullExtents;if((p=R.sublayers)||(p=[]),0===p.length&&p.push(R),!(c=R.extent)){var P=new i(p[0].extent);R.extent=P.toJSON(),c=R.extent}if(!(h=R.spatialReferences).length&&p.length>0){var A=function(e){var t=[];return e.sublayers.forEach((function(e){!t.length&&e.spatialReferences.length&&(t=e.spatialReferences||A(e))})),t};p.forEach((function(e){h.length||(h=e.spatialReferences||A(e))}))}var L,j=d(n,"GetFeatureInfo");if(j){var C=y(n,"GetFeatureInfo");C.indexOf("text/html")>-1?L="text/html":C.indexOf("text/plain")>-1&&(L="text/plain")}if(!L){var W=function(e){e&&(e.queryable=!1,e.sublayers&&e.sublayers.forEach((function(e){W(e)})))};W(R)}var q=function e(t){var r=[];return t.forEach((function(t){r.push(t),t.sublayers&&t.sublayers.length&&(r=r.concat(e(t.sublayers)),delete t.sublayers)})),r}(p),I=R.minScale||0;return{copyright:_,description:x,extent:c,fullExtents:O,featureInfoFormat:L,featureInfoUrl:j,mapUrl:N,maxImageWidth:b,maxImageHeight:w,maxScale:R.maxScale||0,minScale:I,layers:q,spatialReferences:h,supportedImageFormatTypes:M,title:g,version:v}},t.coordsReversed=p,t.getPopupLayers=function(e){return e.length?e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable})).map((function(e){return e.name})).join(","):""}}.apply(null,n))||(e.exports=i)},724:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(117),r(158),r(167),r(151),r(612)],void 0===(i=function(e,t,r,n,i,a,o){var s={visible:"visibleSublayers"},p=[102100,3857,102113,900913],u=[3395,54004];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._layerHandles=new i,t.extent=null,t._scale=null,t.view=null,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"layer",{set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new i),this._layerHandles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(s[e.propertyName])}))])))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layers",{get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleSublayers",{get:function(){var e=this.layer,t=this.scale,r=e.sublayers,n=[],i=function(e){var r=e.minScale,a=e.maxScale,o=e.sublayers;e.visible&&(0===t||(0===r||t<=r)&&(0===a||t>=a))&&(n.unshift(e),o&&o.forEach(i))};return r&&r.forEach(i),n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wkid",{get:function(){var e=this.extent,t=this.layer.spatialReferences,r=e.spatialReference&&e.spatialReference.wkid;t&&-1===t.indexOf(r)&&e.spatialReference.latestWkid&&(r=e.spatialReference.latestWkid);var n=p.some((function(e){return e===r}));if(!t)return r;if(n){var i=[];t.forEach((function(e){p.indexOf(e)>-1&&i.push(e)})),i.length||t.forEach((function(e){u.indexOf(e)>-1&&i.push(e)})),r=i.length>0?i[0]:p[0]}return r},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){var e=this.extent,t=this.layer,n=this.layers,i=t.imageFormat,a=t.imageTransparency,s=t.spatialReferences,p=t.version,u=this.wkid;s&&-1===s.indexOf(u)&&e.spatialReference.latestWkid&&(u=e.spatialReference.latestWkid);var l=e.xmin,c=e.ymin,d=e.xmax,y=e.ymax,h={bbox:"1.3.0"===t.version&&o.coordsReversed(u)?c+","+l+","+y+","+d:l+","+c+","+d+","+y,format:i,request:"GetMap",service:"WMS",styles:"",transparent:a,version:p};return isNaN(u)||("1.3.0"===p?h.crs="EPSG:"+u:h.srs="EPSG:"+u),r.__assign(r.__assign({},h),{layers:n})},r.__decorate([a.property()],t.prototype,"extent",void 0),r.__decorate([a.property()],t.prototype,"layer",null),r.__decorate([a.property({readOnly:!0,dependsOn:["visibleSublayers"]})],t.prototype,"layers",null),r.__decorate([a.property({type:Number,dependsOn:["view.scale"]})],t.prototype,"scale",null),r.__decorate([a.property()],t.prototype,"view",void 0),r.__decorate([a.property({dependsOn:["layers","layer.imageTransparency"],readOnly:!0})],t.prototype,"version",null),r.__decorate([a.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],t.prototype,"visibleSublayers",null),r.__decorate([a.property()],t.prototype,"wkid",null),r.__decorate([a.subclass("esri.layers.support.ExportWMSImageParameters")],t)}(n)}.apply(null,n))||(e.exports=i)}}]);
//# sourceMappingURL=65.js.map