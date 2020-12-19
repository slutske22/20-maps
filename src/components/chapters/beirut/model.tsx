import React from 'react';
import TileLayer from 'esri/layers/TileLayer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import './styles.scss';

const blastImagery = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/WOCTeelWa8YfhXRF/arcgis/rest/services/Beirut_Port_05082020/MapServer',
	legendEnabled: false,
});

const darkGreyBasemap = new TileLayer({
	url:
		'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer',
	legendEnabled: false,
});

const buildings = new FeatureLayer({
	url:
		'https://enterprise.spatialstudieslab.org/server/rest/services/Hosted/Beirut_Buildings_View/FeatureServer',
});

const groundZero = new FeatureLayer({
	url:
		'https://services3.arcgis.com/XOPMTBFysfgZfKqL/arcgis/rest/services/Location_of_Explosion/FeatureServer',
	renderer: {
		// @ts-ignore
		type: 'simple', // autocasts as new SimpleRenderer()
		symbol: {
			type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
			size: 6,
			color: 'transparent',
			outline: {
				// autocasts as new SimpleLineSymbol()
				width: 0.1,
				color: 'red',
			},
		},
	},
	legendEnabled: false,
});

const model: ModelSchema = {
	metadata: {
		name: 'beirut',
		theme: 'light',
		fullWidthMap: false,
	},
	sources: [
		{
			name: 'Beirut Port Satellite Imagery',
			url:
				'https://www.arcgis.com/home/item.html?id=14c3d43584864fae86caf72dc806a573',
		},
		{
			name: 'Beirut Buildings',
			url:
				'https://www.arcgis.com/home/item.html?id=d4d43fbe781145d4b11f9eac3f5dc5a1',
		},
		{
			name: 'Beirut Blast Damage per Building',
			url:
				'https://www.arcgis.com/home/item.html?id=f97e3c941e29453db599e3d2fc931f16',
		},
	],
	pages: [
		{
			title: 'Explosion in Lebanon',
			content: (
				<>
					<p>
						On 4 August 2020, a large amount of ammonium nitrate stored at the
						port of the city of Beirut, the capital of Lebanon, exploded,
						causing at least 204 deaths, 6,500 injuries, and US$15 billion in
						property damage, and leaving an estimated 300,000 people homeless.
						This explosion was{' '}
						<RefLink
							theme="light"
							link="https://www.nature.com/articles/d41586-020-02361-x"
							linkTitle={`"Why Beirut’s ammonium nitrate blast was so devastating", Guglielmi, G., nature.com, Aug 10, 2020, Retrieved Dec 18, 2020`}
						>
							one of the largest industrial disasters linked to ammonium nitrate
						</RefLink>
						. Its devastation to Beirut can be seen here via satellite imagery.
					</p>
					<p>
						Drag the swipe handle right and left to see the effects of the
						blast.
					</p>
				</>
			),
			mapState: {
				basemap: 'satellite',
				position: {
					center: [35.51797651297456, 33.90197505204445],
					zoom: 16,
				},
				layers: [blastImagery],
				customBehavior: ({ view }) => {
					const swipe = new Swipe({
						leadingLayers: [],
						trailingLayers: [blastImagery],
						view,
						position: 50,
					});

					view.ui.add(swipe);

					return () => {
						view.ui.remove(swipe);
					};
				},
			},
		},
		{
			title: 'Damage Extent',
			content: (
				<>
					<p>
						<RefLink
							theme="light"
							link="https://www.jpl.nasa.gov/news/news.php?feature=7723"
							linkTitle={`"NASA Maps Beirut Blast Damage", O'Neill, I., Lee, J., jpl.nasa.gov, Aug 7, 2020, Retrieved Dec 18, 2020`}
						>
							NASA compared satallite data
						</RefLink>{' '}
						from before and after the blast, analyzing the changes in surface
						imagery. Compared against a map of{' '}
						<RefLink
							theme="light"
							link="https://www.arcgis.com/home/item.html?id=d4d43fbe781145d4b11f9eac3f5dc5a1"
							linkTitle={`"Beirut Buildings", ArcGIS Online, Aug 21, 2020, Retrieved Dec 18, 2020"`}
						>
							Beirut's buildings
						</RefLink>
						, per-building damage can be quantified. This map shows the results
						- the greater the change, the redder the result.
					</p>
				</>
			),
			mapState: {
				basemap: 'satellite',
				position: {
					center: [35.51590370237112, 33.891530792835745],
					zoom: 14,
				},
				layers: [darkGreyBasemap, buildings, groundZero],
				customBehavior: ({ view }) => {
					const legend = new Legend({
						view,
					});

					view.ui.add(legend, 'bottom-right');

					return () => {
						view.ui.remove(legend);
					};
				},
			},
		},
	],
};

export default model;
