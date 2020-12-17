// inspired by https://community.esri.com/t5/arcgis-living-atlas-blog/automatically-resize-symbols-by-map-scale-in-arcade/ba-p/887307

import React from 'react';
import { ModelSchema } from '../../../types';
import {
	topobathLayer,
	hurricanePositionsSwirls,
	hurricanePositionsDots,
	hurricaneTracks,
	hurricaneTracksHighlight,
	photosLayer,
} from './layers';
import { RefLink } from '../../atoms';
import './popupStyles.scss';

const model: ModelSchema = {
	metadata: {
		name: 'hurricanes',
		theme: 'dark',
		fullWidthMap: true,
	},
	sources: [
		{
			name: 'Recent Hurricanes, Cyclones and Typhoons',
			url:
				'https://www.arcgis.com/home/item.html?id=adfe292a67f8471a9d8230ef93294414',
		},
		{
			name: 'Hurricanes Marco and Laura - NAPSG Crowdsourced Photos',
			url:
				'https://www.arcgis.com/home/item.html?id=b409fcc78ace412da8ec0a9935620b62',
		},
	],
	pages: [
		{
			title: 'Hurricanes',
			content: (
				<>
					<p>
						Despite the sentiment that "its enough already, 2020," we were
						still due for hurricane season.
					</p>
				</>
			),
			mapState: {
				position: {
					center: [-170, 35],
					zoom: 2,
				},
				basemap: 'dark-gray-vector',
				layers: [
					topobathLayer,
					hurricaneTracks,
					hurricaneTracksHighlight,
					hurricanePositionsSwirls,
					hurricanePositionsDots,
				],
			},
		},
		{
			title: 'Damage in the South Eastern US',
			content: (
				<>
					<p>
						To put a more relatable face on the hurricanes, National
						Alliance for Public Safety GIS{' '}
						<RefLink
							theme="dark"
							link="https://www.napsgfoundation.org/"
							linkTitle="napsgfoundation.org/"
						>
							NAPSG
						</RefLink>{' '}
						published a collection of crowdsourced photos
					</p>
				</>
			),
			mapState: {
				position: {
					center: [-92, 31],
					zoom: 5,
				},
				basemap: 'dark-gray-vector',
				layers: [
					topobathLayer,
					hurricaneTracks,
					hurricaneTracksHighlight,
					hurricanePositionsSwirls,
					hurricanePositionsDots,
					photosLayer,
				],
			},
		},
	],
};

export default model;
