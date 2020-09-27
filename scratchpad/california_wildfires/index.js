import { fireMarkerRenderer }  from './renderers.js'

require([
   "esri/Map", 
   "esri/views/MapView",
   "esri/layers/FeatureLayer",
   "esri/layers/MapImageLayer",
   "esri/layers/WebTileLayer",
   "esri/widgets/Legend"
], function(Map, MapView, FeatureLayer, MapImageLayer, WebTileLayer, Legend){

   var stamenTerrain = new WebTileLayer({
      urlTemplate: 'https://stamen-tiles-{subDomain}.a.ssl.fastly.net/terrain-background/{level}/{col}/{row}{r}.png',
      subDomains: ["a", "b", "c", "d"]
   })

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
      zoom: 6,
      map: map
   })


   var legend = new Legend({
      view: view,
      layerInfos: [
         {
            layer: FIRMSfires,
         }
      ]
   })

   view.ui.add(legend, 'bottom-left')


})
