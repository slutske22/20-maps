require([
   "esri/Map", 
   "esri/views/MapView"
], function(Map, MapView){

   var map = new Map({
      basemap: "gray-vector"
   })

   var view = new MapView({
      container: "viewDiv",
      center: [-100, 38],
      zoom: 4,
      map: map
   })

})
