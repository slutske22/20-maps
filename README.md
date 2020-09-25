# 20 Maps for 2020: The Repo
## *Global Upheaval is Far More Palatable When You Choose a Pretty Color Ramp*

20 Maps is a blog-esque web page app documenting the trials and tribulations of 2020 via the ArcGIS Javascript API.  Geospatial data is analyzed, filtered, and made pretty over the course of 20 maps.  Data analysis and good color sense combine to illuminate interesting phenomena that has occurred in this craptastic year.

## Dev Notes

## Construction

Inspired by the ArcGIS StoryMaps platform, this page is coded from scratch using the ArcGIS JS API.  It is couched in a react application built from scratch using webpack and babel.

### ArcGIS, Webpack, and React

With a lot of help from [this tutorial](https://www.youtube.com/watch?v=gTFZgLYegDY), I implemented the [`arcgis-webpack-plugin`](https://github.com/Esri/arcgis-webpack-plugin) to custom build the ArcGIS API with only the modules required for this project.  To avoid browser overload, each map is wrapped in [`react-on-screen`](https://github.com/fkhadra/react-on-screen), and is mounted only when it comes on screen (and unmounted when scrolled out of view).  The intention is that only 1 map is in view at a time, both for performance and UX purposes.  This has the added advantage of being able to load different maps with different [ArcGIS CSS themes](https://developers.arcgis.com/javascript/latest/guide/styling/) by implementing a custom css loader.