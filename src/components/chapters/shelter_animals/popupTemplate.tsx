import MediaContent from 'esri/popup/content/MediaContent';
import ColumnChartMediaInfo from 'esri/popup/content/ColumnChartMediaInfo';
import ChartMediaInfoValue from 'esri/popup/content/support/ChartMediaInfoValue';
import './popupTemplate.scss';

let barChartValue = new ChartMediaInfoValue({
	fields: ['F3_year_average_9_months', 'F2020_Count'],
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
         <div>
            <h2>{STATE_NAME}</h2>
            <h3>Number of pets admitted to animal shelters in U.S.<h3>
         </div>
      `,
		},
		mediaElement,
	],
	fieldInfos: [
		{
			fieldName: 'F3_year_average_9_months',
			label: '2017 - 2019 Average, Jan - October',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
		{
			fieldName: 'F2020_Count',
			label: '2020 Count, Jan - October',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
	],
};
