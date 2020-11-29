import React from 'react';
import { ModelSchema } from '../../../types';
import { RefLink } from '../../atoms';
import FeatureLayer from 'esri/layers/FeatureLayer';
import TimeSlider from 'esri/widgets/TimeSlider';
import * as renderers from './renderers';

const torchRelay = new FeatureLayer({
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/Tokyo_Olympics_Torch_Relay_Schedule_2021/FeatureServer',
	// @ts-ignore
	renderer: renderers.fireflyRenderer,
	outFields: ['*'],
});

const model: ModelSchema = {
	metadata: {
		name: 'japan_olympics',
		theme: 'dark',
		fullWidthMap: false,
	},
	sources: [
		{
			name: 'Tokyo 2020 Torch Relay',
			url:
				'https://www.arcgis.com/home/item.html?id=efbb7d441be4424abb8a2aacd57bc11e',
		},
		{
			name: 'Tokyo 2020 Torch Relay Animation Web App',
			url:
				'https://www.arcgis.com/home/item.html?id=b8b328c72ce643f7a4a9ccb352713e44',
		},
	],
	pages: [
		{
			title: 'Olympics 2020: Japan Torch Relay',
			content: (
				<>
					<p>
						Aside from during wartime, the Olympics have never been
						cancelled or postponed - until 2020. Japan's Prime Minister{' '}
						<RefLink
							theme="dark"
							link="https://www.espn.com/olympics/story/_/id/28946033/tokyo-olympics-officially-postponed-2021"
							linkTitle={`"Tokyo 2020 Olympics officially postponed until 2021", Cohen K., ESPN News, March 24, 2020, Retrieved November 25, 2020`}
						>
							announced in March
						</RefLink>{' '}
						that the legendary games would be postponed. Likewise, the
						traditional{' '}
						<RefLink
							theme="dark"
							link="https://www.olympic.org/olympic-torch-relay"
							linkTitle={`"THE OLYMPIC TORCH RELAY", olympic.org, Retrieved NOvember 25, 2020`}
						>
							torch relay
						</RefLink>{' '}
						would also be delayed. The{' '}
						<RefLink
							theme="dark"
							link="https://tokyo2020.org/en/torch/route/"
							linkTitle={`"Route of the Tokyo 2020 Olympic Torch Relay", tokyo2020.com, Retrieved November 25, 2020`}
						>
							new schedule
						</RefLink>{' '}
						was{' '}
						<RefLink
							theme="dark"
							link="https://tokyo2020.org/en/torch/news/news-20200326-01-en"
							linkTitle={`"Revised Outline of Tokyo 2020 Olympic Torch Relay Announced", tokyo2020.com, September 28, 2020, Retrieved November 25, 2020`}
						>
							announced
						</RefLink>{' '}
						in September, spanning 121 days.
					</p>
					<p>
						Click the play button below to watch the torch travel its
						prospective path.
					</p>
				</>
			),
			mapState: {
				position: {
					center: [138, 36],
					zoom: 4,
				},
				basemap: 'dark-gray-vector',
				layers: [torchRelay],
			},
		},
	],
	customFeatures: ({ view, layers, map }) => {
		// get layey view, cut out all features on init
		let layerView;
		let flFromResults;
		view.whenLayerView(torchRelay).then((lv) => {
			// torchRelay.queryFeatures().then(function (results) {
			// 	console.log('results before filter', results);
			// 	// create a new feature layer for each feature in the original layer
			// 	flFromResults = results.features.map((feature) => ({
			// 		time: feature.attributes.Time,
			// 		onmap: false,
			// 		layer: new FeatureLayer({
			// 			objectIdField: 'OBJECTID',
			// 			source: [feature],
			// 			fields: results.fields,
			// 			popupTemplate: feature.popupTemplate,
			// 			// @ts-ignore
			// 			renderer: renderers.fireflyRenderer,
			// 		}),
			// 	}));

			// 	console.log('flFromResults', flFromResults);
			// 	// flFromResults.forEach((l) => map.add(l.layer));
			// });

			layerView = lv;
			layerView.filter = {
				where: `Time <= 'nope'`,
			};

			lv.watch('updating', function (val) {
				if (!val) {
					// wait for the layer view to finish updating
					lv.queryFeatures().then(function (results) {
						console.log('results after filter', results); // prints all the client-side features to the console
					});
				}
			});
		});

		// set up time slider
		var timeSlider = new TimeSlider({
			container: 'timeSlider',
			playRate: 150,
			mode: 'cumulative-from-start',
			loop: false,
			fullTimeExtent: {
				start: new Date(2021, 2, 24),
				end: new Date(2021, 6, 25),
			},
			stops: {
				// @ts-ignore
				interval: {
					value: 1,
					unit: 'days',
				},
			},
			tickConfigs: [
				{
					mode: 'count',
					values: 5,
					labelsVisible: true,
					labelFormatFunction: (value) => {
						const date = new Date(value);
						return date.toLocaleString('default', { month: 'short' });
					},
				},
			],
		});

		view.ui.add(timeSlider, 'bottom-right');

		// update layer view filter to reflect current timeExtent, all protests in layer up to timeExtend
		timeSlider.watch('timeExtent', function (value) {
			const dateString = value.end.getTime();

			// flFromResults.forEach((p) => {
			// 	if (p.time <= dateString) {
			// 		map.add(p.layer);
			// 	} else {
			// 		map.remove(p.layer);
			// 	}
			// });

			layerView.filter = {
				where: `Time <= '${dateString}'`,
			};
		});
	},
};

export default model;
