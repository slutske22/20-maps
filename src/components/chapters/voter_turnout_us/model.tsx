import React from 'react';
import { ModelSchema } from '../../../types';
import { RefLink } from '../../atoms';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Basemap from 'esri/Basemap';
import Legend from 'esri/widgets/Legend';
import Feature from 'esri/widgets/Feature';
import { turnoutRenderer } from './renderers';
import popupTemplate from './popupTemplate';

const turnout = new FeatureLayer({
	url:
		'https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/2020_US_General_Election_Voter_Turnout/FeatureServer',
	outFields: ['*'],
	// @ts-ignore
	renderer: turnoutRenderer,
	popupTemplate,
});

const basemap = new Basemap({
	portalItem: {
		id: '228eaa6a4cd34528b443fb71178c8545',
	},
});

const model: ModelSchema = {
	metadata: {
		name: 'voter_turnout_us',
		fullWidthMap: false,
		theme: 'light',
	},
	sources: [
		{
			name: 'US 2020 General Election, Voter Turnout by State',
			url:
				'https://www.arcgis.com/home/item.html?id=e53254fa836746b6bd12cdbaf9d3a94f',
		},
	],
	pages: [
		{
			title: 'Voter Turnout',
			content: (
				<>
					<p>
						Between the government's handling (or mishandling) of the
						pandemic, nationwide riots, and endless controversy
						surrounding President Trump, the 2020 U.S. elections saw{' '}
						<RefLink
							theme="light"
							link="https://www.washingtonpost.com/graphics/2020/elections/voter-turnout/"
							linkTitle={`"2020 turnout is the highest in over a century", Schaul, K., Washington Post, Nov 5 2020, Retrieved Nov 15, 2020`}
						>
							record voter turnout
						</RefLink>
						.{' '}
						<RefLink
							theme="light"
							link="https://www.usatoday.com/story/news/politics/2020/10/30/voting-2020-older-americans-casting-ballots-first-time/3745521001/"
							linkTitle={`"Millions of Americans are voting for the first time this year, and it's not just young people", Hauck, G., USA Today, October 30, 2020 Retrieved November 15, 2020`}
						>
							Younger and first-time voters showed up in large numbers
						</RefLink>
						, contributing to the high numbers. Notable first time voters
						include{' '}
						<RefLink
							theme="light"
							link="https://www.usatoday.com/story/entertainment/celebrities/2020/06/06/snoop-dogg-says-2020-elections-first-time-he-votes/3163823001/"
							linkTitle={`"'I can't stand to see this punk in office': Snoop Dogg on voting for the first time in 2020", All, R., USA Today, June 6, 2020, Retrieved November 15, 2020`}
						>
							Snoop Dogg
						</RefLink>
						,{' '}
						<RefLink
							theme="light"
							link="https://www.eonline.com/news/1202575/selena-gomez-28-reveals-she-just-voted-for-the-first-time"
							linkTitle={`"Selena Gomez, 28, Reveals She Just Voted for the First Time", Schnurr, S., E!, October 27, 2020, Retrieved November 15, 2020`}
						>
							Selena Gomez
						</RefLink>
						,{' '}
						<RefLink
							theme="light"
							link="https://www.cnbc.com/2020/10/12/why-shaquille-oneal-voted-for-the-first-time.html"
							linkTitle={`"Shaq has voted for the first time at age 48", Scipioni, J., October 12, 2020, Retrieved November 15, 2020`}
						>
							Shaq
						</RefLink>
						,{' '}
						<RefLink
							theme="light"
							link="https://www.cnn.com/2020/09/22/us/mike-tyson-will-vote-for-the-first-time-trnd/index.html"
							linkTitle={`"Why this year will be the first time Mike Tyson will vote", Smith, K, CNN, September 22, 2020, Retrieved November 15, 2020`}
						>
							Mike Tyson
						</RefLink>
						,{' '}
						<RefLink
							theme="light"
							link="https://people.com/politics/celebrities-voting-for-the-first-time/?slide=d7335a4c-e5d8-4a69-8418-d2dc66cf2443#d7335a4c-e5d8-4a69-8418-d2dc66cf2443"
							linkTitle={`"Celebrities Voting for the First Time in the U.S. Election", Cho, D., People Magazine, November 3, 2020, Retrieved November 15, 2020`}
						>
							among others
						</RefLink>
						.
					</p>
					<p>Hover over a state for details.</p>
					<div id="voter-turnout-info-div"></div>
				</>
			),
			mapState: {
				// basemap: 'gray-vector',
				basemap,
				layers: [turnout],
				position: {
					center: [-100, 38],
					zoom: 2,
				},
			},
		},
	],
	customFeatures: ({ view, map }) => {
		// add legend
		const legend = new Legend({
			view,
		});

		view.ui.add(legend, 'bottom-right');

		const infoDiv = document.getElementById('voter-turnout-info-div');
		const feature = new Feature({
			container: 'voter-turnout-info-div',
			graphic: {
				popupTemplate,
			},
			map,
			spatialReference: view.spatialReference,
		});

		// add hitTest for popup open on hover
		view.whenLayerView(turnout).then(function (layerView) {
			let highlight;
			// listen for the pointer-move event on the View
			view.on('pointer-move', function (event) {
				// Perform a hitTest on the View
				view.hitTest(event).then(function (event) {
					// Make sure graphic has a popupTemplate
					let results = event.results.filter(function (result) {
						return result.graphic.layer.popupTemplate;
					});
					let result = results[0];

					if (result) {
						if (
							!view.popup.features.length ||
							(view.popup.features.length &&
								view.popup.features[0].attributes.STATE_NAME !==
									result.graphic.attributes.STATE_NAME)
						) {
							highlight && highlight.remove();
							// Update the graphic of the Feature widget
							// on pointer-move with the result
							highlight = layerView.highlight(result.graphic);

							infoDiv.style.display = 'block';
							feature.graphic = result.graphic;
						}
					} else {
						highlight && highlight.remove();
					}
				});
			});
		});
	},
};

export default model;
