import React from 'react';
import { ModelSchema } from '../../../types';
import { RefLink } from '../../atoms';
import FeatureLayer from 'esri/layers/FeatureLayer';

const torchRelay = new FeatureLayer({
	url:
		'https://services5.arcgis.com/0AFsQflykfA9lXZn/arcgis/rest/services/Tokyo_2020_Torch_Relay/FeatureServer',
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
				'https://www.arcgis.com/home/item.html?id=9fc3af6884a945fd84417a784ac8f968',
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
};

export default model;
