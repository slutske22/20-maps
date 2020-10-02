These themes are custom made with the [ArcGIS Sass Utility](https://github.com/jcfranco/jsapi-styles) to enable multiple maps on the same page with different themes.

The themes here are the standard themes that come with the ArcGIS JS API. But they are custom compiled to be wrapped in a div with the theme name in its class. For example, to use two maps on a page, one with a dark-blue theme and the other with a light theme, you would wrap them in divs like so:

```html
<div class="wrapper arcgis-map-dark-blue">
	<div class="esri-map" id="viewDiv1"></div>
</div>

<div class="wrapper arcgis-map-light">
	<div class="esri-map" id="viewDiv2"></div>
</div>
```

Don't forget to make sure the wrapper div has a height and width
