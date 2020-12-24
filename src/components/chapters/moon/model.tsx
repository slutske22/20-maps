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
		disableSpinnerAfterInitialLoad: true,
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
						2020 probably has you ready to abandon Earth altogether for more
						pristine pastures. With plans to{' '}
						<RefLink
							theme="light"
							link="https://www.nasa.gov/specials/artemis/"
							linkTitle={`"Artemis: Humanity's Return to the Moon", NASA.gov, Retrieved Dec 17, 2020`}
						>
							return to the moon
						</RefLink>{' '}
						in 2024, scientific knowledge about our oldest satellite is at an
						all time high in 2020. This year, NASA and the{' '}
						<RefLink
							theme="light"
							link="https://www.usgs.gov/news/usgs-releases-first-ever-comprehensive-geologic-map-moon"
							linkTitle={`"USGS Releases First-Ever Comprehensive Geologic Map of the Moon", usgs.gov, Apr 20, 2020, Retrieved Dec 17, 2020`}
						>
							USGS released the most detailed geological maps of the moon ever
							created
						</RefLink>
						. What looks like a child's finger painting is the culmination of
						decades of research in geophysics and astronomy.
					</p>
					<p>
						Explore the moon's geography and topography using the map controls
						on the left, or by panning and zooming with your mouse. Toggle the
						geography layer on and off in the upper right corner.
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
