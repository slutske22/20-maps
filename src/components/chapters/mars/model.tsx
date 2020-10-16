import { ModelSchema } from '../../../types';
import { mars_hypso, mars_ground, labels } from './layers';

const model: ModelSchema = {
	metadata: {
		name: 'mars',
		theme: 'dark',
		fullWidthMap: true,
		sceneview: true,
	},
	customFeatures: ({ map }) => {
		map.ground.layers.add(mars_ground);
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
			content: 'The mars rover is still up there  Doing stuff',
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
