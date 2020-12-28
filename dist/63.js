(function(){var e={"esri/tasks/support/FeatureSet":187,"esri/geometry/support/normalizeUtils":234,"esri/tasks/geometry/cut":279,"esri/tasks/geometry/simplify":280,"esri/tasks/support/GPMessage":511,"esri/core/queryUtils":714,"esri/tasks/mixins/NAServiceDescription":715,"esri/tasks/support/NAMessage":716,"esri/tasks/support/DirectionsFeatureSet":1026,"esri/tasks/ClosestFacilityTask":2034,"esri/tasks/support/ClosestFacilitySolveResult":2035},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[63,32,188],{1026:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(159),r(174),r(152),r(151),r(187)],void 0===(o=function(e,t,r,n,o,i,s,a){return function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.features=null,r.geometryType="polyline",r.routeId=null,r.routeName=null,r.totalDriveTime=null,r.totalLength=null,r.totalTime=null,r}return r.__extends(t,e),t.prototype.readFeatures=function(e,t){var r=this;(e||[]).forEach((function(e){r._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));var s=n.SpatialReference.fromJSON(t.spatialReference);return e.map((function(e){var t=o.fromJSON(e),r=e.geometry&&e.geometry.spatialReference;return t.geometry&&!r&&(i.unwrap(t.geometry).spatialReference=s),t.strings=e.strings,t.events=(e.events||[]).map((function(t){var r=new o({geometry:new n.Point({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))},Object.defineProperty(t.prototype,"mergedGeometry",{get:function(){if(!this.features)return null;var e=this.features.map((function(e){var t=e.geometry;return i.unwrap(t)})),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"strings",{get:function(){return this.features.map((function(e){return e.strings}))},enumerable:!0,configurable:!0}),t.prototype._decompressFeatureGeometry=function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)},t.prototype._decompressGeometry=function(e,t){var r,n,o,i,s,a,p,u,l=0,c=0,f=0,y=0,d=[],v=0,g=0,h=0;if((s=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(s=[]),0===parseInt(s[v],32)){v=2;var m=parseInt(s[v],32);v++,a=parseInt(s[v],32),v++,1&m&&(g=s.indexOf("|")+1,p=parseInt(s[g],32),g++),2&m&&(h=s.indexOf("|",g)+1,u=parseInt(s[h],32),h++)}else a=parseInt(s[v],32),v++;for(;v<s.length&&"|"!==s[v];){r=parseInt(s[v],32)+l,v++,l=r,n=parseInt(s[v],32)+c,v++,c=n;var _=[r/a,n/a];g&&(i=parseInt(s[g],32)+f,g++,f=i,_.push(i/p)),h&&(o=parseInt(s[h],32)+y,h++,y=o,_.push(o/u)),d.push(_)}return{paths:[d],hasZ:g>0,hasM:h>0,spatialReference:t}},t.prototype._mergePolylinesToSinglePath=function(e,t){var r=[];(e||[]).forEach((function(e){e.paths.forEach((function(e){r=r.concat(e)}))}));var o=[],i=[0,0];return r.forEach((function(e){e[0]===i[0]&&e[1]===i[1]||(o.push(e),i=e)})),new n.Polyline({paths:[o]},t)},r.__decorate([s.property({type:n.Extent,json:{read:{source:"summary.envelope"}}})],t.prototype,"extent",void 0),r.__decorate([s.property()],t.prototype,"features",void 0),r.__decorate([s.reader("features")],t.prototype,"readFeatures",null),r.__decorate([s.property()],t.prototype,"geometryType",void 0),r.__decorate([s.property({readOnly:!0,dependsOn:["features","extent.spatialReference"]})],t.prototype,"mergedGeometry",null),r.__decorate([s.property()],t.prototype,"routeId",void 0),r.__decorate([s.property()],t.prototype,"routeName",void 0),r.__decorate([s.property({value:null,readOnly:!0,dependsOn:["features"]})],t.prototype,"strings",null),r.__decorate([s.property({json:{read:{source:"summary.totalDriveTime"}}})],t.prototype,"totalDriveTime",void 0),r.__decorate([s.property({json:{read:{source:"summary.totalLength"}}})],t.prototype,"totalLength",void 0),r.__decorate([s.property({json:{read:{source:"summary.totalTime"}}})],t.prototype,"totalTime",void 0),r.__decorate([s.subclass("esri.tasks.support.DirectionsFeatureSet")],t)}(a)}.apply(null,n))||(e.exports=o)},187:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(159),r(174),r(166),r(155),r(152),r(151),r(170),r(163),r(194)],void 0===(o=function(e,t,r,n,o,i,s,a,p,u,l,c){var f=new i.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),y=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return r.__extends(t,e),t.prototype.readFeatures=function(e,t){for(var r=u.fromJSON(t.spatialReference),n=[],i=0;i<e.length;i++){var s=e[i],p=o.fromJSON(s),l=s.geometry&&s.geometry.spatialReference;a.isSome(p.geometry)&&!l&&(p.geometry.spatialReference=r),n.push(p)}return n},t.prototype.writeGeometryType=function(e,t,r,n){if(e)f.write(e,t,r,n);else{var o=this.features;if(o)for(var i=0,s=o;i<s.length;i++){var p=s[i];if(p&&a.isSome(p.geometry))return void f.write(p.geometry.type,t,r,n)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r)for(var n=0,o=r;n<o.length;n++){var i=o[n];i&&a.isSome(i.geometry)&&i.geometry.spatialReference&&(t.spatialReference=i.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var n=t.features[r];if(n.geometry){var o=e&&e[r];n.geometry=o&&o.toJSON()||n.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],n=t[1],o=e.translate,i=o[0],s=o[1],p=this.features,u=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-i)/r)}),(function(e){return Math.round((s-e)/n)})),l=0,c=p.length;l<c;l++)u(a.unwrap(p[l].geometry))||(p.splice(l,1),l--,c--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this.geometryType,t=this.features,r=this.transform;if(!r)return this;for(var n=r.translate,o=n[0],i=n[1],s=r.scale,p=s[0],u=s[1],l=this._getHydrationFunction(e,(function(e){return e*p+o}),(function(e){return i-e*u})),c=0,f=t;c<f.length;c++){var y=f[c].geometry;a.isSome(y)&&l(y)}return this},t.prototype._quantizePoints=function(e,t,r){for(var n,o,i=[],s=0,a=e.length;s<a;s++){var p=e[s];if(s>0){var u=t(p[0]),l=r(p[1]);u===n&&l===o||(i.push([u-n,l-o]),n=u,o=l)}else n=t(p[0]),o=r(p[1]),i.push([n,o])}return i.length>0?i:null},t.prototype._getQuantizationFunction=function(e,t,r){var n=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var o=l.isPolygon(e)?e.rings:e.paths,i=[],s=0,a=o.length;s<a;s++){var p=o[s],u=n._quantizePoints(p,t,r);u&&i.push(u)}return i.length>0?(l.isPolygon(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?function(e){var o;return(o=n._quantizePoints(e.points,t,r)).length>0?(e.points=o,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var n,o,i=l.isPolygon(e)?e.rings:e.paths,s=0,a=i.length;s<a;s++)for(var p=i[s],u=0,c=p.length;u<c;u++){var f=p[u];u>0?(n+=f[0],o+=f[1]):(n=f[0],o=f[1]),f[0]=t(n),f[1]=r(o)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var n,o,i=e.points,s=0,a=i.length;s<a;s++){var p=i[s];s>0?(n+=p[0],o+=p[1]):(n=p[0],o=p[1]),p[0]=t(n),p[1]=r(o)}}:void 0},r.__decorate([p.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r.__decorate([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r.__decorate([p.property({type:[o],json:{write:!0}})],t.prototype,"features",void 0),r.__decorate([p.reader("features")],t.prototype,"readFeatures",null),r.__decorate([p.property({type:[c],json:{write:!0}})],t.prototype,"fields",void 0),r.__decorate([p.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],t.prototype,"geometryType",void 0),r.__decorate([p.writer("geometryType")],t.prototype,"writeGeometryType",null),r.__decorate([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r.__decorate([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r.__decorate([p.property({types:n.geometryTypes,json:{read:l.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r.__decorate([p.property({type:u,json:{write:!0}})],t.prototype,"spatialReference",void 0),r.__decorate([p.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r.__decorate([p.property({json:{write:!0}})],t.prototype,"transform",void 0),r.__decorate([p.subclass("esri.tasks.support.FeatureSet")],t)}(s.JSONSupport);return y.prototype.toJSON.isDefaultToJSON=!0,y||(y={}),y}.apply(null,n))||(e.exports=o)},2034:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(165),r(153),r(714),r(151),r(234),r(327),r(715),r(2035)],void 0===(o=function(e,t,r,n,o,i,s,a,p,u,l){var c=i.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(e){function t(t){var r=e.call(this,t)||this;return r.url=null,r}return r.__extends(t,e),t.prototype.solve=function(e,t){var i=this,s=[],p=[],u={},f={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,p,"incidents.features",u),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,p,"facilities.features",u),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,p,"pointBarriers.features",u),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,p,"polylineBarriers.features",u),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,p,"polygonBarriers.features",u),a.normalizeCentralMeridian(p).then((function(e){for(var t in u){var r=u[t];s.push(t),f[t]=e.slice(r[0],r[1])}return i._isInputGeometryZAware(f,s)?i.getServiceDescription():o.resolve({dontCheck:!0})})).then((function(o){("dontCheck"in o?o.dontCheck:o.hasZ)||i._dropZValuesOffInputGeometry(f,s);var a=function(t){f[t].forEach((function(r,n){e.get(t)[n].geometry=r}))};for(var p in f)a(p);var u={query:r.__assign(r.__assign(r.__assign({},i.parsedUrl.query),{f:"json"}),c.toQueryParams(e))};return(i.requestOptions||t)&&(u=r.__assign(r.__assign(r.__assign({},i.requestOptions),t),u)),n(i.parsedUrl.path+"/solveClosestFacility",u)})).then((function(e){return l.fromJSON(e.data)}))},t.prototype._collectGeometries=function(e,t,r,n){n[r]=[t.length,t.length+e.length],e.forEach((function(e){t.push(e.geometry)}))},r.__decorate([s.property()],t.prototype,"url",void 0),r.__decorate([s.subclass("esri.tasks.ClosestFacilityTask")],t)}(u.NAServiceDescriptionMixin(p))}.apply(null,n))||(e.exports=o)},2035:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(159),r(174),r(155),r(152),r(151),r(760),r(170),r(1026),r(187),r(716)],void 0===(o=function(e,t,r,n,o,i,s,a,p,u,l,c,f){function y(e){return c.fromJSON(e).features.map((function(e){return e.geometry}))}return function(e){function t(t){var r=e.call(this,t)||this;return r.directions=null,r.facilities=null,r.incidents=null,r.messages=null,r.pointBarriers=null,r.polylineBarriers=null,r.polygonBarriers=null,r.routes=null,r}return r.__extends(t,e),t.prototype.readFacilities=function(e){return y(e)},t.prototype.readIncidents=function(e){return y(e)},t.prototype.readPointBarriers=function(e,t){return y(t.barriers)},t.prototype.readPolylineBarriers=function(e){return y(e)},t.prototype.readPolygonBarriers=function(e){return y(e)},t.prototype.readRoutes=function(e){return function(e){return e.features.map((function(t){var r=u.fromJSON(e.spatialReference),n=o.fromJSON(t);return s.isSome(n.geometry)&&(n.geometry.spatialReference=r),n}))}(e)},r.__decorate([a.property({type:l})],t.prototype,"directions",void 0),r.__decorate([a.property({type:[n.Point]})],t.prototype,"facilities",void 0),r.__decorate([p.reader("facilities")],t.prototype,"readFacilities",null),r.__decorate([a.property({type:[n.Point]})],t.prototype,"incidents",void 0),r.__decorate([p.reader("incidents")],t.prototype,"readIncidents",null),r.__decorate([a.property({type:[f]})],t.prototype,"messages",void 0),r.__decorate([a.property({type:[n.Point]})],t.prototype,"pointBarriers",void 0),r.__decorate([p.reader("pointBarriers",["barriers"])],t.prototype,"readPointBarriers",null),r.__decorate([a.property({type:[n.Polyline]})],t.prototype,"polylineBarriers",void 0),r.__decorate([p.reader("polylineBarriers")],t.prototype,"readPolylineBarriers",null),r.__decorate([a.property({type:[n.Polygon]})],t.prototype,"polygonBarriers",void 0),r.__decorate([p.reader("polygonBarriers")],t.prototype,"readPolygonBarriers",null),r.__decorate([a.property({type:[o]})],t.prototype,"routes",void 0),r.__decorate([p.reader("routes")],t.prototype,"readRoutes",null),r.__decorate([a.subclass("esri.tasks.support.ClosestFacilitySolveResult")],t)}(i.JSONSupport)}.apply(null,n))||(e.exports=o)},234:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(100),r(154),r(156),r(152),r(153),r(232),r(259),r(170),r(178),r(197),r(279),r(280)],void 0===(o=function(e,t,r,n,o,i,s,a,p,u,l,c,f,y,d){Object.defineProperty(t,"__esModule",{value:!0});var v=i.getLogger("esri.geometry.support.normalizeUtils"),g={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new u({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:l.WebMercator}),minus180Line:new u({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:l.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new u({paths:[[[180,-180],[180,180]]],spatialReference:l.WGS84}),minus180Line:new u({paths:[[[-180,-180],[-180,180]]],spatialReference:l.WGS84})}};function h(e){return"polygon"===e.type}function m(e){return h(e)?e.rings:e.paths}function _(e,t){return Math.ceil((e-t)/(2*t))}function x(e,t){for(var r=0,n=m(e);r<n.length;r++)for(var o=0,i=n[r];o<i.length;o++)i[o][0]+=t;return e}function w(e){for(var t=[],r=0,n=0,o=0;o<e.length;o++){for(var i=e[o],s=null,a=0;a<i.length;a++)s=i[a],t.push(s),0===a?n=r=s[0]:(r=Math.min(r,s[0]),n=Math.max(n,s[0]));s&&t.push([(r+n)/2,0])}return t}function b(e,t){if(!(e instanceof u||e instanceof p)){var r="straightLineDensify: the input geometry is neither polyline nor polygon";throw v.error(r),new o(r)}for(var n=[],i=0,s=m(e);i<s.length;i++){var a=s[i],l=[];n.push(l),l.push([a[0][0],a[0][1]]);for(var c=0;c<a.length-1;c++){var f=a[c][0],y=a[c][1],d=a[c+1][0],g=a[c+1][1],_=Math.sqrt((d-f)*(d-f)+(g-y)*(g-y)),x=(g-y)/_,w=(d-f)/_,b=_/t;if(b>1){for(var T=1;T<=b-1;T++){var S=T*t,M=w*S+f,N=x*S+y;l.push([M,N])}var P=(_+Math.floor(b-1)*t)/2,O=w*P+f,j=x*P+y;l.push([O,j])}l.push([d,g])}}return h(e)?new p({rings:n,spatialReference:e.spatialReference}):new u({paths:n,spatialReference:e.spatialReference})}function T(e,t,r){if(t){var n=b(e,1e6);e=f.webMercatorToGeographic(n,!0)}return r&&(e=x(e,r)),e}function S(e,t,r){var n;if(Array.isArray(e))if((n=e[0])>t){var o=_(n,t);e[0]=n+o*(-2*t)}else n<r&&(o=_(n,r),e[0]=n+o*(-2*r));else(n=e.x)>t?(o=_(n,t),e=e.clone().offset(o*(-2*t),0)):n<r&&(o=_(n,r),e=e.clone().offset(o*(-2*r),0));return e}t.straightLineDensify=b,t.normalizeCentralMeridian=function e(t,o,i){return r.__awaiter(this,void 0,void 0,(function(){var l,v,h,w,b,M,N,P,O,j,R,J,k,A,B,G,F,I,D,q,z,C,E,L,U,Z,W,X,Q,V,H,$,K,Y,ee,te,re;return r.__generator(this,(function(r){switch(r.label){case 0:if(!Array.isArray(t))return[2,e([t],o)];for(l=o?o.url:n.geometryServiceUrl,j=0,R=[],J=[],k=0,A=t;k<A.length;k++)B=A[k],s.isNone(B)?J.push(B):(v||(v=B.spatialReference,h=c.getInfo(v),w=v.isWebMercator,b=g[N=w?102100:4326].maxX,M=g[N].minX,P=g[N].plus180Line,O=g[N].minus180Line),h?"mesh"===B.type?J.push(B):"point"===B.type?J.push(S(B.clone(),b,M)):"multipoint"===B.type?((G=B.clone()).points=G.points.map((function(e){return S(e,b,M)})),J.push(G)):"extent"===B.type?(I=B.clone(),F=I._normalize(!1,!1,h),J.push(F.rings?new p(F):F)):B.extent?(I=B.extent,D=_(I.xmin,M),z=0==(q=D*(2*b))?B.clone():x(B.clone(),q),I.offset(q,0),I.intersects(P)&&I.xmax!==b?(j=I.xmax>j?I.xmax:j,z=T(z,w),R.push(z),J.push("cut")):I.intersects(O)&&I.xmin!==M?(j=I.xmax*(2*b)>j?I.xmax*(2*b):j,z=T(z,w,360),R.push(z),J.push("cut")):J.push(z)):J.push(B.clone()):J.push(B));for(C=_(j,b),E=-90,L=C,U=new u;C>0;)Z=360*C-180,U.addPath([[Z,E],[Z,-1*E]]),E*=-1,C--;return R.length>0&&L>0?[4,y.cut(l,R,U,i)]:[3,3];case 1:for(W=r.sent(),X=function(e,t){for(var r=-1,n=function(n){for(var o=t.cutIndexes[n],i=t.geometries[n],s=m(i),a=function(e){var t=s[e];t.some((function(r){if(r[0]<180)return!0;for(var n=0,o=0;o<t.length;o++){var s=t[o][0];n=s>n?s:n}for(var a=-360*_(n=Number(n.toFixed(9)),180),p=0;p<t.length;p++){var u=i.getPoint(e,p);i.setPoint(e,p,u.clone().offset(a,0))}return!0}))},p=0;p<s.length;p++)a(p);if(o===r){if("polygon"===e[0].type)for(var u=0,l=m(i);u<l.length;u++){var c=l[u];e[o]=e[o].addRing(c)}else if(function(e){return"polyline"===e[0].type}(e))for(var f=0,y=m(i);f<y.length;f++){var d=y[f];e[o]=e[o].addPath(d)}}else r=o,e[o]=i},o=0;o<t.cutIndexes.length;o++)n(o);return e}(R,W),Q=[],V=[],ee=0;ee<J.length;ee++)"cut"!==(te=J[ee])?V.push(te):(re=X.shift(),H=t[ee],s.isSome(H)&&"polygon"===H.type&&H.rings&&H.rings.length>1&&re.rings.length>=H.rings.length?(Q.push(re),V.push("simplify")):V.push(w?f.geographicToWebMercator(re):re));return Q.length?[4,d.simplify(l,Q,i)]:[2,V];case 2:for($=r.sent(),K=[],ee=0;ee<V.length;ee++)"simplify"!==(te=V[ee])?K.push(te):K.push(w?f.geographicToWebMercator($.shift()):$.shift());return[2,K];case 3:for(Y=[],ee=0;ee<J.length;ee++)"cut"!==(te=J[ee])?Y.push(te):(re=R.shift(),Y.push(!0===w?f.geographicToWebMercator(re):re));return[2,a.resolve(Y)]}}))}))},t.getDenormalizedExtent=function(e){var t;if(!e)return null;var r=e.extent;if(!r)return null;var n=e.spatialReference&&c.getInfo(e.spatialReference);if(!n)return r;var o,i=n.valid,s=i[0],a=i[1],p=2*a,u=r.width,l=r.xmin,f=r.xmax;if(l=(t=[f,l])[0],f=t[1],"extent"===e.type||0===u||u<=a||u>p||l<s||f>a)return r;switch(e.type){case"polygon":if(!(e.rings.length>1))return r;o=w(e.rings);break;case"polyline":if(!(e.paths.length>1))return r;o=w(e.paths);break;case"multipoint":o=e.points}for(var y=r.clone(),d=0;d<o.length;d++){var v=o[d][0];v<0?(v+=a,f=Math.max(v,f)):(v-=a,l=Math.min(v,l))}return y.xmin=l,y.xmax=f,y.width<u?(y.xmin-=a,y.xmax-=a,y):r},t.normalizeMapX=function(e,t){var r=c.getInfo(t);if(r){var n=r.valid,o=n[0],i=n[1],s=i-o;if(e<o)for(;e<o;)e+=s;if(e>i)for(;e>i;)e-=s}return e}}.apply(null,n))||(e.exports=o)},279:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(159),r(165),r(172),r(163)],void 0===(o=function(e,t,r,n,o,i,s){Object.defineProperty(t,"__esModule",{value:!0}),t.cut=function(e,t,a,p){return r.__awaiter(this,void 0,void 0,(function(){var u,l,c,f,y,d,v;return r.__generator(this,(function(g){switch(g.label){case 0:return u="string"==typeof e?i.urlToObject(e):e,l=t[0].spatialReference,c=r.__assign(r.__assign({},p),{query:r.__assign(r.__assign({},u.query),{f:"json",sr:JSON.stringify(l),target:JSON.stringify({geometryType:s.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(a)})}),[4,o(u.path+"/cut",c)];case 1:return f=g.sent(),y=f.data,d=y.cutIndexes,v=y.geometries,[2,{cutIndexes:d,geometries:(void 0===v?[]:v).map((function(e){return n.fromJSON(e).set(l)}))}]}}))}))}}.apply(null,n))||(e.exports=o)},280:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(165),r(172),r(163)],void 0===(o=function(e,t,r,n,o,i){function s(e){return{geometryType:i.getJsonType(e[0]),geometries:e.map((function(e){return e.toJSON()}))}}function a(e,t,r){var n=i.getGeometryType(t);return e.map((function(e){var t=n.fromJSON(e);return t.spatialReference=r,t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.simplify=function(e,t,p){return r.__awaiter(this,void 0,void 0,(function(){var u,l,c,f;return r.__generator(this,(function(y){switch(y.label){case 0:return u="string"==typeof e?o.urlToObject(e):e,l=t[0].spatialReference,c=i.getJsonType(t[0]),f=r.__assign(r.__assign({},p),{query:r.__assign(r.__assign({},u.query),{f:"json",sr:l.wkid?l.wkid:JSON.stringify(l),geometries:JSON.stringify(s(t))})}),[4,n(u.path+"/simplify",f)];case 1:return[2,a(y.sent().data,c,l)]}}))}))}}.apply(null,n))||(e.exports=o)},511:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(166),r(155),r(151)],void 0===(o=function(e,t,r,n,o,i){var s=new n.default({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.type=null,r}return r.__extends(t,e),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([i.property({type:String,json:{read:s.read,write:s.write}})],t.prototype,"type",void 0),r.__decorate([i.subclass("esri.tasks.support.GPMessage")],t)}(o.JSONSupport)}.apply(null,n))||(e.exports=o)},714:function(e,t,r){var n,o;n=[r.dj.c(e.i),t],void 0===(o=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){void 0===e&&(e={}),this._options=e}return e.prototype.toQueryParams=function(e){var t=this;if(!e)return null;var r=e.toJSON(),n={};return Object.keys(r).forEach((function(e){var o=t._options[e];if(o){var i="boolean"!=typeof o&&o.name?o.name:e,s="boolean"!=typeof o&&o.getter?o.getter(r):r[e];null!=s&&(n[i]=function(e){if(!Array.isArray(e))return!1;var t=e[0];return"number"==typeof t||"string"==typeof t}(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s)}else n[e]=r[e]}),this),n},e}();t.createQueryParamsHelper=function(e){return new r(e)}}.apply(null,n))||(e.exports=o)},715:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(165),r(154),r(152),r(119),r(172),r(151),r(327)],void 0===(o=function(e,t,r,n,o,i,s,a,p,u){Object.defineProperty(t,"__esModule",{value:!0}),t.NAServiceDescriptionMixin=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.getServiceDescription=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),[2,this._serviceDescriptionPromise]}))}))},t.prototype._fetchServiceDescription=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,i,p,u,l;return r.__generator(this,(function(c){switch(c.label){case 0:if(!this.url||!this.parsedUrl)throw new o("network-service:missing-url","Url to Network service is missing");return e=this.url,[4,n(e,{query:{f:"json"}})];case 1:for((t=c.sent().data).supportedTravelModes||(t.supportedTravelModes=[]),i=0;i<t.supportedTravelModes.length;i++)t.supportedTravelModes[i].id||(t.supportedTravelModes[i].id=t.supportedTravelModes[i].itemId);return[4,t.currentVersion>=10.4?function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,s,a;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,n(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}})];case 1:return t=r.sent().data,i=t.supportedTravelModes,s=t.defaultTravelMode,[2,{supportedTravelModes:i,defaultTravelMode:s}];case 2:throw a=r.sent(),new o("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:a});case 3:return[2]}}))}))}(e):function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o,i,p,u,l,c,f,y,d,v,g,h,m,_,x;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,n(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}})];case 1:return(t=r.sent().data)&&t.owningSystemUrl?(e=t.owningSystemUrl,[4,n(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 2:return o=r.sent().data,(i=s.getDeepValue("helperServices.routingUtilities.url",o))?(p=a.urlToObject(e),u=/\/solveClosestFacility$/.test(p.path)?"Route":/\/solveClosestFacility$/.test(p.path)?"ClosestFacility":"ServiceAreas",[4,n(i+("/"===i[i.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:u}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 3:if(l=r.sent(),c=[],f=null,l&&l.data&&l.data.results&&l.data.results.length)for(y=l.data.results,d=0,v=y;d<v.length;d++)if("supportedTravelModes"===(g=v[d]).paramName){if(g.value&&g.value.features)for(h=0,m=g.value.features;h<m.length;h++)(_=m[h].attributes)&&(x=JSON.parse(_.TravelMode),c.push(x))}else"defaultTravelMode"===g.paramName&&(f=g.value);return[2,{supportedTravelModes:c,defaultTravelMode:f}]}}))}))}(e)];case 2:return p=c.sent(),u=p.defaultTravelMode,l=p.supportedTravelModes,t.defaultTravelMode=u,t.supportedTravelModes=l,[2,t]}}))}))},t.prototype._isInputGeometryZAware=function(e,t){for(var r=0;r<t.length;r++){var n=e[t[r]];if(n&&n.length)for(var o=0,s=n;o<s.length;o++){var a=s[o];if(i.isSome(a)&&a.hasZ)return!0}}return!1},t.prototype._dropZValuesOffInputGeometry=function(e,t){for(var r=0;r<t.length;r++){var n=e[t[r]];if(n&&n.length)for(var o=0,i=n;o<i.length;o++)i[o].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")},r.__decorate([p.subclass("esri.tasks.mixins.NAServiceDescription")],t)}(e)};var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([p.subclass("esri.tasks.mixins.NAServiceDescription")],t)}(t.NAServiceDescriptionMixin(u));t.NAServiceDescription=l}.apply(null,n))||(e.exports=o)},716:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(117),r(166),r(151),r(511)],void 0===(o=function(e,t,r,n,o,i){var s=new n.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function t(t){var r=e.call(this,t)||this;return r.type=null,r}return r.__extends(t,e),r.__decorate([o.property({type:String,json:{read:s.read,write:s.write}})],t.prototype,"type",void 0),r.__decorate([o.subclass("esri.tasks.support.NAMessage")],t)}(i)}.apply(null,n))||(e.exports=o)}}]);
//# sourceMappingURL=63.js.map