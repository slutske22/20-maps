import FeatureLayer from 'esri/layers/FeatureLayer';
import TileLayer from 'esri/layers/TileLayer';
import ElevationLayer from 'esri/layers/ElevationLayer';
import SceneLayer from 'esri/layers/SceneLayer';

export const mars_hypso = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/RS8mqPfEEjgYh6uG/arcgis/rest/services/Mars3Dhypso/MapServer',
});

export const mars_ground = new ElevationLayer({
	url:
		'https://tiles.arcgis.com/tiles/RS8mqPfEEjgYh6uG/arcgis/rest/services/Mars3D_WEL/ImageServer',
});

export const mars_rovers_track_path = new FeatureLayer({
	url:
		'https://services5.arcgis.com/AMh9EzyFGgthLT1q/arcgis/rest/services/track3_Merge/FeatureServer',
});

export const mars_curiosity_track_ath = new FeatureLayer({
	url:
		'https://services5.arcgis.com/AMh9EzyFGgthLT1q/arcgis/rest/services/curiosity_track/FeatureServer',
});

// labels:
export const labelsLargeTerra = new SceneLayer({
	url:
		'https://services.arcgis.com/RS8mqPfEEjgYh6uG/arcgis/rest/services/Mars3DLargeTerra/SceneServer',
});

export const labelsSmallTerra = new SceneLayer({
	url:
		'https://services.arcgis.com/RS8mqPfEEjgYh6uG/arcgis/rest/services/Mars3DSmallTerra/SceneServer',
});

export const labelsExtent = new SceneLayer({
	url:
		'https://services.arcgis.com/RS8mqPfEEjgYh6uG/arcgis/rest/services/Mars3DExtentLabels/SceneServer',
});

export const labels = [labelsExtent, labelsLargeTerra, labelsSmallTerra];
