import React from 'react';
import {
	firesLayer,
	mask,
	countries,
	Koala_HSM_before,
	biodiversityHotspots,
} from './layers';
import { ModelSchema } from '../../../types';

const model: ModelSchema = {
	metadata: {
		name: 'wildfires_australia',
		theme: 'dark',
	},
	customBehavior: () => {
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
				layers: [firesLayer, mask],
				basemap: 'satellite',
			},
		},
		{
			title: 'Koalas and stuff',
			content: <>Koala's man. They're not doing great.</>,
			mapState: {
				center: [134, -26.9],
				zoom: 4,
				layers: [firesLayer, mask, Koala_HSM_before],
				basemap: 'satellite',
			},
		},
	],
};

export default model;
