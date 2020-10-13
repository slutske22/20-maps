import { arcticReference, graticule, iceLayers } from './layers';
import { ModelSchema } from '../../../types';
import Extent from 'esri/geometry/Extent';
import SpatialReference from 'esri/geometry/SpatialReference';
import LayerList from 'esri/widgets/LayerList';
import TimeSlider from 'esri/widgets/TimeSlider';

const model: ModelSchema = {
	metadata: {
		name: 'artic_ice',
		theme: 'light',
		fullWidthMap: true,
	},
	sources: [
		{
			name: 'Arctic Sea Ice Combo, 1978-2019',
			url:
				'https://www.arcgis.com/home/item.html?id=2c989d794b2f4ed8af313d8b4c2dadcd',
		},
	],
	customFeatures: ({ map, view }) => {
		const layerViews = [];
		iceLayers.forEach((layerView) => {
			view.whenLayerView(layerView).then((layerView) => {
				layerViews.push(layerView);
				layerView.filter = {
					where: 'Rec_Year = 1979',
				};
			});
		});

		// Layer List
		const layerList = new LayerList({
			view,
			statusIndicatorsVisible: false,
			listItemCreatedFunction: function (e) {
				switch (e.item.layer.id) {
					case 'seaIceSummer':
						e.item.title = 'Ice in Summer';
						break;
					case 'seaIceWinter':
						e.item.title = 'Ice in Winter';
						break;
				}
			},
		});

		view.ui.add(layerList, 'top-right');

		// timeslider
		var timeSlider = new TimeSlider({
			container: 'timeSlider',
			playRate: 250,
			mode: 'instant',
			loop: false,
			fullTimeExtent: {
				start: new Date(1979, 0, 1),
				end: new Date(2019, 0, 1),
			},
			stops: {
				// @ts-ignore
				interval: {
					value: 1,
					unit: 'years',
				},
			},
		});

		view.ui.add(timeSlider, 'bottom-left');

		// update layer view filter to reflect current timeExtent, use sea ice polygon from timeExtent's current year
		timeSlider.watch('timeExtent', function (value) {
			const year = value.end.getFullYear();

			layerViews.forEach((layerView) => {
				layerView.filter = {
					where: `Rec_Year = ${year}`,
				};
			});

			if (year === 2015) {
				timeSlider.stop();
			}
		});
	},
	pages: [
		{
			title: 'Artic Ice, 1979 - 2020',
			content:
				'Some content here.  Contenty content is contenting the content for the content of this content.',
			mapState: {
				basemap: {
					// @ts-ignore
					portalItem: {
						id: '7ec08e5438304dbfa1e26181503e6fa8',
					},
				},
				layers: [arcticReference, ...graticule, ...iceLayers],
				position: {
					extent: new Extent({
						xmax: 6613525,
						xmin: -7640495,
						ymax: 7298614,
						ymin: -3477723,
						spatialReference: {
							wkid: 5936,
						},
					}),
				},
			},
		},
	],
};

export default model;
