import FeatureLayer from 'esri/layers/FeatureLayer';
import TileLayer from 'esri/layers/TileLayer';

export const fireflyLayer = new TileLayer({
	url:
		'https://fly.maptiles.arcgis.com/arcgis/rest/services/World_Imagery_Firefly/MapServer',
});

export const referenceLayer = new TileLayer({
	url:
		'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Reference/MapServer',
});

export const covidLayer = new FeatureLayer({
	url:
		'https://services8.arcgis.com/bc1qjUYAgNrEBXVh/arcgis/rest/services/COVID19_Time_Series_Combined/FeatureServer',
	outFields: ['*'],
	renderer: {
		// @ts-ignore
		type: 'heatmap',
		field: 'Confirmed',
		colorStops: [
			{ ratio: 0, color: 'rgba(255, 255, 255, 0)' },
			{ ratio: 0.06, color: 'rgba(255, 255, 255, 1)' },
			{ ratio: 0.15, color: 'rgba(255, 255, 0, 1)' },
			{ ratio: 0.25, color: 'rgba(255, 140, 0, 1)' },
			{ ratio: 0.55, color: 'rgba(255, 0, 0, 1)' },
		],
		minPixelIntensity: 1,
		maxPixelIntensity: 150000000,
	},
});
