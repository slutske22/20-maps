(function(){var e={"esri/layers/support/lazyLayerLoader":380,"esri/portal/support/portalItemUtils":465,"esri/portal/support/portalLayers":557},n=this||window,t=n.webpackJsonp=n.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{380:function(e,n,t){var r,i;r=[t.dj.c(e.i),n,t(161)],void 0===(i=function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.layerLookupMap={BingMapsLayer:function(){return new Promise((function(e,n){t.e(131).then(function(){var n=[t(740)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},BuildingSceneLayer:function(){return new Promise((function(e,n){t.e(47).then(function(){var n=[t(741)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},CSVLayer:function(){return new Promise((function(e,n){Promise.all([t.e(1),t.e(110)]).then(function(){var n=[t(742)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},ElevationLayer:function(){return new Promise((function(e,n){Promise.resolve().then(function(){var n=[t(452)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},FeatureLayer:function(){return new Promise((function(e,n){Promise.all([t.e(1),t.e(32)]).then(function(){var n=[t(222)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},GroupLayer:function(){return new Promise((function(e,n){t.e(30).then(function(){var n=[t(506)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},GeoRSSLayer:function(){return new Promise((function(e,n){t.e(141).then(function(){var n=[t(743)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},ImageryLayer:function(){return new Promise((function(e,n){Promise.all([t.e(9),t.e(14),t.e(64),t.e(67)]).then(function(){var n=[t(460)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},ImageryTileLayer:function(){return new Promise((function(e,n){Promise.all([t.e(14),t.e(45)]).then(function(){var n=[t(744)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},IntegratedMeshLayer:function(){return new Promise((function(e,n){t.e(90).then(function(){var n=[t(745)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},KMLLayer:function(){return new Promise((function(e,n){t.e(111).then(function(){var n=[t(746)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},MapImageLayer:function(){return new Promise((function(e,n){t.e(23).then(function(){var n=[t(508)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},MapNotesLayer:function(){return new Promise((function(e,n){Promise.all([t.e(1),t.e(132)]).then(function(){var n=[t(747)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},OpenStreetMapLayer:function(){return new Promise((function(e,n){t.e(123).then(function(){var n=[t(748)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},PointCloudLayer:function(){return new Promise((function(e,n){t.e(43).then(function(){var n=[t(749)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},RouteLayer:function(){return new Promise((function(e,n){Promise.all([t.e(1),t.e(133)]).then(function(){var n=[t(750)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},SceneLayer:function(){return new Promise((function(e,n){Promise.all([t.e(1),t.e(21)]).then(function(){var n=[t(605)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},StreamLayer:function(){return new Promise((function(e,n){t.e(55).then(function(){var n=[t(751)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},TileLayer:function(){return new Promise((function(e,n){Promise.resolve().then(function(){var n=[t(325)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},UnknownLayer:function(){return new Promise((function(e,n){t.e(142).then(function(){var n=[t(752)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},UnsupportedLayer:function(){return new Promise((function(e,n){t.e(143).then(function(){var n=[t(753)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},VectorTileLayer:function(){return new Promise((function(e,n){Promise.resolve().then(function(){var n=[t(597)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},WebTileLayer:function(){return new Promise((function(e,n){t.e(134).then(function(){var n=[t(398)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},WMSLayer:function(){return new Promise((function(e,n){t.e(112).then(function(){var n=[t(754)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))},WMTSLayer:function(){return new Promise((function(e,n){t.e(93).then(function(){var n=[t(755)];e.apply(null,n)}.bind(this)).catch(n.bind(this))}))}}}.apply(null,r))||(e.exports=i)},465:function(e,n,t){var r,i;r=[t.dj.c(e.i),n],void 0===(i=function(e,n){function t(e,n){return!!e.typeKeywords&&e.typeKeywords.indexOf(n)>-1}Object.defineProperty(n,"__esModule",{value:!0}),n.addTypeKeyword=function(e,n){if(!t(e,n)){var r=e.typeKeywords;r?r.push(n):e.typeKeywords=[n]}},n.hasTypeKeyword=t,n.removeTypeKeyword=function(e,n){var t=e.typeKeywords;if(t){var r=t.indexOf(n);r>-1&&t.splice(r,1)}}}.apply(null,r))||(e.exports=i)},557:function(e,n,t){var r,i;r=[t.dj.c(e.i),n,t(117),t(165),t(154),t(153),t(380),t(283),t(465)],void 0===(i=function(e,n,t,r,i,a,o,u,c){function s(e){switch(e.type){case"Map Service":return function(e){return function(e){return p(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}))}(e);case"Feature Service":return function(e){return y(e).then((function(e){if("object"==typeof e){var n={};return null!=e.id&&(n.layerId=e.id),{className:"FeatureLayer",properties:n}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return t.__awaiter(this,void 0,void 0,(function(){var n;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,e.load()];case 1:return t.sent(),c.hasTypeKeyword(e,"Map Notes")?[2,{className:"MapNotesLayer"}]:c.hasTypeKeyword(e,"Route Layer")?[2,{className:"RouteLayer"}]:[4,e.fetchData()];case 2:return(n=t.sent())&&Array.isArray(n.layers)&&1===n.layers.length?[2,{className:"FeatureLayer"}]:[2,{className:"GroupLayer"}]}}))}))}(e);case"Scene Service":return function(e){return y(e).then((function(n){if("object"==typeof n){var t={},r=void 0;if(null!=n.id?(t.layerId=n.id,r=e.url+"/layers/"+n.id):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var i={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},a=0,o=Object.keys(i);a<o.length;a++){var u=o[a];if(-1!==e.typeKeywords.indexOf(u))return{className:i[u]}}return p(r).then((function(e){var n="SceneLayer",r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(n=r[e.layerType]),{className:n,properties:t}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){var n,r,i;return t.__awaiter(this,void 0,void 0,(function(){var a,o,u,c;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,e.load()];case 1:return t.sent(),(a=null!==(r=null===(n=e.typeKeywords)||void 0===n?void 0:n.map((function(e){return e.toLowerCase()})))&&void 0!==r?r:[]).indexOf("elevation 3d layer")>-1?[2,{className:"ElevationLayer"}]:a.indexOf("tiled imagery")>-1?[2,{className:"ImageryTileLayer"}]:[4,e.fetchData()];case 2:return o=t.sent(),"ArcGISTiledImageServiceLayer"===(u=null==o?void 0:o.layerType)?[2,{className:"ImageryTileLayer"}]:"ArcGISImageServiceLayer"===u?[2,{className:"ImageryLayer"}]:[4,p(e.url)];case 3:return c=t.sent(),"map"===(null===(i=c.cacheType)||void 0===i?void 0:i.toLowerCase())?[2,{className:"ImageryTileLayer"}]:[2,{className:"ImageryLayer"}]}}))}))}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return a.reject(new i("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function l(e){return(0,o.layerLookupMap[e.className])().then((function(n){return{constructor:n,properties:e.properties}}))}function y(e){return!e.url||e.url.match(/\/\d+$/)?a.resolve({}):e.load().then((function(){return e.fetchData()})).then((function(n){return n&&Array.isArray(n.layers)?1===n.layers.length&&{id:n.layers[0].id}:p(e.url).then((function(e){return e&&Array.isArray(e.layers)?1===e.layers.length&&{id:e.layers[0].id}:{}}))}))}function p(e){return r(e,{responseType:"json",query:{f:"json"}}).then((function(e){return e.data}))}Object.defineProperty(n,"__esModule",{value:!0}),n.fromItem=function(e){return!e.portalItem||e.portalItem instanceof u||(e=t.__assign(t.__assign({},e),{portalItem:new u(e.portalItem)})),(n=e.portalItem,n.load().then(s).then(l)).then((function(n){var r=t.__assign({portalItem:e.portalItem},n.properties),i=n.constructor;return a.resolve(new i(r))}));var n},n.selectLayerClassPath=s}.apply(null,r))||(e.exports=i)}}]);
//# sourceMappingURL=126.js.map