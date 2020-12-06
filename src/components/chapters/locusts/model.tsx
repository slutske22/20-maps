import React from 'react';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Legend from 'esri/widgets/Legend';
import './styles.scss';

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
			content: (
				<>
					<p>
						This year, North and Easy Africa saw{' '}
						<RefLink
							theme="light"
							link="https://www.npr.org/sections/goatsandsoda/2020/06/14/876002404/locusts-are-a-plague-of-biblical-scope-in-2020-why-and-what-are-they-exactly"
							linkTitle={`"Locusts Are A Plague Of Biblical Scope In 2020" Baskar, P., NPR, June 14, 2020, Retrieved Dec 5, 2020`}
						>
							record
						</RefLink>{' '}
						swarms of locusts. The infestation is{' '}
						<RefLink
							theme="light"
							link="https://foodtank.com/news/2020/08/locust-swarms-threaten-food-security-in-horn-of-africa/#:~:text=The%20Horn%20of%20Africa%20is,to%20the%20International%20Rescue%20Committee."
							linkTitle={`"Locust Swarms Threaten Food Security in Horn of Africa", Bonifield, J., foodtank.com, Aug 2020, Retrieved Dec 5, 2020`}
						>
							affecting food security
						</RefLink>{' '}
						in East African countries like Kenya, Somalia and Ethiopia.
						Swarms extend as far as Southwest Asia and the Middle East.
					</p>
					<p>
						This map shows reports of locust non-flying bands, flying
						swarms, adults groups, and hopper groups (juveniles) reported
						in 2020 alone.
					</p>
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
