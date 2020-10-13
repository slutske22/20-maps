import React from 'react';
import {
	fires_layer,
	mask,
	countries,
	biodiversity_hotspots,
	koalas_point_layer,
	koala_HSM_before,
	koala_HSM_after,
} from './layers';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import { ModelSchema } from '../../../types';

const model: ModelSchema = {
	metadata: {
		name: 'wildfires_australia',
		theme: 'dark-blue',
		fullWidthMap: false,
	},
	sources: [
		{
			name: 'Australia Bushfire Burn Extent 2019 - 2020',
			url:
				'https://www.arcgis.com/home/item.html?id=dc4e10544b4e46c78786d0a5b9f2cea8',
		},
	],
	customFeatures: (args) => {
		const { view } = args;

		const legend = new Legend({
			view,
			layerInfos: [
				// @ts-ignore
				{
					layer: fires_layer,
					title: 'Bushfire Burned Area \n 7-1-2019 to 5-25-2020',
				},
				// @ts-ignore
				{
					layer: koalas_point_layer,
					title: 'Koala Sighting in 2018',
				},
				// @ts-ignore
				{
					layer: koala_HSM_after,
					title: 'Koala Habitat Viability',
				},
				// @ts-ignore
				{
					layer: koala_HSM_before,
					title: 'Koala Habitat Viability',
				},
			],
		});

		view.ui.add(legend, 'top-right');

		const query = countries.createQuery();
		query.where = "ISO = 'AU'";
		countries.queryFeatures(query).then(function (result) {
			const geometry = result.features[0].geometry;
			mask.geometry = geometry;
		});
	},
	pages: [
		{
			title: 'Australia Wildfires',
			content: <>'Some stuff in here'</>,
			mapState: {
				position: {
					center: [134, -26.9],
					zoom: 4,
				},
				layers: [fires_layer, mask],
				basemap: 'satellite',
			},
		},
		{
			title: 'Koalas and stuff',
			content: <>Koala's man. They're not doing great.</>,
			mapState: {
				position: {
					center: [153.28, -27.99],
					zoom: 10,
				},
				layers: [fires_layer, mask, koalas_point_layer],
				basemap: 'satellite',
			},
		},
		{
			title: 'Habitat Destruction',
			content: (
				<>
					Use the swipe to see how their habitat has changed due to the
					fires.
				</>
			),
			mapState: {
				position: {
					center: [148.9, -37.4],
					zoom: 9,
				},
				layers: [mask, koala_HSM_before, koala_HSM_after],
				basemap: 'satellite',
				customBehavior: (mapRef) => {
					const swipe = new Swipe({
						leadingLayers: [koala_HSM_before],
						trailingLayers: [koala_HSM_after],
						view: mapRef.view,
						position: 50,
					});
					mapRef.view.ui.add(swipe);
					return () => {
						mapRef.view.ui.remove(swipe);
					};
				},
			},
		},
	],
};

export default model;
