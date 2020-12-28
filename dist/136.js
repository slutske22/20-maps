(function(){var n={"esri/layers/support/lazyLayerLoader":380,"esri/layers/support/arcgisLayers":2056},e=this||window,t=e.webpackJsonp=e.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(n):(t.absMidsWaiting=t.absMidsWaiting||[]).push(n)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{2056:function(n,e,t){var r,i;r=[t.dj.c(n.i),e,t(117),t(165),t(154),t(324),t(380),t(161)],void 0===(i=function(n,e,r,i,a,u,o){function c(n){return r.__awaiter(this,void 0,void 0,(function(){var e,t,i,o,c,f,y,d,p,b;return r.__generator(this,(function(v){switch(v.label){case 0:if(!(e=u.parse(n)))throw new a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:n});switch(t=e.serverType,i=e.sublayer,c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},t){case"MapServer":o=null!=i?"FeatureLayer":function(n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,h(n)];case 1:return[2,e.sent().tileInfo]}}))}))}(n).then((function(n){return n?"TileLayer":"MapImageLayer"}));break;case"ImageServer":o=h(n).then((function(n){var e=n.tileInfo&&n.tileInfo.format;return n.tileInfo?e&&"LERC"===e.toUpperCase()&&n.cacheType&&"elevation"===n.cacheType.toLowerCase()?"ElevationLayer":"ImageryTileLayer":"ImageryLayer"}));break;case"SceneServer":o=h(e.url.path).then((function(n){var e={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(n&&Array.isArray(n.layers)&&n.layers.length>0){var t=n.layers[0].layerType;if(null!=e[t])return e[t]}return"SceneLayer"}));break;default:o=c[t]}return f={FeatureLayer:!0,SceneLayer:!0},y={parsedUrl:e,Constructor:null,sublayerIds:null},[4,o];case 1:return d=v.sent(),f[d]&&null==i?[4,s(n)]:[3,3];case 2:1!==(p=v.sent()).length&&(y.sublayerIds=p),v.label=3;case 3:return b=y,[4,l(d)];case 4:return b.Constructor=v.sent(),[2,y]}}))}))}function s(n){return r.__awaiter(this,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){switch(t.label){case 0:return[4,h(n)];case 1:return(e=t.sent())&&Array.isArray(e.layers)?[2,e.layers.map((function(n){return n.id})).reverse()]:[2,[]]}}))}))}function l(n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,(0,o.layerLookupMap[n])()]}))}))}function h(n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,i(n,{responseType:"json",query:{f:"json"}})];case 1:return[2,e.sent().data]}}))}))}Object.defineProperty(e,"__esModule",{value:!0}),e.fromUrl=function(n){return r.__awaiter(this,void 0,void 0,(function(){var e,i,a,u;return r.__generator(this,(function(o){switch(o.label){case 0:return[4,c(n.url)];case 1:return e=o.sent(),i=r.__assign(r.__assign({},n.properties),{url:n.url}),e.sublayerIds?[4,new Promise((function(n,e){t.e(30).then(function(){var e=[t(506)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))]:[2,new e.Constructor(i)];case 2:return a=o.sent(),u=new a({title:e.parsedUrl.title}),function(n,e){return n.sublayerIds.map((function(t){return new n.Constructor(r.__assign(r.__assign({},e),{layerId:t,sublayerTitleMode:"service-name"}))}))}(e,i).forEach((function(n){return u.add(n)})),[2,u]}}))}))}}.apply(null,r))||(n.exports=i)},380:function(n,e,t){var r,i;r=[t.dj.c(n.i),e,t(161)],void 0===(i=function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.layerLookupMap={BingMapsLayer:function(){return new Promise((function(n,e){t.e(131).then(function(){var e=[t(740)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},BuildingSceneLayer:function(){return new Promise((function(n,e){t.e(47).then(function(){var e=[t(741)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},CSVLayer:function(){return new Promise((function(n,e){Promise.all([t.e(1),t.e(110)]).then(function(){var e=[t(742)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},ElevationLayer:function(){return new Promise((function(n,e){Promise.resolve().then(function(){var e=[t(452)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},FeatureLayer:function(){return new Promise((function(n,e){Promise.all([t.e(1),t.e(32)]).then(function(){var e=[t(222)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},GroupLayer:function(){return new Promise((function(n,e){t.e(30).then(function(){var e=[t(506)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},GeoRSSLayer:function(){return new Promise((function(n,e){t.e(141).then(function(){var e=[t(743)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},ImageryLayer:function(){return new Promise((function(n,e){Promise.all([t.e(9),t.e(14),t.e(64),t.e(67)]).then(function(){var e=[t(460)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},ImageryTileLayer:function(){return new Promise((function(n,e){Promise.all([t.e(14),t.e(45)]).then(function(){var e=[t(744)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},IntegratedMeshLayer:function(){return new Promise((function(n,e){t.e(90).then(function(){var e=[t(745)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},KMLLayer:function(){return new Promise((function(n,e){t.e(111).then(function(){var e=[t(746)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},MapImageLayer:function(){return new Promise((function(n,e){t.e(23).then(function(){var e=[t(508)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},MapNotesLayer:function(){return new Promise((function(n,e){Promise.all([t.e(1),t.e(132)]).then(function(){var e=[t(747)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},OpenStreetMapLayer:function(){return new Promise((function(n,e){t.e(123).then(function(){var e=[t(748)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},PointCloudLayer:function(){return new Promise((function(n,e){t.e(43).then(function(){var e=[t(749)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},RouteLayer:function(){return new Promise((function(n,e){Promise.all([t.e(1),t.e(133)]).then(function(){var e=[t(750)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},SceneLayer:function(){return new Promise((function(n,e){Promise.all([t.e(1),t.e(21)]).then(function(){var e=[t(605)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},StreamLayer:function(){return new Promise((function(n,e){t.e(55).then(function(){var e=[t(751)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},TileLayer:function(){return new Promise((function(n,e){Promise.resolve().then(function(){var e=[t(325)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},UnknownLayer:function(){return new Promise((function(n,e){t.e(142).then(function(){var e=[t(752)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},UnsupportedLayer:function(){return new Promise((function(n,e){t.e(143).then(function(){var e=[t(753)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},VectorTileLayer:function(){return new Promise((function(n,e){Promise.resolve().then(function(){var e=[t(597)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},WebTileLayer:function(){return new Promise((function(n,e){t.e(134).then(function(){var e=[t(398)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},WMSLayer:function(){return new Promise((function(n,e){t.e(112).then(function(){var e=[t(754)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},WMTSLayer:function(){return new Promise((function(n,e){t.e(93).then(function(){var e=[t(755)];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))}}}.apply(null,r))||(n.exports=i)}}]);
//# sourceMappingURL=136.js.map