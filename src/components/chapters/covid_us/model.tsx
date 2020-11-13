import React from 'react';
import {
	totCases,
	Deaths,
	Cases100k,
	socialDistancingScore,
	unemployment,
} from './layers';
import * as renderers from './renderers';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import classBreaks from 'esri/smartMapping/statistics/classBreaks';
import { RefLink } from '../../atoms';
import { clamp } from '../../../utils/utils';
import { ModelSchema } from '../../../types';

const layers = [
	totCases,
	Deaths,
	Cases100k,
	socialDistancingScore,
	unemployment,
];

const model: ModelSchema = {
	metadata: {
		name: 'covid_us',
		fullWidthMap: true,
		theme: 'light',
	},
	sources: [
		{
			name: 'US Covid 19 Trends by County',
			url:
				'https://www.arcgis.com/home/item.html?id=49c25e0ce50340e08fcfe51fe6f26d1e',
		},
	],
	pages: [
		{
			title: 'COVID19 in the US',
			content: <>Some content in here</>,
			mapState: {
				basemap: 'gray-vector',
				layers,
				position: {
					center: [-100, 38],
					zoom: 4,
				},
			},
		},
		{
			title: 'Total Deaths',
			content: <>Some content in here</>,
			mapState: {
				basemap: 'gray-vector',
				layers,
				position: {
					center: [-100, 38],
					zoom: 4,
				},
			},
		},
		{
			title: 'Cases per 100K Popuplation',
			content: <>Some content in here</>,
			mapState: {
				basemap: 'gray-vector',
				layers,
				position: {
					center: [-100, 38],
					zoom: 4,
				},
			},
		},
		{
			title: 'Social Distancing Scores',
			content: <>Some content in here</>,
			mapState: {
				basemap: 'gray-vector',
				layers,
				position: {
					center: [-100, 38],
					zoom: 4,
				},
			},
		},
		{
			title: 'Unemployment',
			content: <>Some content in here</>,
			mapState: {
				basemap: 'gray-vector',
				layers,
				position: {
					center: [-100, 38],
					zoom: 4,
				},
			},
		},
	],
	customFeatures: ({ map, view, layers, pageRefs, currentPage }) => {
		// // apply smart mapping to renderers on load
		// classBreaks({
		// 	layer: totCases,
		// 	field: 'totCases',
		// 	numClasses: 5,
		// }).then(function (response) {
		// 	const { maxValue } = response;
		// 	// @ts-ignore
		// 	totCases.renderer = renderers.totCases(0, maxValue);
		// });
	},
	customFeaturesPerPage: ({ map, view, pageRefs, currentPage }) => {
		// add event listener to scrolling main to control swipes
		const app = document.querySelector('.App');

		const existingSwipe = view.ui.find('swipe');

		const swipe =
			existingSwipe ||
			new Swipe({
				id: 'swipe',
				view: view,
				disabled: true,
				position: 100,
				direction: 'vertical',
				trailingLayers: [],
				visibleElements: {
					handle: false,
					divider: true,
				},
			});

		if (!existingSwipe) {
			view.ui.add(swipe);
		}

		for (let i = 1; i < layers.length; i++) {
			if (i === currentPage || i === currentPage - 1) {
				layers[i].opacity = 1;
			} else {
				layers[i].opacity = 0;
			}
			if (currentPage !== 0 && currentPage !== 1) {
				layers[0].opacity = 0;
			} else {
				layers[0].opacity = 1;
			}
		}

		console.log(
			'currentPage',
			currentPage,
			'layers opacity',
			layers.map((l) => l.opacity)
		);

		const scrollListener = () => {
			if (currentPage > 0) {
				const page = pageRefs[currentPage];
				const { top } = page.getBoundingClientRect();
				const position = window.innerHeight - top;
				const percent = (top / window.innerHeight) * 100;

				if (top < 0 || position < 0) {
				} else {
					swipe.position = clamp(percent, 0, 100);
					swipe.leadingLayers = [layers[currentPage - 1]];
					swipe.trailingLayers = [layers[currentPage]];
				}
			}
		};

		app.addEventListener('scroll', scrollListener);

		return () => {
			app.removeEventListener('scroll', scrollListener);
		};
	},
};

export default model;
