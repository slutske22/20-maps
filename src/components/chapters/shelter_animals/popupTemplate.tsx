import MediaContent from 'esri/popup/content/MediaContent';
import BarChartMediaInfo from 'esri/popup/content/BarChartMediaInfo';
import ChartMediaInfoValue from 'esri/popup/content/support/ChartMediaInfoValue';

let barChartValue = new ChartMediaInfoValue({
	fields: ['F3_year_average_9_months', 'F2020_Count'],
	normalizeField: null,
	tooltipField: '<field name>',
});

// Create the BarChartMediaInfo media type
let barChart = new BarChartMediaInfo({
	title: '<b>Animals</b>',
	caption: 'Per block',
	value: barChartValue,
});

// Create the Media Content Element
let mediaElement = new MediaContent({
	mediaInfos: [barChart],
});

export const popupTemplate = {
	content: [
		// {
		// 	type: 'text',
		// 	text: `
		// 				<div>
		// 					<h2>{STATE_NAME}</h2>
		// 					<h3>Animal Intake Count<h3>
		// 				</div>
		// 			`,
		// },
		mediaElement,
	],
};
