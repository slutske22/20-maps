(function(){var e={"esri/layers/GeoRSSLayer":743},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{743:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(117),t(100),t(165),t(239),t(152),t(225),t(153),t(151),t(208),t(244),t(240),t(298),t(265),t(233),t(629),t(429),t(354)],void 0===(i=function(e,r,t,o,i,n,l,a,p,s,u,c,y,d,S,f,_,v,h){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var o=e.apply(this,r)||this;return o.description=null,o.title=null,o.lineSymbol=null,o.pointSymbol=null,o.polygonSymbol=null,o.outSpatialReference=null,o.url=null,o.type="geo-rss",o}return t.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t.__assign({url:e},r):e},r.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers.forEach((function(e){var r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&r.outline&&-1!==r.outline.style.indexOf("esriSFS")&&(r.outline.style="esriSLSSolid")})),r.featureCollection.layers},r.prototype.load=function(e){var r=this,t=l.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((function(){return r._fetchService(t)}),(function(){return r._fetchService(t)}))),p.resolve(this)},r.prototype._fetchService=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,i(o.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return r=t.sent().data,this.read(r,{origin:"service"}),[2]}}))}))},t.__decorate([s.property()],r.prototype,"description",void 0),t.__decorate([s.property()],r.prototype,"title",void 0),t.__decorate([s.property()],r.prototype,"featureCollections",void 0),t.__decorate([s.reader("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),t.__decorate([s.property({type:v})],r.prototype,"lineSymbol",void 0),t.__decorate([s.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([s.property({types:n.symbolTypes,json:{read:h.read}})],r.prototype,"pointSymbol",void 0),t.__decorate([s.property({type:_})],r.prototype,"polygonSymbol",void 0),t.__decorate([s.property()],r.prototype,"outSpatialReference",void 0),t.__decorate([s.property(f.url)],r.prototype,"url",void 0),t.__decorate([s.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),t.__decorate([s.subclass("esri.layers.GeoRSSLayer")],r)}(d.RefreshableLayer(c.OperationalLayer(y.PortalLayer(S.ScaleRangeLayer(a.MultiOriginJSONMixin(u))))))}.apply(null,o))||(e.exports=i)}}]);
//# sourceMappingURL=141.js.map