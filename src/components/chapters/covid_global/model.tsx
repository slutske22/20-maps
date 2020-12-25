import React from 'react';
import TimeSlider from 'esri/widgets/TimeSlider';
import { fireflyLayer, referenceLayer, covidLayer } from './layers';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';

function updateDefintionExpression(timeExtent) {
	const start = toDateString(timeExtent.start);
	const end = toDateString(timeExtent.end);
	covidLayer.definitionExpression = `Date >= DATE '${start}' AND Date <= DATE '${end}'`;
}

function toDateString(date) {
	const y = `${date.getUTCFullYear()}`;
	const m = `${date.getUTCMonth()}`.padStart(2, '0');
	const d = `${date.getUTCDate()}`.padStart(2, '0');
	const h = `${date.getUTCHours()}`.padStart(2, '0');
	const mm = `${date.getUTCMinutes()}`.padStart(2, '0');
	const s = `${date.getUTCSeconds()}`.padStart(2, '0');
	return `${y}-${m}-${d} ${h}:${mm}:${s}`;
}

const model: ModelSchema = {
	metadata: {
		name: 'covid_global',
		theme: 'dark',
		fullWidthMap: false,
		disableSpinnerAfterInitialLoad: true,
	},
	sources: [
		{
			name: 'Covid Global Time Series',
			url:
				'https://www.arcgis.com/home/item.html?id=5a66bbc206e64fbdab055c9d9223a0e5',
		},
	],
	customFeatures: ({ view }) => {
		var timeSlider = new TimeSlider({
			container: 'timeSliderDiv',
			view: view,
			mode: 'time-window',
			fullTimeExtent: {
				start: new Date(2020, 1, 1),
				end: new Date(2020, 11, 1),
			},
			playRate: 3000,
			stops: {
				// @ts-ignore
				interval: {
					value: 1,
					// @ts-ignore
					unit: 'months',
				},
			},
			tickConfigs: [
				{
					mode: 'count',
					values:
						new Date(2020, 11, 31) > new Date()
							? new Date().getMonth() + 1
							: 12,
					labelsVisible: true,
					labelFormatFunction: (value) => {
						const date = new Date(value);
						return date.toLocaleString('default', { month: 'short' });
					},
				},
			],
		});
		updateDefintionExpression(timeSlider.timeExtent);

		view.ui.add(timeSlider, 'bottom-right');

		timeSlider.watch('timeExtent', function (value) {
			updateDefintionExpression(value);
		});
	},
	pages: [
		{
			title: 'Coronavirus Across the Globe',
			content: (
				<>
					<p>
						What started as an{' '}
						<RefLink
							theme="dark"
							link="https://www.livescience.com/china-mystery-pneumonia-is-not-sars.html"
							linkTitle={`"A New, Unidentified Virus Is Causing Pneumonia Outbreak in China, Officials Say", Lanese, N., Jan 7, 2020, Retrieved October 27, 2020 `}
						>
							unknown viral pneumonia
						</RefLink>{' '}
						in Wuhan, China, briefly achieving{' '}
						<RefLink
							theme="dark"
							link="https://www.nbcnews.com/politics/donald-trump/trump-calls-coronavirus-democrats-new-hoax-n1145721"
							linkTitle={`"Trump calls coronavirus Democrats' 'new hoax'", Egan L., NBC News, Feb 28, 2020, Retrieved October 27, 2020`}
						>
							political hoax
						</RefLink>{' '}
						status, quickly became the world's first panedmic in 100
						years.
					</p>
					<p>
						<em className="action">Press the play button</em> in the
						bottom corner to watch how the pandemic spread across the
						globe as the year progressed.
					</p>
				</>
			),
			mapState: {
				layers: [fireflyLayer, covidLayer, referenceLayer],
				position: {
					center: [10, 0],
					zoom: 2,
				},
			},
		},
	],
};

export default model;
