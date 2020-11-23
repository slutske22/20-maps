export const defaultSymbol = {
	type: 'simple-fill', // autocasts as new SimpleFillSymbol()
	outline: {
		// autocasts as new SimpleLineSymbol()
		color: [128, 128, 128, 0.2],
		width: '0.5px',
	},
};

export const animalCountRenderer = {
	type: 'simple',
	symbol: defaultSymbol,
	visualVariables: [
		{
			type: 'color',
			field: 'F9_month_2020_diff_raw',
			normalizationField: 'F3_year_average_9_months',
			legendOptions: {
				title:
					'Reduction in Intake, 2020 as Compared to Average of 2017-2019',
			},
			stops: [
				{
					value: -1,
					color: '#960b13',
					label: '-100%',
				},
				{
					value: 0,
					color: '#fff',
					label: '0%',
				},
				{
					value: 0.5,
					color: '#002d92',
					label: '50%',
				},
			],
		},
	],
};
