import React, { useRef, useEffect } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import Layer from 'esri/layers/Layer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import TileLayer from 'esri/layers/TileLayer';
import TileInfo from 'esri/layers/support/TileInfo';
import MaskLayer from './MaskLayer';
import * as renderers from './renderers';

import loadArcGISCSS from '../../../utils/arcgis.css.loader';

const WildfiresAustralia = () => {
	const element = useRef();

	useEffect(() => {
		loadArcGISCSS('dark');

		const CustomLayer = Layer.createSubclass({
			tileInfo: TileInfo.create({
				size: 512,
				spatialReference: { wkid: 3857 },
			}),

			constructor: function () {
				this.color = [0, 0, 0, 1];
				this.distance = 2;
			},

			createLayerView: function (view) {
				if (view.type === '2d') {
					return new MaskLayer({
						view: view,
						layer: this,
					});
				}
			},

			properties: {
				color: {},
				geometry: {},
				distance: {},
			},
		}); // CustomLayer

		const mask = new CustomLayer({
			color: [0, 0, 0, 0.75],
		});

		const firesLayer = new FeatureLayer({
			url:
				'https://services7.arcgis.com/WSiUmUhlFx4CtMBB/arcgis/rest/services/AUBushfireBurnArea/FeatureServer',
			renderer: renderers.fireRenderer,
		});

		const biodiversityHotspots = new FeatureLayer({
			url:
				'https://services.arcgis.com/nzS0F0zdNLvs7nc8/arcgis/rest/services/Biodiversity_Hotspots_2016_WFL1/FeatureServer',
		});

		const Koala_HSM_before = new TileLayer({
			url:
				'https://tiles.arcgis.com/tiles/yCVH8H4hXcgEqeRw/arcgis/rest/services/Koala_HSM_Before/MapServer',
		});

		const map = new Map({
			basemap: 'satellite',
			layers: [mask, firesLayer, Koala_HSM_before],
		});

		const view = new MapView({
			container: element.current,
			map: map,
			zoom: 4,
			center: [134, -26.9],
			navigation: {
				mouseWheelZoomEnabled: false,
				browserTouchPanEnabled: false,
			},
		});

		view.on('click', (e) => console.log(e.mapPoint));

		const countries = new FeatureLayer({
			url:
				'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries_(Generalized)/FeatureServer/0',
		});

		const query = countries.createQuery();
		query.where = "ISO = 'AU'";
		countries.queryFeatures(query).then(function (result) {
			const geometry = result.features[0].geometry;
			mask.geometry = geometry;
		});
	}, []);

	return <div className="arcgis-map" ref={element} />;
};

export default WildfiresAustralia;
