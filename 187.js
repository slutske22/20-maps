(function(){var e={"esri/symbols/support/symbolLayerUtils":2163},r=this||window,n=r.webpackJsonp=r.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{2163:function(e,r,n){var t,i;t=[n.dj.c(e.i),r,n(117),n(165),n(154),n(595),n(152),n(153),n(193),n(1244),n(262),n(1252),n(936)],void 0===(i=function(e,r,n,t,i,o,u,s,c,a,f,p,l){Object.defineProperty(r,"__esModule",{value:!0});var y=d();function d(){return new o(50)}function h(e,r){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){if(e.resource.href)return[2,(o=e.resource.href,t(o,{responseType:"image"}).then((function(e){return e.data}))).then((function(e){return[e.width,e.height]}))];var o;if(e.resource.primitive)return u.isSome(r)?[2,[r,r]]:[2,a.default.PRIMITIVE_SIZE];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}))}))}function m(e,r){return h(e,r).then((function(r){if(null==e.size)return r;var n=r[0]/r[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]}))}function b(e,r){return function(e,r){if(!e.isPrimitive){var n=e.resource.href,t=y.get(n);return void 0!==t?s.resolve(t):p.fetch(n,{disableTextures:!0}).then((function(e){return y.put(n,e.referenceBoundingBox),e.referenceBoundingBox}))}var o=null;if(e.resource&&e.resource.primitive&&(o=c.create(l.primitiveBoundingBox(e.resource.primitive)),u.isSome(r)))for(var a=0;a<o.length;a++)o[a]*=r;return o?s.resolve(o):s.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((function(e){return c.size(e)}))}function v(e,r){return b(e,r).then((function(r){return f.computeSizeWithResourceSize(r,e)}))}r.clearBoundingBoxCache=function(){y=d()},r.computeLayerResourceSize=function(e,r){if("icon"===e.type)return h(e,r);if("object"===e.type)return b(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")},r.computeLayerSize=function(e,r){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){if("icon"===e.type)return[2,m(e,r)];if("object"===e.type)return[2,v(e,r)];throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}))}))},r.computeIconLayerResourceSize=h,r.computeObjectLayerResourceSize=b}.apply(null,t))||(e.exports=i)}}]);
//# sourceMappingURL=187.js.map