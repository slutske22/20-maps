import { ModelSchema } from '../../../types';
import { mars_hypso, mars_ground, labels } from './layers';
import Expand from 'esri/widgets/Expand';

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

		// get page content
		const page: HTMLElement = document.querySelector(
			`#mars div[class^="Page__PageContent-"]`
		);

		if (page) {
			page.style.margin = '0px';
			page.style.width = '300px';

			console.log(page);

			// create expand with page content in it
			const expand = new Expand({
				view,
				content: page,
				expandIconClass: 'esri-icon-question',
				expandTooltip: 'Information',
				expanded: true,
			});

			view.ui.add([{ component: expand, position: 'top-left', index: 0 }]);
		}
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
