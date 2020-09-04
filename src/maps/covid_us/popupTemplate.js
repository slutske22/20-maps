const popupTemplate = {
   title: "{Cty_NAME}, {ST_ABBREV}",
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
         fieldName: "actCases",
         format: {
            digitSeparator: true,
            places: 0
         }
      },
      {
         fieldName: "totCases",
         format: {
            digitSeparator: true,
            places: 0
         }
      },
      {
         fieldName: "Deaths",
         format: {
            digitSeparator: true,
            places: 0
         }
      },
      {
         fieldName: "Case100K",
         format: {
            digitSeparator: true,
            places: 2
         }
      },
      {
         fieldName: "Deaths",
         format: {
            digitSeparator: true,
            places: 0
         }
      },
      {
         fieldName: "TOTPOP_CY",
         format: {
            digitSeparator: true,
            places: 0
         }
      },
   ]
}

export default popupTemplate