import React from 'react';
import TileLayer from 'esri/layers/TileLayer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Legend from 'esri/widgets/Legend';
import Swipe from 'esri/widgets/Swipe';
import * as watchUtils from 'esri/core/watchUtils';
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
			name: '',
			url: '',
		},
	],
	pages: [
		{
			title: 'Explosion in Lebanon',
			content: (
				<>
					<p>
						On 4 August 2020, a large amount of ammonium nitrate stored at
						the port of the city of Beirut, the capital of Lebanon,
						exploded, causing at least 204 deaths, 6,500 injuries, and
						US$15 billion in property damage, and leaving an estimated
						300,000 people homeless.
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
						NASA compared satallite data from before and after the blast,
						analyzing the changes in surface imagery. This map shows the
						results - the greater the change, the redder the result.
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

					// view.when(() => {
					// 	watchUtils.when(legend, 'container', function () {
					// 		const rows = document.querySelectorAll<HTMLElement>(
					// 			`#beirut .esri-legend__layer-row`
					// 		);
					// 		const lastRow = rows[rows.length - 1];
					// 		if (lastRow) {
					// 			lastRow.style.display = 'none';
					// 		}

					// 		if (
					// 			lastRow.querySelector('.esri-legend__layer-cell--info')
					// 				.innerHTML === '<all other values>'
					// 		) {
					// 		}
					// 	});
					// });

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
