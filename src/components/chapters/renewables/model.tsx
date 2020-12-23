import React from 'react';
import { ModelSchema } from '../../../types';
import { basemap, energy, graticules } from './layers';
import { RefLink } from '../../atoms';
import Legend from 'esri/widgets/Legend';

const model: ModelSchema = {
	metadata: {
		name: 'renewables',
		fullWidthMap: false,
		theme: 'light',
	},
	sources: [
		{
			name:
				'Indicator 7.2.1: Renewable energy share in the total final energy consumption (percent)',
			url:
				'https://www.arcgis.com/home/item.html?id=3cece1f2bb4e49efa22d45bc34076805',
		},
	],
	pages: [
		{
			title: 'Renewable Energy by Percent',
			content: (
				<>
					<p>Some content ehre</p>
				</>
			),
			mapState: {
				position: {
					center: {
						// @ts-ignore
						x: 0,
						y: 0,
					},
					zoom: 1,
				},
				layers: [basemap, ...graticules, energy],
			},
		},
	],
	customFeatures: ({ view }) => {
		const legend = new Legend({
			view,
			layerInfos: [
				// @ts-ignore
				{
					layer: energy,
					title: 'Renewables as % of Total Energy Use',
				},
			],
		});

		view.ui.add(legend, 'bottom-left');
	},
};

export default model;
