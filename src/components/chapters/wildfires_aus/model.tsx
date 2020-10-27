import React from 'react';
import {
	fires_layer,
	mask,
	countries,
	biodiversity_hotspots,
	koalas_point_layer,
	koala_HSM_before,
	koala_HSM_after,
} from './layers';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';

const model: ModelSchema = {
	metadata: {
		name: 'wildfires_australia',
		theme: 'dark-blue',
		fullWidthMap: false,
	},
	sources: [
		{
			name: 'Australia Bushfire Burn Extent 2019 - 2020',
			url:
				'https://www.arcgis.com/home/item.html?id=dc4e10544b4e46c78786d0a5b9f2cea8',
		},
	],
	customFeatures: (args) => {
		const { view } = args;

		const legend = new Legend({
			view,
			layerInfos: [
				// @ts-ignore
				{
					layer: fires_layer,
					title: 'Bushfire Burned Area \n 7-1-2019 to 5-25-2020',
				},
				// @ts-ignore
				{
					layer: koalas_point_layer,
					title: 'Koala Sighting in 2018',
				},
				// @ts-ignore
				{
					layer: koala_HSM_after,
					title: 'Koala Habitat Viability',
				},
				// @ts-ignore
				{
					layer: koala_HSM_before,
					title: 'Koala Habitat Viability',
				},
			],
		});

		view.ui.add(legend, 'top-right');

		const query = countries.createQuery();
		query.where = "ISO = 'AU'";
		countries.queryFeatures(query).then(function (result) {
			const geometry = result.features[0].geometry;
			mask.geometry = geometry;
		});
	},
	pages: [
		{
			title: 'Australia Wildfires',
			content: (
				<>
					<p>
						In January, while Coronavirus was still an unknown virus in
						Wuhan, Australia was on fire. The 2019 - 2020 Australian
						summer saw over{' '}
						<RefLink
							theme="dark"
							link="https://www.9news.com.au/national/australian-bushfires-17-million-hectares-burnt-more-than-previously-thought/b8249781-5c86-4167-b191-b9f628bdd164"
							linkTitle={`"Government set to revise total number of hectares destroyed during bushfire season to 17 million", F. Noble, 9News, Retrieved Oct 26, 2020`}
						>
							18 million hectares
						</RefLink>{' '}
						burned by wildfires. The massive scale of these fires affected
						humans, killing{' '}
						<RefLink
							theme="dark"
							link="https://www.statista.com/statistics/1104739/australia-bushfire-human-fatalities-by-state/#:~:text=Number%20of%20deaths%20due%20to,Australia%202019%2D2020%20by%20state&text=As%20of%20Januray%202020%2C%2025,the%20bushfires%20since%20October%202019."
							linkTitle={`"Number of deaths due to the bushfire season in Australia between October 2019 to February 2020, by state", statista.com, Retrieved October 26, 2020`}
						>
							roughly 50 people
						</RefLink>
						, and destroying several thousand homes. But more than people,
						wildlife suffered the greatest, with over
						{` `}
						<RefLink
							theme="dark"
							link="https://www.aph.gov.au/About_Parliament/Parliamentary_Departments/Parliamentary_Library/pubs/rp/rp1920/Quick_Guides/AustralianBushfires"
							linkTitle={`"2019–20 Australian bushfires—frequently asked questions: a quick guide", L. Richards, N. Brew, 12 March 2020, Retrieved Oct 26, 2020`}
						>
							a <i>billion</i> animals killed
						</RefLink>
						.
					</p>
				</>
			),
			mapState: {
				position: {
					center: [134, -26.9],
					zoom: 4,
				},
				layers: [fires_layer, mask],
				basemap: 'satellite',
			},
		},
		{
			title: 'Koalas in Queensland',
			content: (
				<>
					We can get a sense of the density of Koalas in the Brisbane area
					before the 2019 - 2020 fires. This map layer shows koala
					sightnings reporting by the public in 2018.
				</>
			),
			mapState: {
				position: {
					center: [153.28, -27.99],
					zoom: 10,
				},
				layers: [fires_layer, mask, koalas_point_layer],
				basemap: 'satellite',
			},
		},
		{
			title: 'Habitat Destruction',
			content: (
				<>
					Use the swipe to see how their habitat has changed due to the
					fires.
				</>
			),
			mapState: {
				position: {
					center: [148.9, -37.4],
					zoom: 9,
				},
				layers: [mask, koala_HSM_before, koala_HSM_after],
				basemap: 'satellite',
				customBehavior: (mapRef) => {
					const swipe = new Swipe({
						leadingLayers: [koala_HSM_before],
						trailingLayers: [koala_HSM_after],
						view: mapRef.view,
						position: 50,
					});
					mapRef.view.ui.add(swipe);
					return () => {
						mapRef.view.ui.remove(swipe);
					};
				},
			},
		},
	],
};

export default model;
