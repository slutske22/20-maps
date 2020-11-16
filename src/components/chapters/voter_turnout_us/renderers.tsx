export const defaultSymbol = {
	type: 'simple-fill', // autocasts as new SimpleFillSymbol()
	outline: {
		// autocasts as new SimpleLineSymbol()
		color: [128, 128, 128, 0.2],
		width: '0.5px',
	},
};

export const turnoutRenderer = {
	type: 'simple',
	symbol: defaultSymbol,
	label: 'US County',
	visualVariables: [
		{
			type: 'color',
			field: 'Total_Ballots_Counted__Estimate',
			normalizationField: 'Voting_Eligible_Population__VEP',
			legendOptions: {
				title: 'Percent of Eligible Voters who Voted',
			},
			stops: [
				{
					value: 0,
					color: '#ebe6df',
					label: '0%',
				},
				{
					value: 0.5,
					color: '#3c82c4',
					label: '50%',
				},
				{
					value: 1,
					color: '#012c52',
					label: '100%',
				},
			],
		},
	],
};
