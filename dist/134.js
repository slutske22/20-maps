(function(){var e={"esri/layers/WebTileLayer":398,"esri/layers/support/WMTSLayerInfo":507},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{398:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(117),r(159),r(165),r(154),r(118),r(225),r(153),r(229),r(172),r(172),r(151),r(208),r(244),r(240),r(298),r(265),r(486),r(237),r(507)],void 0===(o=function(e,t,r,l,o,n,a,i,p,s,u,c,y,d,f,v,m,h,w,_,b){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.copyright="",o.fullExtent=new l.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,l.SpatialReference.WebMercator),o.legendEnabled=!1,o.isReference=null,o.popupEnabled=!1,o.spatialReference=l.SpatialReference.WebMercator,o.subDomains=null,o.tileInfo=new _({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new l.Point({x:-20037508.342787,y:20037508.342787,spatialReference:l.SpatialReference.WebMercator}),spatialReference:l.SpatialReference.WebMercator,lods:[new w({level:0,scale:591657527.591555,resolution:156543.033928}),new w({level:1,scale:295828763.795777,resolution:78271.5169639999}),new w({level:2,scale:147914381.897889,resolution:39135.7584820001}),new w({level:3,scale:73957190.948944,resolution:19567.8792409999}),new w({level:4,scale:36978595.474472,resolution:9783.93962049996}),new w({level:5,scale:18489297.737236,resolution:4891.96981024998}),new w({level:6,scale:9244648.868618,resolution:2445.98490512499}),new w({level:7,scale:4622324.434309,resolution:1222.99245256249}),new w({level:8,scale:2311162.217155,resolution:611.49622628138}),new w({level:9,scale:1155581.108577,resolution:305.748113140558}),new w({level:10,scale:577790.554289,resolution:152.874056570411}),new w({level:11,scale:288895.277144,resolution:76.4370282850732}),new w({level:12,scale:144447.638572,resolution:38.2185141425366}),new w({level:13,scale:72223.819286,resolution:19.1092570712683}),new w({level:14,scale:36111.909643,resolution:9.55462853563415}),new w({level:15,scale:18055.954822,resolution:4.77731426794937}),new w({level:16,scale:9027.977411,resolution:2.38865713397468}),new w({level:17,scale:4513.988705,resolution:1.19432856685505}),new w({level:18,scale:2256.994353,resolution:.597164283559817}),new w({level:19,scale:1128.497176,resolution:.298582141647617})]}),o.type="web-tile",o.urlTemplate=null,o.wmtsInfo=null,o}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?a.mixin({urlTemplate:e},t||{}):e},t.prototype.load=function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r=new u.Url(t.urlTemplate);t.subDomains&&t.subDomains.length>0||-1===r.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new n("web-tile-layer:load","WebTileLayer (title: '"+t.title+"', id: '"+t.id+"') "+e)}));return this.addResolvingPromise(r),p.resolve(this)},Object.defineProperty(t.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var t=0,r=this.tileInfo.lods;t<r.length;t++){var l=r[t];e[l.level]=l.levelValue||l.level}return e},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&l.SpatialReference.fromJSON(t.fullExtent.spatialReference)},Object.defineProperty(t.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,l=new u.Url(t),o=l.scheme?l.scheme+"://":"//",n=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(n);else if(r&&r.length>0&&l.authority.split(".").length>1)for(var a=0,i=r;a<i.length;a++){var p=i[a];e.push(o+l.authority.replace(/\{subDomain\}/gi,p)+"/")}return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new u.Url(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)},enumerable:!0,configurable:!0}),t.prototype.readUrlTemplate=function(e,t){return e||t.templateUrl},t.prototype.writeUrlTemplate=function(e,t){e&&c.isProtocolRelative(e)&&(e="https:"+e),t.templateUrl=e?c.normalize(e):e},t.prototype.fetchTile=function(e,t,r,l){void 0===l&&(l={});var n=l.signal,a=l.timestamp,i=this.getTileUrl(e,t,r),p={responseType:"image",signal:n};return null!=a&&(p.query={_ts:l.timestamp}),o(i,p).then((function(e){return e.data}))},t.prototype.getTileUrl=function(e,t,r){var l=this.levelValues[e],o=this.tileServers[t%this.tileServers.length]+s.replace(this.urlPath,{level:l,col:r,row:t});return o.replace(/\{level\}/gi,""+l).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)},r.__decorate([y.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),r.__decorate([y.property({type:l.Extent,json:{write:!0}})],t.prototype,"fullExtent",void 0),r.__decorate([y.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"legendEnabled",void 0),r.__decorate([y.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([y.property({dependsOn:["tileInfo"]})],t.prototype,"levelValues",null),r.__decorate([y.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],t.prototype,"isReference",void 0),r.__decorate([y.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],t.prototype,"operationalLayerType",void 0),r.__decorate([y.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),r.__decorate([y.property({type:l.SpatialReference})],t.prototype,"spatialReference",void 0),r.__decorate([y.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],t.prototype,"readSpatialReference",null),r.__decorate([y.property({type:[String],json:{write:!0}})],t.prototype,"subDomains",void 0),r.__decorate([y.property({type:_,json:{write:!0}})],t.prototype,"tileInfo",void 0),r.__decorate([y.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],t.prototype,"tileServers",null),r.__decorate([y.property({json:{read:!1}})],t.prototype,"type",void 0),r.__decorate([y.property({dependsOn:["urlTemplate"]})],t.prototype,"urlPath",null),r.__decorate([y.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],t.prototype,"urlTemplate",void 0),r.__decorate([y.reader("urlTemplate",["urlTemplate","templateUrl"])],t.prototype,"readUrlTemplate",null),r.__decorate([y.writer("urlTemplate",{templateUrl:{type:String}})],t.prototype,"writeUrlTemplate",null),r.__decorate([y.property({type:b.default,json:{write:!0}})],t.prototype,"wmtsInfo",void 0),r.__decorate([y.subclass("esri.layers.WebTileLayer")],t)}(m.RefreshableLayer(h.ScaleRangeLayer(f.OperationalLayer(v.PortalLayer(i.MultiOriginJSONMixin(d))))))}.apply(null,l))||(e.exports=o)},507:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(117),r(155),r(118),r(151)],void 0===(o=function(e,t,r,l,o,n){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){return e.call(this,t)||this}var l;return r.__extends(t,e),l=t,t.prototype.clone=function(){return new l({customLayerParameters:o.clone(this.customLayerParameters),customParameters:o.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})},r.__decorate([n.property({json:{type:Object,write:!0}})],t.prototype,"customLayerParameters",void 0),r.__decorate([n.property({json:{type:Object,write:!0}})],t.prototype,"customParameters",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"layerIdentifier",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"tileMatrixSet",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),l=r.__decorate([n.subclass("esri.layer.support.WMTSLayerInfo")],t)}(l.JSONSupport);t.WMTSLayerInfo=a,t.default=a}.apply(null,l))||(e.exports=o)}}]);
//# sourceMappingURL=134.js.map