import React from 'react';
import {
	usAvailability,
	availabilityTypes,
	seattleProviders,
	minneapolisProviers,
	HoustonProviders,
} from './layers';
import Legend from 'esri/widgets/Legend';
import * as SmartColorRenderer from 'esri/smartMapping/renderers/color';
import Bookmark from 'esri/webmap/Bookmark';
import Bookmarks from 'esri/widgets/Bookmarks';
import { ModelSchema } from '../../../types';
import { RefLink } from '../../atoms';
import './styles.scss';

const setRenderer = (view, layer, field) => {
	const params = {
		layer,
		view,
		field,
	};
	SmartColorRenderer.createContinuousRenderer(params).then(function (response) {
		layer.renderer = response.renderer;
	});
};

const model: ModelSchema = {
	metadata: {
		name: 'vaccine',
		fullWidthMap: false,
		theme: 'light',
	},
	sources: [
		{
			name: 'US COVID Vaccines Allocation and Administration Public View',
			url:
				'https://www.arcgis.com/home/item.html?id=2de26d49138349939bdb1c219aba57b9',
		},
		{
			name: 'Missouri Approved Providers for Phase I',
			url:
				'https://www.arcgis.com/home/item.html?id=c02a2d6fc89e40d2a70d9f9d93a6a665',
		},
		{
			name: 'Texas DSHS COVID-19 Preliminary Vaccine Providers',
			url:
				'https://www.arcgis.com/home/item.html?id=819d38897d8e41e285a85b65930792f3',
		},
		{
			name: 'Seattle Area COVID Vaccine Providers',
			url:
				'https://www.arcgis.com/home/item.html?id=8ab676c866024881bc34831b9f8cda0f',
		},
	],
	pages: [
		{
			title: 'The Vaccine',
			content: (
				<>
					<p>
						Just days before Christmas, the release of the vaccine was
						announced.
					</p>
				</>
			),
			mapState: {
				position: {
					center: [-95, 37],
					zoom: 3,
				},
				basemap: 'topo-vector',
				layers: [
					usAvailability,
					seattleProviders,
					minneapolisProviers,
					HoustonProviders,
				],
			},
		},
	],
	customMapDOM: ({ view }) => (
		<div className="layer-select">
			<h2>Select a Dataset:</h2>
			<select
				onChange={(e) => {
					const { value } = e.target;
					setRenderer(view, usAvailability, value);
				}}
			>
				{availabilityTypes.map((type) => (
					<option
						key={type.field}
						value={type.field}
						selected={type.field === 'Total_Doses_Allocated'}
					>
						{type.name}
					</option>
				))}
			</select>
		</div>
	),
	customFeatures: ({ view }) => {
		// set up default popuptemplates bc I'm lazy / running out of time
		view.when(() => {
			view.popup.defaultPopupTemplateEnabled = true;
		});

		// set up initial smartmapping renderer for total doses allocated
		usAvailability.when(() => {
			setRenderer(view, usAvailability, 'Total_Doses_Allocated');
		});

		// set up legend
		const legend = new Legend({
			view,
		});

		view.ui.add(legend, 'bottom-left');

		// set up bookmarks
		const bookmarks = new Bookmarks({
			view: view,
			bookmarks: [
				new Bookmark({
					name: 'U.S. View',
					extent: {
						spatialReference: {
							wkid: 102100,
						},
						xmax: 118494.37984564714,
						xmin: -21269197.630567268,
						ymax: 12833726.981639463,
						ymin: -3955513.407138467,
					},
				}),
				new Bookmark({
					name: 'Seattle Vaccine Providers',
					extent: {
						spatialReference: {
							wkid: 102100,
						},
						xmin: -13654585.4946619,
						ymin: 5919436.07862134,
						xmax: -13579591.8880006,
						ymax: 6007249.08954838,
					},
				}),
				new Bookmark({
					name: 'Minneapolis Vaccine Providers',
					extent: {
						spatialReference: {
							wkid: 102100,
						},
						xmin: -10388498.6675,
						ymin: 5607650.4112,
						xmax: -10375338.3142,
						ymax: 5626551.4649,
					},
				}),
				new Bookmark({
					name: 'Houston Vaccine Providers',
					extent: {
						spatialReference: {
							wkid: 4326,
						},
						xmin: -96.78822804,
						ymin: 28.8250664400001,
						xmax: -93.767265,
						ymax: 30.7254960000001,
					},
				}),
			],
		});

		view.ui.add(bookmarks, {
			position: 'top-right',
		});
	},
};

export default model;
