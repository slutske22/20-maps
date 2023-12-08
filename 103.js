(function(){var e={"esri/views/layers/support/ClipArea":176,"esri/views/layers/support/ClipRect":209,"esri/views/2d/layers/LayerView2D":219,"esri/views/layers/support/Geometry":220,"esri/views/layers/support/Path":221,"esri/views/2d/layers/RouteLayerView2D":2110},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{176:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(117),r(155),r(151)],void 0===(n=function(e,t,r,i,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([n.subclass("esri.views.layers.support.ClipArea")],t)}(i.JSONSupport)}.apply(null,i))||(e.exports=n)},209:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(117),r(151),r(176)],void 0===(n=function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.ClipRect")],t)}(n)}.apply(null,i))||(e.exports=n)},2110:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(117),r(167),r(153),r(151),r(219),r(610),r(218)],void 0===(n=function(e,t,r,i,n,o,p,s,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new i,t._popupTemplates=new Map,t.graphicsViews=[],t}return r.__extends(t,e),t.prototype.hitTest=function(e,t){var r=this;if(this.suspended||!this.graphicsViews.length)return n.resolve();var i=this.graphicsViews.map((function(r){return r.hitTest(e,t)}));return n.all(i).then((function(e){return e.filter((function(e,t){return e&&(e.popupTemplate=r._popupTemplates.get(r.graphicsViews[t]),e.layer=r.layer,e.sourceLayer=r.layer),!!e}))[0]||null}))},t.prototype.update=function(e){if(this.graphicsViews)for(var t=0,r=this.graphicsViews;t<r.length;t++)r[t].processUpdate(e)},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach((function(t){var r=new s.default({view:e.view,graphics:t.source,requestUpdateCallback:function(){return e.requestUpdate()}});r.renderer=t.renderer,e._popupTemplates.set(r,t.popupTemplate),e.graphicsViews.push(r),e.container.addChild(r.container)}))},t.prototype.detach=function(){this.container.removeAllChildren();for(var e=0,t=this.graphicsViews;e<t.length;e++){var r=t[e];r.destroy(),r.view=null,r.renderer=null}this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null},t.prototype.moveStart=function(){},t.prototype.moveEnd=function(){},t.prototype.viewChange=function(){for(var e=0,t=this.graphicsViews;e<t.length;e++)t[e].viewChange()},r.__decorate([o.subclass("esri.views.2d.layers.RouteLayerView2D")],t)}(p.LayerView2DMixin(a))}.apply(null,i))||(e.exports=n)},219:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(117),r(169),r(254),r(157),r(151),r(186),r(176),r(209),r(220),r(221)],void 0===(n=function(e,t,r,i,n,o,p,s,a,u,l,c){Object.defineProperty(t,"__esModule",{value:!0});var d=i.ofType({key:"type",base:a,typeMap:{rect:u,path:c,geometry:l}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new d,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.handles.add([o.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),o.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),o.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,p=!n;!o&&e<=i&&(o=!0),!p&&e>=n&&(p=!0),t=o&&p}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([p.property({type:d,set:function(e){var t=n.referenceSetter(e,this._get("clips"),d);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([p.property()],t.prototype,"moving",void 0),r.__decorate([p.property()],t.prototype,"attached",void 0),r.__decorate([p.property()],t.prototype,"container",void 0),r.__decorate([p.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([p.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([p.property()],t.prototype,"updateRequested",void 0),r.__decorate([p.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([p.property()],t.prototype,"view",void 0),r.__decorate([p.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}.apply(null,i))||(e.exports=n)},220:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(117),r(159),r(151),r(215),r(163),r(176)],void 0===(n=function(e,t,r,i,n,o,p,s){var a={base:o,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var i;return r.__extends(t,e),i=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},r.__decorate([n.property({types:a,json:{read:p.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(s)}.apply(null,i))||(e.exports=n)},221:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(117),r(151),r(176)],void 0===(n=function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([i.subclass("esri.views.layers.support.Path")],t)}(n)}.apply(null,i))||(e.exports=n)}}]);
//# sourceMappingURL=103.js.map