import React from 'react';
import { ModelSchema } from '../../../types';
import {
	mars_hypso,
	mars_ground,
	labels,
	mars_curiosity_track_ath,
} from './layers';
import Expand from 'esri/widgets/Expand';
import { RefLink } from '../../atoms';
import Slides from './slides';

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

		const sidecar: HTMLElement = document.querySelector(
			`#mars div[class^="SideCar"]`
		);

		sidecar.style.left = '40px';
		sidecar.style.width = '500px';
		sidecar.style.transition = 'all 0.5s';

		// create expand with custom page content in it
		const expand = new Expand({
			view,
			expandIconClass: 'esri-icon-question',
			expandTooltip: 'Information',
			expanded: true,
		});

		view.ui.add([{ component: expand, position: 'top-left', index: 0 }]);

		// @ts-ignore
		expand.container.addEventListener('click', () => {
			if (expand.expanded) {
				sidecar.style.left = '40px';
				sidecar.style.opacity = '1';
				sidecar.style.pointerEvents = 'auto';
				sidecar.style.transition = 'all 0.5s';
			} else {
				sidecar.style.left = '35px';
				sidecar.style.opacity = '0';
				sidecar.style.pointerEvents = 'none';
				sidecar.style.transition = 'none';
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
					2020 probably has you ready to abandon Earth altogether for more
					pristine pastures. We're still not ready to visit our red
					neighbor, but the Curiosity Rover is still up there, making
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
				layers: [mars_hypso, mars_curiosity_track_ath, ...labels],
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
						tilt: 40,
						heading: 217,
					},
				},
			},
		},
	],
	customMapDOM: ({ view }) => <Slides view={view} />,
};

export default model;
