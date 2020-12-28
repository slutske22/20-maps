(function(){var t={"esri/views/2d/mapViewDeps":2082,"esri/views/2d/LabelManager":2083,"esri/views/2d/navigation/MapViewNavigation":2089,"esri/views/2d/navigation/ZoomBox":2090,"esri/views/2d/navigation/actions/Pan":2091,"esri/views/2d/navigation/actions/Pinch":2092,"esri/views/2d/navigation/actions/Rotate":2093,"esri/views/2d/magnifier/MagnifierView2D":2094},e=this||window,i=e.webpackJsonp=e.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(t):(i.absMidsWaiting=i.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{2082:function(t,e,i){var o,n;o=[i.dj.c(t.i),e,i(2083),i(610),i(2089),i(2094)],void 0===(n=function(t,e,i,o,n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.LabelManager=i.default,e.GraphicsView2D=o.default,e.MapViewNavigation=n.default,e.MagnifierView2D=a.default}.apply(null,o))||(t.exports=n)},2083:function(t,e,i){var o,n;o=[i.dj.c(t.i),e,i(117),i(158),i(154),i(236),i(156),i(516),i(151),i(186)],void 0===(n=function(t,e,i,o,n,a,r,s,u,p){Object.defineProperty(e,"__esModule",{value:!0});var m=r.getLogger("esri.views.2d.layers.labels.LabelManager"),h=function(t){function e(e){var i=t.call(this,e)||this;return i._applyVisibilityPassThrottled=s.throttle(i._applyVisibilityPass,64,i),i.lastUpdateId=-1,i.updateRequested=!1,i.view=null,i}return i.__extends(e,t),e.prototype.initialize=function(){var t=this;this.collisionEngine=new p.CollisionEngine(this.view.featuresTilingScheme),this._layerViewSorter=new p.LayerViewSorter((function(e,i){t.collisionEngine.registerLayerView(e,i);var o=e.tileRenderer;o&&o.forEachTile((function(i){i.isDirty=!0,t.addTile(e,i)})),t.requestUpdate()}),(function(e){t.collisionEngine.unregisterLayerView(e),t.requestUpdate()})),this.handles.add(this.view.allLayerViews.on("change",(function(e){t._layerViewSorter.update(e)})))},e.prototype.destroy=function(){this._layerViewSorter.destroy(),this._layerViewSorter=null,this.collisionEngine=null,this._applyVisibilityPassThrottled.remove()},Object.defineProperty(e.prototype,"updating",{get:function(){return this.updateRequested},enumerable:!0,configurable:!0}),e.prototype.update=function(t){this._applyVisibilityPassThrottled(t)},e.prototype.viewChange=function(){this.requestUpdate()},e.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())},e.prototype.processUpdate=function(t){this._set("updateParameters",t),this.updateRequested&&(this.updateRequested=!1,this.update(t))},e.prototype.addTile=function(t,e){this.collisionEngine.addTile(t,e)},e.prototype.removeTile=function(t,e){this.collisionEngine.removeTile(t,e)},e.prototype._applyVisibilityPass=function(t){try{var e=this.view.featuresTilingScheme.getClosestInfoForScale(t.state.scale).level;this.collisionEngine.run(t,e)}catch(t){m.error(new n("mapview-labeling","Encountered an error during label decluttering",t))}},i.__decorate([u.property()],e.prototype,"updateRequested",void 0),i.__decorate([u.property({readOnly:!0})],e.prototype,"updateParameters",void 0),i.__decorate([u.property({dependsOn:["updateRequested"]})],e.prototype,"updating",null),i.__decorate([u.property()],e.prototype,"view",void 0),i.__decorate([u.subclass("esri.views.2d.layers.labels.LabelManager")],e)}(a.HandleOwnerMixin(o));e.default=h}.apply(null,o))||(t.exports=n)},2089:function(t,e,i){var o,n;o=[i.dj.c(t.i),e,i(117),i(369),i(158),i(151),i(202),i(440),i(2090),i(2091),i(2092),i(2093)],void 0===(n=function(t,e,i,o,n,a,r,s,u,p,m,h){Object.defineProperty(e,"__esModule",{value:!0});var c=new o({targetGeometry:new r}),d=[0,0],l=function(t){function e(e){var i=t.call(this,e)||this;return i._endTimer=null,i.animationManager=null,i}return i.__extends(e,t),e.prototype.initialize=function(){this.pan=new p({navigation:this}),this.rotate=new h({navigation:this}),this.pinch=new m({navigation:this}),this.zoomBox=new u({view:this.view,navigation:this})},e.prototype.destroy=function(){this.zoomBox.destroy(),this.zoomBox=null,this.animationManager=null},e.prototype.begin=function(){this._set("interacting",!0)},e.prototype.end=function(){this._lastEventTimestamp=performance.now(),this._startTimer(250)},e.prototype.zoom=function(t,e){return void 0===e&&(e=this._getDefaultAnchor()),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs?t<1?[2,this.zoomIn(e)]:[2,this.zoomOut(e)]:(this.setViewpoint(e,t,0,[0,0]),[2])}))}))},e.prototype.zoomIn=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,o;return i.__generator(this,(function(i){return e=this.view,o=e.constraints.snapToNextScale(e.scale),[2,this._zoomToScale(o,t)]}))}))},e.prototype.zoomOut=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,o;return i.__generator(this,(function(i){return e=this.view,o=e.constraints.snapToPreviousScale(e.scale),[2,this._zoomToScale(o,t)]}))}))},e.prototype.setViewpoint=function(t,e,i,o){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,e,i,o),this.end()},e.prototype.setViewpointImmediate=function(t,e,i,o){void 0===e&&(e=0),void 0===i&&(i=[0,0]),void 0===o&&(o=this._getDefaultAnchor()),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,o,t,e,i)},e.prototype.continousRotateClockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(function(t){s.rotateBy(t,t,-1)}))},e.prototype.continousRotateCounterclockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(function(t){s.rotateBy(t,t,1)}))},e.prototype.resetRotation=function(){this.view.rotation=0},e.prototype.continousPanLeft=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(function(t){s.translateBy(t,t,[-10,0])}))},e.prototype.continousPanRight=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(function(t){s.translateBy(t,t,[10,0])}))},e.prototype.continousPanUp=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(function(t){s.translateBy(t,t,[0,10])}))},e.prototype.continousPanDown=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(function(t){s.translateBy(t,t,[0,-10])}))},e.prototype.stop=function(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))},e.prototype._startTimer=function(t){var e=this;return null!==this._endTimer||(this._endTimer=setTimeout((function(){e._endTimer=null;var t=performance.now()-e._lastEventTimestamp;t<250?e._endTimer=e._startTimer(t):e._set("interacting",!1)}),t)),this._endTimer},e.prototype._getDefaultAnchor=function(){var t=this.view,e=t.size,i=t.padding,o=i.left,n=i.right,a=i.top,r=i.bottom;return d[0]=.5*(e[0]-n+o),d[1]=.5*(e[1]-r+a),d},e.prototype._zoomToScale=function(t,e){return void 0===e&&(e=this._getDefaultAnchor()),i.__awaiter(this,void 0,void 0,(function(){var o,n,a,r,u,p,m,h;return i.__generator(this,(function(i){return o=this.view,n=o.constraints,a=o.scale,r=o.viewpoint,u=o.size,p=o.padding,m=n.canZoomInTo(t),h=n.canZoomOutTo(t),t<a&&!m||t>a&&!h?[2]:[2,o.goTo(s.padAndScaleAndRotateBy(c,r,t/a,0,e,u,p),{animate:!0})]}))}))},e.prototype._scaleRotateTranslateViewpoint=function(t,e,i,o,n){var a=this.view,r=a.size,u=a.padding,p=a.constraints,m=a.scale,h=a.viewpoint,c=m*i,d=p.canZoomInTo(c),l=p.canZoomOutTo(c);return(i<1&&!d||i>1&&!l)&&(i=1),s.translateBy(h,h,n),s.padAndScaleAndRotateBy(t,h,i,o,e,r,u)},i.__decorate([a.property()],e.prototype,"animationManager",void 0),i.__decorate([a.property({type:Boolean,readOnly:!0})],e.prototype,"interacting",void 0),i.__decorate([a.property()],e.prototype,"pan",void 0),i.__decorate([a.property()],e.prototype,"pinch",void 0),i.__decorate([a.property()],e.prototype,"rotate",void 0),i.__decorate([a.property()],e.prototype,"view",void 0),i.__decorate([a.property()],e.prototype,"zoomBox",void 0),i.__decorate([a.subclass("esri.views.2d.navigation.MapViewNavigation")],e)}(n);e.default=l}.apply(null,o))||(t.exports=n)},2090:function(t,e,i){var o,n;o=[i.dj.c(t.i),e,i(117),i(158),i(171),i(151)],void 0===(n=function(t,e,i,o,n,a){var r="Shift";return function(t){function e(e){var i=t.call(this,e)||this;return i._container=null,i._overlay=null,i._backgroundShape=null,i._boxShape=null,i._box={x:0,y:0,width:0,height:0},i._redraw=i._redraw.bind(i),i}return i.__extends(e,t),e.prototype.destroy=function(){this.view=null},Object.defineProperty(e.prototype,"view",{set:function(t){var e=this;this._handles&&this._handles.forEach((function(t){t.remove()})),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[r],(function(t){return e._handleDrag(t,1)})),t.on("drag",[r,"Ctrl"],(function(t){return e._handleDrag(t,-1)})))},enumerable:!0,configurable:!0}),e.prototype._start=function(){this._createContainer(),this._createOverlay(),this.navigation.begin()},e.prototype._update=function(t,e,i,o){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=o,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))},e.prototype._end=function(t,e,i,o,a){var r=this.view,s=r.toMap(n.createScreenPoint(t+.5*i,e+.5*o)),u=Math.max(i/r.width,o/r.height);-1===a&&(u=1/u),this._destroyOverlay(),this.navigation.end(),r.goTo({center:s,scale:r.scale*u})},e.prototype._updateBox=function(t,e,i,o){var n=this._boxShape;n.setAttributeNS(null,"x",""+t),n.setAttributeNS(null,"y",""+e),n.setAttributeNS(null,"width",""+i),n.setAttributeNS(null,"height",""+o),n.setAttributeNS(null,"class","esri-zoom-box__outline")},e.prototype._updateBackground=function(t,e,i,o){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,o,this.view.width,this.view.height))},e.prototype._createContainer=function(){var t=document.createElement("div");t.className="esri-zoom-box__container",this.view.root.appendChild(t),this._container=t},e.prototype._createOverlay=function(){var t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class","esri-zoom-box__overlay-background");var o=document.createElementNS("http://www.w3.org/2000/svg","rect"),n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.setAttributeNS(null,"class","esri-zoom-box__overlay"),n.appendChild(i),n.appendChild(o),this._container.appendChild(n),this._backgroundShape=i,this._boxShape=o,this._overlay=n},e.prototype._destroyOverlay=function(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null},e.prototype._toSVGPath=function(t,e,i,o,n,a){var r=t+i,s=e+o;return"M 0 0 L "+n+" 0 L "+n+" "+a+" L 0 "+a+" ZM "+t+" "+e+" L "+t+" "+s+" L "+r+" "+s+" L "+r+" "+e+" Z"},e.prototype._handleDrag=function(t,e){var i,o,n,a,r=t.x,s=t.y,u=t.origin.x,p=t.origin.y;switch(r>u?(i=u,n=r-u):(i=r,n=u-r),s>p?(o=p,a=s-p):(o=s,a=p-s),t.action){case"start":this._start();break;case"update":this._update(i,o,n,a);break;case"end":this._end(i,o,n,a,e)}t.stopPropagation()},e.prototype._redraw=function(){if(this._rafId&&(this._rafId=null,this._overlay)){var t=this._box,e=t.x,i=t.y,o=t.width,n=t.height;this._updateBox(e,i,o,n),this._updateBackground(e,i,o,n),this._rafId=requestAnimationFrame(this._redraw)}},i.__decorate([a.property()],e.prototype,"navigation",void 0),i.__decorate([a.property()],e.prototype,"view",null),i.__decorate([a.subclass("esri.views.2d.navigation.ZoomBox")],e)}(o)}.apply(null,o))||(t.exports=n)},2091:function(t,e,i){var o,n;o=[i.dj.c(t.i),e,i(117),i(159),i(369),i(158),i(171),i(151),i(162),i(160),i(440),i(927)],void 0===(n=function(t,e,i,o,n,a,r,s,u,p,m,h){return function(t){function e(e){var i=t.call(this,e)||this;return i.animationTime=0,i.momentumEstimator=new h.PanPlanarMomentumEstimator(500,6,.92),i.momentum=null,i.tmpMomentum=p.vec3f64.create(),i.momentumFinished=!1,i.viewpoint=new n({targetGeometry:new o.Point,scale:0,rotation:0}),i.watch("momentumFinished",(function(t){t&&i.navigation.stop()})),i}return i.__extends(e,t),e.prototype.begin=function(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this.previousDrag=e},e.prototype.update=function(t,e){this.addToEstimator(e);var i=e.center.x,o=e.center.y,n=this.previousDrag;i=n?n.center.x-i:-i,o=n?o-n.center.y:o,t.viewpoint=m.translateBy(this.viewpoint,t.viewpoint,[i||0,o||0]),this.previousDrag=e},e.prototype.end=function(t,e){this.addToEstimator(e);var i=t.navigation.momentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()},e.prototype.addToEstimator=function(t){var e=t.center.x,i=t.center.y,o=r.createScreenPointArray(-e,i),n=p.vec3f64.fromValues(-e,i,0);this.momentumEstimator.add(o,n,.001*t.timestamp)},e.prototype.onAnimationUpdate=function(t){var e=this;this.navigation.animationManager.animateContinous(t.viewpoint,(function(i,o){e.momentumFinished=!e.momentum||e.momentum.isFinished(e.animationTime);var n=.001*o;if(!e.momentumFinished){var a=e.momentum.valueDelta(e.animationTime,n);u.vec3.scale(e.tmpMomentum,e.momentum.direction,a),t.viewpoint=m.translateBy(i,i,e.tmpMomentum)}e.animationTime+=n}))},e.prototype.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())},i.__decorate([s.property()],e.prototype,"momentumFinished",void 0),i.__decorate([s.property()],e.prototype,"viewpoint",void 0),i.__decorate([s.property()],e.prototype,"navigation",void 0),i.__decorate([s.subclass("esri.views.2d.navigation.actions.Pan")],e)}(a)}.apply(null,o))||(t.exports=n)},2092:function(t,e,i){var o,n;o=[i.dj.c(t.i),e,i(117),i(159),i(369),i(158),i(151),i(205),i(216),i(440),i(929),i(930)],void 0===(n=function(t,e,i,o,n,a,r,s,u,p,m,h){return function(t){function e(e){var i=t.call(this,e)||this;return i._animationTime=0,i._momentumFinished=!1,i._rotationMomentumEstimator=new m.RotationMomentumEstimator(.6,.15,.95),i._rotationDirection=1,i._zoomDirection=1,i._zoomMomentumEstimator=new h.ZoomMomentumEstimator,i._zoomOnly=null,i.zoomMomentum=null,i.rotateMomentum=null,i.viewpoint=new n({targetGeometry:new o.Point,scale:0,rotation:0}),i.watch("_momentumFinished",(function(t){t&&i.navigation.stop()})),i}return i.__extends(e,t),e.prototype.begin=function(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)},e.prototype.update=function(t,e){null===this._updateTimestamp&&(this._updateTimestamp=e.timestamp);var i=e.angle,o=e.radius,n=e.center,a=Math.abs(180*(i-this._startAngle)/Math.PI),r=Math.abs(o-this._startRadius),s=this._startRadius/o;if(this._previousRadius){var u=o/this._previousRadius,p=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=p>=0?1:-1,this._zoomDirection=u>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=r-a>0),null===this._zoomOnly||this._zoomOnly?p=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):p=0,this.addToZoomEstimator(e,s),this.navigation.setViewpoint([n.x,n.y],1/u,p,[this._previousCenter.x-n.x,n.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=o,this._previousCenter=n},e.prototype.end=function(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()},e.prototype.addToRotateEstimator=function(t,e){this._rotationMomentumEstimator.add(t,.001*e)},e.prototype.addToZoomEstimator=function(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)},e.prototype.canZoomIn=function(t){var e=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||e>i},e.prototype.canZoomOut=function(t){var e=t.scale,i=t.constraints.effectiveMinScale;return 0===i||e<i},e.prototype.onAnimationUpdate=function(t){var e=this;this.navigation.animationManager.animateContinous(t.viewpoint,(function(i,o){var n=!e.canZoomIn(t)&&e._zoomDirection>1||!e.canZoomOut(t)&&e._zoomDirection<1,a=!e.rotateMomentum||e.rotateMomentum.isFinished(e._animationTime),r=n||!e.zoomMomentum||e.zoomMomentum.isFinished(e._animationTime),m=.001*o;if(e._momentumFinished=a&&r,!e._momentumFinished){var h=e.rotateMomentum?Math.abs(e.rotateMomentum.valueDelta(e._animationTime,m))*e._rotationDirection*180/Math.PI:0,c=e.zoomMomentum?Math.abs(e.zoomMomentum.valueDelta(e._animationTime,m)):1,d=u.vec2f64.create(),l=u.vec2f64.create();if(e._previousCenter){s.vec2.set(d,e._previousCenter.x,e._previousCenter.y),p.getPaddingScreenTranslation(l,t.size,t.padding),s.vec2.add(d,d,l);var v=t.constraints,_=t.scale,y=_*c;c<1&&!v.canZoomInTo(y)?(c=_/v.effectiveMaxScale,e.zoomMomentum=null,e.rotateMomentum=null):c>1&&!v.canZoomOutTo(y)&&(c=_/v.effectiveMinScale,e.zoomMomentum=null,e.rotateMomentum=null),p.scaleAndRotateBy(i,t.viewpoint,c,h,d,t.size)}}e._animationTime+=m}))},e.prototype.stopMomentumNavigation=function(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())},i.__decorate([r.property()],e.prototype,"_momentumFinished",void 0),i.__decorate([r.property()],e.prototype,"viewpoint",void 0),i.__decorate([r.property()],e.prototype,"navigation",void 0),i.__decorate([r.subclass("esri.views.2d.navigation.actions.Pinch")],e)}(a)}.apply(null,o))||(t.exports=n)},2093:function(t,e,i){var o,n;o=[i.dj.c(t.i),e,i(117),i(159),i(369),i(158),i(151),i(205),i(216),i(440)],void 0===(n=function(t,e,i,o,n,a,r,s,u,p){var m=u.vec2f64.create(),h=u.vec2f64.create();return function(t){function e(e){var i=t.call(this,e)||this;return i._previousCenter=u.vec2f64.create(),i.viewpoint=new n({targetGeometry:new o.Point,scale:0,rotation:0}),i}return i.__extends(e,t),e.prototype.begin=function(t,e){this.navigation.begin(),s.vec2.set(this._previousCenter,e.center.x,e.center.y)},e.prototype.update=function(t,e){var i=t.state,o=i.size,n=i.padding;s.vec2.set(m,e.center.x,e.center.y),p.getAnchor(h,o,n),t.viewpoint=p.rotateBy(this.viewpoint,t.state.paddedViewState.viewpoint,p.angleBetween(h,this._previousCenter,m)),s.vec2.copy(this._previousCenter,m)},e.prototype.end=function(){this.navigation.end()},i.__decorate([r.property()],e.prototype,"viewpoint",void 0),i.__decorate([r.property()],e.prototype,"navigation",void 0),i.__decorate([r.subclass("esri.views.2d.actions.Rotate")],e)}(a)}.apply(null,o))||(t.exports=n)},2094:function(t,e,i){var o,n;o=[i.dj.c(t.i),e,i(117),i(271),i(153),i(204),i(186)],void 0===(n=function(t,e,i,o,n,a,r){Object.defineProperty(e,"__esModule",{value:!0});var s=r.enums.WGLDrawPhase,u=function(t){function e(){var e=t.call(this)||this;return e.visible=!1,e}return i.__extends(e,t),e.prototype.destroy=function(){this._readbackTexture&&(this._readbackTexture.dispose(),this._readbackTexture=null,this._maskTexture.dispose(),this._maskTexture=null,this._overlayTexture.dispose(),this._overlayTexture=null,this._vertexArrayObject.dispose(),this._vertexArrayObject=null,this._program.dispose(),this._program=null,this._resourcesPromise=null)},Object.defineProperty(e.prototype,"magnifier",{get:function(){return this._magnifier},set:function(t){var e=this;this._magnifier=t,this._handle&&this._handle.remove(),this._handle=t.watch("version",(function(){e.visible=t.visible,e.requestRender()})),this.visible=t.visible,this.requestRender()},enumerable:!0,configurable:!0}),e.prototype.doRender=function(t){var e=this.stage.context;if(this._resourcesPromise){if(t.drawPhase===s.MAP&&this._canRender()){this._updateResources(e);var i=this._magnifier,o=1/i.factor,n=Math.ceil(o*this.overlay.width),a=Math.ceil(o*this.overlay.height),r=t.state.size,u=t.pixelRatio,p=u*r[0],m=u*r[1],h=i.position||{x:.5*r[0],y:.5*r[1]},c=u*h.x,d=m-u*h.y,l=.5*n,v=.5*a;l>c?c=l:c>=p-l&&(c=p-l-1),v>d?d=v:d>=m-v&&(d=m-v-1);var _=c-l,y=d-v,f=this._readbackTexture;e.bindTexture(f,0),e.gl.copyTexImage2D(f.descriptor.target,0,f.descriptor.pixelFormat,_,y,n,a,0);var g=this.stage.background&&this.stage.background.color,w=g?[g.a*g.r/255,g.a*g.g/255,g.a*g.b/255,g.a]:[1,1,1,1],b=(c+i.offsetX)/p*2-1,M=(d-i.offsetY)/m*2-1,T=this.overlay.width/p*2,x=this.overlay.height/m*2,z=this._program;e.bindVAO(this._vertexArrayObject),e.bindTexture(this._overlayTexture,6),e.bindTexture(this._maskTexture,7),e.bindProgram(z),z.setUniform4fv("u_background",w),z.setUniform1i("u_readbackTexture",0),z.setUniform1i("u_overlyTexture",6),z.setUniform1i("u_maskTexture",7),z.setUniform2f("u_drawPos",b,M),z.setUniform1f("u_width",T),z.setUniform1f("u_height",x),e.setStencilTestEnabled(!1),e.drawArrays(5,0,4),e.bindVAO()}}else this._resourcesPromise=this._loadResources("esri/images/magnifier/mask.png","esri/images/magnifier/overlay.png")},e.prototype._canRender=function(){return this.mask&&this.overlay&&null!=this._magnifier},e.prototype._loadResources=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var a,r,s;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,n.all([o.fetchAsset(t,{responseType:"image"}),o.fetchAsset(e,{responseType:"image"})])];case 1:return a=i.sent(),r=a[0].data,s=a[1].data,this.mask=r,this.overlay=s,this.requestRender(),[2]}}))}))},e.prototype._updateResources=function(t){if(!this._readbackTexture){var e=1/this._magnifier.factor,i=Math.ceil(e*this.overlay.width),o=Math.ceil(e*this.overlay.height);this._program=r.createMagnifierProgram(t);var n=new Uint16Array([0,1,0,0,1,1,1,0]),s=r.magnifier.attributes;this._vertexArrayObject=new a.VertexArrayObject(t,s,{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,divisor:0}]},{geometry:a.BufferObject.createVertex(t,35044,n)}),this._overlayTexture=new a.Texture(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.overlay),this._maskTexture=new a.Texture(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.mask),this._readbackTexture=new a.Texture(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:o})}},e}(r.DisplayObject);e.default=u}.apply(null,o))||(t.exports=n)}}]);
//# sourceMappingURL=85.js.map