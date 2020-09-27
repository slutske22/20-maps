import popupTemplate from './popupTemplate.js'
import * as renderers from './renderers.js'

// Color Ramps:
// https://developers.arcgis.com/javascript/latest/guide/esri-color-ramps/index.html

require([
   "esri/Map", 
   "esri/views/MapView",
   "esri/layers/FeatureLayer",
   "esri/widgets/Legend",
   "esri/widgets/Expand",
   "esri/smartMapping/statistics/classBreaks"
], function(Map, MapView, FeatureLayer, Legend, Expand, classBreaks){

   var COVIDLayer = new FeatureLayer({
      url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer",
      outFields: ["*"],
      popupTemplate
   })

   var map = new Map({
      basemap: "gray-vector",
      layers: [COVIDLayer]
   })

   var view = new MapView({
      container: "viewDiv",
      center: [-100, 38],
      zoom: 4,
      map: map
   })



   function changeField(e){

      const field = e.target.getAttribute('data-field')

      classBreaks({
         layer: COVIDLayer,
         field,
         numClasses: 5
      })
      .then(function(response){
         const { maxValue } = response;
         COVIDLayer.renderer = renderers[field](0, maxValue)
      })

   }

   const fieldNodes = document.querySelectorAll(`.field-item`);
   const fieldElement = document.getElementById("field-filter");
   fieldElement.addEventListener('click', changeField)

   var fieldExpand = new Expand({
      view,
      content: fieldElement,
      expandIconClass: "esri-icon-filter",
      group: "top-left",
      expanded: true
   })

   var legend = new Legend({
      view: view,
      layerInfos: [
         {
            layer: COVIDLayer,
         }
      ]
   })

   view.ui.add(legend, 'top-right')
   view.ui.add(fieldExpand, 'top-left')


   classBreaks({
      layer: COVIDLayer,
      field: "totCases",
      numClasses: 5
   })
   .then(function(response){
      const { maxValue } = response;
      COVIDLayer.renderer = renderers.totCases(0, maxValue)
   })


   view.whenLayerView(COVIDLayer)
      .then(() => {
         fieldElement.style.display = 'block'
      })

})


