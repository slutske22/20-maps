import LineChartMediaInfo from 'esri/popup/content/LineChartMediaInfo';
import ChartMediaInfoValue from 'esri/popup/content/support/ChartMediaInfoValue';
import MediaContent from 'esri/popup/content/MediaContent';

let lineChartValue = new ChartMediaInfoValue({
	fields: [
		'PctUnemployed_CurrentMonth',
		'PctUnemployed_01Month',
		'PctUnemployed_02Month',
		'PctUnemployed_03Month',
		'PctUnemployed_04Month',
		'PctUnemployed_05Month',
		'PctUnemployed_06Month',
		'PctUnemployed_07Month',
		'PctUnemployed_08Month',
		'PctUnemployed_09Month',
		'PctUnemployed_10Month',
		'PctUnemployed_11Month',
		'PctUnemployed_12Month',
		'PctUnemployed_13Month',
	],
	normalizeField: null,
	// tooltipField: '<field name>',
});

let lineChart = new LineChartMediaInfo({
	title: '<b>Count by type</b>',
	caption: 'Per block',
	value: lineChartValue,
});

// Create the MediaContent
let mediaElement = new MediaContent({
	mediaInfos: [lineChart],
});

const popupTemplate = {
	title: '{Cty_NAME}, {ST_ABBREV}',
	content: `
      <div class="covid-popup">
         <div class="case-group">
            <p>Active Cases: <b>{actCases}</b> <span class="small">(Approx)</span></p>
            <p>Total Cases: <b>{totCases}</b></p>
            <p>Total Deaths: <b>{Deaths}</b></p>
            <p><b>{Case100K}</b> cases per 100k persons</p>
            <p><span class="small">2019 Estimated Population: {TOTPOP_CY}</span></p>
         </div>
      </div>`,
	fieldInfos: [
		{
			fieldName: 'actCases',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
		{
			fieldName: 'totCases',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
		{
			fieldName: 'Deaths',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
		{
			fieldName: 'Case100K',
			format: {
				digitSeparator: true,
				places: 2,
			},
		},
		{
			fieldName: 'Deaths',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
		{
			fieldName: 'TOTPOP_CY',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
	],
};

export const unemploymentPopup = {
	content: [
		{
			type: 'media',
			mediaInfos: [
				{
					title: 'Unemployment',
					type: 'line-chart',
					value: {
						fields: [
							'PctUnemployed_CurrentMonth',
							'PctUnemployed_01Month',
							'PctUnemployed_02Month',
							'PctUnemployed_03Month',
							'PctUnemployed_04Month',
							'PctUnemployed_05Month',
							'PctUnemployed_06Month',
							'PctUnemployed_07Month',
							'PctUnemployed_08Month',
							'PctUnemployed_09Month',
							'PctUnemployed_10Month',
							'PctUnemployed_11Month',
							'PctUnemployed_12Month',
							'PctUnemployed_13Month',
						],
						normalizeField: null,
						// tooltipField: '<field name>',
					},
				},
			],
		},
	],
};

export default popupTemplate;
