import React from 'react';
import { arcticReference, graticule, iceLayers, iceLayers1979 } from './layers';
import { ModelSchema } from '../../../types';
import Extent from 'esri/geometry/Extent';
import SpatialReference from 'esri/geometry/SpatialReference';
import LayerList from 'esri/widgets/LayerList';
import TimeSlider from 'esri/widgets/TimeSlider';
import { RefLink } from '../../atoms';

const model: ModelSchema = {
	metadata: {
		name: 'artic_ice',
		theme: 'light',
		fullWidthMap: true,
		disableSpinnerAfterInitialLoad: true,
	},
	sources: [
		{
			name: 'Arctic Sea Ice Combo, 1978-2019',
			url:
				'https://www.arcgis.com/home/item.html?id=2c989d794b2f4ed8af313d8b4c2dadcd',
		},
		{
			name: '"Sea Ice Aware", by ESRI',
			url: 'https://livingatlas.arcgis.com/sea-ice/',
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
				e.item.title = e.item.layer.title;
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
			content: (
				<>
					<p>
						While natural disasters are as old as time, their recent
						ferocity has many wondering if they are part of a larger
						pattern. Global warming is becoming more{' '}
						<RefLink
							theme="light"
							link="https://www.pewresearch.org/fact-tank/2020/10/16/many-globally-are-as-concerned-about-climate-change-as-about-the-spread-of-infectious-diseases/"
							linkTitle={`"Many globally are as concerned about climate change as about the spread of infectious diseases", Fagan, M., Pew Research Center, Oct 16, 2020, Retrieved Dec 24, 2020`}
						>
							widely accepted
						</RefLink>{' '}
						as a reality. The change in global temperatures is most
						evident in the shrinking of arctic ice. This year, arctic ice{' '}
						<RefLink
							theme="light"
							link="https://climate.nasa.gov/news/3023/2020-arctic-sea-ice-minimum-at-second-lowest-on-record/"
							linkTitle={`"2020 Arctic Sea Ice Minimum at Second Lowest on Record", Ramsayer, K., NASA Climate News, September 21, 2020, Retrieved November 17, 2020`}
						>
							shrank to almost the lowest its been on record
						</RefLink>
						. The melting of the ice releases CO<small>2</small> which is{' '}
						<RefLink
							theme="light"
							link="https://arctic.noaa.gov/Report-Card/Report-Card-2019/ArtMID/7916/ArticleID/844/Permafrost-and-the-Global-Carbon-Cycle"
							linkTitle={`"Permafrost and the Global Carbon Cycle", Schurr, T., NOAA Arctic Program, November 22, 2019, Retrieved November 17, 2020`}
						>
							further accelerating global warming
						</RefLink>
						.
					</p>
					<p>
						Click the play button below to watch the arctic ice evolve
						from 1980 to 2015. (Data from the last several years is
						incomplete at this time.)
					</p>
				</>
			),
			mapState: {
				basemap: {
					// @ts-ignore
					portalItem: {
						id: '7ec08e5438304dbfa1e26181503e6fa8',
					},
				},
				layers: [
					arcticReference,
					...graticule,
					...iceLayers1979,
					...iceLayers,
				],
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
