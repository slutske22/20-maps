import React from 'react';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import {
	bordersAndLabels,
	provincialLayerPercentOfPop,
	provincialLayerTotalCases,
	provincialPop,
	grayBase,
	allLayers,
} from './layers';
import Extent from 'esri/geometry/Extent';
import LayersList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';

const model: ModelSchema = {
	metadata: {
		name: 'covid_italy',
		theme: 'dark',
		fullWidthMap: false,
	},
	sources: [
		{
			name: 'COVID Map of Italy',
			url:
				'https://www.arcgis.com/home/item.html?id=9aae48881351444a8d25d65a667b8f20',
		},
		{
			name: 'Jons Hopkins COVID Dashboard',
			url: 'https://coronavirus.jhu.edu/map.html',
		},
	],
	customFeatures: ({ view }) => {
		var layerList = new LayersList({
			view,
			statusIndicatorsVisible: false,
			listItemCreatedFunction: function (e) {
				if ((e.item.title = 'Covid in Italy')) {
					e.item.open = true;
				}
				e.item.title = e.item.layer.name;
			},
		});

		view.ui.add(layerList, 'top-right');

		var legend = new Legend({
			view: view,
			layerInfos: [
				// @ts-ignore
				{
					layer: provincialLayerTotalCases,
					title: 'Total Cases',
				},
				// @ts-ignore
				{
					layer: provincialLayerPercentOfPop,
					title: 'Cases as % of Population',
				},
				// @ts-ignore
				{
					layer: provincialPop,
					title: 'Total Population',
				},
			],
		});

		view.ui.add(legend, 'top-right');
	},
	pages: [
		{
			title: 'COVID in Italy',
			content: (
				<>
					<p>
						Italy was the{' '}
						<RefLink
							theme="dark"
							link="https://www.unionleader.com/news/health/coronavirus-cases-surge-outside-china-italy-is-hardest-hit-in-europe/article_85f9684c-e80c-5923-9994-b4761d470c37.html"
							linkTitle={`"Coronavirus cases surge outside China; Italy is hardest-hit in Europe", Crossley, G., New Hampshire Union Leader, February 24, 2020, Retrieved November 16, 2020`}
						>
							first western country
						</RefLink>{' '}
						to come down with a serious case of Coronavirus. Before Italy,
						most of the world outside of China did not yet consider
						COVID19 a serious threat. We watched as Italy's{' '}
						<RefLink
							theme="dark"
							link="https://www.advisory.com/daily-briefing/2020/03/19/italian-hospitals"
							linkTitle={`"How coronavirus overwhelmed one of Italy's premier hospitals", advisory.com, March 19, 2020, Retrieved November 17, 2020`}
						>
							hospitals became overwhelmed
						</RefLink>{' '}
						with patients in March. New York City quickly{' '}
						<RefLink
							theme="dark"
							link="https://www.newscientist.com/article/2239247-new-york-citys-coronavirus-outbreak-is-already-overwhelming-hospitals/"
							linkTitle={`"New York City’s coronavirus outbreak is already overwhelming hospitals", Arnold C., NewScientist, March 31, 2020, Retrieved November 17, 2020`}
						>
							followed
						</RefLink>
						, along with the rest of the world. Although it originated in
						China, it was Italy that led the rest of the world in the
						plunge into the COVID pandemic.
					</p>
					<p>
						<em className="action">Click the map</em> for regional
						Coronavirus details.
					</p>
				</>
			),
			mapState: {
				position: {
					// extent: new Extent({
					// 	xmax: 2401060.315701193,
					// 	xmin: 270607.4633373271,
					// 	ymax: 5998729.274054984,
					// 	ymin: 4323229.614044366,
					// 	spatialReference: {
					// 		wkid: 102100,
					// 	},
					// }),
					center: [15, 42],
					zoom: 6,
				},
				layers: [grayBase, bordersAndLabels, allLayers],
			},
		},
	],
};

export default model;
