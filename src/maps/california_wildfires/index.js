import { fireMarkerRenderer }  from './renderers.js'

require([
   "esri/Map", 
   "esri/views/MapView",
   "esri/layers/FeatureLayer",
   "esri/layers/MapImageLayer",
], function(Map, MapView, FeatureLayer, MapImageLayer){

   var caBoundaries = new FeatureLayer({
      url: 'https://egis.fire.ca.gov/arcgis/rest/services/FRAP/Counties/MapServer'
   })

   var caFireHazard = new MapImageLayer({
      url: 'https://egis.fire.ca.gov/arcgis/rest/services/FRAP/FHSZ/MapServer'
   })

   var FIRMSfires = new FeatureLayer({
      url: 'https://services7.arcgis.com/WSiUmUhlFx4CtMBB/arcgis/rest/services/FIRMS_Active_Fire_Points_for_the_California_Fires_2020/FeatureServer',
      renderer: fireMarkerRenderer
   })

   var map = new Map({
      layers: [FIRMSfires, caBoundaries]
   })

   var view = new MapView({
      container: "viewDiv",
      center: [-120, 37],
      zoom: 3,
      map: map
   })

})
