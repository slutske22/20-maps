(function(){var e={"esri/tasks/support/FeatureSet":187},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[188,32],{187:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(117),r(159),r(174),r(166),r(155),r(152),r(151),r(170),r(163),r(194)],void 0===(n=function(e,t,r,o,n,i,a,p,s,u,y,l){var f=new i.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),c=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return r.__extends(t,e),t.prototype.readFeatures=function(e,t){for(var r=u.fromJSON(t.spatialReference),o=[],i=0;i<e.length;i++){var a=e[i],s=n.fromJSON(a),y=a.geometry&&a.geometry.spatialReference;p.isSome(s.geometry)&&!y&&(s.geometry.spatialReference=r),o.push(s)}return o},t.prototype.writeGeometryType=function(e,t,r,o){if(e)f.write(e,t,r,o);else{var n=this.features;if(n)for(var i=0,a=n;i<a.length;i++){var s=a[i];if(s&&p.isSome(s.geometry))return void f.write(s.geometry.type,t,r,o)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r)for(var o=0,n=r;o<n.length;o++){var i=n[o];i&&p.isSome(i.geometry)&&i.geometry.spatialReference&&(t.spatialReference=i.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var o=t.features[r];if(o.geometry){var n=e&&e[r];o.geometry=n&&n.toJSON()||o.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],o=t[1],n=e.translate,i=n[0],a=n[1],s=this.features,u=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-i)/r)}),(function(e){return Math.round((a-e)/o)})),y=0,l=s.length;y<l;y++)u(p.unwrap(s[y].geometry))||(s.splice(y,1),y--,l--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this.geometryType,t=this.features,r=this.transform;if(!r)return this;for(var o=r.translate,n=o[0],i=o[1],a=r.scale,s=a[0],u=a[1],y=this._getHydrationFunction(e,(function(e){return e*s+n}),(function(e){return i-e*u})),l=0,f=t;l<f.length;l++){var c=f[l].geometry;p.isSome(c)&&y(c)}return this},t.prototype._quantizePoints=function(e,t,r){for(var o,n,i=[],a=0,p=e.length;a<p;a++){var s=e[a];if(a>0){var u=t(s[0]),y=r(s[1]);u===o&&y===n||(i.push([u-o,y-n]),o=u,n=y)}else o=t(s[0]),n=r(s[1]),i.push([o,n])}return i.length>0?i:null},t.prototype._getQuantizationFunction=function(e,t,r){var o=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var n=y.isPolygon(e)?e.rings:e.paths,i=[],a=0,p=n.length;a<p;a++){var s=n[a],u=o._quantizePoints(s,t,r);u&&i.push(u)}return i.length>0?(y.isPolygon(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?function(e){var n;return(n=o._quantizePoints(e.points,t,r)).length>0?(e.points=n,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var o,n,i=y.isPolygon(e)?e.rings:e.paths,a=0,p=i.length;a<p;a++)for(var s=i[a],u=0,l=s.length;u<l;u++){var f=s[u];u>0?(o+=f[0],n+=f[1]):(o=f[0],n=f[1]),f[0]=t(o),f[1]=r(n)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var o,n,i=e.points,a=0,p=i.length;a<p;a++){var s=i[a];a>0?(o+=s[0],n+=s[1]):(o=s[0],n=s[1]),s[0]=t(o),s[1]=r(n)}}:void 0},r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r.__decorate([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r.__decorate([s.property({type:[n],json:{write:!0}})],t.prototype,"features",void 0),r.__decorate([s.reader("features")],t.prototype,"readFeatures",null),r.__decorate([s.property({type:[l],json:{write:!0}})],t.prototype,"fields",void 0),r.__decorate([s.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],t.prototype,"geometryType",void 0),r.__decorate([s.writer("geometryType")],t.prototype,"writeGeometryType",null),r.__decorate([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r.__decorate([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r.__decorate([s.property({types:o.geometryTypes,json:{read:y.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r.__decorate([s.property({type:u,json:{write:!0}})],t.prototype,"spatialReference",void 0),r.__decorate([s.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r.__decorate([s.property({json:{write:!0}})],t.prototype,"transform",void 0),r.__decorate([s.subclass("esri.tasks.support.FeatureSet")],t)}(a.JSONSupport);return c.prototype.toJSON.isDefaultToJSON=!0,c||(c={}),c}.apply(null,o))||(e.exports=n)}}]);
//# sourceMappingURL=188.js.map