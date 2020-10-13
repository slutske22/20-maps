import { ModelSchema } from '../../../types';
import TileLayer from 'esri/layers/TileLayer';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import Expand from 'esri/widgets/Expand';
import Bookmark from 'esri/webmap/Bookmark';
import Bookmarks from 'esri/widgets/Bookmarks';

const NO2_Mean_March_2010_2019 = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/WSiUmUhlFx4CtMBB/arcgis/rest/services/No2_mean_march_514_WTL1/MapServer',
	blendMode: 'multiply',
});

const NO2_March_2020 = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/WSiUmUhlFx4CtMBB/arcgis/rest/services/No2_2020_march_514_WTL1/MapServer',
	blendMode: 'multiply',
	legendEnabled: false,
});

const model: ModelSchema = {
	metadata: {
		name: 'covid_pollution',
		theme: 'light',
		fullWidthMap: false,
	},
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
			content:
				'One of the positive side effects of social and economic shutdown has been a reduction in pollution...',
			mapState: {
				basemap: 'topo-vector',
				layers: [NO2_Mean_March_2010_2019, NO2_March_2020],
				position: {
					extent: {
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
