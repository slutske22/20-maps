import React from 'react';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import FeatureLayer from 'esri/layers/FeatureLayer';

const locustsSwarms = new FeatureLayer({
	url:
		'https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Swarms_Public/FeatureServer',
});

const locustBands = new FeatureLayer({
	url:
		'https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Bands_Public/FeatureServer',
});

const model: ModelSchema = {
	metadata: {
		name: 'locusts',
		theme: 'light',
		fullWidthMap: true,
	},
	sources: [
		{
			name: 'Locust Swarms in Africa',
			url:
				'https://www.arcgis.com/home/item.html?id=b3f84bff1c514484be7f4d65098f9372',
		},
		{
			name: 'Locust Bands in Africa',
			url:
				'https://www.arcgis.com/home/item.html?id=07ccb27a6ea34fb0bd600d37fb1005f3',
		},
	],
	pages: [
		{
			title: 'Locusts in Africa',
			content: <>contenty content</>,
			mapState: {
				basemap: 'topo-vector',
				layers: [locustsSwarms, locustBands],
				position: {
					center: [28, 21],
					zoom: 4,
				},
			},
		},
	],
};

export default model;
