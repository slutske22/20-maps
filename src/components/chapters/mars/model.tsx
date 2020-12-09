import React from 'react';
import { ModelSchema } from '../../../types';
import {
	mars_hypso,
	mars_ground,
	labels,
	mars_curiosity_track_path,
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
	customFeatures: ({ map }) => {
		// add ground layer
		map.ground.layers.add(mars_ground);
	},
	sources: [
		{
			name: 'Mars 3D Model',
			url:
				'https://www.arcgis.com/home/item.html?id=c49741fb82704534adeb72dea3f58c3b',
		},
		{
			name: 'Mars Hypso Tint Layer',
			url:
				'https://www.arcgis.com/home/item.html?id=608e67315a9d478caa9f3311c3c729ef',
		},
		{
			name: 'Curiosity Rover Track Path',
			url:
				'https://www.arcgis.com/home/item.html?id=d0acbbe95e9547d0a3b3a38b7cc8f19e',
		},
	],
	pages: [
		{
			title: 'Mars Rover: Curiosity',
			content: (
				<>
					<p>
						2020 probably has you ready to abandon Earth altogether for
						more pristine pastures. We're still not ready to visit our red
						neighbor, but in 2020 we have the whole planet mapped out. The
						Curiosity Rover is still up there, making discoveries. You can
						see mission updates&nbsp;
						<RefLink
							linkTitle="Mars Curiosity Rover, Mission Updates, NASA"
							link="https://mars.nasa.gov/msl/mission-updates/"
							theme="dark"
						>
							here
						</RefLink>
						.
					</p>
					<p>Click the thumbnails to see Curiosity's 2020 discoveries.</p>
				</>
			),
			mapState: {
				layers: [mars_hypso, mars_curiosity_track_path, ...labels],
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
	customMapDOM: ({ view }) => <Slides view={view} />,
};

export default model;
