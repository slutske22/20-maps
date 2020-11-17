import FeatureLayer from 'esri/layers/FeatureLayer';
import * as renderers from './renderers';
import {
	covidPopup,
	unemploymentPopup,
	socialDistancingPopup,
} from './popupTemplates';

export const totCases = new FeatureLayer({
	url:
		'https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer',
	outFields: ['*'],
	popupTemplate: covidPopup,
	// @ts-ignore
	renderer: renderers.totCases(),
});

export const Deaths = new FeatureLayer({
	url:
		'https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer',
	outFields: ['*'],
	popupTemplate: covidPopup,
	// @ts-ignore
	renderer: renderers.Deaths(),
});

export const Cases100k = new FeatureLayer({
	url:
		'https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer',
	outFields: ['*'],
	popupTemplate: covidPopup,
	// @ts-ignore
	renderer: renderers.Case100K(),
});

export const socialDistancingScore = new FeatureLayer({
	url:
		'https://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/Unacast_Latest_Available__Visitation_and_Distance_/FeatureServer',
	outFields: ['*'],
	popupTemplate: socialDistancingPopup,
});

export const unemployment = new FeatureLayer({
	url:
		'https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/BLS_Monthly_Unemployment_Current_14_Months/FeatureServer/2',
	outFields: ['*'],
	// @ts-ignore
	popupTemplate: unemploymentPopup,
});
