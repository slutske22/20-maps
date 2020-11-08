import React from 'react';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import {
	bordersAndLabels,
	provincialLayerPercentOfPop,
	provincialLayerTotalCases,
	provincialPop,
	grayBase,
	allLayers,
} from './layers';
import Extent from 'esri/geometry/Extent';
import LayersList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';

const model: ModelSchema = {
	metadata: {
		name: 'covid_italy',
		theme: 'dark',
		fullWidthMap: false,
	},
	sources: [
		{
			name: '',
			url: '',
		},
	],
	customFeatures: ({ view }) => {
		var layerList = new LayersList({
			view,
			statusIndicatorsVisible: false,
			listItemCreatedFunction: function (e) {
				if ((e.item.title = 'Covid in Italy')) {
					e.item.open = true;
				}
				e.item.title = e.item.layer.name;
			},
		});

		view.ui.add(layerList, 'top-right');

		var legend = new Legend({
			view: view,
			layerInfos: [
				// @ts-ignore
				{
					layer: provincialLayerTotalCases,
					title: 'Total Cases',
				},
				// @ts-ignore
				{
					layer: provincialLayerPercentOfPop,
					title: 'Cases as % of Population',
				},
				// @ts-ignore
				{
					layer: provincialPop,
					title: 'Total Population',
				},
			],
		});

		view.ui.add(legend, 'top-right');
	},
	pages: [
		{
			title: 'COVID in Italy',
			content: <>Some content here</>,
			mapState: {
				position: {
					extent: new Extent({
						xmax: 2401060.315701193,
						xmin: 270607.4633373271,
						ymax: 5998729.274054984,
						ymin: 4323229.614044366,
						spatialReference: {
							wkid: 102100,
						},
					}),
				},
				layers: [grayBase, bordersAndLabels, allLayers],
			},
		},
	],
};

export default model;
