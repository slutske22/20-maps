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

define(["require","exports","tslib","../../config","../../intl","../has","../Logger","../promiseUtils","./loaderConfig","./utils","./WorkerFallback"],(function(e,r,t,o,a,s,n,i,d,g,l){Object.defineProperty(r,"__esModule",{value:!0});var c=n.getLogger("esri.core.workers");s.add("esri-workers-arraybuffer-transfer",!s("safari")||s("safari")>=12);var f,u=g.MessageType.CONFIGURED,v=g.MessageType.CONFIGURE,b=g.MessageType.HANDSHAKE;try{f=URL.createObjectURL(new Blob(['var globalId=0,outgoing=new Map,configured=!1,HANDSHAKE=0,CONFIGURE=1,CONFIGURED=2,OPEN=3,OPENED=4,RESPONSE=5,INVOKE=6,ABORT=7;function createAbortError(){var error=new Error("Aborted");return error.name="AbortError",error}function receiveMessage(event){return event&&event.data?"string"==typeof event.data?JSON.parse(event.data):event.data:null}function invokeStaticMessage(methodName,data,options){var signal=options&&options.signal,jobId=globalId++;return new Promise((function(resolve,reject){if(signal){if(signal.aborted)return reject(createAbortError());signal.addEventListener("abort",(function(){outgoing.get(jobId)&&(outgoing.delete(jobId),self.postMessage({type:ABORT,jobId:jobId}),reject(createAbortError()))}))}outgoing.set(jobId,{resolve:resolve,reject:reject}),self.postMessage({type:INVOKE,jobId:jobId,methodName:methodName,abortable:null!=signal,data:data})}))}function messageHandler(event){var message=receiveMessage(event);if(message){var jobId=message.jobId;switch(message.type){case CONFIGURE:var configuration=message.configure;if(configured)return;configured=!0,self.dojoConfig=configuration.loaderConfig,self.importScripts(configuration.loaderUrl),"function"==typeof require.config&&require.config(configuration.loaderConfig),self.esriConfig=configuration.esriConfig,self.postMessage({type:CONFIGURED});break;case OPEN:var modulePath=message.modulePath;require(["esri/core/workers/RemoteClient"],(function(RemoteClient){RemoteClient.loadWorker(modulePath).then((function(Module){return Module||new Promise((function(resolve){require([modulePath],resolve)}))})).then((function(Module){var port=RemoteClient.connect(Module);self.postMessage({type:OPENED,jobId:jobId,data:port},[port])}))}));break;case RESPONSE:if(outgoing.has(jobId)){var deferred=outgoing.get(jobId);outgoing.delete(jobId),message.error?deferred.reject(JSON.parse(message.error)):deferred.resolve(message.data)}}}}self.addEventListener("message",messageHandler),self.postMessage({type:HANDSHAKE});'],{type:"text/javascript"}))}catch(e){}var m="Failed to create Worker. Fallback to execute module in main thread";function p(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){return[2,i.create((function(r){function n(l){var c=g.receiveMessage(l);if(c)switch(c.type){case b:!function(e){var r,n=o.workers.loaderUrl||d.DEFAULT_LOADER_URL;if(null!=o.default){var i=t.__assign({},o);delete i.default,r=JSON.parse(JSON.stringify(i))}else r=JSON.parse(JSON.stringify(o));r.locale=a.getLocale(),r.has={"csp-restrictions":s("csp-restrictions"),"esri-2d-debug":s("esri-2d-debug"),"esri-atomics":s("esri-atomics"),"esri-secure-context":s("esri-secure-context"),"esri-shared-array-buffer":s("esri-shared-array-buffer"),"esri-webgl-max-texture-size":s("esri-webgl-max-texture-size"),"esri-webgl-texture-float":s("esri-webgl-texture-float"),"esri-workers-arraybuffer-transfer":s("esri-workers-arraybuffer-transfer"),"host-webworker":1};var g=o.workers.loaderConfig,l=d.default({baseUrl:g.baseUrl,locale:a.getLocale(),has:t.__assign({"csp-restrictions":s("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1},g.has),map:t.__assign({},g.map),paths:t.__assign({},g.paths),packages:g.packages||[]});e.postMessage({type:v,configure:{esriConfig:r,loaderUrl:n,loaderConfig:l}})}(e);break;case u:e.removeEventListener("message",n),e.removeEventListener("error",i),r(e)}}function i(r){r.preventDefault(),e.removeEventListener("message",n),e.removeEventListener("error",i),c.warn("Failed to create Worker. Fallback to execute module in main thread",r),(e=new l).addEventListener("message",n),e.addEventListener("error",i)}e.addEventListener("message",n),e.addEventListener("error",i)}))]}))}))}r.createWorker=function(){return t.__awaiter(this,void 0,void 0,(function(){var e;return t.__generator(this,(function(r){if(!s("esri-workers"))return[2,p(new l)];if(f)try{e=new Worker(f)}catch(r){c.warn(m,event),e=new l}else c.warn(m,event),e=new l;return[2,p(e)]}))}))}}));