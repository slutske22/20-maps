import Layer from 'esri/layers/Layer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import WebTileLayer from 'esri/layers/WebTileLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import ImageryLayer from 'esri/layers/ImageryLayer';
import TileInfo from 'esri/layers/support/TileInfo';
import MaskLayer from '../../mapcomponents/MaskLayer';
import * as renderers from './renderers';

export const stamenTerrain = new WebTileLayer({
	urlTemplate:
		'https://stamen-tiles-{subDomain}.a.ssl.fastly.net/terrain-background/{level}/{col}/{row}{r}.png',
	subDomains: ['a', 'b', 'c', 'd'],
});

export const FIRMSfires = new FeatureLayer({
	url:
		'https://services7.arcgis.com/WSiUmUhlFx4CtMBB/arcgis/rest/services/FIRMS_Active_Fire_Points_for_the_California_Fires_2020/FeatureServer',
	// @ts-ignore
	renderer: renderers.fireMarkerRenderer,
});

export const MISRImagery = new ImageryLayer({
	url:
		'https://maps.disasters.nasa.gov/ags04/rest/services/ca_fires_202008/misr_2d_imagery_08242020/ImageServer',
});

// export const SC2Sept29 = new MapImageLayer({
// 	url:
// 		'https://maps.disasters.nasa.gov/ags04/rest/services/ca_fires_202008/sentinel2/MapServer/976',
// });

export const SC2Sept29 = new MapImageLayer({
	url:
		'https://maps.disasters.nasa.gov/ags04/rest/services/ca_fires_202008/sentinel2/MapServer/547',
	// sublayers: [
	// 	{
	// 		id: 976,
	// 	},
	// 	{
	// 		id: 948,
	// 	},
	// ],
});

export const SC2Oct1 = new MapImageLayer({
	url:
		'https://maps.disasters.nasa.gov/ags04/rest/services/ca_fires_202008/sentinel2/MapServer/948',
});

export const SC2Oct3 = new MapImageLayer({
	url:
		'https://maps.disasters.nasa.gov/ags04/rest/services/ca_fires_202008/sentinel2/MapServer/925',
});

export const states = new FeatureLayer({
	url:
		'https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/US_StateBoundaries/FeatureServer/0',
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
	color: [255, 255, 255, 1],
});
