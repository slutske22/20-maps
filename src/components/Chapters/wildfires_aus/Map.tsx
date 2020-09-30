import React, { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import loadArcGISCSS from '../../../utils/arcgis.css.loader.js';
import { MapProps } from '../../../types';

const Map: FunctionComponent<MapProps> = ({
	metadata,
	customBehavior,
	mapState: { basemap, layers, zoom, center },
}: MapProps) => {
	const element = useRef(null);
	const [map, setMap] = useState(null);

	useEffect(() => {
		loadArcGISCSS(metadata.theme || 'dark');

		const map = new EsriMap({
			basemap: basemap || null,
			layers: layers,
		});

		const view = new MapView({
			container: element.current,
			map,
			zoom,
			center,
			highlightOptions: {
				fillOpacity: 0,
				color: [50, 50, 50],
			},
			navigation: {
				mouseWheelZoomEnabled: false,
				browserTouchPanEnabled: false,
			},
		});

		setMap({ map, view });

		customBehavior && customBehavior();
	}, []);

	useEffect(() => {
		if (map) {
			map.map.layers = layers;
		}
	}, [layers]);

	return <div className={`arcgis-map ${metadata.name}`} ref={element} />;
};

export default Map;
