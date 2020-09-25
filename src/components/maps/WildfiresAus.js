import React, { useRef, useEffect } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

import loadArcGISCSS from '../../utils/arcgis.css.loader';

const WildfiresAustralia = () => {
   const element = useRef();

   useEffect(() => {
      loadArcGISCSS('light');

      const map = new Map({
         basemap: 'gray-vector',
      });

      const view = new MapView({
         container: element.current,
         center: [-100, 38],
         zoom: 4,
         map: map,
      });
   }, []);

   return <div className="arcgis-map" ref={element} />;
};

export default WildfiresAustralia;
