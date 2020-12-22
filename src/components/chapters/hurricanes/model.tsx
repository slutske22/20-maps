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
	lauraWindsLayer,
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
						Like everything else, this year's hurricane season{' '}
						<RefLink
							theme="dark"
							link="https://www.noaa.gov/media-release/record-breaking-atlantic-hurricane-season-draws-to-end"
							linkTitle={`"Record-breaking Atlantic hurricane season draws to an end", Blackwell, J., NOAA, Nov 24, 2020, Retrieved Dec 17, 2020`}
						>
							broke records
						</RefLink>
						. With 30 named storms (top winds of 39 mph or greater), 2020 has
						the most storms on record, surpassing the 28 from 2005, and the
						second-highest number of hurricanes on record. This map shows the
						hurricanes' tracks and recorded intensities as they progressed.
					</p>
				</>
			),
			mapState: {
				position: {
					center: [-151, 17],
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
			title: 'Damage in the Southeastern U.S.',
			content: (
				<>
					<p>
						To put a more relatable face on the hurricanes, National Alliance
						for Public Safety GIS{' '}
						<RefLink
							theme="dark"
							link="https://www.napsgfoundation.org/"
							linkTitle="napsgfoundation.org"
						>
							NAPSG
						</RefLink>{' '}
						published a collection of crowdsourced photos in the southeastern
						U.S. in the wake of hurricanes Marco and Laura. The colored bands
						represent hurricane Laura's wind footprint.
					</p>
					<p>
						Click a purple diamond to see photos of the hurricane damage and
						responses.
					</p>
				</>
			),
			mapState: {
				position: {
					center: [-92, 31],
					zoom: 4,
				},
				basemap: 'dark-gray-vector',
				layers: [
					topobathLayer,
					lauraWindsLayer,
					hurricanePositionsSwirls,
					hurricanePositionsDots,
					hurricaneTracks,
					hurricaneTracksHighlight,
					photosLayer,
				],
				customBehavior: ({ view }) => {
					[
						hurricanePositionsSwirls,
						hurricanePositionsDots,
						hurricaneTracks,
						hurricaneTracksHighlight,
					].forEach((layer) => {
						layer.opacity = 0.2;
						layer.popupEnabled = false;
					});

					view.popup.dockEnabled = true;
					view.popup.dockOptions = {
						position: 'top-right',
					};

					return () => {
						[
							hurricanePositionsSwirls,
							hurricanePositionsDots,
							hurricaneTracks,
							hurricaneTracksHighlight,
						].forEach((layer) => {
							layer.opacity = 1;
							layer.popupEnabled = true;
						});
						view.popup.dockEnabled = false;
					};
				},
			},
		},
	],
};

export default model;
