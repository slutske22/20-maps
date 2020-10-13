import React, { useEffect, useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import type { FunctionComponent } from 'react';
import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import Expand from 'esri/widgets/Expand';
import { MapProps } from '../../types';
import { DataSources } from '../atoms';

const Map: FunctionComponent<MapProps> = ({
	metadata,
	sources,
	customFeatures,
	customDOM,
	mapState: { basemap, layers, position, customBehavior },
}: MapProps) => {
	const element = useRef(null);
	const [mapRef, setMapRef] = useState(null);
	const [cleanupFunction, setCleaupFunction] = useState(null);

	// component mount: set up map, view
	// apply any custom behavior that persists through entire chapter
	useEffect(() => {
		const map = new EsriMap({
			basemap: basemap || null,
			layers: layers,
		});

		const view = new MapView({
			container: element.current,
			map,
			...position,
			highlightOptions: {
				fillOpacity: 0,
				color: [50, 50, 50],
			},
			navigation: {
				mouseWheelZoomEnabled: false,
				browserTouchPanEnabled: false,
			},
		});

		view.on('click', (e) => {
			console.log('extent', view.extent);
			console.log('mappoint', e.mapPoint);
		});

		setMapRef({ map, view });

		if (metadata.fullWidthMap) {
			const topLeft: HTMLElement = document.querySelector(
				`#${metadata.name} .esri-ui-top-left`
			);
			topLeft.style.left = 'calc(30% - 10px)';
		}

		const dataSourcesDiv = document.createElement('div');
		dataSourcesDiv.innerHTML = 'Data sources here';

		const dataSourcesExpand = new Expand({
			view: view,
			expandIconClass: 'clipboard-icon',
			expandTooltip: 'Data Sources',
			collapseTooltip: 'Close',
			content: ReactDOMServer.renderToStaticMarkup(
				<DataSources sources={sources} theme={metadata.theme} />
			),
		});
		view.ui.add(dataSourcesExpand, 'bottom-right');

		customFeatures && customFeatures({ map, view, layers });
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
					target: position.center,
					zoom: position.zoom,
				},
				{
					duration: 1000,
				}
			);
		}
	}, [position]);

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
			{customDOM && customDOM}
		</>
	);
};

export default Map;
