// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/Error","../../../../core/promiseUtils","../../../../geometry/support/jsonUtils","../../../../geometry/support/spatialReferenceUtils","../../featureConversionUtils","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","./clientSideDefaults","./sourceUtils","../../../support/FieldsIndex","../../../support/fieldType","../../../support/fieldUtils"],(function(e,t,i,r,n,s,a,u,l,o,d,p,f,c,y,h){Object.defineProperty(t,"__esModule",{value:!0});var m=a.WGS84,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.WGS84},_={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return s.isPoint(e)?null!=e.z:!!e.hasZ}function b(e){return s.isPoint(e)?null!=e.m:!!e.hasM}var I=function(){function e(){this._queryEngine=null,this._nextObjectId=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},e.prototype.load=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,n,s,a,u,f,F,b,I,v,E,j,T,x,R,q,D,w,S,O,M,Q,A,P,k;return i.__generator(this,(function(Z){switch(Z.label){case 0:if(t=[],n=e.features,s=this._inferLayerProperties(n,e.fields),a=e.fields||[],u=null!=e.hasM?e.hasM:s.hasM,f=null!=e.hasZ?e.hasZ:s.hasZ,F=!e.spatialReference&&!s.spatialReference,b=F?m:e.spatialReference||s.spatialReference,I=F?g:null,v=e.geometryType||s.geometryType,E=e.objectIdField||s.objectIdField,j=e.timeInfo,F&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!v)throw new r("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!E)throw new r("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");for(s.objectIdField&&E!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'+E+'" doesn\'t match the field name "'+s.objectIdField+'", found in the provided fields'}),E=s.objectIdField),E&&!s.objectIdField&&(T=null,a.some((function(e){return e.name===E&&(T=e,!0)}))?(T.type="esriFieldTypeOID",T.editable=!1,T.nullable=!1):a.unshift({alias:E,name:E,type:"esriFieldTypeOID",editable:!1,nullable:!1})),x=0,R=a;x<R.length;x++){if(null==(S=R[x]).name&&(S.name=S.alias),null==S.alias&&(S.alias=S.name),!S.name)throw new r("feature-layer:invalid-field-name","field name is missing",{field:S});if(S.name===E&&(S.type="esriFieldTypeOID"),-1===y.kebabDict.jsonValues.indexOf(S.type))throw new r("feature-layer:invalid-field-type",'invalid type for field "'+S.name+'"',{field:S})}for(q={},this._requiredFields=[],D=0,w=a;D<w.length;D++)"esriFieldTypeOID"!==(S=w[D]).type&&"esriFieldTypeGlobalID"!==S.type&&(S.editable=null==S.editable||!!S.editable,S.nullable=null==S.nullable||!!S.nullable,O=h.getFieldDefaultValue(S),S.nullable||void 0!==O?q[S.name]=O:this._requiredFields.push(S));return this._fieldsIndex=new c(a),this._createDefaultAttributes=p.createDefaultAttributesFunction(q,E),j&&(j.startTimeField&&((M=this._fieldsIndex.get(j.startTimeField))?(j.startTimeField=M.name,M.type="esriFieldTypeDate"):j.startTimeField=null),j.endTimeField&&((Q=this._fieldsIndex.get(j.endTimeField))?(j.endTimeField=Q.name,Q.type="esriFieldTypeDate"):j.endTimeField=null),j.trackIdField&&((A=this._fieldsIndex.get(j.trackIdField))?j.trackIdField=A.name:(j.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:j}}))),j.startTimeField||j.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:j}}),j=null)),P={warnings:t,featureErrors:[],layerDefinition:i.__assign(i.__assign({},_),{drawingInfo:p.createDrawingInfo(v),templates:p.createDefaultTemplate(q),extent:I,geometryType:v,objectIdField:E,fields:a,hasZ:!!f,hasM:!!u,timeInfo:j}),assignedObjectIds:{}},this._queryEngine=new d.default({fields:a,geometryType:v,hasM:u,hasZ:f,objectIdField:E,spatialReference:b,featureStore:new l.default({geometryType:v,hasM:u,hasZ:f}),timeInfo:j}),n&&n.length?(k=n.reduce((function(e,t){var i=t.attributes&&t.attributes[E];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)}),0),this._nextObjectId=1+k,[4,o.checkProjectionSupport(n,b)]):(this._nextObjectId=1,[2,P]);case 1:return Z.sent(),[2,this._loadInitialFeatures(P,n)]}}))}))},e.prototype.applyEdits=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r,s;return i.__generator(this,(function(i){switch(i.label){case 0:return t=this._queryEngine,r=t.spatialReference,s=t.geometryType,[4,n.all([f.loadGeometryEngineForSimplify(r,s),o.checkProjectionSupport(e.adds,r),o.checkProjectionSupport(e.updates,r)])];case 1:return i.sent(),[2,this._applyEdits(e)]}}))}))},e.prototype.queryFeatures=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._inferLayerProperties=function(e,t){for(var i=void 0,r=void 0,n=null,a=null,u=null,l=0,o=e;l<o.length;l++){var d=o[l].geometry;if(d&&(n||(n=s.getJsonType(d)),a||(a=d.spatialReference),null==i&&(i=F(d)),null==r&&(r=b(d)),n&&a&&null!=i&&null!=r))break}if(t&&t.length){var p=null;t.some((function(e){var t="esriFieldTypeOID"===e.type,i=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return p=e,t||i}))&&(u=p.name)}return{geometryType:n,spatialReference:a,objectIdField:u,hasM:r,hasZ:i}},e.prototype._loadInitialFeatures=function(e,t){for(var i=this._queryEngine,r=i.geometryType,n=i.hasM,a=i.hasZ,l=i.objectIdField,d=i.spatialReference,p=i.featureStore,c=[],y=0,h=t;y<h.length;y++){var m=h[y];if(null!=m.uid&&(e.assignedObjectIds[m.uid]=-1),m.geometry&&r!==s.getJsonType(m.geometry))e.featureErrors.push(f.createFeatureEditErrorResult("Incorrect geometry type."));else{var g=this._createDefaultAttributes(),_=f.mixAttributes(this._fieldsIndex,this._requiredFields,g,m.attributes,!0,e.warnings);_?e.featureErrors.push(_):(this._assignObjectId(g,m.attributes,!0),m.attributes=g,null!=m.uid&&(e.assignedObjectIds[m.uid]=m.attributes[l]),m.geometry&&(m.geometry=o.project(m.geometry,m.geometry.spatialReference,d)),c.push(m))}}if(p.addMany(u.convertFromFeatures([],c,r,a,n,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var F=this._queryEngine.timeExtent,b=F.start,I=F.end;e.layerDefinition.timeInfo.timeExtent=[b,I]}return e},e.prototype._applyEdits=function(e){var t=e.adds,i=e.updates,r=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),r&&r.length){for(var s=0,a=r;s<a.length;s++){var u=a[s];n.deleteResults.push(f.createFeatureEditSuccessResult(u))}this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}},e.prototype._applyAddEdits=function(e,t){for(var i=e.addResults,r=this._queryEngine,n=r.geometryType,a=r.hasM,l=r.hasZ,d=r.objectIdField,p=r.spatialReference,c=r.featureStore,y=[],h=0,m=t;h<m.length;h++){var g=m[h];if(g.geometry&&n!==s.getJsonType(g.geometry))i.push(f.createFeatureEditErrorResult("Incorrect geometry type."));else{var _=this._createDefaultAttributes(),F=f.mixAttributes(this._fieldsIndex,this._requiredFields,_,g.attributes);if(F)i.push(F);else{if(this._assignObjectId(_,g.attributes),g.attributes=_,null!=g.uid){var b=g.attributes[d];e.uidToObjectId[g.uid]=b}g.geometry&&(g.geometry=o.project(f.simplify(g.geometry,p),g.geometry.spatialReference,p)),y.push(g),i.push(f.createFeatureEditSuccessResult(g.attributes[d]))}}}c.addMany(u.convertFromFeatures([],y,n,l,a,d))},e.prototype._applyUpdateEdits=function(e,t){for(var i=e.updateResults,r=this._queryEngine,n=r.geometryType,a=r.hasM,l=r.hasZ,d=r.objectIdField,p=r.spatialReference,c=r.featureStore,y=0,h=t;y<h.length;y++){var m=h[y],g=m.attributes,_=m.geometry,F=g&&g[d];if(null!=F)if(c.has(F)){var b=u.convertToFeature(c.getFeature(F),n,l,a);if(_){if(n!==s.getJsonType(_)){i.push(f.createFeatureEditErrorResult("Incorrect geometry type."));continue}b.geometry=o.project(f.simplify(_,p),_.spatialReference,p)}if(g){var I=f.mixAttributes(this._fieldsIndex,this._requiredFields,b.attributes,g);if(I){i.push(I);continue}}c.add(u.convertFromFeature(b,n,l,a,d)),i.push(f.createFeatureEditSuccessResult(F))}else i.push(f.createFeatureEditErrorResult("Feature with object id "+F+" missing"));else i.push(f.createFeatureEditErrorResult("Identifier field "+d+" missing"))}},e.prototype._assignObjectId=function(e,t,i){void 0===i&&(i=!1);var r=this._queryEngine.objectIdField;i&&t&&isFinite(t[r])?e[r]=t[r]:e[r]=this._nextObjectId++},e}();t.default=I}));