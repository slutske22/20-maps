import React from 'react';
import { ModelSchema } from '../../../types';
import { basemap, energy, graticules } from './layers';
import { RefLink } from '../../atoms';
import Legend from 'esri/widgets/Legend';
import './styles.scss';

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
					<p>
						The very real possibility of{' '}
						<RefLink
							theme="light"
							link="https://www.carbonbrief.org/analysis-why-scientists-think-100-of-global-warming-is-due-to-humans"
							linkTitle={`"Analysis: Why scientists think 100% of global warming is due to humans", Hausfather, Z., carbonbrief.org, Dec 12, 2017, Retrieved Dec 24, 2020`}
						>
							human behavior
						</RefLink>{' '}
						as a large, if not primary contributing factor to global
						warming, combined with the{' '}
						<RefLink
							theme="light"
							link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3866387/"
							linkTitle={`"The future of oil supply", Miller, R., Philos Trans A Math Phys Eng Sci. Jan 13, 2014, Retrieved from ncbi.nlm.nih.gov on Dec 24, 2020`}
						>
							finite nature
						</RefLink>{' '}
						of our other primary fuel sources, requires us to change.
					</p>
					<p>
						The United Nations established the{' '}
						<RefLink
							theme="light"
							link="https://unstats.un.org/sdgs/"
							linkTitle={`"Sustainable Development Goals", unstats.un.org, Retrieved Dec 24, 2020`}
						>
							Sustainable Development Goals (SDG)
						</RefLink>{' '}
						to guide the world's leaders on how to prepare for the future.
						Since 2000,{' '}
						<RefLink
							theme="light"
							link="https://unstats.un.org/sdgs/metadata/files/Metadata-07-02-01.pdf"
							linkTitle={`"Indicator 7.2.1: Renewable energy share in the total final energy consumption", unstats.un.org, Retrieved Dec 24, 2020`}
						>
							Indicator 7.2.1
						</RefLink>{' '}
						of the SDG has been measuring every country's renewable energy
						use as a percentage of its total energy consumption.
					</p>
					<p style={{ flexGrow: 1 }}>
						Click a country to see how much of its energy use has been
						from renewable sources, and how that number has evolved in the
						last 20 years.
					</p>
					<div className="arcgis-map-light">
						<div
							id="energy-legend-container"
							className="esri-component esri-legend esri-widget esri-widget--panel"
						/>
					</div>
				</>
			),
			mapState: {
				position: {
					center: {
						// @ts-ignore
						x: 0,
						y: 0,
					},
					zoom: 1,
				},
				layers: [basemap, ...graticules, energy],
			},
		},
	],
	customFeatures: ({ view }) => {
		const legend = new Legend({
			view,
			container: 'energy-legend-container',
			layerInfos: [
				// @ts-ignore
				{
					layer: energy,
					title: 'Renewables as % of Total Energy Use',
				},
			],
		});

		view.when(() => {
			view.popup.dockEnabled = true;
			view.popup.dockOptions = {
				position: 'bottom-left',
			};
		});
	},
};

export default model;
