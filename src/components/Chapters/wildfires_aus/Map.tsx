import React, { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import loadArcGISCSS from '../../../utils/arcgis.css.loader.js';
import { MapProps } from '../../../types';

const Map: FunctionComponent<MapProps> = ({
	metadata,
	customFeatures,
	mapState: { basemap, layers, zoom, center },
}: MapProps) => {
	const element = useRef(null);
	const [map, setMap] = useState(null);

	// component mount: set up map, view, css theme
	// apply any custom behavior that persists through entire chapter
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

		view.on('click', (e) => console.log(e.mapPoint));

		setMap({ map, view });

		customFeatures && customFeatures();
	}, []);

	// layer change - add and remove layers
	useEffect(() => {
		if (map) {
			map.map.layers = layers;
		}
	}, [layers]);

	// view change - set center and zoom if different
	useEffect(() => {
		if (map) {
			map.view.goTo(
				{
					target: center,
					zoom,
				},
				{
					duration: 1000,
				}
			);
		}
	}, [zoom, center]);

	// apply custom behavior to each page if there is any
	useEffect(() => {});

	return <div className={`arcgis-map ${metadata.name}`} ref={element} />;
};

export default Map;
