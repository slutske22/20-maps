import MediaContent from 'esri/popup/content/MediaContent';
import ColumnChartMediaInfo from 'esri/popup/content/ColumnChartMediaInfo';
import ChartMediaInfoValue from 'esri/popup/content/support/ChartMediaInfoValue';
// import './popupTemplate.scss';

const fields = [
	'value_2000',
	'value_2001',
	'value_2002',
	'value_2003',
	'value_2004',
	'value_2005',
	'value_2006',
	'value_2007',
	'value_2008',
	'value_2009',
	'value_2010',
	'value_2011',
	'value_2012',
	'value_2013',
	'value_2014',
	'value_2015',
	'value_2016',
	'value_2017',
];

let barChartValue = new ChartMediaInfoValue({
	fields,
	normalizeField: null,
	// tooltipField: '<field name>',
});

// Create the BarChartMediaInfo media type
let columnChart = new ColumnChartMediaInfo({
	value: barChartValue,
});

// Create the Media Content Element
let mediaElement = new MediaContent({
	mediaInfos: [columnChart],
});

export const popupTemplate = {
	content: [
		{
			type: 'text',
			text: `
         <div class="renewables-popup">
            <h2>{SHORT_NAME}</h2>
				<p>Renewable Energy as % of Total Fine Energy Consumption Through the Years<p>
         </div>
      `,
		},
		mediaElement,
		{
			type: 'text',
			text: `
				<div class="renewables-popup__x-axis-labels">
					<span class="label">2000</span>
					<span class="label">2017</span>
				</div>
			`,
		},
	],
	fieldInfos: fields.map((field) => ({
		fieldName: field,
		label: field.split('_')[1],
	})),
};

`
				<div class="renewables-popup__x-axis-labels">
					${fields
						.map((field) => `<div class="label">${field.split('_')[1]}</div>`)
						.join('')}
				</div>
			`;
