import FeatureLayer from 'esri/layers/FeatureLayer';
import TileLayer from 'esri/layers/TileLayer';
import DotDensityRenderer from 'esri/renderers/DotDensityRenderer';
import GroupLayer from 'esri/layers/GroupLayer';

export const grayBase = new TileLayer({
	url:
		'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer',
	listMode: 'hide',
});

export const bordersAndLabels = new FeatureLayer({
	name: 'Borders and Labels',
	url:
		'https://services6.arcgis.com/swIsfiMN39u9wKrT/ArcGIS/rest/services/Italy_COVID19_WFL1/FeatureServer/0',
	outFields: ['*'],
	renderer: {
		// @ts-ignore
		type: 'simple',
		symbol: {
			type: 'simple-fill', // autocasts as new SimpleFillSymbol()
			outline: {
				// autocasts as new SimpleLineSymbol()
				color: [0, 0, 0, 0.3],
				width: '0.25px',
			},
			color: [0, 0, 0, 0],
			label: 'Province',
		},
	},
	popupTemplate: {
		title: '{NAME_1}',
		content: `
          <div class="covid-popup">
             <div class="case-group">
            <p>Total Cases: <b>{Total_Cases}</b></p>
            <p>Confirmed Deaths: <b>{Confirmed_Deaths}</b></p>
            <p>Cases as % of Population: <b>{Infections_Population}</b></p>
             </div>
          </div>`,
		fieldInfos: [
			{
				fieldName: 'Confirmed_Deaths',
				format: {
					digitSeparator: true,
					places: 0,
				},
			},
			{
				fieldName: 'Total_Cases ',
				format: {
					digitSeparator: true,
					places: 0,
				},
			},
		],
	},
	listMode: 'hide',
});

export const provincialPop = new FeatureLayer({
	// @ts-ignore
	name: 'Total Population',
	url:
		'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/COVID19_MAP_of_Italy_WFL1/FeatureServer/3',
	outFields: ['*'],
	renderer: new DotDensityRenderer({
		// @ts-ignore
		referenceDotValue: 1000,
		outline: null,
		legendOptions: {
			unit: 'people',
		},
		attributes: [
			{
				field: 'TotR',
				color: 'lightgrey',
				label: 'Total Population',
			},
		],
	}),
	visible: false,
});

export const provincialLayerPercentOfPop = new FeatureLayer({
	// @ts-ignore
	name: 'Cases as % of Total Population',
	url:
		'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/COVID19_MAP_of_Italy_WFL1/FeatureServer/3',
	outFields: ['*'],
	renderer: new DotDensityRenderer({
		// @ts-ignore
		referenceDotValue: null,
		outline: null,
		legendOptions: {
			unit: '% of popuplation * 100',
		},
		attributes: [
			{
				valueExpression: ' $feature.TotC / $feature.TotR * 10000',
				color: 'orange',
				label: 'Cases as % of Population',
			},
		],
	}),
	visible: false,
});

export const provincialLayerTotalCases = new FeatureLayer({
	// @ts-ignore
	name: 'Total Cases',
	url:
		'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/COVID19_MAP_of_Italy_WFL1/FeatureServer/3',
	outFields: ['*'],
	renderer: new DotDensityRenderer({
		// @ts-ignore
		referenceDotValue: 10,
		outline: null,
		legendOptions: {
			unit: 'people',
		},
		attributes: [
			{
				valueExpression: '$feature.TotC',
				color: 'red',
				label: 'Total Cases',
			},
		],
	}),
});

export const allLayers = new GroupLayer({
	title: 'Covid in Italy',
	visible: true,
	visibilityMode: 'exclusive',
	layers: [
		provincialPop,
		provincialLayerPercentOfPop,
		provincialLayerTotalCases,
	],
});
