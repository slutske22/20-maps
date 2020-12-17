export default [
	{
		name: 'None',
		description: 'A No-Op Function.',
		help: '',
		functionType: 0,
		thumbnail: '',
	},
	{
		name: 'Multi-Directional_Hillshade',
		description:
			'This server-side function will apply an on-the-fly process to the input elevation values to generate a multi-directional hillshade. This algorithm computes hillshade from six different directions, where each hillshade is multiplied by a weight and thereafter the sum of all is normalized to produce the final output.',
		help:
			'Raster Function Templates may be activated in ArcMap by loading the service into the map, right clicking on the service in the Table of Contents to select Properties, and selecting the desired function from the Server Functions tab.  For help with invoking raster functions via REST calls, see http://resources.arcgis.com/en/help/rest/apiref/. ',
		functionType: 0,
		thumbnail: '',
	},
	{
		name: 'Grayscale_Hillshade',
		description:
			'This server-side function will apply an on-the-fly process to the input elevation values to generate a single band grayscale hillshade. ',
		help:
			'Raster Function Templates may be activated in ArcMap by loading the service into the map, right clicking on the service in the Table of Contents to select Properties, and selecting the desired function from the Server Functions tab.  For help with invoking raster functions via REST calls, see http://resources.arcgis.com/en/help/rest/apiref/. ',
		functionType: 0,
		thumbnail: '',
	},
	{
		name: 'Slope_Degrees',
		description:
			'This server-side function will apply an on-the-fly process to the input elevation data to generate a service returning slope (in degrees, from 0 to 90). ',
		help:
			'Raster Function Templates may be activated in ArcMap by loading the service into the map, right clicking on the service in the Table of Contents to select Properties, and selecting the desired function from the Server Functions tab.  For help with invoking raster functions via REST calls, see http://resources.arcgis.com/en/help/rest/apiref/. ',
		functionType: 0,
		thumbnail: '',
	},
	{
		name: 'Slope_Degrees_Map',
		description:
			'This server-side function will apply an on-the-fly process to the input elevation data to generate a color visualization of slope, where flat terrain is gray, shallow slopes are yellow, moderate slopes as light orange and steep slopes as red-brown. Slope values are scaled to generate appropriate visualization for each map scale.',
		help:
			'Raster Function Templates may be activated in ArcMap by loading the service into the map, right clicking on the service in the Table of Contents to select Properties, and selecting the desired function from the Processing Templates tab.  For help with invoking raster functions via REST calls, see https://developers.arcgis.com/rest/. ',
		functionType: 0,
		thumbnail: '',
	},
	{
		name: 'Slope_Percent',
		description:
			'This server-side function will apply an on-the-fly process to the input elevation data to generate a service returning slope, measured in percent rise (0 to 1,000 percent). ',
		help:
			'Raster Function Templates may be activated in ArcMap by loading the service into the map, right clicking on the service in the Table of Contents to select Properties, and selecting the desired function from the Server Functions tab.  For help with invoking raster functions via REST calls, see http://resources.arcgis.com/en/help/rest/apiref/. ',
		functionType: 0,
		thumbnail: '',
	},
	{
		name: 'Elevation_Tinted_Hillshade',
		description:
			'This server-side function will apply an on-the-fly process to the input elevation data to generate a tinted hillshade layer. ',
		help:
			'Raster Function Templates may be activated in ArcMap by loading the service into the map, right clicking on the service in the Table of Contents to select Properties, and selecting the desired function from the Server Functions tab.  For help with invoking raster functions via REST calls, see http://resources.arcgis.com/en/help/rest/apiref/. ',
		functionType: 0,
		thumbnail: '',
	},
];
