import FeatureLayer from 'esri/layers/FeatureLayer';
import TileLayer from 'esri/layers/TileLayer';
import * as renderers from './renderers';

export const arcticReference = new TileLayer({
	url:
		'https://services.arcgisonline.com/arcgis/rest/services/Polar/Arctic_Ocean_Reference/MapServer',
	listMode: 'hide',
});

export const seaIceSummer = new FeatureLayer({
	id: 'seaIceSummer',
	url:
		'https://services5.arcgis.com/0cdFOdQ7VcrIdCxr/arcgis/rest/services/Arctic_Sea_Ice_Combo_1978_2019/FeatureServer/0',
	maxScale: 0, // no max,
	outFields: ['*'],
	definitionExpression: 'Rec_Month = 8', // get only August (other option is 9 for September)
	// @ts-ignore
	renderer: renderers.summerIce,
});

export const seaIceWinter = new FeatureLayer({
	id: 'seaIceWinter',
	url:
		'https://services5.arcgis.com/0cdFOdQ7VcrIdCxr/arcgis/rest/services/Arctic_Sea_Ice_Combo_1978_2019/FeatureServer/1',
	maxScale: 0, // no max
	outFields: ['*'],
	definitionExpression: 'Rec_Month = 2', // get only February (other option is 3 for March)
	// @ts-ignore
	renderer: renderers.winterIce,
});

export const graticule_ocean_5deg = new FeatureLayer({
	url:
		'https://services.arcgis.com/nGt4QxSblgDfeJn9/ArcGIS/rest/services/Graticule/FeatureServer/2',
	listMode: 'hide',
});

export const graticule_land_10deg = new FeatureLayer({
	url:
		'https://services.arcgis.com/nGt4QxSblgDfeJn9/ArcGIS/rest/services/Graticule/FeatureServer/9',
	listMode: 'hide',
});

export const graticule = [graticule_ocean_5deg, graticule_land_10deg];
export const iceLayers = [seaIceWinter, seaIceSummer];
