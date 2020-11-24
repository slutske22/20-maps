import React from 'react';
import { ModelSchema } from '../../../types';
import { RefLink } from '../../atoms';
import { trail, checkpoints } from './layers';

const model: ModelSchema = {
	metadata: {
		name: 'iditarod',
		fullWidthMap: false,
		theme: 'light',
		sceneview: true,
	},
	sources: [
		{
			name: 'Iditarod Trail',
			url:
				'https://www.arcgis.com/home/item.html?id=1cfe0c84b2994fed86ea14877cf73776',
		},
		{
			name: 'Iditarod Checkpoints',
			url:
				'https://www.arcgis.com/home/item.html?id=8963bceb9b274eed97d3f8524e6f3b10',
		},
	],
	pages: [
		{
			title: 'Iditarod',
			content: (
				<>
					<p>
						In times of great change, old traditions bring comfort. The{' '}
						<RefLink
							theme="light"
							link="https://www.alaskacenters.gov/explore/culture/dog-mushing/iditarod"
							linkTitle={`"Iditarod", Heckart, A., Alaska Centers, Public Lands Information, Retrieved November 24, 2020`}
						>
							Iditarod
						</RefLink>
						, the world's most famous dog sledding race, took place as
						usual this year. Norway's{' '}
						<RefLink
							theme="light"
							link="https://iditarod.com/race/2020/mushers/994-Thomas-Waerner/"
							linkTitle={`"Musher Details: Thomas Waerner", Iditarod.com, Retrieved November 24, 2020`}
						>
							Thomas Waerner
						</RefLink>{' '}
						was 2020's winner, with a race time of just over 9 days and 10
						hours. Though there can be only one winner, all contestants
						are champions of social distancing, traveling almost 1,000
						miles through the Alaskan wilderness with their dogs as
						company. Despite a drastic rise in COVID cases as we near the
						end of 2020, Iditarod 2021 will{' '}
						<RefLink
							theme="light"
							link="https://www.usnews.com/news/health-news/articles/2020-09-24/iditarod-preps-for-any-scenario-as-2021-race-plans-proceed"
							linkTitle={`"Iditarod Preps for Any Scenario as 2021 Race Plans Proceed", Associated Press, U.S. News, September 24, 2020, Retrieved November 24, 2020`}
						>
							still take place
						</RefLink>
						. However, last year's champion{' '}
						<RefLink
							theme="light"
							link="https://apnews.com/article/travel-alaska-anchorage-coronavirus-pandemic-iditarod-trail-sled-dog-race-bf860c9124c57b81b68a15fae7ffeaaf"
							linkTitle={`"Virus restrictions lead Norwegian champ to drop Iditarod", Thiessen, M., APNews.com, November 24, 2020, Retrieved November 24, 2020`}
						>
							will not be in attendance
						</RefLink>{' '}
						due to COVID-related travel restrictions.
					</p>
					<p>Click on a checkpoint for more information.</p>
				</>
			),
			mapState: {
				position: {
					center: [-100, 38],
					zoom: 2,
				},
				basemap: 'topo-vector',
				layers: [trail, checkpoints],
			},
		},
	],
	customFeatures: ({ view }) => {
		view.when(() => {
			view.goTo(
				{
					center: [-157, 62],
					zoom: 6,
				},
				{
					duration: 5000,
				}
			);
		});
	},
};

export default model;
