import FeatureLayer from 'esri/layers/FeatureLayer';
import ImageryLayer from 'esri/layers/ImageryLayer';
import * as RasterFunction from 'esri/layers/support/RasterFunction';
import * as renderers from './renderers';
import * as popupTemplates from './popupTemplates';
import * as labeling from './labeling';
import rasterFunctions from './rasterFunctions';

export const topobathLayer = new ImageryLayer({
	url:
		'https://utility.arcgis.com/usrsvcs/servers/ad47b1b7d5ea46ffafdc0c75526a1986/rest/services/WorldElevation/TopoBathy/ImageServer',
	opacity: 0.1,
	renderingRule: RasterFunction.fromJSON(rasterFunctions[2]),
});

export const hurricanePositionsSwirls = new FeatureLayer({
	url:
		'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Recent_Hurricanes_v1/FeatureServer/0',
	// @ts-ignore
	renderer: renderers.blueSwirlRenderer,
	outFields: ['*'],
	popupTemplate: popupTemplates.hurricanePopup,
});

export const hurricanePositionsDots = new FeatureLayer({
	url:
		'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Recent_Hurricanes_v1/FeatureServer/0',
	// @ts-ignore
	renderer: renderers.blueDotRenderer,
	definitionExpression:
		'(INTENSITY = 5) OR (INTENSITY = 10) OR (INTENSITY = 15) OR (INTENSITY = 20) OR (INTENSITY = 25) OR (INTENSITY = 30) OR (INTENSITY = 35) OR (INTENSITY = 40) OR (INTENSITY = 45) OR (INTENSITY = 50) OR (INTENSITY = 55) OR (INTENSITY = 60)',
});

export const hurricaneTracks = new FeatureLayer({
	id: 'Hurricane_Recent_4466_1123_2461_5598_3670',
	url:
		'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Recent_Hurricanes_v1/FeatureServer/1',
	title: 'Blue Hatched Track',
	opacity: 0.45,
	// @ts-ignore
	renderer: renderers.blueThatchRenderer,
	// @ts-ignore
	labelingInfo: labeling.blueThatchLabeling,
	outFields: ['*'],
	popupTemplate: popupTemplates.trackPopup,
});

export const hurricaneTracksHighlight = new FeatureLayer({
	id: 'Hurricane_Recent_4466_1123_2461_5598_8316_2112',
	url:
		'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Recent_Hurricanes_v1/FeatureServer/1',
	opacity: 0.14,
	title: 'Light Trans Solid Track',
	// @ts-ignore
	renderer: renderers.whiteGhostLineRenderer,
});

export const photosLayer = new FeatureLayer({
	url:
		'https://services.arcgis.com/0ZRg6WRC7mxSLyKX/arcgis/rest/services/Hurricane_Laura_Crowdsourced_Photos/FeatureServer',
	outFields: ['*'],
	popupTemplate: popupTemplates.photoPopupTemplate,
});

export const lauraWindsLayer = new FeatureLayer({
	url:
		'https://services.arcgis.com/pGfbNJoYypmNq86F/ArcGIS/rest/services/Hurricane_Laura_2020_Actual_Winds/FeatureServer/2',
	opacity: 0.2,
});
