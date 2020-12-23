import React from 'react';
import { ModelSchema } from '../../../types';
import { energy, graticules } from './layers';
import { RefLink } from '../../atoms';
import Legend from 'esri/widgets/Legend';

const spatialReference = {
	wkt:
		'PROJCS["Equal Earth (world)_2",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Equal_Earth"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",11.0],UNIT["Meter",1.0]]',
};

const model: ModelSchema = {
	metadata: {
		name: 'renewables',
		fullWidthMap: false,
		theme: 'light',
	},
	sources: [
		{
			name:
				'Indicator 7.2.1: Renewable energy share in the total final energy consumption (percent)',
			url:
				'https://www.arcgis.com/home/item.html?id=3cece1f2bb4e49efa22d45bc34076805',
		},
	],
	pages: [
		{
			title: 'Renewable Energy by Percent',
			content: (
				<>
					<p>Some content ehre</p>
				</>
			),
			mapState: {
				position: {
					center: {
						// @ts-ignore
						x: 0,
						y: 0,
						spatialReference,
					},
					zoom: 1,
				},
				layers: [...graticules, energy],
			},
		},
	],
	// customFeatures: ({ view, map }) => {
	// 	view.spatialReference = spatialReference;
	// 	map.spatialReference = spatialReference;
	// },
};

export default model;
