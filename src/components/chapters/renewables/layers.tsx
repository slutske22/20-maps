import FeatureLayer from 'esri/layers/FeatureLayer';
import * as renderers from './renderers';

export const energy = new FeatureLayer({
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/Renewable_Energy_Percent_of_Total_Final_Energy_Consumption_Country_Polygons/FeatureServer',
});

export const graticules = [
	new FeatureLayer({
		url:
			'https://services.arcgis.com/nGt4QxSblgDfeJn9/arcgis/rest/services/Graticule/FeatureServer/8',
		// @ts-ignore
		renderer: renderers.graticuleRenderer,
	}),
	new FeatureLayer({
		url:
			'https://services.arcgis.com/nGt4QxSblgDfeJn9/arcgis/rest/services/Graticule/FeatureServer/3',
		// @ts-ignore
		renderer: renderers.graticuleRenderer,
	}),
];
