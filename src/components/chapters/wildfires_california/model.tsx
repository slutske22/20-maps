import React from 'react';
import Legend from 'esri/widgets/Legend';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import {
	stamenTerrain,
	FIRMSfires,
	mask,
	states,
	smokeImagery,
} from './layers';

const model: ModelSchema = {
	metadata: {
		name: 'wildfires_california',
		fullWidthMap: false,
		theme: 'light',
	},
	sources: [
		{
			name: 'FIRMS Active Fire Points for the California Fires, 2020',
			url:
				'https://www.arcgis.com/home/item.html?id=c5da7b0c3a704141975adec5b9407da6',
		},
		{
			name: 'ESRI World Imagery',
			url:
				'https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9',
		},
	],
	pages: [
		{
			title: 'California Wildfires',
			content: (
				<>
					<p>
						Due to their inability to{' '}
						<RefLink
							theme="light"
							link="https://www.politico.com/states/california/story/2020/08/20/trump-blames-california-for-wildfires-tells-state-you-gotta-clean-your-floors-1311059"
							linkTitle={`"Trump blames California for wildfires, tells state 'you gotta clean your floors'", White, J., Aug 20, 2020, Retrieved Dec 20, 2020 `}
						>
							rake their leaves
						</RefLink>
						, California had another devastating fire season. With over{' '}
						<RefLink
							theme="light"
							link="https://www.nbcnews.com/news/us-news/california-exceeds-4-million-acres-burned-wildfires-2020-n1242078"
							linkTitle={`"California exceeds 4 million acres burned by wildfires in 2020", Stelloh, T., NBC News, Oct 4, 2020, Retrieved Dec 20, 2020`}
						>
							4 million acres
						</RefLink>{' '}
						burned, accounting for
						<RefLink
							theme="light"
							link="https://fas.org/sgp/crs/misc/IF10244.pdf"
							linkTitle={`"Wildfire Statistics, Congressional Research Service, Dec 4, 2020 Retrieved Dec 20, 2020"`}
						>
							almost half
						</RefLink>{' '}
						the acres burned in the U.S. Oregon and Washington accounted
						for another{' '}
						<RefLink
							theme="light"
							link="https://www.cnbc.com/2020/09/18/fires-in-california-oregon-and-washington-data-shows-blazes-getting-worse-.html"
							linkTitle={`"These charts show how wildfires are getting larger, more severe in the U.S.", Newburger, E., CNBC News, Sep 18, 2020, Retrieved Dec 20, 2020`}
						>
							1.2 million acres
						</RefLink>
						.
					</p>
					<p>
						This map shows the areas burned in 2020 as captured by the{' '}
						<RefLink
							theme="light"
							link="https://modis.gsfc.nasa.gov"
							linkTitle={`modis.gsfc.nasa.gov`}
						>
							MODIS
						</RefLink>{' '}
						and{' '}
						<RefLink
							theme="light"
							link="https://ncc.nesdis.noaa.gov/VIIRS/"
							linkTitle={`ncc.nesdis.noaa.gov/VIIRS`}
						>
							VIIRS
						</RefLink>{' '}
						satellite imaging systems.
					</p>
					<p>
						For more detailed maps of each fire complex, check out{' '}
						<RefLink
							theme="light"
							link="https://www.nytimes.com/interactive/2020/us/fires-map-tracker.html"
							linkTitle={`"Fire Map: California, Oregon and Washington", New York Times, Bloch, M., Oct 1, 2020, Retrieved Dec 20, 2020`}
						>
							this great article
						</RefLink>{' '}
						by the New York Times.
					</p>
				</>
			),
			mapState: {
				position: {
					center: [-120, 37],
					zoom: 6,
				},
				basemap: 'satellite',
				layers: [stamenTerrain, FIRMSfires, mask],
			},
		},
		{
			title: 'Satellite Imagery of Smoke',
			content: (
				<>
					<p>
						More widespread than the fires themselves was the resulting
						smoke. Air quality in the western U.S. was{' '}
						<RefLink
							theme="light"
							link="https://www.cnn.com/2020/09/14/weather/wildfire-air-quality-trnd/index.html"
							linkTitle={`"The Western US has the worst air quality in the world, group says", Murphy, P., CNN News, Sep 14, 2020, Retrieved Dec 20, 2020`}
						>
							so bad
						</RefLink>{' '}
						that state and local governments were urging people to stay
						indoors.
					</p>
					<p>
						<RefLink
							theme="light"
							link="https://earth.esa.int/web/guest/missions/esa-operational-eo-missions/sentinel-2"
							linkTitle={`"What is Sentinel-2?", European Space Agency, Retrieved Dec 20, 2020`}
						>
							Sentinel-2
						</RefLink>
						, one of the European Space Agency's land monitoring systems
						comprised of 2 satellites, circles the Earth every 100
						minutes, taking photographs of the planet's surface. Every
						pass captures a 290km wide swath, offset from the previous
						pass, repeating every 10 days.{' '}
					</p>
					<p>
						This map shows passes from September 29, October 1, and
						October 3 (from left to right), capturing smoke over northern
						California on those days. Here, southern California does not
						contain Sentinel-2 imagery from the fires, but rather
						idealized{' '}
						<RefLink
							theme="light"
							link="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9"
							linkTitle={`"World Imagery", ESRI Living Atlas, Retrieved Dec 20, 2020`}
						>
							terrain imagery
						</RefLink>
						. The difference highlights the magnitude of smoke that
						covered the state as a result of the fires.{' '}
					</p>
				</>
			),
			mapState: {
				position: {
					center: [-120, 37],
					zoom: 6,
				},
				basemap: 'satellite',
				layers: [smokeImagery, mask],
			},
		},
	],
	customFeatures: ({ view }) => {
		const query = states.createQuery();
		query.where = "NAME = 'California'";
		states.queryFeatures(query).then(function (result) {
			const geometry = result.features[0].geometry;
			console.log('geometry', geometry);
			mask.geometry = geometry;
			view.goTo(geometry).catch(function (error) {
				if (error.name != 'AbortError') {
					console.error(error);
				}
			});
		});

		var legend = new Legend({
			view: view,
			layerInfos: [
				// @ts-ignore
				{
					layer: FIRMSfires,
				},
			],
		});

		view.ui.add(legend, 'bottom-left');
	},
};

export default model;
