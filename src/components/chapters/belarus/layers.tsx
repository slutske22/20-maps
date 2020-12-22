import Layer from 'esri/layers/Layer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import TileInfo from 'esri/layers/support/TileInfo';
import MaskLayer from '../../mapcomponents/MaskLayer';

export const conflictLayer = new FeatureLayer({
	url:
		'https://services.arcgis.com/LG9Yn2oFqZi5PnO5/arcgis/rest/services/Armed_Conflict_Location_Event_Data_ACLED/FeatureServer',
	outFields: ['*'],
	definitionExpression: 'Year = 2020',
	listMode: 'hide',
});

export const countries = new FeatureLayer({
	url:
		'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries_(Generalized)/FeatureServer/0',
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
	title: 'Mask',
});
