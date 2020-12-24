import React from 'react';
import { ModelSchema } from '../../../types';
import TileLayer from 'esri/layers/TileLayer';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import Expand from 'esri/widgets/Expand';
import Bookmark from 'esri/webmap/Bookmark';
import Bookmarks from 'esri/widgets/Bookmarks';
import { RefLink } from '../../atoms';

const NO2_Mean_March_2010_2019 = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/WSiUmUhlFx4CtMBB/arcgis/rest/services/No2_mean_march_514_WTL1/MapServer',
	blendMode: 'multiply',
	maxScale: 0, // no max,
});

const NO2_March_2020 = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/WSiUmUhlFx4CtMBB/arcgis/rest/services/No2_2020_march_514_WTL1/MapServer',
	blendMode: 'multiply',
	maxScale: 0, // no max,
	legendEnabled: false,
});

const model: ModelSchema = {
	metadata: {
		name: 'covid_pollution',
		theme: 'light',
		fullWidthMap: false,
	},
	sources: [
		{
			name: 'NO2 March Average 2010 - 2019',
			url:
				'https://www.arcgis.com/home/item.html?id=bb393224e1be4f779ff96376ef14a681',
		},
		{
			name: 'NO2 March 2020',
			url:
				'https://www.arcgis.com/home/item.html?id=5bfd3a67876043458fb1d86867b9bfe3',
		},
	],
	customFeatures: ({ view }) => {
		var swipe = new Swipe({
			view: view,
			leadingLayers: [NO2_Mean_March_2010_2019],
			trailingLayers: [NO2_March_2020],
			position: 50,
		});

		view.ui.add(swipe);

		const legend = new Legend({
			view,
		});
		const legendExpand = new Expand({
			view: view,
			content: legend,
			expandTooltip: 'Map Legend',
			collapseTooltip: 'Close',
		});
		view.ui.add(legendExpand, 'top-left');

		const bookmarks = new Bookmarks({
			view: view,
			bookmarks: [
				new Bookmark({
					name: 'East Easia',
					extent: {
						spatialReference: {
							wkid: 102100,
						},
						xmax: 15642888.79657935,
						xmin: 10682431.408985872,
						ymax: 5541052.12774907,
						ymin: 2009049.9247485844,
					},
				}),
				new Bookmark({
					name: 'Europe',
					extent: {
						spatialReference: {
							wkid: 102100,
						},
						xmax: 3693763.158913457,
						xmin: -1266694.2286800228,
						ymax: 7778638.790517051,
						ymin: 4246636.587516565,
					},
				}),
				new Bookmark({
					name: 'Northeastern U.S.',
					extent: {
						spatialReference: {
							wkid: 102100,
						},
						xmax: -6925236.215785816,
						xmin: -9405464.909582557,
						ymax: 5829188.746486893,
						ymin: 4063187.64498665,
					},
				}),
			],
		});

		view.ui.add(bookmarks, {
			position: 'top-right',
		});
	},
	pages: [
		{
			title: 'Reduced Pollution',
			content: (
				<>
					<p>
						One of the positive side effects of social and economic
						shutdown has been a reduction in pollution across the globe.
						Nitrogen Dioxide (NO<small>2</small>) is a pollutant that{' '}
						<RefLink
							theme="light"
							link="https://www.care4air.org/air-pollutants/measuring-air-pollutants/"
							linkTitle={`"Measuring Air Pollutants", care4air.org, Retrieved Dec 23, 2020`}
						>
							can be measured
						</RefLink>{' '}
						on a global scale. This maps shows the comparison between the
						averages of NO<small>2</small> measured in March from 2010 to
						2019 (left) against the NO<small>2</small> measured in March
						2020 (right). The difference is clear. The map also highlights
						just how much more severe the pollution is in China than the
						rest of the world.
					</p>
					<p>
						Drag the swipe handle back and forth to see how 2020's
						pollution compared to the average of the last 10 years. Click
						the bookmarks in the top right corner to see different places
						on Earth where the pollution was noticeably reduced as a
						result of economic shutdown.
					</p>
				</>
			),
			mapState: {
				basemap: 'topo-vector',
				layers: [NO2_Mean_March_2010_2019, NO2_March_2020],
				position: {
					extent: {
						// @ts-ignore
						spatialReference: {
							wkid: 102100,
						},
						xmax: 15642888.79657935,
						xmin: 10682431.408985872,
						ymax: 5541052.12774907,
						ymin: 2009049.9247485844,
					},
				},
			},
		},
	],
};

export default model;
