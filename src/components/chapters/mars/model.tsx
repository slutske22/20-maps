import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ModelSchema } from '../../../types';
import { mars_hypso, mars_ground, labels } from './layers';
import Expand from 'esri/widgets/Expand';
import PageOverride from './PageOverride';
import { RefLink } from '../../atoms';

const model: ModelSchema = {
	metadata: {
		name: 'mars',
		theme: 'dark',
		fullWidthMap: true,
		sceneview: true,
	},
	customFeatures: ({ map, view }) => {
		// add ground layer
		map.ground.layers.add(mars_ground);

		// override default behavior and set top left back to default
		const topLeft: HTMLElement = document.querySelector(
			`#mars .esri-ui-top-left`
		);
		topLeft.style.left = '';

		const page: HTMLElement = document.querySelector(
			`#mars div[class^="Page__PageContent-"]`
		);

		const sidecar: HTMLElement = document.querySelector(
			`#mars div[class^="SideCar"]`
		);

		sidecar.style.left = '40px';
		sidecar.style.width = '400px';
		// page.style.opacity = '0';
		// page.style.pointerEvents = 'none';

		console.log(
			'renderToStaticMarkup',
			ReactDOMServer.renderToStaticMarkup(PageOverride)
		);
		console.log(
			'renderToString',
			ReactDOMServer.renderToString(PageOverride)
		);

		// create expand with custom page content in it
		const expand = new Expand({
			view,
			// content: ReactDOMServer.renderToStaticMarkup(PageOverride),
			// content: PageOverride,
			expandIconClass: 'esri-icon-question',
			expandTooltip: 'Information',
			expanded: true,
		});

		window.expand = expand;

		view.ui.add([{ component: expand, position: 'top-left', index: 0 }]);

		expand.container.addEventListener('click', () => {
			console.log(`expand widget is ${expand.expanded ? 'open' : 'closed'}`);
			if (expand.expanded) {
				sidecar.style.display = 'block';
			} else {
				sidecar.style.display = 'none';
			}
		});
	},
	sources: [
		{
			name: 'Mars Topographic Layer',
			url: '',
		},
		{
			name: 'Mars Imagery Layer',
			url: '',
		},
		{
			name: 'Mars Topographic Layer',
			url: '',
		},
	],
	pages: [
		{
			title: 'Mars Rover: Curiosity',
			content: (
				<>
					{' '}
					As much as you may want to abandon Earth altogether for more
					pristine pastures, we're still not ready to visit our red
					neighbor. But the Curiosity Rover is still up there, making
					discoveries. You can see mission updates{' '}
					<RefLink
						linkTitle="Mars Curiosity Rover, Mission Updates, NASA"
						link="https://mars.nasa.gov/msl/mission-updates/"
						theme="dark"
					>
						here
					</RefLink>
					.
					<br />
					<br />
					Click the thumbnails to see Curiosity's 2020 discoveries.
				</>
			),
			mapState: {
				layers: [mars_hypso, ...labels],
				position: {
					center: [-100, 38],
					zoom: 3,
					camera: {
						// @ts-ignore
						position: {
							x: -17, // lon
							y: 19, // lat
							z: 3000000, // elevation in meters
						},
						tilt: 33,
						heading: 217,
					},
				},
			},
		},
	],
};

export default model;
