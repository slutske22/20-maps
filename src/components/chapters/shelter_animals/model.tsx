import React from 'react';
import { ModelSchema } from '../../../types';
import { RefLink } from '../../atoms';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Basemap from 'esri/Basemap';
import Legend from 'esri/widgets/Legend';
import Feature from 'esri/widgets/Feature';
import * as renderers from './renderers';
import { popupTemplate } from './popupTemplate';

const animalCount = new FeatureLayer({
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/Shelter_Animal_Count_2020_Comparison/FeatureServer',
	outFields: ['*'],
	popupTemplate,
	// @ts-ignore
	renderer: renderers.animalCountRenderer,
});

const basemap = new Basemap({
	portalItem: {
		id: '228eaa6a4cd34528b443fb71178c8545',
	},
});

const model: ModelSchema = {
	metadata: {
		name: 'shelter_animals',
		theme: 'light',
		fullWidthMap: false,
	},
	sources: [
		{
			name: 'Shelter Animal Count 2020 Comparison',
			url:
				'https://www.arcgis.com/home/item.html?id=302d1e94c600443a8e9b74adc8575687',
		},
		{
			name: 'shelteranimalscount.org',
			url: 'https://www.shelteranimalscount.org/',
		},
	],
	pages: [
		{
			title: 'Shelter Animals: The Answer to Social Distancing',
			content: (
				<>
					<p>
						Another unexpected side effect of COVID was how all that
						social distancing would effect the world's pets.{' '}
						<RefLink
							theme="light"
							link="https://www.shelteranimalscount.org/"
							linkTitle={`https://www.shelteranimalscount.org/`}
						>
							shelteranimalscount.org
						</RefLink>{' '}
						has been organizing the collection of U.S. animal shelter
						cesus data for years. 2020 saw a huge reduction in intake of
						shelter pets, especially in March and April.{' '}
					</p>

					<p style={{ flexGrow: 1 }}>
						This map shows the percentage reduction in intakes of shelter
						pets in 2020 as compared with the average of the prior 3
						years. Click on a state for more details.
					</p>
					<div id="animal-count-info-div"></div>
				</>
			),
			mapState: {
				position: {
					center: [-100, 38],
					zoom: 2,
				},
				basemap,
				layers: [animalCount],
			},
		},
	],
	customFeatures: ({ view, map }) => {
		view.when(function () {
			const { popup } = view;

			popup.dockEnabled = true;

			popup.set('dockOptions', {
				breakpoint: false,
				buttonEnabled: false,
				position: 'bottom-left',
			});
		});

		const legend = new Legend({
			view,
			layerInfos: [
				// @ts-ignore
				{
					layer: animalCount,
					title: 'Shelter Animal Count 2020 Comparison',
				},
			],
		});

		view.ui.add(legend, 'bottom-right');

		// const infoDiv = document.getElementById('animal-count-info-div');
		// const feature = new Feature({
		// 	container: 'animal-count-info-div',
		// 	graphic: {
		// 		popupTemplate,
		// 	},
		// 	map,
		// 	spatialReference: view.spatialReference,
		// });

		// // add hitTest for popup open on hover
		// view.whenLayerView(animalCount).then(function (layerView) {
		// 	let highlight;
		// 	// listen for the pointer-move event on the View
		// 	view.on('click', function (event) {
		// 		// Perform a hitTest on the View
		// 		view.hitTest(event).then(function (event) {
		// 			// Make sure graphic has a popupTemplate
		// 			// let results = event.results.filter(function (result) {
		// 			// 	return result.graphic.layer.popupTemplate;
		// 			// });
		// 			let result = event.results[0];

		// 			console.log(event.results);

		// 			if (result) {
		// 				if (
		// 					!view.popup.features.length ||
		// 					(view.popup.features.length &&
		// 						view.popup.features[0].attributes.STATE_NAME !==
		// 							result.graphic.attributes.STATE_NAME)
		// 				) {
		// 					highlight && highlight.remove();
		// 					// Update the graphic of the Feature widget
		// 					// on pointer-move with the result
		// 					highlight = layerView.highlight(result.graphic);

		// 					infoDiv.style.display = 'block';
		// 					feature.graphic = result.graphic;
		// 				}
		// 			} else {
		// 				highlight && highlight.remove();
		// 			}
		// 		});
		// 	});
		// });
	},
};

export default model;
