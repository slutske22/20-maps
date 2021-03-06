import Layer from 'esri/layers/Layer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import TileLayer from 'esri/layers/TileLayer';
import TileInfo from 'esri/layers/support/TileInfo';
import MaskLayer from '../../mapcomponents/MaskLayer';
import * as renderers from './renderers';

export const countries = new FeatureLayer({
	url:
		'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries_(Generalized)/FeatureServer/0',
	legendEnabled: false,
});

export const fires_layer = new FeatureLayer({
	url:
		'https://services7.arcgis.com/WSiUmUhlFx4CtMBB/arcgis/rest/services/AUBushfireBurnArea/FeatureServer',
	// @ts-ignore
	renderer: renderers.fireRenderer,
});

export const biodiversity_hotspots = new FeatureLayer({
	url:
		'https://services.arcgis.com/nzS0F0zdNLvs7nc8/arcgis/rest/services/Biodiversity_Hotspots_2016_WFL1/FeatureServer',
});

export const koalas_point_layer = new FeatureLayer({
	url:
		'https://services.arcgis.com/3vStCH7NDoBOZ5zn/arcgis/rest/services/Koala_Records2/FeatureServer',
});

export const koala_HSM_before = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/yCVH8H4hXcgEqeRw/arcgis/rest/services/Koala_HSM_Before/MapServer',
});

export const koala_HSM_after = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/yCVH8H4hXcgEqeRw/arcgis/rest/services/Koala_HSM_After/MapServer',
	legendEnabled: false,
});

// @ts-ignore
const CustomLayer = Layer.createSubclass({
	tileInfo: TileInfo.create({
		size: 512,
		// @ts-ignore
		spatialReference: { wkid: 3857 },
	}),

	constructor: function () {
		this.color = [0, 0, 0, 1];
		this.distance = 2;
	},

	createLayerView: function (view) {
		if (view.type === '2d') {
			return new MaskLayer({
				view: view,
				layer: this,
			});
		}
	},

	properties: {
		color: {},
		geometry: {},
		distance: {},
	},
}); // CustomLayer

export const mask = new CustomLayer({
	color: [0, 0, 0, 0.75],
});
