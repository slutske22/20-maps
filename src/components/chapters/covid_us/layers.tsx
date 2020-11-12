import FeatureLayer from 'esri/layers/FeatureLayer';
import * as renderers from './renderers';
import popupTemplate from './popupTemplates';

export const totCases = new FeatureLayer({
	url:
		'https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer',
	outFields: ['*'],
	popupTemplate,
	// @ts-ignore
	renderer: renderers.totCases(),
});

export const Deaths = new FeatureLayer({
	url:
		'https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer',
	outFields: ['*'],
	popupTemplate,
	// @ts-ignore
	renderer: renderers.Deaths(),
});

export const Cases100k = new FeatureLayer({
	url:
		'https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer',
	outFields: ['*'],
	popupTemplate,
	// @ts-ignore
	renderer: renderers.Case100K(),
});
