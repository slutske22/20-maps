define([
   'require',
   'exports',
   '../core/promiseUtils',
   './pe',
   './support/GeographicTransformation',
   '@dojo/framework/shim/Promise',
], function (e, n, r, o, t) {
   Object.defineProperty(n, '__esModule', { value: !0 });
   var i = null,
      a = null;
   (n.isLoaded = function () {
      return !!i && o.isLoaded();
   }),
      (n.isSupported = function () {
         return o.isSupported();
      });
   var l = null;
   (n.load = function () {
      return (
         l ||
         (l = r
            .all([
               o.load(),
               new Promise(function (n, r) {
                  e(['./geometryEngineBase'], n, r);
               }),
               new Promise(function (n, r) {
                  e(['./geometryAdapters/hydrated'], n, r);
               }),
            ])
            .then(function (e) {
               var n = e[1],
                  r = e[2].hydratedAdapter;
               (a = r), (i = n)._enableProjection(o);
            }))
      );
   }),
      (n.project = function (e, n, r) {
         return (
            void 0 === r && (r = null),
            e instanceof Array
               ? 0 === e.length
                  ? []
                  : f(a, e, e[0].spatialReference, n, r)
               : f(a, [e], e.spatialReference, n, r)[0]
         );
      });
   var u = {};
   function f(e, n, r, o, a) {
      if ((void 0 === a && (a = null), null === a)) {
         var l = t.cacheKey(r, o);
         void 0 !== u[l]
            ? (a = u[l])
            : (null === (a = s(r, o, null)) && (a = new t()), (u[l] = a));
      }
      return i._project(e, n, r, o, a);
   }
   function s(e, n, r) {
      void 0 === r && (r = null);
      var o = i._getTransformation(
         a,
         e,
         n,
         r,
         null == r ? void 0 : r.spatialReference
      );
      return null !== o ? t.fromGE(o) : null;
   }
   (n.projectMany = f),
      (n.getTransformation = s),
      (n.getTransformations = function (e, n, r) {
         void 0 === r && (r = null);
         var o = i._getTransformationBySuitability(
            a,
            e,
            n,
            r,
            null == r ? void 0 : r.spatialReference
         );
         if (null !== o) {
            for (var l = [], u = 0, f = o; u < f.length; u++) {
               var s = f[u];
               l.push(t.fromGE(s));
            }
            return l;
         }
         return [];
      });
});
