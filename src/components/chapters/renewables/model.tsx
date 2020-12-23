import React from 'react';
import { ModelSchema } from '../../../types';
import { basemap, energy, graticules } from './layers';
import { RefLink } from '../../atoms';
import Legend from 'esri/widgets/Legend';
import './styles.scss';

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
					<p style={{ flexGrow: 1 }}>Flex grow 1</p>
					<div className="arcgis-map-light">
						<div
							id="energy-legend-container"
							className="esri-component esri-legend esri-widget esri-widget--panel"
						/>
					</div>
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
			container: 'energy-legend-container',
			layerInfos: [
				// @ts-ignore
				{
					layer: energy,
					title: 'Renewables as % of Total Energy Use',
				},
			],
		});

		view.when(() => {
			view.popup.dockEnabled = true;
			view.popup.dockOptions = {
				position: 'bottom-left',
			};
		});
	},
};

export default model;
