import './popupTemplate.scss'

const popupTemplate = {
	title: '{STATE_NAME}',
	content: `
      <div class="voter-turnout-popup">
         <h3>Turnout Rate: {VEP_Turnout_Rate}</h3>
         <table class="esri-widget__table">
            <tr>
               <td>Population</td> 
               <td>{POPULATION}</td>
            </tr>
            <tr>
               <td>Voting Elgible Population</td>
               <td>{Voting_Eligible_Population__VEP}</td>
            </tr>
            <tr>
               <td>Voting Age Population</td>
               <td>{Voting_Age_Population__VAP_}</td>
            </tr>
            <tr>
               <td>Total Ballots Cast</td>
               <td>{Total_Ballots_Counted__Estimate}</td>
            </tr>
         </table>
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
