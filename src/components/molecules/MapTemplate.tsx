import React, { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import ReactDOMServer from 'react-dom/server';

import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import SceneView from 'esri/views/SceneView';
import Expand from 'esri/widgets/Expand';
import * as watchUtils from 'esri/core/watchUtils';

import ScrollZoom from '../mapcomponents/ScrollZoom';

import { MapProps } from '../../types';
import { DataSources } from '../atoms';

const Map: FunctionComponent<MapProps> = ({
	setMapLoading,
	metadata,
	sources,
	customFeatures,
	customFeaturesPerPage,
	customMapDOM,
	pageRefs,
	currentPage,
	mapState: { basemap, layers, position, customBehavior },
}: MapProps) => {
	const element = useRef(null);
	const toggle = useRef(null);
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
		if (metadata.fullWidthMap && !metadata.sceneview) {
			const topLeft: HTMLElement = document.querySelector(
				`#${metadata.name} .esri-ui-top-left`
			);
			topLeft.style.left = 'calc(30% - 10px)';
		}

		// if using fullWidthmap on a sceneview (mars and moon)...
		if (metadata.fullWidthMap && metadata.sceneview) {
			// create an expand widget to show and hide the sidecar
			// only makes sense for a single page chapter

			// shift the sidecar to make it look like its part of the expand
			const sidecar: HTMLElement = document.querySelector(
				`#${metadata.name} div[class^="SideCar"]`
			);

			sidecar.style.left = '40px';
			sidecar.style.width = '500px';
			sidecar.style.transition = 'all 0.5s';

			// create expand with custom page content in it
			const expand = new Expand({
				view,
				expandIconClass: 'esri-icon-question',
				expandTooltip: 'Information',
				expanded: true,
			});

			view.ui.add([{ component: expand, position: 'top-left', index: 0 }]);

			// affect sidecar position based on expand state
			// @ts-ignore
			expand.container.addEventListener('click', () => {
				if (expand.expanded) {
					sidecar.style.left = '40px';
					sidecar.style.opacity = '1';
					sidecar.style.pointerEvents = 'auto';
					sidecar.style.transition = 'all 0.5s';
				} else {
					sidecar.style.left = '35px';
					sidecar.style.opacity = '0';
					sidecar.style.pointerEvents = 'none';
					sidecar.style.transition = 'none';
				}
			});

			const scrollZoom = new ScrollZoom({
				view,
			});

			view.ui.add(scrollZoom, 'top-right');
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
		watchUtils.whenFalseOnce(view, 'updating', () => {
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
		if (mapRef && position) {
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

	// rare case: apply customFeaturesPerPage if it exists, which is like customFeatures
	// except that it runs each time currentPage updates
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
			{customMapDOM && mapRef && customMapDOM(mapRef)}
		</>
	);
};

export default Map;
