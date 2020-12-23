import TileLayer from 'esri/layers/TileLayer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import * as renderers from './renderers';
import * as popupTemplates from './popupTemplates';

export const spatialReference = {
	wkt:
		'PROJCS["Equal Earth (world)_2",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Equal_Earth"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",11.0],UNIT["Meter",1.0]]',
};

export const basemap = new TileLayer({
	url:
		'https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/EqualEarthBasemap/VectorTileServer',
	legendEnabled: false,
});

export const energy = new FeatureLayer({
	url:
		'https://services6.arcgis.com/VqchQRhgtql2vsmO/arcgis/rest/services/Renewable_Energy_Percent_of_Total_Final_Energy_Consumption_Country_Polygons/FeatureServer',
	popupTemplate: popupTemplates.popupTemplate,
});

export const graticules = [
	new FeatureLayer({
		url:
			'https://services.arcgis.com/nGt4QxSblgDfeJn9/arcgis/rest/services/Graticule/FeatureServer/8',
		// @ts-ignore
		renderer: renderers.graticuleRenderer,
		legendEnabled: false,
	}),
	new FeatureLayer({
		url:
			'https://services.arcgis.com/nGt4QxSblgDfeJn9/arcgis/rest/services/Graticule/FeatureServer/3',
		// @ts-ignore
		renderer: renderers.graticuleRenderer,
		legendEnabled: false,
	}),
];
