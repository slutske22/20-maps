import React from 'react';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Legend from 'esri/widgets/Legend';
import './styles.scss';

function toDateString(date) {
	const y = `${date.getUTCFullYear()}`;
	const m = `${date.getUTCMonth()}`.padStart(2, '0');
	const d = `${date.getUTCDate()}`.padStart(2, '0');
	const h = `${date.getUTCHours()}`.padStart(2, '0');
	const mm = `${date.getUTCMinutes()}`.padStart(2, '0');
	const s = `${date.getUTCSeconds()}`.padStart(2, '0');
	return `${y}-${m}-${d} ${h}:${mm}:${s}`;
}

const locustsSwarms = new FeatureLayer({
	url:
		'https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Swarms_Public/FeatureServer',
	outFields: ['*'],
	definitionExpression: `STARTDATE >= date'1-1-2020' AND FINISHDATE <= date'12-1-2020'`,
});

const locustBands = new FeatureLayer({
	url:
		'https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Bands_Public/FeatureServer',
	outFields: ['*'],
	definitionExpression: `STARTDATE >= date'1-1-2020' AND FINISHDATE <= date'12-1-2020'`,
});

const locustAdults = new FeatureLayer({
	url:
		'https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Adults_Public/FeatureServer',
	outFields: ['*'],
	definitionExpression: `STARTDATE >= date'1-1-2020' AND FINISHDATE <= date'12-1-2020'`,
});

const locustHoppers = new FeatureLayer({
	url:
		'https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Hoppers_Public/FeatureServer',
	outFields: ['*'],
	definitionExpression: `STARTDATE >= date'1-1-2020' AND FINISHDATE <= date'12-1-2020'`,
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
		{
			name: 'Locust Adults in Africa',
			url:
				'https://www.arcgis.com/home/item.html?id=0a95c9b5ea6d42eaa232948ae618f690',
		},
		{
			name: 'Locust Hoppers',
			url:
				'https://www.arcgis.com/home/item.html?id=969749ccd9f546d29730a60f72bebb42',
		},
	],
	customFeatures: ({ view }) => {
		const legend = new Legend({
			view,
			layout: 'side-by-side',
			layerInfos: [
				// @ts-ignore
				{
					layer: locustsSwarms,
					title: 'Swarms',
				},
				// @ts-ignore
				{
					layer: locustBands,
					title: 'Bands',
				},
				// @ts-ignore
				{
					layer: locustAdults,
					title: 'Adults',
				},
				// @ts-ignore
				{
					layer: locustHoppers,
					title: 'Hoppers',
				},
			],
		});

		view.ui.add(legend, 'top-right');
	},
	pages: [
		{
			title: 'Locusts in Africa',
			content: <>contenty content</>,
			mapState: {
				basemap: 'topo-vector',
				layers: [locustsSwarms, locustBands, locustAdults, locustHoppers],
				position: {
					center: [35, 21],
					zoom: 4,
				},
			},
		},
		{
			title: 'Second Page',
			content: (
				<>
					This is a test to see what happens when a full width map has more
					than one page. How does the scrolling work?
				</>
			),
			mapState: {
				basemap: 'topo-vector',
				layers: [locustsSwarms, locustBands, locustAdults, locustHoppers],
				position: {
					center: [35, 21],
					zoom: 4,
				},
			},
		},
	],
};

export default model;
