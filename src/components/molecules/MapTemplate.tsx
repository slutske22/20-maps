import React, { useEffect, useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import type { FunctionComponent } from 'react';
import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import SceneView from 'esri/views/SceneView';
import Expand from 'esri/widgets/Expand';
import * as watchUtils from 'esri/core/watchUtils';
import { MapProps } from '../../types';
import { DataSources } from '../atoms';

const Map: FunctionComponent<MapProps> = ({
	setMapLoading,
	metadata,
	sources,
	customFeatures,
	customFeaturesPerPage,
	customDOM,
	pageRefs,
	currentPage,
	mapState: { basemap, layers, position, customBehavior },
}: MapProps) => {
	const element = useRef(null);
	const [mapRef, setMapRef] = useState(null);
	const [cleanupFunction, setCleaupFunction] = useState(null);

	// component mount: set up map, view
	useEffect(() => {
		const map = new EsriMap({
			basemap: basemap || null,
			layers: layers,
		});

		const params = {
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
		};

		const view = metadata.sceneview
			? new SceneView(params)
			: new MapView(params);

		view.on('click', (e) => {
			console.log('extent', view.extent);
			console.log('mappoint', e.mapPoint);
		});

		// save map and view to state for use in other effects
		setMapRef({ map, view });

		// if using a fullwidthmap, override esri's css to move the upper left widgets over
		if (metadata.fullWidthMap) {
			const topLeft: HTMLElement = document.querySelector(
				`#${metadata.name} .esri-ui-top-left`
			);
			topLeft.style.left = 'calc(30% - 10px)';
		}

		// create a data source widget on the fly with vanilla js
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

		// watch the view to see if its currently updating, set loading icon appropriately
		// note this only happens once per page load, not once per component load...not sure why
		watchUtils.whenNotOnce(view, 'updating', () => {
			setMapLoading(false);
		});

		// apply any custom features that persist through entire map life if they exist
		// should only run on mount
		customFeatures && customFeatures({ map, view, layers });
	}, []);

	// layer change - add and remove layers
	useEffect(() => {
		if (mapRef) {
			mapRef.map.layers = layers;
		}
	}, [layers]);

	// change basemap if needed
	useEffect(() => {
		if (mapRef) {
			mapRef.map.basemap = basemap;
		}
	}, [basemap, mapRef]);

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
				const { map, view } = mapRef;
				cleanupFunction && cleanupFunction();
				const cleanup = customBehavior({ map, view });
				setCleaupFunction(() => cleanup);
			} else {
				cleanupFunction && cleanupFunction();
			}
		}
	}, [customBehavior, mapRef]);

	// rare case: apply customFeaturesPerPage if it exists
	useEffect(() => {
		if (mapRef && customFeaturesPerPage) {
			const { view, map } = mapRef;
			let cleanup = customFeaturesPerPage({
				map,
				view,
				layers,
				pageRefs,
				currentPage,
			});

			if (cleanup) {
				return cleanup;
			}
		}
	}, [mapRef, currentPage, customFeaturesPerPage]);

	return (
		<>
			<div className={`arcgis-map ${metadata.name}`} ref={element} />
			{customDOM && customDOM}
		</>
	);
};

export default Map;
