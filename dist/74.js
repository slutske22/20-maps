(function(){var e={"esri/core/libs/quickselect/quickselect":362,"esri/core/libs/rbush/rbush":382,"esri/layers/graphics/data/FeatureStore":402,"esri/layers/graphics/data/executeTileQuery":424,"esri/layers/graphics/data/BoundsStore":466,"esri/layers/graphics/sources/support/clientSideDefaults":560,"esri/core/number":832,"esri/layers/graphics/sources/support/CSVSourceWorker":2058,"esri/layers/graphics/sources/csv/csv":2059},t=this||window,n=t.webpackJsonp=t.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{2058:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n(117),n(159),n(165),n(154),n(164),n(118),n(832),n(153),n(172),n(291),n(361),n(178),n(197),n(274),n(224),n(402),n(263),n(302),n(2059),n(560),n(255)],void 0===(r=function(e,t,n,i,r,o,a,s,u,l,d,c,f,h,p,m,g,y,v,_,x,b,I){Object.defineProperty(t,"__esModule",{value:!0});var F=b.createDrawingInfo("esriGeometryPoint"),w=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"];t.csvLatitudeFieldNames=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y"],t.csvLongitudeFieldNames=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x"];var B,M,N,S,T=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,E=[0,0],j=function(e,t){this.x=e,this.y=t},O=(B=u._parseInfo(),M=new RegExp("^"+B.regexp+"$"),N=new RegExp("["+B.group+"\\s\\xa0]","g"),S=B.factor,function(e){var t=M.exec(e);if(B.factor=S,!t)return NaN;var n=t[1];if(!t[1]){if(!t[2])return NaN;n=t[2],B.factor*=-1}return+(n=n.replace(N,"").replace(B.decimal,"."))*B.factor}),Y="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},X=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},e.prototype.load=function(e,t){return void 0===t&&(t={}),n.__awaiter(this,void 0,void 0,(function(){var i,r,o,a,s;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,l.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)])];case 1:return i=n.sent()[0],r=this._parse(i,e.parsing),this._queryEngine=this._createQueryEngine(i,r),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo&&(o=this._queryEngine.timeExtent,a=o.start,s=o.end,r.layerDefinition.timeInfo.timeExtent=[a,s]),[2,r]}}))}))},e.prototype.applyEdits=function(){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(e){throw new o("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}))}))},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._fetch=function(e,t){return n.__awaiter(this,void 0,void 0,(function(){var i;return n.__generator(this,(function(n){switch(n.label){case 0:if(!e)throw new o("csv-source:invalid-source","url not defined");return i=d.urlToObject(e),[4,r(i.path,{query:i.query,responseType:"text",signal:t.signal})];case 1:return[2,n.sent().data]}}))}))},e.prototype._parse=function(e,t){void 0===t&&(t={});var n={columnDelimiter:t.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}},i=x.readRows(e),r=i.next().value;if(!r)throw new o("csv","CSV is empty",{csv:e});if(r=r.trim(),!t.columnDelimiter){var a=x.inferDelimiter(r);if(!a)throw new o("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");n.columnDelimiter=a}var u=r.split(n.columnDelimiter),l=n.layerDefinition={name:"csv",drawingInfo:F,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:102100}}};if(!t.latitudeField||!t.longitudeField){var d=this._inferLocationInfo(u);if(!t.longitudeField&&!d.longitudeFieldName||!t.latitudeField&&!d.latitudeFieldName)throw new o("csv","Unable to identify latitudeField and/or longitudeField from CSV");n.locationInfo={longitudeFieldName:t.longitudeField||d.longitudeFieldName,latitudeFieldName:t.latitudeField||d.latitudeFieldName}}var c=this._inferFields(i,n.columnDelimiter,u,n.locationInfo);if(t.fields&&t.fields.length){for(var f=new Map,h=0,p=t.fields;h<p.length;h++){var m=p[h];f.set(m.name.toLowerCase(),m)}for(var g=0,y=c;g<y.length;g++){m=y[g];var v=f.get(m.name.toLowerCase());if(v){var _=m.name;s.mixin(m,v),m.name=_}}}if(l.fields=c,l.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(l.objectIdField=e.name,!0)}))||(m={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1},l.objectIdField=m.name,l.fields.unshift(m)),this._fieldsIndex=new I(l.fields),l.timeInfo){var b=l.timeInfo;if(b.startTimeField){var w=this._fieldsIndex.get(b.startTimeField);w?(b.startTimeField=w.name,w.type="esriFieldTypeDate"):b.startTimeField=null}if(b.endTimeField){var B=this._fieldsIndex.get(b.endTimeField);B?(b.endTimeField=B.name,B.type="esriFieldTypeDate"):b.endTimeField=null}if(b.trackIdField){var M=this._fieldsIndex.get(b.trackIdField);b.trackIdField=M?M.name:null}b.startTimeField||b.endTimeField||(l.timeInfo=null)}return n},e.prototype._inferLocationInfo=function(e){var n=null,i=null;return e.forEach((function(e){var r=e.toLowerCase();-1===t.csvLatitudeFieldNames.indexOf(r)||i||(i=e),-1===t.csvLongitudeFieldNames.indexOf(r)||n||(n=e)})),{longitudeFieldName:n,latitudeFieldName:i}},e.prototype._inferFields=function(e,t,n,i){var r=[],o=x.parseRows(e,n,t),a=[];e:for(;a.length<10;){var s=o.next(),u=s.value;if(s.done)break e;a.push(u)}for(var l=function(e){if(e===i.longitudeFieldName||e===i.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=a.map((function(t){return t[e]})),n=d._inferFieldType(t),o={name:e,type:null,alias:e};switch(n){case"integer":o.type="esriFieldTypeInteger";break;case"double":o.type="esriFieldTypeDouble";break;case"date":o.type="esriFieldTypeDate",o.length=36;break;default:o.type="esriFieldTypeString",o.length=255}r.push(o)}},d=this,c=0,f=n;c<f.length;c++)l(f[c]);return r},e.prototype._inferFieldType=function(e){var t=this;if(!e.length)return"string";var n=/[^+-.,0-9]/;return e.map((function(e){var i=!1;if(""!==e){if(n.test(e))i=!0;else{var r=O(e);if(!isNaN(r))return/[.,]/.test(e)||!Y(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var o=new Date(e);return t._isValidDate(o,e)?"date":"string"}return"string"}return"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))},e.prototype._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var n=!0;if(a("chrome")&&/\d+\W*$/.test(t)){var i=t.match(/[a-zA-Z]{2,}/);if(i){for(var r=!1,o=0;!r&&o<=i.length;)r=!T.test(i[o]),o++;n=!r}}return n},e.prototype._createQueryEngine=function(e,t){for(var n,r=t.locationInfo,o=r.latitudeFieldName,a=r.longitudeFieldName,s=t.layerDefinition,u=s.objectIdField,l=s.fields,d=s.extent,v=s.timeInfo,b=[],I=[],F=new Set,B=new Set,M=[],N=0,S=l;N<S.length;N++){var T=S[N],Y=T.name,X=T.type;"esriFieldTypeDate"===X?F.add(Y):w.indexOf(X)>-1&&B.add(Y),Y!==u&&M.push(Y)}var P=0,D=x.readRows(e);D.next();var k=x.parseRows(D,M,t.columnDelimiter);e:for(;;){var q=k.next(),C=q.value;if(q.done)break e;var R=this._parseCoordinateValue(C[o]),G=this._parseCoordinateValue(C[a]);if(null!=G&&null!=R&&!isNaN(R)&&!isNaN(G)){for(var L in C[o]=R,C[a]=G,C)if(L!==o&&L!==a)if(F.has(L)){var z=new Date(C[L]);C[L]=this._isValidDate(z,C[L])?z.getTime():null}else if(B.has(L)){var V=O(C[L]);isNaN(V)?C[L]=null:C[L]=V}C[u]=P,P++,b.push(new j(G,R)),I.push(C)}}if(!h.equals({wkid:4326},d.spatialReference))if(h.isWebMercator(d.spatialReference))for(var A=0,J=b;A<J.length;A++){var Q=J[A];n=p.lngLatToXY(Q.x,Q.y,E),Q.x=n[0],Q.y=n[1]}else b=c.projectMany(f.jsonAdapter,b,i.SpatialReference.WGS84,d.spatialReference,null);for(var Z=new y.default({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),W=new _.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:v,objectIdField:u,spatialReference:d.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:Z}),$=[],U=0;U<b.length;U++){var H=b[U],K=H.x,ee=H.y,te=I[U];te[u]=U+1,$.push(new m.default(new g.default([],[K,ee]),te,null,te[u]))}return Z.addMany($),W},e.prototype._parseCoordinateValue=function(e){if(null==e||""===e)return null;var t=O(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},e.prototype._checkProjection=function(e){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,v.checkProjectionSupport(h.WGS84,e)];case 1:return t.sent(),[3,3];case 2:throw t.sent(),new o("csv-layer","Projection not supported");case 3:return[2]}}))}))},e}();t.default=X}.apply(null,i))||(e.exports=r)},2059:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n(117)],void 0===(r=function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=/^\s*"([\S\s]*)"\s*$/,r=/""/g,o=[","," ",";","|","\t"];function a(e,t){for(var n={},i=e.length,r=0;r<i;r++)n[e[r]]=t[r];return n}function s(e,t,i){var r,o,a;return n.__generator(this,(function(n){switch(n.label){case 0:r=0,n.label=1;case 1:return r<=e.length?(o=e.indexOf(t,r),a=e.substring(r,o>-1?o:void 0),r+=a.length+1,i&&!a.trim()?[3,3]:[4,a]):[3,4];case 2:n.sent(),n.label=3;case 3:return[3,1];case 4:return[2]}}))}function u(e,t){return s(e,t,!1)}function l(e){var t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}t.readRows=function(e){return s(e,"\n",!0)},t.readRowParts=u,t.inferDelimiter=function(e){for(var t=e.trim(),n=0,i="",r=0,a=o;r<a.length;r++){var s=a[r],u=t.split(s).length;u>n&&(n=u,i=s)}return""===i?null:i},t.parseRows=function(e,t,o){var s,d,c,f,h,p,m,g,y,v;return n.__generator(this,(function(n){switch(n.label){case 0:s="",d="",c=0,f=[],n.label=1;case 1:if(h=e.next(),p=h.value,h.done)return[2];for(m=u(p,o);g=m.next(),y=g.value,!g.done;)if(s+=d+y,d="",(c+=l(y))%2==0){if(c>0){if(!(v=i.exec(s)))return f=[],s="",c=0,[3,1];f.push(v[1].replace(r,'"'))}else f.push(s);s="",c=0}else d=o;return 0!==c?[3,3]:[4,a(t,f)];case 2:return n.sent(),f=[],[3,4];case 3:d="\n",n.label=4;case 4:return[3,1];case 5:return[2]}}))}}.apply(null,i))||(e.exports=r)},362:function(e,t,n){var i;void 0===(i=function(){"use strict";function e(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function t(e,t){return e<t?-1:e>t?1:0}return function(n,i,r,o,a){!function t(n,i,r,o,a){for(;o>r;){if(o-r>600){var s=o-r+1,u=i-r+1,l=Math.log(s),d=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*d*(s-d)/s)*(u-s/2<0?-1:1);t(n,i,Math.max(r,Math.floor(i-u*d/s+c)),Math.min(o,Math.floor(i+(s-u)*d/s+c)),a)}var f=n[i],h=r,p=o;for(e(n,r,i),a(n[o],f)>0&&e(n,r,o);h<p;){for(e(n,h,p),h++,p--;a(n[h],f)<0;)h++;for(;a(n[p],f)>0;)p--}0===a(n[r],f)?e(n,r,p):e(n,++p,o),p<=i&&(r=p+1),i<=p&&(o=p-1)}}(n,i,r||0,o||n.length-1,a||t)}}.apply(null,[]))||(e.exports=i)},382:function(e,t,n){var i,r;i=[n(362)],void 0===(r=function(e){"use strict";function t(e,n){if(!(this instanceof t))return new t(e,n);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}function n(e,t,n){if(!n)return t.indexOf(e);for(var i=0;i<t.length;i++)if(n(e,t[i]))return i;return-1}function i(e,t){r(e,0,e.children.length,t,e)}function r(e,t,n,i,r){r||(r=f(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a,s=t;s<n;s++)a=e.children[s],o(r,e.leaf?i(a):a);return r}function o(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function a(e,t){return e.minX-t.minX}function s(e,t){return e.minY-t.minY}function u(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function l(e){return e.maxX-e.minX+(e.maxY-e.minY)}function d(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function c(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function f(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function h(t,n,i,r,o){for(var a,s=[n,i];s.length;)(i=s.pop())-(n=s.pop())<=r||(a=n+Math.ceil((i-n)/r/2)*r,e(t,a,n,i,o),s.push(n,a,a,i))}return t.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,n=[],i=this.toBBox;if(!c(e,t))return n;for(var r,o,a,s,u=[];t;){for(r=0,o=t.children.length;r<o;r++)a=t.children[r],c(e,s=t.leaf?i(a):a)&&(t.leaf?n.push(a):d(e,s)?this._all(a,n):u.push(a));t=u.pop()}return n},collides:function(e){var t=this.data,n=this.toBBox;if(!c(e,t))return!1;for(var i,r,o,a,s=[];t;){for(i=0,r=t.children.length;i<r;i++)if(o=t.children[i],c(e,a=t.leaf?n(o):o)){if(t.leaf||d(e,a))return!0;s.push(o)}t=s.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}var i=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(e){return e&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=f([]),this},remove:function(e,t){if(!e)return this;for(var i,r,o,a,s=this.data,u=this.toBBox(e),l=[],c=[];s||l.length;){if(s||(s=l.pop(),r=l[l.length-1],i=c.pop(),a=!0),s.leaf&&-1!==(o=n(e,s.children,t)))return s.children.splice(o,1),l.push(s),this._condense(l),this;a||s.leaf||!d(s,u)?r?(i++,s=r.children[i],a=!1):s=null:(l.push(s),c.push(i),i=0,r=s,s=s.children[0])}return this},toBBox:function(e){return e},compareMinX:a,compareMinY:s,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var n=[];e;)e.leaf?t.push.apply(t,e.children):n.push.apply(n,e.children),e=n.pop();return t},_build:function(e,t,n,r){var o,a=n-t+1,s=this._maxEntries;if(a<=s)return i(o=f(e.slice(t,n+1)),this.toBBox),o;r||(r=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,r-1))),(o=f([])).leaf=!1,o.height=r;var u,l,d,c,p=Math.ceil(a/s),m=p*Math.ceil(Math.sqrt(s));for(h(e,t,n,m,this.compareMinX),u=t;u<=n;u+=m)for(h(e,u,d=Math.min(u+m-1,n),p,this.compareMinY),l=u;l<=d;l+=p)c=Math.min(l+p-1,d),o.children.push(this._build(e,l,c,r-1));return i(o,this.toBBox),o},_chooseSubtree:function(e,t,n,i){for(var r,o,a,s,l,d,c,f,h,p;i.push(t),!t.leaf&&i.length-1!==n;){for(c=f=1/0,r=0,o=t.children.length;r<o;r++)l=u(a=t.children[r]),h=e,p=a,(d=(Math.max(p.maxX,h.maxX)-Math.min(p.minX,h.minX))*(Math.max(p.maxY,h.maxY)-Math.min(p.minY,h.minY))-l)<f?(f=d,c=l<c?l:c,s=a):d===f&&l<c&&(c=l,s=a);t=s||t.children[0]}return t},_insert:function(e,t,n){var i=this.toBBox,r=n?e:i(e),a=[],s=this._chooseSubtree(r,this.data,t,a);for(s.children.push(e),o(s,r);t>=0&&a[t].children.length>this._maxEntries;)this._split(a,t),t--;this._adjustParentBBoxes(r,a,t)},_split:function(e,t){var n=e[t],r=n.children.length,o=this._minEntries;this._chooseSplitAxis(n,o,r);var a=this._chooseSplitIndex(n,o,r),s=f(n.children.splice(a,n.children.length-a));s.height=n.height,s.leaf=n.leaf,i(n,this.toBBox),i(s,this.toBBox),t?e[t-1].children.push(s):this._splitRoot(n,s)},_splitRoot:function(e,t){this.data=f([e,t]),this.data.height=e.height+1,this.data.leaf=!1,i(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,n){var i,o,a,s,l,d,c,f,h,p,m,g,y,v;for(d=c=1/0,i=t;i<=n-t;i++)h=o=r(e,0,i,this.toBBox),p=a=r(e,i,n,this.toBBox),void 0,void 0,void 0,void 0,m=Math.max(h.minX,p.minX),g=Math.max(h.minY,p.minY),y=Math.min(h.maxX,p.maxX),v=Math.min(h.maxY,p.maxY),s=Math.max(0,y-m)*Math.max(0,v-g),l=u(o)+u(a),s<d?(d=s,f=i,c=l<c?l:c):s===d&&l<c&&(c=l,f=i);return f},_chooseSplitAxis:function(e,t,n){var i=e.leaf?this.compareMinX:a,r=e.leaf?this.compareMinY:s;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,r)&&e.children.sort(i)},_allDistMargin:function(e,t,n,i){e.children.sort(i);var a,s,u=this.toBBox,d=r(e,0,t,u),c=r(e,n-t,n,u),f=l(d)+l(c);for(a=t;a<n-t;a++)s=e.children[a],o(d,e.leaf?u(s):s),f+=l(d);for(a=n-t-1;a>=t;a--)s=e.children[a],o(c,e.leaf?u(s):s),f+=l(c);return f},_adjustParentBBoxes:function(e,t,n){for(var i=n;i>=0;i--)o(t[i],e)},_condense:function(e){for(var t,n=e.length-1;n>=0;n--)0===e[n].children.length?n>0?(t=e[n-1].children).splice(t.indexOf(e[n]),1):this.clear():i(e[n],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}},t}.apply(null,i))||(e.exports=r)},402:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n(117),n(154),n(190),n(156),n(152),n(193),n(173),n(178),n(243),n(466),n(424),n(384)],void 0===(r=function(e,t,n,i,r,o,a,s,u,l,d,c,f,h){Object.defineProperty(t,"__esModule",{value:!0});var p=o.getLogger("esri.layers.graphics.data.FeatureStore"),m=function(){function e(e){this.geometryInfo=e,this._boundsStore=new c.BoundsStore,this._featuresById=new Map,this._markedIds=new Set,this.events=new r,this.featureAdapter=h.optimizedFeatureQueryEngineAdapter}return Object.defineProperty(e.prototype,"geometryType",{get:function(){return this.geometryInfo.geometryType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasM",{get:function(){return this.geometryInfo.hasM},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasZ",{get:function(){return this.geometryInfo.hasZ},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"numFeatures",{get:function(){return this._featuresById.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullBounds",{get:function(){var e=this;if(!this.numFeatures)return null;var t=u.create(u.NEGATIVE_INFINITY);return this._featuresById.forEach((function(n){var i=e._boundsStore.get(n.objectId);i&&(t[0]=Math.min(i[0],t[0]),t[1]=Math.min(i[1],t[1]),t[2]=Math.max(i[2],t[2]),t[3]=Math.max(i[3],t[3]))})),t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storeStatistics",{get:function(){var e=0;return this._featuresById.forEach((function(t){t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}},enumerable:!0,configurable:!0}),e.prototype.add=function(e){this._add(e),this._emitChanged()},e.prototype.addMany=function(e){for(var t=0,n=e;t<n.length;t++){var i=n[t];this._add(i)}this._emitChanged()},e.prototype.clear=function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()},e.prototype.removeById=function(e){var t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null},e.prototype.removeManyById=function(e){this._boundsStore.invalidateIndex();for(var t=0,n=e;t<n.length;t++){var i=n[t],r=this._featuresById.get(i);r&&this._remove(r)}this._emitChanged()},e.prototype.forEachBounds=function(e,t,n){for(var i=0,r=e;i<r.length;i++){var o=r[i],a=this._boundsStore.get(o.objectId);a&&t(s.fromRect(n,a))}},e.prototype.getFeature=function(e){return this._featuresById.get(e)},e.prototype.has=function(e){return this._featuresById.has(e)},e.prototype.forEach=function(e){this._featuresById.forEach((function(t){return e(t)}))},e.prototype.forEachInBounds=function(e,t){var n=this;this._boundsStore.forEachInBounds(e,(function(e){t(n._featuresById.get(e))}))},e.prototype.startMarkingUsedFeatures=function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()},e.prototype.sweep=function(){var e=this,t=!1;this._featuresById.forEach((function(n,i){e._markedIds.has(i)||(t=!0,e._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()},e.prototype.executeTileQuery=function(e,t,i){return n.__awaiter(this,void 0,void 0,(function(){var r,o,a,s,d,c,h,p,m,g,y,v,_,x;return n.__generator(this,(function(n){return r=i.returnGeometry,o=i.returnCentroid,a=i.returnOutline,s=i.pixelBuffer,d=new Set,c=[],h=s*e.resolution,p=u.pad(e.bounds,h,u.create()),f.createTileFeatures(c,d,this.geometryInfo,this,p,r,o,a,{originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]}),("esriGeometryPoint"===this.geometryType||o)&&(m=l.getInfo(t))&&(g=m.valid,y=g[0],v=g[1],p[0]<y&&(_=u.fromValues(v-h,p[1],v,p[3]),f.createTileFeatures(c,d,this.geometryInfo,this,_,r,o,a,{originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[v,e.bounds[3]]})),p[2]>v&&(x=u.fromValues(y,p[1],y+h,p[3]),f.createTileFeatures(c,d,this.geometryInfo,this,x,r,o,a,{originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[y-v+e.bounds[0],e.bounds[3]]}))),c.sort((function(e,t){return e.localId-t.localId})),[2,{features:c,objectIds:d}]}))}))},e.prototype._emitChanged=function(){this.events.emit("changed",void 0)},e.prototype._add=function(e){if(e){var t=e.objectId;if(null!=t){var n,r=this._featuresById.get(t);if(this._markedIds.add(t),r?(e.localId=r.localId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):a.isSome(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=d.getBoundsOptimizedGeometry(n||u.create(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,n),this._featuresById.set(t,e)}else p.error(new i("featurestore:invalid-feature","feature id is missing",{feature:e}))}},e.prototype._remove=function(e){return a.isSome(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e},e}();t.default=m}.apply(null,i))||(e.exports=r)},424:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n(173),n(243),n(224),n(302),n(315)],void 0===(r=function(e,t,n,i,r,o,a){Object.defineProperty(t,"__esModule",{value:!0});var s=new r.default,u={esriGeometryPoint:i.convertToPoint,esriGeometryPolyline:i.convertToPolyline,esriGeometryPolygon:i.convertToPolygon,esriGeometryMultipoint:i.convertToMultipoint};t.executeTileQueryForIds=function(e,t,i){var r=i.pixelBuffer*t.resolution,o=n.pad(t.bounds,r,n.create()),a=[];return e.featureStore.forEachInBounds(o,(function(t){return a.push(e.featureAdapter.getObjectId(t))})),a},t.createTileFeatures=function(e,t,n,i,r,c,f,h,p){var m=u[n.geometryType],g=l[n.geometryType],y="esriGeometryPolygon"===n.geometryType&&!h,v=n.hasZ?n.hasM?4:3:n.hasM?3:2;f&&!c?i.forEachInBounds(r,(function(i){return function(e,t,n,i,r){if(!t.has(n.objectId)){var s=a.getCentroid(i,n,r),u=n.attributes;s&&(t.add(n.objectId),e.push(new o.Feature(u,n.localId,null,s)))}}(e,t,i,n,p)})):c&&!f?i.forEachInBounds(r,(function(n){return function(e,t,n,i,r,a,u,l){if(!t.has(n.objectId)){var c=n.attributes,f=i(d(s,n.geometry,r,a,l,u),!1,!1);f&&(t.add(n.objectId),e.push(new o.Feature(c,n.localId,f,null)))}}(e,t,n,m,v,g,p,y)})):i.forEachInBounds(r,(function(i){return function(e,t,n,i,r,u,l,c,f){if(!t.has(n.objectId)){var h=a.getCentroid(i,n,r),p=n.attributes,m=u(d(s,n.geometry,l,c,f,r),!1,!1);m&&h&&(t.add(n.objectId),e.push(new o.Feature(p,n.localId,m,h)))}}(e,t,i,n,p,m,v,g,y)}))};var l={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0};function d(e,t,n,r,o,a){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;var s,u,l,d,c=t.coords,f=t.lengths;if(!f.length)return e.coords[0]=i.quantizeX(a,c[0]),e.coords[1]=i.quantizeY(a,c[1]),e.coords.length=n,e;for(var h=0,p=0,m=p,g=0,y=f;g<y.length;g++){var v=y[g];if(!(v<r))if(p=m,l=s=i.quantizeX(a,c[h]),d=u=i.quantizeY(a,c[h+1]),e.coords[p]=l,e.coords[p+1]=d,h+=n,1!==v){var _=(l=i.quantizeX(a,c[h]))-s,x=(d=i.quantizeY(a,c[h+1]))-u,b=x/_;p+=2,e.coords[p]=_,e.coords[p+1]=x,s=l,u=d,h+=n;for(var I=2;I<v;I++){if(l=i.quantizeX(a,c[h]),d=i.quantizeY(a,c[h+1]),l!==s||d!==u){var F=l-s,w=d-u,B=w/F;b!==B&&(isFinite(b)||isFinite(B))||!(o||(x>=0&&w>=0||x<=0&&w<=0)&&(_>=0&&F>=0||_<=0&&F<=0))?(_=F,x=w,p+=2):(_+=F,x+=w),e.coords[p]=_,e.coords[p+1]=x,b=B,s=l,u=d}h+=n}var M=(p+2-m)/2;M>=r&&(e.lengths.push(M),m=p+2)}else e.lengths.push(1),m=p+2}return e.coords.length>m&&(e.coords.length=m),e.coords.length?e:null}t.quantizeOptimizedGeometryForDisplay=d}.apply(null,i))||(e.exports=r)},466:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n(164),n(382),n(161)],void 0===(r=function(e,t,n,i){Object.defineProperty(t,"__esModule",{value:!0});var r={minX:0,minY:0,maxX:0,maxY:0},o=function(){function e(){var e=this;this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=i(9,n("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(e._indexInvalid){var t=new Array(e._idByBounds.size),n=0;e._idByBounds.forEach((function(e,i){t[n++]=i})),e._indexInvalid=!1,e._index.clear(),e._index.load(t)}else e._boundsToLoad.length&&(e._index.load(e._boundsToLoad.filter((function(t){return e._idByBounds.has(t)}))),e._boundsToLoad.length=0)}}return e.prototype.clear=function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()},e.prototype.delete=function(e){var t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))},e.prototype.forEachInBounds=function(e,t){this._loadIndex();for(var n=0,i=function(e,t){return r.minX=t[0],r.minY=t[1],r.maxX=t[2],r.maxY=t[3],e.search(r)}(this._index,e);n<i.length;n++){var o=i[n];t(this._idByBounds.get(o))}},e.prototype.get=function(e){return this._boundsById.get(e)},e.prototype.has=function(e){return this._boundsById.has(e)},e.prototype.invalidateIndex=function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)},e.prototype.set=function(e,t){if(!this._indexInvalid){var n=this._boundsById.get(e);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))},e}();t.BoundsStore=o}.apply(null,i))||(e.exports=r)},560:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n(117),n(164),n(118),n(582)],void 0===(r=function(e,t,n,i,r,o){Object.defineProperty(t,"__esModule",{value:!0}),t.createDrawingInfo=function(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.defaultPointSymbolJSON:"esriGeometryPolyline"===e?o.defaultPolylineSymbolJSON:o.defaultPolygonSymbolJSON}}},t.createDefaultAttributesFunction=function(e,t){if(i("csp-restrictions"))return function(){var i;return n.__assign(((i={})[t]=null,i),e)};try{var r="this."+t+" = null;";for(var o in e)r+="this."+o+" = "+JSON.stringify(e[o])+";";var a=new Function(r);return function(){return new a}}catch(i){return function(){var i;return n.__assign(((i={})[t]=null,i),e)}}},t.createDefaultTemplate=function(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:r.clone(e)}}]}}.apply(null,i))||(e.exports=r)},832:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n(117),n(229),n(517)],void 0===(r=function(e,t,n,i,r){Object.defineProperty(t,"__esModule",{value:!0});var o={ar:[".",","],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function a(e){e||(e=r.getLocale());var t=e in o;if(!t){var n=e.split("-");n.length>1&&n[0]in o&&(e=n[0],t=!0),t||(e="en")}var i=o[e],a=i[0],s=i[1],u=i[2];return{decimal:a,group:s,pattern:void 0===u?"#,##0.###":u}}t.getCustoms=a,t.format=function(e,t){var r=a((t=n.__assign({},t)).locale);t.customs=r;var o=t.pattern||r.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){var r=(n=n||{}).customs.group,o=n.customs.decimal,a=t.split(";"),u=a[0];if(-1!==(t=a[e<0?1:0]||"-"+u).indexOf("%"))e*=100;else if(-1!==t.indexOf("‰"))e*=1e3;else{if(-1!==t.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==t.indexOf("E"))throw new Error("exponential notation not supported")}var l=s,d=u.match(l);if(!d)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(l,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);var r=t.split("."),o="string"==typeof n.places&&n.places.indexOf(","),a=n.places;o?a=n.places.substring(o+1):a>=0||(a=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(a))));var s=String(Math.abs(e)).split("."),u=s[1]||"";if(r[1]||n.places){o&&(n.places=n.places.substring(0,o));var l=void 0!==n.places?n.places:r[1]&&r[1].lastIndexOf("0")+1;l>u.length&&(s[1]=i.padEnd(u,Number(l),"0")),a<u.length&&(s[1]=u.substr(0,Number(a)))}else s[1]&&s.pop();var d=r[0].replace(",",""),c=d.indexOf("0");-1!==c&&((c=d.length-c)>s[0].length&&(s[0]=i.padStart(s[0],c,"0")),-1===d.indexOf("#")&&(s[0]=s[0].substr(s[0].length-c)));var f,h,p=r[0].lastIndexOf(",");if(-1!==p){f=r[0].length-p-1;var m=r[0].substr(0,p);-1!==(p=m.lastIndexOf(","))&&(h=m.length-p-1)}for(var g=[],y=s[0];y;){var v=y.length-f;g.push(v>0?y.substr(v):y),y=v>0?y.slice(0,v):"",h&&(f=h,h=void 0)}return s[0]=g.reverse().join(n.group||","),s.join(n.decimal||".")}(e,d[0],{decimal:o,group:r,places:n.places,round:n.round}))}(e,o,t)};var s=/[#0,]*[#0](?:\.0*#*)?/;function u(e){var t=a((e=e||{}).locale),n=e.pattern||t.pattern,r=t.group,o=t.decimal,u=1;if(-1!==n.indexOf("%"))u/=100;else if(-1!==n.indexOf("‰"))u/=1e3;else if(-1!==n.indexOf("¤"))throw new Error("currency notation not supported");var c=n.split(";");return 1===c.length&&c.push("-"+c[0]),{regexp:d(c,(function(t){return(t="(?:"+i.escapeRegExpString(t,".")+")").replace(s,(function(t){var n={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:o,exponent:!1},i=t.split("."),a=e.places;1===i.length&&1!==u&&(i[1]="###"),1===i.length||0===a?n.fractional=!1:(void 0===a&&(a=e.pattern?i[1].lastIndexOf("0")+1:1/0),a&&null==e.fractional&&(n.fractional=!0),!e.places&&a<i[1].length&&(a+=","+i[1].length),n.places=a);var s=i[0].split(",");return s.length>1&&(n.groupSize=s.pop().length,s.length>1&&(n.groupSize2=s.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);var t=l(e),n=d(e.fractional,(function(t){var n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0),i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+d(e.exponent,(function(t){return t?"([eE]"+l({signed:e.eSigned})+")":""}))}(n)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:o,factor:u}}function l(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",d(e.signed,(function(e){return e?"[-+]":""}),!0)+d(e.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=i.escapeRegExpString(t))?t="\\s":" "===t&&(t="\\s\\xa0");var n=e.groupSize,r=e.groupSize2;if(r){var o="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+n+"})";return n-r>0?"(?:"+o+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":o}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}t.regexp=function(e){return u(e).regexp},t._parseInfo=u,t.parse=function(e,t){var n=u(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;var r=i[1];if(!i[1]){if(!i[2])return NaN;r=i[2],n.factor*=-1}return r=r.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(r)*n.factor};var d=function(e,t,n){if(!(e instanceof Array))return t(e);for(var i=[],r=0;r<e.length;r++)i.push(t(e[r]));return c(i.join("|"),n)},c=function(e,t){return"("+(t?"?:":"")+e+")"}}.apply(null,i))||(e.exports=r)}}]);
//# sourceMappingURL=74.js.map