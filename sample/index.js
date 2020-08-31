import { popupTemplate } from './popupTemplate.js'
import { racialRenderer, covidRenderer, otherRenderer } from './renderers.js'

require([
   "esri/Basemap",
   "esri/Map", 
   "esri/views/MapView",
   "esri/layers/FeatureLayer",
   "esri/widgets/LayerList",
   "esri/widgets/TimeSlider",
], function(Basemap, Map, MapView, FeatureLayer, LayerList, TimeSlider){

   // define layers
   var racialProtestsLayer = new FeatureLayer({
      id: 'racial',
      url: 'https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer',
      outFields: ['*'],
      renderer: racialRenderer,
      popupTemplate,
      definitionExpression: "Tags LIKE '%racial%' OR Tags LIKE '%police%'"
   })

   var covidProtestsLayer = new FeatureLayer({
      id: 'covid',
      url: 'https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer',
      outFields: ['*'],
      renderer: covidRenderer,
      popupTemplate,
      definitionExpression: "Tags LIKE '%coronavirus%'"
   })

   var otherProtestLayer = new FeatureLayer({
      id: 'other',
      url: 'https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer',
      outFields: ['*'],
      renderer: otherRenderer,
      popupTemplate,
      definitionExpression: "Tags NOT LIKE '%racial%' AND Tags NOT LIKE '%police%'"
   })

   var layers = [otherProtestLayer, covidProtestsLayer, racialProtestsLayer]



   // define Basemap
   var basemap = new Basemap({
      portalItem: {
        id: "4f2e99ba65e34bb8af49733d9778fb8e"  // WGS84 Streets Vector webmap
      }
   });



   // define map and view
   var map = new Map({
      // basemap: "dark-gray-vector",
      basemap,
      layers
   })

   var view = new MapView({
      container: "viewDiv",
      center: [-100, 38],
      zoom: 3,
      map: map,
      highlightOptions: {
         fillOpacity: 0,
         color: [50, 50, 50]
      }
   })



   // save layerviews to apply filters in timeSlider.watch
   var layerViews = []
   layers.forEach(layer => {

      view.whenLayerView(layer)
         .then( layerView => {
            layerViews.push(layerView)
         })

      const customLegend = document.querySelector('.esri-component.esri-legend.esri-widget.esri-widget--panel')
      const bottomLeft = document.querySelector('.esri-ui-bottom-left.esri-ui-corner')
      bottomLeft.appendChild(customLegend)
      customLegend.style.display = "flex"
      
   })



   // Layer List
   var layerList = new LayerList({
      view,
      statusIndicatorsVisible: false,
      listItemCreatedFunction: function (e) {
         switch(e.item.layer.id){
            case 'racial':
               e.item.title = 'Race Related'
               break
            case 'covid':
               e.item.title = 'Coronavirus Related'
               break
            case 'other':
               e.item.title = 'Other'
               break
         }
      }
   })

   view.ui.add(layerList, 'top-right')
   



   // timeslider
   var timeSlider = new TimeSlider({
      container: "timeSlider",
      playRate: 100,
      mode: "cumulative-from-start",
      loop: false,
      fullTimeExtent: {
         start: new Date(2020, 0, 1),
         end: new Date(2020, 11, 31) > new Date() ? new Date() : new Date(2020, 11, 31)
      },
      stops: {
         interval: {
           value: 1,
           unit: "days"
         }
      },
      tickConfigs: [{
         mode: 'count',
         values: new Date(2020, 11, 31) > new Date() ? (new Date()).getMonth() + 1 : 12,
         labelsVisible: true,
         labelFormatFunction: value => {
            const date = new Date(value)
            return date.toLocaleString('default', { month: 'short' } )
         }
      }]
   })

   view.ui.add(timeSlider, "bottom-right");

   // update layer view filter to reflect current timeExtent, all protests in layer up to timeExtend
   timeSlider.watch("timeExtent", function(value){

      const dateString = value.end.getTime()

      layerViews.forEach( layerView => {
         layerView.effect = {
            filter: {
               where: `Date <= '${dateString}'`
            },
            excludedEffect: "opacity(0%)",
         }
      })

   });



})
