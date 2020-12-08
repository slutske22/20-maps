import React from 'react';
import LayerList from 'esri/widgets/LayerList';
import { ModelSchema } from '../../../types';
import { lunar_geology_2020, lunar_ground, lunar_true_color } from './layers';
import { RefLink } from '../../atoms';

const model: ModelSchema = {
	metadata: {
		name: 'moon',
		theme: 'light',
		fullWidthMap: true,
		sceneview: true,
	},
	sources: [
		{
			name: 'Lunar Basemap',
			url:
				'https://www.arcgis.com/home/item.html?id=d18cc887533a49e68083cfbcce4c9ae0',
		},
		{
			name: 'Lunar Elevation',
			url:
				'https://www.arcgis.com/home/item.html?id=5a59a9343a3a49b983f80afc392985e5',
		},
		{
			name: 'Lunar Geology 2020',
			url:
				'https://www.arcgis.com/home/item.html?id=2397d35e4aa54f9dba9e31a2e5282429',
		},
	],
	pages: [
		{
			title: 'Lunar Geology',
			content: (
				<>
					<p>
						This year, NASA and the USGS released the most detailed geological
						maps of the moon ever created
					</p>
				</>
			),
			mapState: {
				position: {
					camera: {
						// @ts-ignore
						position: {
							x: 7, // lon
							y: 0, // lat
							z: 6100000, // elevation in meters
						},
						tilt: 0,
						heading: 0,
					},
				},
				layers: [lunar_true_color, lunar_geology_2020],
			},
		},
	],
	customFeatures: ({ map, view }) => {
		map.ground.layers.add(lunar_ground);

		const layerList = new LayerList({
			view,
		});

		view.ui.add(layerList, 'top-right');
	},
};

export default model;
