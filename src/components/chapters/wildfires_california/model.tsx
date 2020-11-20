import React from 'react';
import Legend from 'esri/widgets/Legend';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import {
	stamenTerrain,
	FIRMSfires,
	mask,
	states,
	SC2Oct1,
	SC2Sept29,
} from './layers';

const model: ModelSchema = {
	metadata: {
		name: 'wildfires_california',
		fullWidthMap: false,
		theme: 'light',
	},
	sources: [
		{
			name: 'FIRMS Active Fire Points for the California Fires, 2020 ',
			url:
				'https://www.arcgis.com/home/item.html?id=c5da7b0c3a704141975adec5b9407da6',
		},
	],
	pages: [
		{
			title: 'California Wildfires',
			content: <>Contenty content here goes the content</>,
			mapState: {
				position: {
					center: [-120, 37],
					zoom: 6,
				},
				basemap: 'satellite',
				layers: [stamenTerrain, FIRMSfires, mask],
			},
		},
		{
			title: 'Satellite Imagery of Smoke',
			content: (
				<>
					<p>Satellite Copernicus Sentinel-2</p>
				</>
			),
			mapState: {
				position: {
					center: [-120, 37],
					zoom: 6,
				},
				basemap: 'satellite',
				layers: [SC2Sept29, mask],
			},
		},
	],
	customFeatures: ({ view }) => {
		const query = states.createQuery();
		query.where = "NAME = 'California'";
		states.queryFeatures(query).then(function (result) {
			const geometry = result.features[0].geometry;
			console.log('geometry', geometry);
			mask.geometry = geometry;
			view.goTo(geometry).catch(function (error) {
				if (error.name != 'AbortError') {
					console.error(error);
				}
			});
		});

		var legend = new Legend({
			view: view,
			layerInfos: [
				// @ts-ignore
				{
					layer: FIRMSfires,
				},
			],
		});

		view.ui.add(legend, 'bottom-left');
	},
};

export default model;
