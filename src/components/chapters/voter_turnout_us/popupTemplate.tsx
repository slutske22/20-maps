const popupTemplate = {
	title: '{STATE_NAME}',
	content: `
      <div class="voter-turnout-popup">
         <h3>Turnout Rate: {VEP_Turnout_Rate}</h3>
         <p>Population: {POPULATION}</p>
         <p>Voting Elgible Population: {Voting_Eligible_Population__VEP}</p>
         <p>Voting Age Population: {Voting_Age_Population__VAP_}</p>
         <p>Total Ballots Cast: {Total_Ballots_Counted__Estimate}</p>
         <p>Turnout Rate: {VEP_Turnout_Rate}</p>
      </div>`,
	fieldInfos: [
		{
			fieldName: 'POPULATION',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
		{
			fieldName: 'Voting_Eligible_Population__VEP',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
		{
			fieldName: 'Voting_Age_Population__VAP_',
			format: {
				digitSeparator: true,
				places: 0,
			},
		},
		{
			fieldName: 'Total_Ballots_Counted__Estimate',
			format: {
				digitSeparator: true,
				places: 2,
			},
		},
	],
};

export default popupTemplate;
