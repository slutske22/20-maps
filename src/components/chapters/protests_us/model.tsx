import React from 'react';
import Basemap from 'esri/Basemap';
import FeatureLayer from 'esri/layers/FeatureLayer';
import LayerList from 'esri/widgets/LayerList';
import TimeSlider from 'esri/widgets/TimeSlider';
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
	// @ts-ignore
	renderer: renderers.racialRenderer,
	popupTemplate,
	definitionExpression: "Tags LIKE '%racial%' OR Tags LIKE '%police%'",
});

const covidProtestsLayer = new FeatureLayer({
	id: 'covid',
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/US_Protests_2020_1/FeatureServer',
	outFields: ['*'],
	// @ts-ignore
	renderer: renderers.covidRenderer,
	popupTemplate,
	definitionExpression: "Tags LIKE '%coronavirus%'",
});

const otherProtestLayer = new FeatureLayer({
	id: 'other',
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/US_Protests_2020_1/FeatureServer',
	outFields: ['*'],
	// @ts-ignore
	renderer: renderers.otherRenderer,
	popupTemplate,
	definitionExpression:
		"Tags NOT LIKE '%racial%' AND Tags NOT LIKE '%police%'",
});

export const model: ModelSchema = {
	metadata: {
		name: 'US_protests',
		theme: 'dark',
		fullWidthMap: true,
	},
	customFeatures: (args) => {
		const { map, view, layers } = args;

		var layerViews = [];
		layers.forEach((layer) => {
			view.whenLayerView(layer).then((layerView) => {
				layerViews.push(layerView);
			});

			// const bottomLeft = document.querySelector(
			//    `.US_protests .esri-ui-bottom-left.esri-ui-corner`
			// );
			// bottomLeft.appendChild(customLegend.current);
			// customLegend.current.style.display = 'flex';
		});

		// Layer List
		var layerList = new LayerList({
			view,
			statusIndicatorsVisible: false,
			listItemCreatedFunction: function (e) {
				switch (e.item.layer.id) {
					case 'racial':
						e.item.title = 'Race Related';
						break;
					case 'covid':
						e.item.title = 'Coronavirus Related';
						break;
					case 'other':
						e.item.title = 'Other';
						break;
				}
			},
		});

		view.ui.add(layerList, 'top-right');

		// timeslider
		var timeSlider = new TimeSlider({
			container: 'timeSlider',
			playRate: 100,
			mode: 'cumulative-from-start',
			loop: false,
			fullTimeExtent: {
				start: new Date(2020, 0, 1),
				end:
					new Date(2020, 11, 31) > new Date()
						? new Date()
						: new Date(2020, 11, 31),
			},
			stops: {
				// @ts-ignore
				interval: {
					value: 1,
					unit: 'days',
				},
			},
			tickConfigs: [
				{
					mode: 'count',
					values:
						new Date(2020, 11, 31) > new Date()
							? new Date().getMonth() + 1
							: 12,
					labelsVisible: true,
					labelFormatFunction: (value) => {
						const date = new Date(value);
						return date.toLocaleString('default', { month: 'short' });
					},
				},
			],
		});

		view.ui.add(timeSlider, 'bottom-right');

		// update layer view filter to reflect current timeExtent, all protests in layer up to timeExtend
		timeSlider.watch('timeExtent', function (value) {
			const dateString = value.end.getTime();

			layerViews.forEach((layerView) => {
				layerView.effect = {
					filter: {
						where: `Date <= '${dateString}'`,
					},
					excludedEffect: 'opacity(0%)',
				};
			});
		});
	},
	customDOM: null,
	pages: [
		{
			title: 'United States Protests',
			content: 'This is some information about the united states protests',
			mapState: {
				position: {
					center: [-100, 38],
					zoom: 3,
				},
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
