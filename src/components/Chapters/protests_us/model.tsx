import React from 'react';
import Basemap from 'esri/Basemap';
import FeatureLayer from 'esri/layers/FeatureLayer';
import * as renderers from './renderers';
import popupTemplate from './popupTemplate';
import { ModelSchema } from '../../../types';

const basemap = new Basemap({
	portalItem: {
		id: '4f2e99ba65e34bb8af49733d9778fb8e', // WGS84 Streets Vector webmap
	},
});

const racialProtestsLayer = new FeatureLayer({
	id: 'racial',
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/US_Protests_2020_1/FeatureServer',
	outFields: ['*'],
	renderer: renderers.racialRenderer,
	popupTemplate,
	definitionExpression: "Tags LIKE '%racial%' OR Tags LIKE '%police%'",
});

const covidProtestsLayer = new FeatureLayer({
	id: 'covid',
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/US_Protests_2020_1/FeatureServer',
	outFields: ['*'],
	renderer: renderers.covidRenderer,
	popupTemplate,
	definitionExpression: "Tags LIKE '%coronavirus%'",
});

const otherProtestLayer = new FeatureLayer({
	id: 'other',
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/US_Protests_2020_1/FeatureServer',
	outFields: ['*'],
	renderer: renderers.otherRenderer,
	popupTemplate,
	definitionExpression:
		"Tags NOT LIKE '%racial%' AND Tags NOT LIKE '%police%'",
});

export const model: ModelSchema = {
	metadata: {
		name: 'US_protests',
		theme: 'dark',
	},
	pages: [
		{
			title: 'United States Protests',
			content: 'This is some information about the united states protests',
			mapState: {
				center: [-100, 38],
				zoom: 3,
				basemap,
				layers: [
					otherProtestLayer,
					covidProtestsLayer,
					racialProtestsLayer,
				],
			},
		},
	],
};

export default model;
