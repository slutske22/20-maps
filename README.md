# 20 Maps for 2020: The Repo

<img src="/src/assets/images/covid.png" width="1200px">

## _Global Upheaval is Far More Palatable When You Choose a Pretty Color Ramp_

<h1 align="center"><a href="https://slutske22.github.io/20-maps/">👀 See the project 👀</a></h1>

20 Maps is a blog-esque web page app documenting the trials and tribulations of 2020 via the ArcGIS Javascript API. Geospatial data is analyzed, filtered, and made pretty over the course of 20 maps. Data analysis and good color sense combine to illuminate interesting phenomena that has occurred in this craptastic year.


## Dev Notes

### Construction

Inspired by the ArcGIS StoryMaps platform, this page is coded from scratch using the ArcGIS JS API. It is couched in a react application built using TypeScript, Webpack and Babel.

<h3>
   ArcGIS, Webpack, React, and TypeScript 
   <img src="/src/assets/icons/esri-logo.png" width="20px">
   <img src="/src/assets/icons/webpack-128.png" width="20px">
   <img src="/src/assets/icons/react-128.png" width="20px">
   <img src="/src/assets/icons/typescript-128.png" width="20px">
</h3>

With help from [this tutorial](https://www.youtube.com/watch?v=gTFZgLYegDY), I implemented the [`arcgis-webpack-plugin`](https://github.com/Esri/arcgis-webpack-plugin) to custom build the ArcGIS API with only the modules required for this project. To avoid browser overload, each map is wrapped in [`react-visibility-sensor`](https://github.com/joshwnj/react-visibility-sensor), and is mounted only when it comes on screen (and unmounted when scrolled out of view). The intention is that only 1 map is in view at a time, both for good user experience, as well as page performance.  Each map is also lazy loaded as its own code chunk for better page loading.  TypeScript is used to help ensure consistency across components, and is especially useful when writing the `model` objects, which account for how each map is tailored to present unique content while still maintaining consistent layouts and user experience.

### Component Flow

The page is comprised of 20 `<Chapter />`s, each chapter repreenting one map. Each `Chapter` is built from the `ChapterTemplate`, which ingests a `model`, unique to each chapter. The `ChapterTemplate` transforms the `model` into an esri map, in the form of the `<MapTemplate />`. A chapter may have multiple `<Page />`s, each page with its own map state. `react-visibility-sensor` is used to determine which pages is in view, and triggers event handlers in the `MapTemplate` to modify the map's state based on the `mapState` object in that particular page. Each event handler has its own `useEffect` - for example, when the `layers` differ from one page to the next, a `useEffect` which depends on the `layers` array will alter the layers present on the map.  The same is true for the map's position (i.e. `center` and `zoom`, or `extent`).  

Each map can be heavily customized using the `customFeatures` property of the `model`.  `customFeatures` takes as an argument an object containing the `view`, `map`, and `layers` of the map, and uses these properties to add widgets or modify layer renderers.  Each page may have its own custom behavior as well if it contains a `customBehavior` function, which works much like `customFeatures`, but is only active for a given page.  Each `customBehavior` function returns a cleanup function which tears down the custom behavior when the page scrolls out of view.  A `useEffect` in the `MapTemplate` checks for the existence of `customBehavior` on each page, and runs it if it exists.  It also saves the returned cleanup function in a state variable, and runs the cleanup function when needed.

### Custom Built CSS

In order to have multiple maps on the same webpage with different [themes](https://developers.arcgis.com/javascript/latest/guide/styling/), I used Esri's [JSAPI Styles](https://github.com/jcfranco/jsapi-styles) application to create custom builds of the ArcGIS JS API CSS.  Each `<Chapter />` has a `metadata.theme` prop, which is assigned the `className` of the outermost html wrapper element.  I wrapped each theme in a custom selector based on the wrapper elements theme:

```scss
.wrapper-selector-<theme> {
  @import './somestyles.scss'
}
```

The exact details are explained in the issue [Multiple maps on same page with different themes - wrap theme in custom selector](https://github.com/jcfranco/jsapi-styles/issues/10).

### Setting up a Proxy

Some of my favorite data layers relevant to 2020 are owned by NASA and served from their ArcGIS portal at https://maps.disasters.nasa.gov. For some reason, this server is not CORS enabled, meaning responses are *not* returned with `Access-Control-Allow-Origin: *` in the headers.  Lucky me!  Luckily, this is a common problem, and ESRI suggests [using a proxy](https://developers.arcgis.com/javascript/latest/guide/proxies/) to attach the right CORS headers to requests made to such CORS-less servers.  They even offer some [starter proxy repos](https://github.com/Esri/resource-proxy) you can branch off of.

Considering I'm not a PHP, .NET, or Java developer, I needed to come up with my own solution.  I wrote a quick nodejs server that makes use of cors-anywhere.  The crucial lines are:

```javascript
let proxy = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: [], // Do not require any headers.
  removeHeaders: [], // Do not remove any headers.
});

app.use(cors());

app.get('/proxy/:proxyUrl*', (req, res) => {
  req.url = req.url.replace('/proxy/https:/', '/https://');
  proxy.emit('request', req, res);
});
```

And then when trying to use any layers served by the maps.disasters.nasa.gov server, I simply need to prefix the layer url with `/proxy/`.  Of course this means that 20 Maps for 2020 is now a full stack app.  I had hoped to keep it as a simple front end bundle ("Can someone serve my HTML, please?"), but that would mean I can't use the NASA layers.  Oh well.  This is what forced me to use heroku as a host (as opposed to github pages).

## Sample Screenshots

## Australia

This gif demonstrates the map's responsiveness to user scrolling between chapter pages:

<img src="/src/assets/images/aus.gif" width="1200px">

## COVID in the US

<img src="/src/assets/images/covid-us.gif" width="1200px">

## Reduction in Shelter Animals

<img src="/src/assets/images/animals.png" width="1200px">

## Melting of the Arctic Ice

<img src="/src/assets/images/arctic.gif" width="1200px">

## Global Hurricanes

<img src="/src/assets/images/hurricanes1.png" width="1200px">

## Hurricanes in Southeastern US

<img src="/src/assets/images/hurricanes2.png" width="1200px">

## Protests

<img src="/src/assets/images/protests.gif" width="1200px">

## Beirut Damage

<img src="/src/assets/images/beirut.png" width="1200px">

## Renewable Energy by Country

<img src="/src/assets/images/energy.png" width="1200px">

## Mars

<img src="/src/assets/images/mars.gif" width="1200px">

## The Moon

<img src="/src/assets/images/moon.png" width="1200px">

## Japan Olympics 2020/1

<img src="/src/assets/images/japan.gif" width="1200px">
