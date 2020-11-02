import React from 'react';
import TileLayer from 'esri/layers/TileLayer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Swipe from 'esri/widgets/Swipe';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';

const blastImagery = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/WOCTeelWa8YfhXRF/arcgis/rest/services/Beirut_Port_05082020/MapServer',
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
		type: 'simple',
		symbols: {
			type: 'picture-marker',
			url:
				'https://arcgis.github.io/arcgis-samples-javascript/sample-data/cat3.png',
			width: 46,
			height: 46,
		},
	},
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
				customBehavior: (mapRef) => {
					const swipe = new Swipe({
						leadingLayers: [],
						trailingLayers: [blastImagery],
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
				basemap: 'dark-gray',
				position: {
					center: [35.51590370237112, 33.891530792835745],
					zoom: 14,
				},
				layers: [buildings, groundZero],
			},
		},
	],
};

export default model;
