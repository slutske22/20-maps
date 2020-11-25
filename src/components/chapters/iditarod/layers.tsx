import Basemap from 'esri/Basemap';
import FeatureLayer from 'esri/layers/FeatureLayer';
import * as renderers from './renderers';
import { popupTemplate } from './popupTemplate';

export const basemap = Basemap.fromId('topo-vector');

export const trail = new FeatureLayer({
	url:
		'https://services.arcgis.com/6dxqrE38upDMg1va/arcgis/rest/services/AKiditarod2Trail/FeatureServer',
});

export const checkpoints = new FeatureLayer({
	url:
		'https://services.arcgis.com/6dxqrE38upDMg1va/arcgis/rest/services/Captions/FeatureServer',
	popupEnabled: true,
	// @ts-ignore
	renderer: renderers.checkpointsRenderer,
	popupTemplate,
});
