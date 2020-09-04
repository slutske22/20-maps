export const defaultSymbol = {
   type: "simple-fill", // autocasts as new SimpleFillSymbol()
   outline: {
      // autocasts as new SimpleLineSymbol()
      color: [128, 128, 128, 0.2],
      width: "0.5px"
   }
}

export const totCases = (minValue = 0, maxValue) => ({
   type: "simple",
   symbol: defaultSymbol,
   label: "US County",
   visualVariables: [
      {
         type: "color",
         field: "totCases",
         legendOptions: {
            title: "Total cases per US county"
          },
          stops: [
            {
               value: minValue,
               color: "#ebe6df",
               label: "0"
            },
            {
               value: 500,
               color: "#7bccc4",
               label: "500"
            },
            {
               value: 11000,
               color: "#436480",
               label: "11,000"
            },
            {
               value: maxValue,
               color: "#002624",
               label: maxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // format number with commas
            }
         ]
      }
   ]
})



export const totCasesNormalized = (minValue = 0, maxValue) => ({
   type: "simple",
   symbol: defaultSymbol,
   label: "US County",
   visualVariables: [
      {
         type: "color",
         field: "totCases",
         normalizationField: "TOTPOP_CY",
         legendOptions: {
            title: "Total cases per US county"
          },
          stops: [
            {
               value: minValue,
               color: "#ebe6df",
               label: "0"
            },
            {
               // value: 500,
               value: 0.05,
               color: "#7bccc4",
               label: "500"
            },
            {
               // value: 11000,
               value: 0.07,
               color: "#436480",
               label: "11,000"
            },
            {
               value: 0.5,
               color: "#002624",
               label: maxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // format number with commas
            }
         ]
      }
   ]
})



export const Case100K = (minValue = 0, maxValue) => ({
   type: "simple",
   symbol: defaultSymbol,
   label: "US County",
   visualVariables: [
      {
         type: "color",
         field: "Case100K",
         legendOptions: {
            title: "Cases per 100k population per US county"
          },
          stops: [
            {
               value: minValue,
               color: "#ebe6df",
               label: "0"
            },
            {
               value: 1000,
               color: "#436480",
               label: "1,000"
            },
            {
               value: maxValue,
               color: "#002624",
               label: maxValue.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // format number with commas
            }
         ]
      }
   ]
})



export const Deaths = (minValue = 0, maxValue) => ({
   type: "simple",
   symbol: defaultSymbol,
   label: "US County",
   visualVariables: [
      {
         type: "color",
         field: "Deaths",
         normalizationField: "TOTPOP_CY",
         legendOptions: {
            title: "Total deaths per US county"
          },
          stops: [
            {
               value: minValue,
               color: "#fff5e6",
               label: "0"
            },
            {
               value: 1000,
               color: "#a6004e",
               label: "1,000"
            },
            {
               value: maxValue,
               color: "#990b0b",
               label: maxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // format number with commas
            }
         ]
      }
   ]
})