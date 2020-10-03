# 20 Maps for 2020: The Repo

## _Global Upheaval is Far More Palatable When You Choose a Pretty Color Ramp_

20 Maps is a blog-esque web page app documenting the trials and tribulations of 2020 via the ArcGIS Javascript API. Geospatial data is analyzed, filtered, and made pretty over the course of 20 maps. Data analysis and good color sense combine to illuminate interesting phenomena that has occurred in this craptastic year.

## Dev Notes

### Construction

Inspired by the ArcGIS StoryMaps platform, this page is coded from scratch using the ArcGIS JS API. It is couched in a react application built from scratch using webpack and babel.

<h3>
   ArcGIS, Webpack, React, and TypeScript 
   <img src="/src/assets/icons/esri-logo.png" width="20px">
   <img src="/src/assets/icons/webpack-128.png" width="20px">
   <img src="/src/assets/icons/react-128.png" width="20px">
   <img src="/src/assets/icons/typescript-128.png" width="20px">
</h3>

With a help from [this tutorial](https://www.youtube.com/watch?v=gTFZgLYegDY), I implemented the [`arcgis-webpack-plugin`](https://github.com/Esri/arcgis-webpack-plugin) to custom build the ArcGIS API with only the modules required for this project. To avoid browser overload, each map is wrapped in [`react-on-screen`](https://github.com/fkhadra/react-on-screen), and is mounted only when it comes on screen (and unmounted when scrolled out of view). The intention is that only 1 map is in view at a time, both for good user experience, as well as page performance. TypeScript is used to help ensure consistency across components, and is especially useful when writing the `model` objects, which account for how each map is tailored to present unique content while still maintaining consistent layouts and user experience.

### Component Flow

The page is comprised of 20 `<Chapter />`s, each chapter repreenting one map. Each `Chapter` is built from the `ChapterTemplate`, which ingests a `model`, unique to each chapter. The `ChapterTemplate` transforms the `model` into an esri map, in the form of the `<MapTemplate />`. A chapter may have multiple `<Page />`s, each page with its own map state. `react-on-screen` is used to determine which pages is in view, and triggers event handlers in the `MapTemplate` to modify the map's state based on the `mapState` object in that particular page. Each event handler has its own `useEffect` - for example, when the `layers` differ from one page to the next, a `useEffect` which depends on the `layers` array will alter the layers present on the map.
