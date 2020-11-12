import React from 'react';
import { totCases, Deaths, Cases100k } from './layers';
import * as renderers from './renderers';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import classBreaks from 'esri/smartMapping/statistics/classBreaks';
import { RefLink } from '../../atoms';
import { clamp } from '../../../utils/utils';
import { ModelSchema } from '../../../types';

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
				layers: [totCases],
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
				layers: [totCases, Deaths],
			},
		},
		{
			title: 'Cases per 100K Popuplation',
			content: <>Some content in here</>,
			mapState: {
				basemap: 'gray-vector',
				layers: [Deaths, Cases100k],
			},
		},
		{
			title: 'Social Distancing Scores',
			content: <>Some content in here</>,
			mapState: {
				basemap: 'gray-vector',
				layers: [Cases100k, totCases],
			},
		},
		{
			title: 'Unemployment',
			content: <>Some content in here</>,
			mapState: {
				basemap: 'gray-vector',
				layers: [totCases, Deaths],
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

		const layers = [totCases, Deaths, Cases100k, totCases, Deaths];

		// const swipes = Object.keys(pageRefs).map(
		// 	(page, index) =>
		// 		new Swipe({
		// 			view: view,
		// 			disabled: true,
		// 			position: 100,
		// 			direction: 'vertical',
		// 			trailingLayers: [layers[index]],
		// 			visibleElements: {
		// 				handle: false,
		// 				divider: true,
		// 			},
		// 		})
		// );

		// swipes.forEach((swipe) => {
		// 	view.ui.add(swipe);
		// });

		const existingSwipe = view.ui.find('swipe');
		console.log('existingSwipe', existingSwipe);

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

		// console.log('view.ui', view.ui);

		if (!existingSwipe) {
			view.ui.add(swipe);
		}

		const scrollListener = () => {
			// console.log('scrolling', 'currentPage', currentPage);
			if (currentPage > 0) {
				const page = pageRefs[currentPage];
				const { top } = page.getBoundingClientRect();
				const position = window.innerHeight - top;
				const percent = (top / window.innerHeight) * 100;

				if (top < 0 || position < 0) {
				} else {
					// console.log(`page ${currentPage} percent:`, `${percent}%`);
					// swipes[currentPage].position = clamp(percent, 0, 100);
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
