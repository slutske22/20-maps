(function(){var t={"esri/core/libs/quickselect/quickselect":362,"esri/core/libs/rbush/PooledRBush":1033,"esri/geometry/support/meshUtils/ElevationSamplerWorker":2060},n=this||window,i=n.webpackJsonp=n.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(t):(i.absMidsWaiting=i.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1033:function(t,n,i){var e,r;e=[i.dj.c(t.i),n,i(117),i(180),i(214),i(362)],void 0===(r=function(t,n,i,e,r,a){Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,n){void 0===t&&(t=9),this.compareMinX=c,this.compareMinY=u,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}return t.prototype.destroy=function(){this.clear(),v.prune(),M.prune(),g.prune(),_.prune()},t.prototype.all=function(t){this._all(this.data,t)},t.prototype.search=function(t,n){var i=this.data,e=this.toBBox;if(d(t,i))for(v.clear();i;){for(var r=0,a=i.children.length;r<a;r++){var o=i.children[r],h=i.leaf?e(o):o;d(t,h)&&(i.leaf?n(o):m(t,h)?this._all(o,n):v.push(o))}i=v.pop()}},t.prototype.collides=function(t){var n=this.data,i=this.toBBox;if(!d(t,n))return!1;for(v.clear();n;){for(var e=0,r=n.children.length;e<r;e++){var a=n.children[e],o=n.leaf?i(a):a;if(d(t,o)){if(n.leaf||m(t,o))return!0;v.push(a)}}n=v.pop()}return!1},t.prototype.load=function(t,n){if(void 0===n&&(n=t.length),!n)return this;if(n<this._minEntries){for(var i=0,e=n;i<e;i++)this.insert(t[i]);return this}var r=this._build(t.slice(0,n),0,n-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var a=this.data;this.data=r,r=a}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},t.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},t.prototype.clear=function(){return this.data=new X([]),this},t.prototype.remove=function(t){if(!t)return this;var n,i,r,a,o=this.data,h=this.toBBox(t);for(g.clear(),_.clear();o||g.length;){if(o||(o=g.pop(),n=g.data[g.length-1],i=_.pop(),r=!0),o.leaf&&-1!==(a=e.indexOf(o.children,t,o.children.length,o.indexHint)))return o.children.splice(a,1),g.push(o),this._condense(g),this;r||o.leaf||!m(o,h)?n?(i++,o=n.children[i],r=!1):o=null:(g.push(o),_.push(i),i=0,n=o,o=o.children[0])}return this},t.prototype.toJSON=function(){return this.data},t.prototype.fromJSON=function(t){return this.data=t,this},t.prototype._all=function(t,n){for(M.clear();t;){if(!0===t.leaf)for(var i=0,e=t.children;i<e.length;i++)n(e[i]);else M.pushArray(t.children);t=M.pop()}},t.prototype._build=function(t,n,i,e){var r=i-n+1,a=this._maxEntries;if(r<=a){var o=new X(t.slice(n,i+1));return h(o,this.toBBox),o}e||(e=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/Math.pow(a,e-1)));var s=new Y([]);s.height=e;var l=Math.ceil(r/a),c=l*Math.ceil(Math.sqrt(a));x(t,n,i,c,this.compareMinX);for(var u=n;u<=i;u+=c){var p=Math.min(u+c-1,i);x(t,u,p,l,this.compareMinY);for(var f=u;f<=p;f+=l){var m=Math.min(f+l-1,p);s.children.push(this._build(t,f,m,e-1))}}return h(s,this.toBBox),s},t.prototype._chooseSubtree=function(t,n,i,e){for(;e.push(n),!0!==n.leaf&&e.length-1!==i;){for(var r=1/0,a=1/0,o=void 0,h=0,s=n.children.length;h<s;h++){var l=n.children[h],c=p(l),u=(f=t,m=l,(Math.max(m.maxX,f.maxX)-Math.min(m.minX,f.minX))*(Math.max(m.maxY,f.maxY)-Math.min(m.minY,f.minY))-c);u<a?(a=u,r=c<r?c:r,o=l):u===a&&c<r&&(r=c,o=l)}n=o||n.children[0]}var f,m;return n},t.prototype._insert=function(t,n,i){var e=this.toBBox,r=i?t:e(t);g.clear();var a=this._chooseSubtree(r,this.data,n,g);for(a.children.push(t),l(a,r);n>=0&&g.data[n].children.length>this._maxEntries;)this._split(g,n),n--;this._adjustParentBBoxes(r,g,n)},t.prototype._split=function(t,n){var i=t.data[n],e=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,e);var a=this._chooseSplitIndex(i,r,e),o=i.children.splice(a,i.children.length-a),s=i.leaf?new X(o):new Y(o);s.height=i.height,h(i,this.toBBox),h(s,this.toBBox),n?t.data[n-1].children.push(s):this._splitRoot(i,s)},t.prototype._splitRoot=function(t,n){this.data=new Y([t,n]),this.data.height=t.height+1,h(this.data,this.toBBox)},t.prototype._chooseSplitIndex=function(t,n,i){var e,r,a,o,h,l,c,u,f;e=r=1/0;for(var m=n;m<=i-n;m++){var d=s(t,0,m,this.toBBox),x=s(t,m,i,this.toBBox),v=(o=d,h=x,void 0,void 0,void 0,void 0,l=Math.max(o.minX,h.minX),c=Math.max(o.minY,h.minY),u=Math.min(o.maxX,h.maxX),f=Math.min(o.maxY,h.maxY),Math.max(0,u-l)*Math.max(0,f-c)),M=p(d)+p(x);v<e?(e=v,a=m,r=M<r?M:r):v===e&&M<r&&(r=M,a=m)}return a},t.prototype._chooseSplitAxis=function(t,n,i){var e=t.leaf?this.compareMinX:c,r=t.leaf?this.compareMinY:u;this._allDistMargin(t,n,i,e)<this._allDistMargin(t,n,i,r)&&t.children.sort(e)},t.prototype._allDistMargin=function(t,n,i,e){t.children.sort(e);for(var r=this.toBBox,a=s(t,0,n,r),o=s(t,i-n,i,r),h=f(a)+f(o),c=n;c<i-n;c++){var u=t.children[c];l(a,t.leaf?r(u):u),h+=f(a)}for(c=i-n-1;c>=n;c--)u=t.children[c],l(o,t.leaf?r(u):u),h+=f(o);return h},t.prototype._adjustParentBBoxes=function(t,n,i){for(var e=i;e>=0;e--)l(n.data[e],t)},t.prototype._condense=function(t){for(var n=t.length-1;n>=0;n--){var i=t.data[n];if(0===i.children.length)if(n>0){var r=t.data[n-1],a=r.children;a.splice(e.indexOf(a,i,a.length,r.indexHint),1)}else this.clear();else h(i,this.toBBox)}},t.prototype._initFormat=function(t){var n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")},t}();function h(t,n){s(t,0,t.children.length,n,t)}function s(t,n,i,e,r){r||(r=new X(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a=n,o=void 0;a<i;a++)o=t.children[a],l(r,t.leaf?e(o):o);return r}function l(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function c(t,n){return t.minX-n.minX}function u(t,n){return t.minY-n.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function d(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function x(t,n,i,e,r){for(var o=[n,i];o.length;)if(!((i=o.pop())-(n=o.pop())<=e)){var h=n+Math.ceil((i-n)/e/2)*e;a(t,h,n,i,r),o.push(n,h,h,i)}}n.PooledRBush=o;var v=new r,M=new r,g=new r,_=new r({deallocator:null}),y=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0};n.BBox=y;var B=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.height=1,n.indexHint=new e.PositionHint,n}return i.__extends(n,t),n}(y),X=function(t){function n(n){var i=t.call(this)||this;return i.children=n,i.leaf=!0,i}return i.__extends(n,t),n}(B),Y=function(t){function n(n){var i=t.call(this)||this;return i.children=n,i.leaf=!1,i}return i.__extends(n,t),n}(B);n.default=o}.apply(null,e))||(t.exports=r)},2060:function(t,n,i){var e,r;e=[i.dj.c(t.i),n,i(117),i(164),i(152),i(1033)],void 0===(r=function(t,n,i,e,r,a){Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(){}return t.prototype.createIndex=function(t,n){return i.__awaiter(this,void 0,void 0,(function(){var e,o,h,s;return i.__generator(this,(function(i){switch(i.label){case 0:return e=new Array,t.vertexAttributes&&t.vertexAttributes.position?(o=this.createMeshData(t),r.isSome(n)?[4,n.invoke("createIndexThread",o,{transferList:e})]:[3,2]):[2,new a.default];case 1:return s=i.sent(),[3,3];case 2:s=this.createIndexThread(o).result,i.label=3;case 3:return h=s,[2,this.createPooledRBush().fromJSON(h)]}}))}))},t.prototype.createIndexThread=function(t){var n=new Float64Array(t.position),i=this.createPooledRBush();return t.components?this.createIndexComponentsThread(i,n,t.components.map((function(t){return new Uint32Array(t)}))):this.createIndexAllThread(i,n)},t.prototype.createIndexAllThread=function(t,n){for(var i=new Array(n.length/9),e=0,r=0;r<n.length;r+=9)i[e++]=h(n,r+0,r+3,r+6);return t.load(i),{result:t.toJSON()}},t.prototype.createIndexComponentsThread=function(t,n,i){for(var e=0,r=0,a=i;r<a.length;r++)e+=(u=a[r]).length/3;for(var o=new Array(e),s=0,l=0,c=i;l<c.length;l++)for(var u=c[l],p=0;p<u.length;p+=3)o[s++]=h(n,3*u[p+0],3*u[p+1],3*u[p+2]);return t.load(o),{result:t.toJSON()}},t.prototype.createMeshData=function(t){var n=t.vertexAttributes.position.buffer;return!t.components||t.components.some((function(t){return!t.faces}))?{position:n}:{position:n,components:t.components.map((function(t){return t.faces}))}},t.prototype.createPooledRBush=function(){return new a.default(9,e("csp-restrictions")?function(t){return t}:[".minX",".minY",".maxX",".maxY"])},t}();function h(t,n,i,e){return{minX:Math.min(t[n+0],t[i+0],t[e+0]),maxX:Math.max(t[n+0],t[i+0],t[e+0]),minY:Math.min(t[n+1],t[i+1],t[e+1]),maxY:Math.max(t[n+1],t[i+1],t[e+1]),p0:[t[n+0],t[n+1],t[n+2]],p1:[t[i+0],t[i+1],t[i+2]],p2:[t[e+0],t[e+1],t[e+2]]}}n.ElevationSamplerWorker=o,n.default=o}.apply(null,e))||(t.exports=r)},362:function(t,n,i){var e;void 0===(e=function(){"use strict";function t(t,n,i){var e=t[n];t[n]=t[i],t[i]=e}function n(t,n){return t<n?-1:t>n?1:0}return function(i,e,r,a,o){!function n(i,e,r,a,o){for(;a>r;){if(a-r>600){var h=a-r+1,s=e-r+1,l=Math.log(h),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(h-c)/h)*(s-h/2<0?-1:1);n(i,e,Math.max(r,Math.floor(e-s*c/h+u)),Math.min(a,Math.floor(e+(h-s)*c/h+u)),o)}var p=i[e],f=r,m=a;for(t(i,r,e),o(i[a],p)>0&&t(i,r,a);f<m;){for(t(i,f,m),f++,m--;o(i[f],p)<0;)f++;for(;o(i[m],p)>0;)m--}0===o(i[r],p)?t(i,r,m):t(i,++m,a),m<=e&&(r=m+1),e<=m&&(a=m-1)}}(i,e,r||0,a||i.length-1,o||n)}}.apply(null,[]))||(t.exports=e)}}]);
//# sourceMappingURL=120.js.map