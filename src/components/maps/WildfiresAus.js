import React, { useRef, useEffect } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

const WildfiresAustralia = () => {
   useEffect(() => {
      const map = new Map({
         basemap: 'gray-vector',
      });

      const view = new MapView({
         container: 'myMap',
         center: [-100, 38],
         zoom: 4,
         map: map,
      });
   }, []);

   return <div className="arcgis-map" id="myMap" />;
};

export default WildfiresAustralia;
