export const fireMarkerRenderer = {
	type: 'simple', // autocasts as new SimpleRenderer()
	symbol: {
		type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
		color: 'rgba(238,255,14,1)',
		size: '3px',
		outline: {
			color: 'transparent',
			width: 0,
		},
	},
	visualVariables: [
		{
			type: 'color',
			field: 'ACQ_DATE',
			stops: [
				{
					value: new Date('2020-07-24').getTime(),
					color: 'rgba(114,66,0,0.6)',
				},
				{
					value: new Date('2020-08-05').getTime(),
					color: 'rgba(238,255,14,1)',
				},
				{
					value: new Date('2020-08-15').getTime(),
					color: 'rgba(248,165,49,1)',
				},
				{
					value: new Date('2020-09-5').getTime(),
					color: 'rgba(207,0,0,1)',
				},
			],
		},
	],
};
