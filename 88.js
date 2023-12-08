(function(){var e={"esri/views/layers/support/ClipArea":176,"esri/views/layers/support/ClipRect":209,"esri/views/2d/layers/LayerView2D":219,"esri/views/layers/support/Geometry":220,"esri/views/layers/support/Path":221,"esri/views/2d/layers/support/ExportStrategy":563,"esri/views/2d/viewStateUtils":564,"esri/views/2d/layers/BaseDynamicLayerView2D":2100},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{176:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(155),r(151)],void 0===(o=function(e,t,r,i,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([o.subclass("esri.views.layers.support.ClipArea")],t)}(i.JSONSupport)}.apply(null,i))||(e.exports=o)},209:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(151),r(176)],void 0===(o=function(e,t,r,i,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=r.__decorate([i.subclass("esri.views.layers.support.ClipRect")],t)}(o)}.apply(null,i))||(e.exports=o)},2100:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(156),r(153),r(151),r(544),r(219),r(563),r(218),r(285)],void 0===(o=function(e,t,r,i,o,n,a,p,s,u,d){var c=i.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new a.BitmapContainer,t}return r.__extends(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){o.isAbortError(e)||c.error(e)})),this.notifyChange("updating")},t.prototype.attach=function(){this.strategy=new s({container:this.container,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})},t.prototype.detach=function(){this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.fetchBitmapData=function(e,t,r){return this.layer.fetchImage(e,t,r,{timestamp:this.refreshTimestamp})},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},r.__decorate([n.property()],t.prototype,"strategy",void 0),r.__decorate([n.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),r.__decorate([n.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],t)}(d.RefreshableLayerView(p.LayerView2DMixin(u)))}.apply(null,i))||(e.exports=o)},219:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(169),r(254),r(157),r(151),r(186),r(176),r(209),r(220),r(221)],void 0===(o=function(e,t,r,i,o,n,a,p,s,u,d,c){Object.defineProperty(t,"__esModule",{value:!0});var l=i.ofType({key:"type",base:s,typeMap:{rect:u,path:c,geometry:d}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new l,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new p.Container),this.handles.add([n.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),n.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),n.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,o=r.maxScale;if(null!=i&&null!=o){var n=!i,a=!o;!n&&e<=i&&(n=!0),!a&&e>=o&&(a=!0),t=n&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([a.property({type:l,set:function(e){var t=o.referenceSetter(e,this._get("clips"),l);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([a.property()],t.prototype,"moving",void 0),r.__decorate([a.property()],t.prototype,"attached",void 0),r.__decorate([a.property()],t.prototype,"container",void 0),r.__decorate([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([a.property()],t.prototype,"updateRequested",void 0),r.__decorate([a.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([a.property()],t.prototype,"view",void 0),r.__decorate([a.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}.apply(null,i))||(e.exports=o)},220:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(159),r(151),r(215),r(163),r(176)],void 0===(o=function(e,t,r,i,o,n,a,p){var s={base:n,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var i;return r.__extends(t,e),i=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},r.__decorate([o.property({types:s,json:{read:a.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),i=r.__decorate([o.subclass("esri.views.layers.support.Geometry")],t)}(p)}.apply(null,i))||(e.exports=o)},221:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(151),r(176)],void 0===(o=function(e,t,r,i,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([i.subclass("esri.views.layers.support.Path")],t)}(o)}.apply(null,i))||(e.exports=o)},563:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(158),r(153),r(151),r(184),r(173),r(178),r(237),r(186),r(564),r(414),r(286)],void 0===(o=function(e,t,r,i,o,n,a,p,s,u,d,c,l,y){var h=p.create(),f=[0,0],v=new y(0,0,0,0);return function(e){function t(t){var i=e.call(this,t)||this;return i._imagePromise=null,i.hidpi=!1,i.imageMaxWidth=2048,i.imageMaxHeight=2048,i.imageRotationSupported=!1,i.imageNormalizationSupported=!1,i.update=o.debounce((function(e,t){return r.__awaiter(i,void 0,void 0,(function(){var i,o,n,a,p,u,d,l,y,h=this;return r.__generator(this,(function(r){return i=e.state,o=s.getInfo(i.spatialReference),n=this.hidpi?e.pixelRatio:1,!e.stationary||this.destroyed?[2]:(this.imageRotationSupported?(f[0]=i.size[0],f[1]=i.size[1]):c.getOuterSize(f,i),a=Math.floor(f[0]*n)>this.imageMaxWidth||Math.floor(f[1]*n)>this.imageMaxHeight,p=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),u=!this.imageNormalizationSupported&&p,d=!a&&!u,l=this.imageRotationSupported?i.rotation:0,d?this._imagePromise=this._singleExport(i,f,l,n,t):(y=Math.min(this.imageMaxWidth,this.imageMaxHeight),u&&(y=Math.min(i.worldScreenWidth,y)),this._imagePromise=this._tiledExport(i,y,l,n,t)),[2,this._imagePromise.then((function(e){h._imagePromise=null;var t=h.container.children.slice();h.container.removeAllChildren(),e.forEach(h.container.addChild,h.container),h.disposeSource&&t.forEach((function(e){h.disposeSource(e.source)}),h)})).catch((function(e){throw h._imagePromise=null,e}))])}))}))}),5e3),i}return r.__extends(t,e),t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),t.prototype.updateExports=function(e){for(var t=0,r=this.container.children;t<r.length;t++){var i=r[t];if(!i.visible||!i.stage)return;e(i)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(i.invalidateTexture(),i.requestRender())}},t.prototype._export=function(e,t,r,i,n,a){var p=this;return o.resolve().then((function(){return p.fetchSource(e,Math.floor(t*n),Math.floor(r*n),{rotation:i,pixelRatio:n,signal:a})})).then((function(r){var o=new d.Bitmap(r);return o.x=e.xmin,o.y=e.ymax,o.resolution=e.width/t,o.rotation=i,o.pixelRatio=n,o}))},t.prototype._singleExport=function(e,t,r,i,o){c.getBBox(h,e.center,e.resolution,t);var n=new a(h[0],h[1],h[2],h[3],e.spatialReference);return this._export(n,t[0],t[1],r,i,o).then((function(e){return[e]}))},t.prototype._tiledExport=function(e,t,r,i,n){var p=this,s=u.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),d=new l(s),c=d.getTileCoverage(e);if(!c)return null;var y=[];return c.forEach((function(o,s,u,c){v.set(o,s,u,c),d.getTileBounds(h,v);var l=new a(h[0],h[1],h[2],h[3],e.spatialReference);y.push(p._export(l,t,t,r,i,n))})),o.all(y)},r.__decorate([n.property()],t.prototype,"_imagePromise",void 0),r.__decorate([n.property()],t.prototype,"container",void 0),r.__decorate([n.property()],t.prototype,"disposeSource",void 0),r.__decorate([n.property()],t.prototype,"fetchSource",void 0),r.__decorate([n.property()],t.prototype,"hidpi",void 0),r.__decorate([n.property()],t.prototype,"imageMaxWidth",void 0),r.__decorate([n.property()],t.prototype,"imageMaxHeight",void 0),r.__decorate([n.property()],t.prototype,"imageRotationSupported",void 0),r.__decorate([n.property()],t.prototype,"imageNormalizationSupported",void 0),r.__decorate([n.property()],t.prototype,"requestUpdate",void 0),r.__decorate([n.property({dependsOn:["_imagePromise"]})],t.prototype,"updating",null),r.__decorate([n.subclass("esri.views.2d.layers.support.ExportStrategy")],t)}(i)}.apply(null,i))||(e.exports=o)},564:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Math.PI/180;t.snapToPixel=function(e,t,r){var i=r.resolution,o=r.size;return e[0]=i*(Math.round(t[0]/i)+o[0]%2*.5),e[1]=i*(Math.round(t[1]/i)+o[1]%2*.5),e},t.getOuterSize=function(e,t){var i=t.rotation*r,o=Math.abs(Math.cos(i)),n=Math.abs(Math.sin(i)),a=t.size,p=a[0],s=a[1];return e[0]=Math.round(s*n+p*o),e[1]=Math.round(s*o+p*n),e},t.getBBox=function(e,t,r,i){var o=t[0],n=t[1],a=i[0],p=i[1],s=.5*r;return e[0]=o-s*a,e[1]=n-s*p,e[2]=o+s*a,e[3]=n+s*p,e},t.bboxIntersects=function(e,t){var r=e[0],i=e[1],o=e[2],n=e[3],a=t[0],p=t[1],s=t[2],u=t[3];return!(r>s||o<a||i>u||n<p)}}.apply(null,i))||(e.exports=o)}}]);
//# sourceMappingURL=88.js.map