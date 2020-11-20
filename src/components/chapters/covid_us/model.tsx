import React from 'react';
import {
	totCases,
	Deaths,
	Cases100k,
	socialDistancingScore,
	unemployment,
} from './layers';
import * as renderers from './renderers';
import {
	covidPopup,
	socialDistancingPopup,
	unemploymentPopup,
} from './popupTemplates';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import classBreaks from 'esri/smartMapping/statistics/classBreaks';
import { RefLink } from '../../atoms';
import { clamp } from '../../../utils/utils';
import Slides from './Slides';
import { ModelSchema } from '../../../types';

const layers = [
	totCases,
	Deaths,
	Cases100k,
	socialDistancingScore,
	unemployment,
];

const popupTemplates = [
	covidPopup,
	covidPopup,
	covidPopup,
	socialDistancingPopup,
	unemploymentPopup,
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
		{
			name: 'Unacast Social Distancing Score, Latest Available',
			url:
				'https://www.arcgis.com/home/item.html?id=ab72fb3e9bf24d9594f0b942718bffeb',
		},
		{
			name: 'BLS Monthly Unemployment, Last 14 Months',
			url:
				'https://www.arcgis.com/home/item.html?id=993b8c64a67a4c6faa44a91846547786',
		},
	],
	pages: [
		{
			title: 'COVID19 in the US',
			content: (
				<>
					Coronavirus hit the United States hard, starting in New York and
					Seattle, slowly working its way to every county in the country.
					You can see the total cases per county in this map.
				</>
			),
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
			content: <>Here we see the deaths per county.</>,
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
			content: (
				<>
					Viewing the number of cases per 100 thousand population gives
					insight into how counties were able to control COVID's spread
					within their population.
				</>
			),
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
			content: (
				<>
					The biggest secondary effect from COVID has been the need to stay
					away from one another to avoid spreading the virus. This map
					shows how successful each county has been in their ability to
					social distance. Unacast offers a{' '}
					<RefLink
						theme="light"
						link="https://www.unacast.com/post/rounding-out-the-social-distancing-scoreboard"
						linkTitle={`"Rounding out the Social Distancing Scoreboard", Ngo, M., Retrieved November 17, 2020`}
					>
						social distancing score
					</RefLink>
					, updated monthly.
				</>
			),
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
			content: (
				<>
					And with social distancing and forced shutdowns, unemployment has
					been higher than its been in years. This map shows unemployment
					over the last 14 months. Click on a county to see how
					unemployment has evolved in that time period.
				</>
			),
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
			// set opacity for layer of current page or prev page to 1
			// other layers to 0
			if (i === currentPage || i === currentPage - 1) {
				layers[i].opacity = 1;
			} else {
				layers[i].opacity = 0;
			}
			// cover case for first/second page
			// if current page is not first or second, make invisible
			if (currentPage !== 0 && currentPage !== 1) {
				layers[0].opacity = 0;
			} else {
				layers[0].opacity = 1;
			}
		}

		// set popup for current layer
		for (let i = 0; i < layers.length; i++) {
			if (i === currentPage) {
				// @ts-ignore
				layers[i].popupTemplate = popupTemplates[i];
			} else {
				layers[i].popupTemplate = null;
			}
		}

		// console.log(
		// 	// 'currentPage',
		// 	// currentPage,
		// 	// 'layers opacity',
		// 	// layers.map((l) => l.opacity)
		// 	pageRefs[currentPage].childNodes[0]
		// );

		// @ts-ignore
		const cards: HTMLElement[] = document.querySelectorAll(
			`#covid_us div[class^="Slides__Page"]`
		);

		const existingLegend: HTMLElement = cards[currentPage].querySelector(
			'.legend'
		);

		if (existingLegend) {
			existingLegend.remove();
		}

		const legendDiv = document.createElement('div');
		legendDiv.className = 'legend arcgis-map-light';
		legendDiv.style.backgroundColor = 'white';

		const legend = new Legend({
			id: `legend-${currentPage}`,
			container: legendDiv,
			view,
			layerInfos: [
				// @ts-ignore
				{
					layer: layers[currentPage],
				},
			],
		});

		cards[currentPage].appendChild(legendDiv);

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
	customChapterDOM: <Slides screens={layers.length} />,
};

export default model;
