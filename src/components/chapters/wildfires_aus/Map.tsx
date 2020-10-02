import React, { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import loadArcGISCSS from '../../../utils/arcgis.css.loader.js';
import { MapProps } from '../../../types';
import { TopLeft } from '../../atoms';

const Map: FunctionComponent<MapProps> = ({
	metadata,
	customFeatures,
	mapState: { basemap, layers, zoom, center, customBehavior },
}: MapProps) => {
	const element = useRef(null);
	const [mapRef, setMapRef] = useState(null);
	const [cleanupFunction, setCleaupFunction] = useState(null);

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

		setMapRef({ map, view });

		customFeatures && customFeatures();
	}, []);

	// layer change - add and remove layers
	useEffect(() => {
		if (mapRef) {
			mapRef.map.layers = layers;
		}
	}, [layers]);

	// view change - set center and zoom if different
	useEffect(() => {
		if (mapRef) {
			mapRef.view.goTo(
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
	useEffect(() => {
		if (mapRef) {
			if (customBehavior) {
				cleanupFunction && cleanupFunction();
				const cleanup = customBehavior(mapRef);
				setCleaupFunction(() => cleanup);
			} else {
				cleanupFunction && cleanupFunction();
			}
		}
	}, [customBehavior]);

	return (
		<>
			<div className={`arcgis-map ${metadata.name}`} ref={element} />
			<TopLeft id={`top-left-controls-${metadata.name}`} />
		</>
	);
};

export default Map;
