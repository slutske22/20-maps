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
import Swipe from 'esri/widgets/Swipe';
import { ModelSchema } from '../../../types';

const model: ModelSchema = {
	metadata: {
		name: 'wildfires_australia',
		theme: 'dark-blue',
		fullWidthMap: false,
	},
	customFeatures: (args) => {
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
				center: [134, -26.9],
				zoom: 4,
				layers: [fires_layer, mask],
				basemap: 'satellite',
			},
		},
		{
			title: 'Koalas and stuff',
			content: <>Koala's man. They're not doing great.</>,
			mapState: {
				center: [153.28, -27.99],
				zoom: 10,
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
				center: [144.9, -37.15],
				zoom: 7,
				layers: [mask, koala_HSM_before, koala_HSM_after],
				basemap: 'satellite',
				customBehavior: (mapRef) => {
					const swipe = new Swipe({
						leadingLayers: [koala_HSM_before],
						trailingLayers: [koala_HSM_after],
						view: mapRef.view,
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
