import TileLayer from 'esri/layers/TileLayer';
import ElevationLayer from 'esri/layers/ElevationLayer';

export const lunar_true_color = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/WQ9KVmV6xGGMnCiQ/arcgis/rest/services/Moon_Basemap_Tile0to9/MapServer',
	maxScale: 0,
	listMode: 'hide',
});

export const lunar_geology_2020 = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/FF3qnCUixr5w9JQi/arcgis/rest/services/Moon_Geology/MapServer',
	maxScale: 0,
});

export const lunar_ground = new ElevationLayer({
	url:
		'https://tiles.arcgis.com/tiles/WQ9KVmV6xGGMnCiQ/arcgis/rest/services/Moon_Elevation_Surface/ImageServer',
});
