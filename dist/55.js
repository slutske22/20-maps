(function(){var e={"esri/TimeInterval":350,"esri/renderers/support/styleUtils":387,"esri/layers/mixins/TemporalLayer":410,"esri/layers/support/TimeInfo":484,"esri/layers/support/TimeReference":525,"esri/layers/support/FeatureReduction":526,"esri/layers/support/FeatureReductionSelection":635,"esri/layers/StreamLayer":751,"esri/layers/support/FeatureReductionCluster":787,"esri/layers/support/labelingInfo":789,"esri/layers/support/AggregateField":897,"esri/layers/support/OutStatistic":898,"esri/layers/support/featureReductionUtils":900,"esri/layers/support/PurgeOptions":2262},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{2262:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(155),r(151)],void 0===(o=function(e,t,r,i,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.age=null,t.displayCount=null,t.maxObservations=1,t}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({age:this.age,displayCount:this.displayCount,maxObservations:this.maxObservations})},r.__decorate([o.property({type:Number,json:{write:!0}})],t.prototype,"age",void 0),r.__decorate([o.property({type:Number,json:{write:!0}})],t.prototype,"displayCount",void 0),r.__decorate([o.property({type:Number,json:{write:!0}})],t.prototype,"maxObservations",void 0),i=r.__decorate([o.subclass("esri.layers.support.PurgeOptions")],t)}(i.JSONSupport)}.apply(null,i))||(e.exports=o)},350:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(155),r(151),r(235)],void 0===(o=function(e,t,r,i,o,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.value=0,r.unit="milliseconds",r}var i;return r.__extends(t,e),i=t,t.prototype.toMilliseconds=function(){return this.value*n.millisecondsPerTimeUnit[this.unit]},t.prototype.clone=function(){return new i({value:this.value,unit:this.unit})},r.__decorate([o.property({type:Number,json:{write:!0},nonNullable:!0})],t.prototype,"value",void 0),r.__decorate([o.property({type:n.timeUnitKebabDictionary.apiValues,json:{type:n.timeUnitKebabDictionary.jsonValues,read:n.timeUnitKebabDictionary.read,write:n.timeUnitKebabDictionary.write},nonNullable:!0})],t.prototype,"unit",void 0),i=r.__decorate([o.subclass("esri.TimeInterval")],t)}(i.JSONSupport)}.apply(null,i))||(e.exports=o)},387:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(226),r(153),r(264)],void 0===(o=function(e,t,r,i,o,n){Object.defineProperty(t,"__esModule",{value:!0}),t.loadStyleRenderer=function(e,t,a){return r.__awaiter(this,void 0,void 0,(function(){var p,l,s;return r.__generator(this,(function(r){switch(r.label){case 0:return(p=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin))&&"unique-value"===p.type&&p.styleOrigin?[4,i.result(p.populateFromStyle())]:[3,2];case 1:l=r.sent(),o.throwIfAborted(a),!1===l.ok&&(s=l.error,t&&t.messages&&t.messages.push(new n("renderer:style-reference","Failed to create unique value renderer from style reference: "+s.message,{error:s,context:t})),e.clear("renderer",t.origin)),r.label=2;case 2:return[2]}}))}))}}.apply(null,i))||(e.exports=o)},410:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(282),r(350),r(151),r(484),r(191),r(235)],void 0===(o=function(e,t,r,i,o,n,a,p,l){Object.defineProperty(t,"__esModule",{value:!0}),t.TemporalLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.timeExtent=null,t.timeOffset=null,t.useViewTime=!0,t}return r.__extends(t,e),t.prototype.readOffset=function(e,t){var r=t.timeInfo.exportOptions;if(!r)return null;var i=r.timeOffset,n=l.timeUnitKebabDictionary.fromJSON(r.timeOffsetUnits);return i&&n?new o({value:i,unit:n}):null},Object.defineProperty(t.prototype,"timeInfo",{set:function(e){p.fixTimeInfoFields(e,this.fields),this._set("timeInfo",e)},enumerable:!0,configurable:!0}),r.__decorate([n.property({type:i,json:{write:!1}})],t.prototype,"timeExtent",void 0),r.__decorate([n.property({type:o})],t.prototype,"timeOffset",void 0),r.__decorate([n.reader("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),r.__decorate([n.property({value:null,type:a,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),r.__decorate([n.property({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),r.__decorate([n.subclass("esri.layers.mixins.TemporalLayer")],t)}(e)}}.apply(null,i))||(e.exports=o)},484:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(282),r(350),r(155),r(118),r(151),r(525),r(235)],void 0===(o=function(e,t,r,i,o,n,a,p,l,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.cumulative=!1,r.endField=null,r.fullTimeExtent=null,r.hasLiveData=!1,r.interval=null,r.startField=null,r.timeReference=null,r.trackIdField=null,r.useTime=!0,r}var n;return r.__extends(t,e),n=t,t.prototype.readFullTimeExtent=function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;var r=t.timeExtent[0],o=t.timeExtent[1];return new i({start:r,end:o})},t.prototype.writeFullTimeExtent=function(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null},t.prototype.readInterval=function(e,t){return t.timeInterval&&t.timeIntervalUnits?new o({value:t.timeInterval,unit:s.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new o({value:t.defaultTimeInterval,unit:s.timeUnitKebabDictionary.fromJSON(t.defaultTimeIntervalUnits)}):null},t.prototype.writeInterval=function(e,t){if(e){var r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},t.prototype.clone=function(){var e=this,t=e.cumulative,r=e.endField,i=e.hasLiveData,o=e.interval,p=e.startField,l=e.timeReference,s=e.fullTimeExtent,u=e.trackIdField,d=e.useTime;return new n({cumulative:t,endField:r,hasLiveData:i,interval:o,startField:p,timeReference:a.clone(l),fullTimeExtent:a.clone(s),trackIdField:u,useTime:d})},r.__decorate([p.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],t.prototype,"cumulative",void 0),r.__decorate([p.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],t.prototype,"endField",void 0),r.__decorate([p.property({type:i,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"fullTimeExtent",void 0),r.__decorate([p.reader("fullTimeExtent",["timeExtent"])],t.prototype,"readFullTimeExtent",null),r.__decorate([p.writer("fullTimeExtent")],t.prototype,"writeFullTimeExtent",null),r.__decorate([p.property({type:Boolean,json:{write:!0}})],t.prototype,"hasLiveData",void 0),r.__decorate([p.property({type:o,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"interval",void 0),r.__decorate([p.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],t.prototype,"readInterval",null),r.__decorate([p.writer("interval")],t.prototype,"writeInterval",null),r.__decorate([p.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],t.prototype,"startField",void 0),r.__decorate([p.property({type:l,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"timeReference",void 0),r.__decorate([p.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"trackIdField",void 0),r.__decorate([p.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],t.prototype,"useTime",void 0),n=r.__decorate([p.subclass("esri.layers.support.TimeInfo")],t)}(n.JSONSupport)}.apply(null,i))||(e.exports=o)},525:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(155),r(151)],void 0===(o=function(e,t,r,i,o){return function(e){function t(t){var r=e.call(this,t)||this;return r.respectsDaylightSaving=!1,r.timezone=null,r}var i;return r.__extends(t,e),i=t,t.prototype.readRespectsDaylightSaving=function(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving},t.prototype.clone=function(){var e=this.respectsDaylightSaving,t=this.timezone;return new i({respectsDaylightSaving:e,timezone:t})},r.__decorate([o.property({type:Boolean,json:{write:!0}})],t.prototype,"respectsDaylightSaving",void 0),r.__decorate([o.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],t.prototype,"readRespectsDaylightSaving",null),r.__decorate([o.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],t.prototype,"timezone",void 0),i=r.__decorate([o.subclass("esri.layers.support.TimeReference")],t)}(i.JSONSupport)}.apply(null,i))||(e.exports=o)},526:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(155),r(151)],void 0===(o=function(e,t,r,i,o){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=null,t}return r.__extends(t,e),r.__decorate([o.property({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),r.__decorate([o.subclass("esri.layers.support.FeatureReduction")],t)}(i.JSONSupport);t.FeatureReduction=n,t.default=n}.apply(null,i))||(e.exports=o)},635:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(151),r(526)],void 0===(o=function(e,t,r,i,o){return function(e){function t(t){var r=e.call(this,t)||this;return r.type="selection",r}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o},r.__decorate([i.property({type:["selection"]})],t.prototype,"type",void 0),o=r.__decorate([i.subclass("esri.layers.support.FeatureReductionSelection")],t)}(o.default)}.apply(null,i))||(e.exports=o)},751:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(159),r(297),r(481),r(165),r(239),r(335),r(154),r(121),r(166),r(156),r(152),r(225),r(153),r(151),r(179),r(208),r(339),r(244),r(240),r(298),r(265),r(410),r(233),r(900),r(194),r(255),r(191),r(191),r(437),r(789),r(2262),r(316),r(387),r(411),r(894),r(354),r(199)],void 0===(o=function(e,t,r,i,o,n,a,p,l,s,u,d,c,y,f,v,m,_,g,b,w,h,S,x,I,T,O,j,F,R,D,E,P,N,L,M,U,J,k,V){var z=c.getLogger("esri.layers.StreamLayer"),A=new d.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.copyright=null,o.definitionExpression=null,o.displayField=null,o.elevationInfo=null,o.featureReduction=null,o.fields=null,o.geometryDefinition=null,o.geometryType=null,o.labelsVisible=!0,o.labelingInfo=null,o.legendEnabled=!0,o.objectIdField=null,o.operationalLayerType="ArcGISStreamLayer",o.popupEnabled=!0,o.popupTemplate=null,o.purgeOptions=new N,o.screenSizePerspectiveEnabled=!0,o.sourceJSON=null,o.spatialReference=i.SpatialReference.WGS84,o.type="stream",o.url=null,o}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r.__assign({url:e},t):e},t.prototype.load=function(e){var t=this;"WebSocket"in u||v.reject(new s("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."));var r=y.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch((function(e){return e})).then((function(){return t._fetchService(r)}))),v.resolve(this)},Object.defineProperty(t.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),t.prototype.readFeatureReduction=function(e,t){return O.read(e,t)},t.prototype.writeWebSceneFeatureReduction=function(e,t,r,i){O.writeTarget(e,t,"layerDefinition.featureReduction",i)},Object.defineProperty(t.prototype,"fieldsIndex",{get:function(){return new F(this.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maximumTrackPoints",{get:function(){return l.deprecatedProperty(z,"maximumTrackPoints",{replacement:"purgeOptions.maxObservations",version:"4.15"}),this.purgeOptions.maxObservations},set:function(e){l.deprecatedProperty(z,"maximumTrackPoints",{replacement:"purgeOptions.maxObservations",version:"4.15"});var t=this.purgeOptions.clone();t.maxObservations=e,this.purgeOptions=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderer",{set:function(e){R.fixRendererFields(e,this.fields),this._set("renderer",e)},enumerable:!0,configurable:!0}),t.prototype.readRenderer=function(e,t,r){var i,o,a=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(a)(i=L.read(a,t,r)||void 0)||z.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r});else if(t.defaultSymbol)k.read(t.defaultSymbol,t,r),t.types&&t.types.length?(i=new n.UniqueValueRenderer({defaultSymbol:o,field:t.typeIdField}),t.types.forEach((function(e){a.addUniqueValueInfo(e.id,k.read(e.symbol,e,r))}))):i=new n.SimpleRenderer({symbol:o});else if("Table"!==t.type){switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":o=new p.SimpleMarkerSymbol;break;case"esriGeometryPolyline":o=new p.SimpleLineSymbol;break;case"esriGeometryPolygon":o=new p.SimpleFillSymbol}i=o&&new n.SimpleRenderer({symbol:o})}return i},t.prototype.writeRenderer=function(e,t,r,i){L.writeTarget(e,t,r,i)},t.prototype.writeWebSceneRenderer=function(e,t,r,i){L.writeTarget(e,t,"layerDefinition.drawingInfo.renderer",i)},t.prototype.createPopupTemplate=function(e){return U.createPopupTemplate(this,e)},t.prototype.createQuery=function(){var e=new V;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e},t.prototype.getFieldDomain=function(e,t){if(!this.fields)return null;var r=null;return this.fields.some((function(t){return t.name===e&&(r=t.domain),!!r})),r},t.prototype.getField=function(e){return this.fieldsIndex.get(e)},t.prototype._fetchService=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(i){switch(i.label){case 0:return this.sourceJSON?[3,2]:[4,a(this.parsedUrl.path,{query:r.__assign({f:"json"},this.parsedUrl.query),responseType:"json",signal:e})];case 1:t=i.sent().data,this.sourceJSON=r.__assign(r.__assign({},t),{objectIdField:"__esri_stream_id__"}),i.label=2;case 2:return this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),D.fixRendererFields(this.renderer,this.fields),D.fixTimeInfoFields(this.timeInfo,this.fields),[2,M.loadStyleRenderer(this,{origin:"service"})]}}))}))},r.__decorate([m.property({type:String})],t.prototype,"copyright",void 0),r.__decorate([m.property({readOnly:!0,dependsOn:["fields","title"]})],t.prototype,"defaultPopupTemplate",null),r.__decorate([m.property({type:String})],t.prototype,"definitionExpression",void 0),r.__decorate([m.property({type:String})],t.prototype,"displayField",void 0),r.__decorate([m.property({type:J})],t.prototype,"elevationInfo",void 0),r.__decorate([m.reader("featureReduction",["layerDefinition.featureReduction"])],t.prototype,"readFeatureReduction",null),r.__decorate([m.writer("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:O.webSceneFeatureReductionTypes}})],t.prototype,"writeWebSceneFeatureReduction",null),r.__decorate([m.property({type:[j]})],t.prototype,"fields",void 0),r.__decorate([m.property({readOnly:!0,dependsOn:["fields"]})],t.prototype,"fieldsIndex",null),r.__decorate([m.property({type:i.Extent})],t.prototype,"geometryDefinition",void 0),r.__decorate([m.property({type:["point","polygon","polyline","multipoint"],json:{read:{reader:A.read}}})],t.prototype,"geometryType",void 0),r.__decorate([m.property(T.labelsVisible)],t.prototype,"labelsVisible",void 0),r.__decorate([m.property({type:[E],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:P.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),r.__decorate([m.property(T.legendEnabled)],t.prototype,"legendEnabled",void 0),r.__decorate([m.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([m.property({type:_.Integer})],t.prototype,"maximumTrackPoints",null),r.__decorate([m.property({type:String})],t.prototype,"objectIdField",void 0),r.__decorate([m.property({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),r.__decorate([m.property(T.popupEnabled)],t.prototype,"popupEnabled",void 0),r.__decorate([m.property({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),r.__decorate([m.property({type:N})],t.prototype,"purgeOptions",void 0),r.__decorate([m.property({types:n.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),r.__decorate([m.reader("service","renderer",["drawingInfo.renderer","defaultSymbol","type"]),m.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol","layerDefinition.type"])],t.prototype,"readRenderer",null),r.__decorate([m.writer("renderer")],t.prototype,"writeRenderer",null),r.__decorate([m.writer("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:n.webSceneRendererTypes}})],t.prototype,"writeWebSceneRenderer",null),r.__decorate([m.property(T.screenSizePerspectiveEnabled)],t.prototype,"screenSizePerspectiveEnabled",void 0),r.__decorate([m.property({type:i.SpatialReference,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),r.__decorate([m.property({json:{read:!1}})],t.prototype,"type",void 0),r.__decorate([m.property(T.url)],t.prototype,"url",void 0),r.__decorate([m.subclass("esri.layers.StreamLayer")],t)}(I.TemporalLayer(x.ScaleRangeLayer(S.RefreshableLayer(b.ArcGISService(w.OperationalLayer(h.PortalLayer(f.MultiOriginJSONMixin(g))))))))}.apply(null,i))||(e.exports=o)},787:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(297),r(155),r(118),r(171),r(151),r(897),r(233),r(437)],void 0===(o=function(e,t,r,i,o,n,a,p,l,s,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.type="cluster",r.clusterRadius=a.toPt("80px"),r.clusterMinSize=a.toPt("12px"),r.clusterMaxSize=a.toPt("50px"),r.popupEnabled=!0,r.popupTemplate=null,r.labelingInfo=null,r.labelsVisible=!0,r.fields=null,r}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:n.clone(this.labelingInfo),labelsVisible:this.labelsVisible,fields:n.clone(this.fields),popupEnabled:this.popupEnabled,popupTemplate:n.clone(this.popupTemplate)})},r.__decorate([p.property({type:["cluster"],readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),r.__decorate([p.property({type:Number,cast:function(e){return"auto"===e?e:a.toPt(e)},json:{write:!0}})],t.prototype,"clusterRadius",void 0),r.__decorate([p.property({type:Number,cast:a.toPt,json:{write:!0}})],t.prototype,"clusterMinSize",void 0),r.__decorate([p.property({type:Number,cast:a.toPt,json:{write:!0}})],t.prototype,"clusterMaxSize",void 0),r.__decorate([p.property(s.popupEnabled)],t.prototype,"popupEnabled",void 0),r.__decorate([p.property({type:i,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),r.__decorate([p.property({type:[u],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),r.__decorate([p.property(s.labelsVisible)],t.prototype,"labelsVisible",void 0),r.__decorate([p.property({type:[l],json:{write:!0}})],t.prototype,"fields",void 0),o=r.__decorate([p.subclass("esri.layers.support.FeatureReductionCluster")],t)}(o.JSONSupport)}.apply(null,i))||(e.exports=o)},789:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(437)],void 0===(o=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=/\[([^\[\]]+)\]/gi;t.reader=function(e,t,o){var n=this;return e?e.map((function(e){var a=new r;if(a.read(e,o),a.labelExpression){var p=t.fields||t.layerDefinition&&t.layerDefinition.fields||n.fields;a.labelExpression=a.labelExpression.replace(i,(function(e,t){return"["+function(e,t){if(!t)return e;for(var r=e.toLowerCase(),i=0;i<t.length;i++){var o=t[i].name;if(o.toLowerCase()===r)return o}return e}(t,p)+"]"}))}return a})):null}}.apply(null,i))||(e.exports=o)},897:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(155),r(151),r(898)],void 0===(o=function(e,t,r,i,o,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name=null,t}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({name:this.name,outStatistic:this.outStatistic.clone()})},r.__decorate([o.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r.__decorate([o.property({type:n,json:{write:!0}})],t.prototype,"outStatistic",void 0),i=r.__decorate([o.subclass("esri.layers.support.AggregateField")],t)}(i.JSONSupport)}.apply(null,i))||(e.exports=o)},898:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(117),r(155),r(151)],void 0===(o=function(e,t,r,i,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.statisticType=null,t.onStatisticField=null,t.onStatisticValueExpression=null,t}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})},r.__decorate([o.property({type:String,json:{write:!0}})],t.prototype,"statisticType",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],t.prototype,"onStatisticField",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],t.prototype,"onStatisticValueExpression",void 0),i=r.__decorate([o.subclass("esri.layers.support.OutStatistic")],t)}(i.JSONSupport)}.apply(null,i))||(e.exports=o)},900:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(154),r(119),r(526),r(787),r(635)],void 0===(o=function(e,t,r,i,o,n,a){function p(e,t,i){return e?"selection"!==e.type?(i.messages&&i.messages.push(new r("featureReduction:unsupported","FeatureReduction of type '"+e.declaredClass+"' are not supported in scenes.",{featureReduction:e,context:i})),null):e.write(t,i):null}Object.defineProperty(t,"__esModule",{value:!0}),t.webSceneFeatureReductionTypes={key:"type",base:o.default,typeMap:{selection:a}},t.read=function(e,t){var r=(t=t.layerDefinition||t).featureReduction;if(r)switch(r.type){case"selection":return a.fromJSON(r);case"cluster":return n.fromJSON(r)}return null},t.writeTarget=function(e,t,r,o){var n=p(e,{},o);n&&i.setDeepValue(r,n,t)},t.write=p}.apply(null,i))||(e.exports=o)}}]);
//# sourceMappingURL=55.js.map