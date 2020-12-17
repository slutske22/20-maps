export const blueSwirlRenderer = {
	type: 'unique-value',
	visualVariables: [
		{
			type: 'size',
			field: null,
			valueExpression:
				'var INTENSITY=$feature.INTENSITY\r\nvar cs=$view.scale\r\n\r\nWhen (cs<=74000000&&cs>=37000000&&INTENSITY>=137,30,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<137&&INTENSITY>112,25,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=112&&INTENSITY>95,20,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=95&&INTENSITY>82,15,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=82&&INTENSITY>63,10,\t\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\ncs<37000000&&cs>=18500000&&INTENSITY>=137,37,\r\ncs<37000000&&cs>=18500000&&INTENSITY<137&&INTENSITY>112,32,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=112&&INTENSITY>95,27,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=95&&INTENSITY>82,22,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=82&&INTENSITY>63,18,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\ncs<18500000&&cs>=9300000&&INTENSITY>=137,65,\r\ncs<18500000&&cs>=9300000&&INTENSITY<137&&INTENSITY>112,55,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=112&&INTENSITY>95,45,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=95&&INTENSITY>82,35,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=82&&INTENSITY>63,25,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\ncs<9300000&&cs>=1200&&INTENSITY>=137,80,\r\ncs<9300000&&cs>=1200&&INTENSITY<137&&INTENSITY>112,65,\r\ncs<9300000&&cs>=1200&&INTENSITY<=112&&INTENSITY>95,55,\r\ncs<9300000&&cs>=1200&&INTENSITY<=95&&INTENSITY>82,45,\r\ncs<9300000&&cs>=1200&&INTENSITY<=82&&INTENSITY>63,35,\r\ncs<9300000&&cs>=1200&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<9300000&&cs>=1200&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\n1)',
			valueExpressionTitle: 'Set the Symbol Size by Map Scale',
			valueUnit: 'unknown',
			minSize: 7.5,
			maxSize: 60,
			minDataValue: 10,
			maxDataValue: 80,
		},
	],
	authoringInfo: {
		visualVariables: [
			{
				type: 'size',
				minSliderValue: 10,
				maxSliderValue: 80,
			},
		],
	},
	valueExpression:
		'Var INTENSITY=$feature.INTENSITY\r\n\r\nWhen(INTENSITY>=137,"Category 5 Hurricane",\r\nINTENSITY<137&&INTENSITY>112, "Category 4 Hurricane",\r\nINTENSITY<=112&&INTENSITY>95, "Category 3 Hurricane",\r\nINTENSITY<=95&&INTENSITY>82,"Category 2 Hurricane",\r\nINTENSITY<=82&&INTENSITY>63, "Category 1 Hurricane",\r\nINTENSITY<=63&&INTENSITY>33, "Tropical Storm",\r\nINTENSITY<=33&&INTENSITY>=0, "Tropical Depression", "NO DATA")\r\n',
	valueExpressionTitle: 'Assign Storm Type (Saffir) by Intensity',
	defaultSymbol: null,
	uniqueValueInfos: [
		{
			value: 'Category 5 Hurricane',
			symbol: {
				type: 'picture-marker',
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				url:
					'https://arcgis-content.maps.arcgis.com/sharing/rest/content/items/f67790e2d65143f1af2edca3bab4c739/data',
				width: 6,
				height: 7.764705882352942,
			},
			label: 'Category 5 Hurricane',
		},
		{
			value: 'Category 4 Hurricane',
			symbol: {
				type: 'picture-marker',
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				url:
					'https://arcgis-content.maps.arcgis.com/sharing/rest/content/items/f67790e2d65143f1af2edca3bab4c739/data',
				width: 6,
				height: 7.764705882352942,
			},
			label: 'Category 4 Hurricane',
		},
		{
			value: 'Category 3 Hurricane',
			symbol: {
				type: 'picture-marker',
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				url:
					'https://arcgis-content.maps.arcgis.com/sharing/rest/content/items/f67790e2d65143f1af2edca3bab4c739/data',
				width: 6,
				height: 7.764705882352942,
			},
			label: 'Category 3 Hurricane',
		},
		{
			value: 'Category 2 Hurricane',
			symbol: {
				type: 'picture-marker',
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				url:
					'https://arcgis-content.maps.arcgis.com/sharing/rest/content/items/f67790e2d65143f1af2edca3bab4c739/data',
				width: 6,
				height: 7.764705882352942,
			},
			label: 'Category 2 Hurricane',
		},
		{
			value: 'Category 1 Hurricane',
			symbol: {
				type: 'picture-marker',
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				url:
					'https://arcgis-content.maps.arcgis.com/sharing/rest/content/items/f67790e2d65143f1af2edca3bab4c739/data',
				width: 6,
				height: 7.764705882352942,
			},
			label: 'Category 1 Hurricane',
		},
		{
			value: 'Tropical Storm',
			symbol: {
				type: 'simple-marker',
				color: null,
				size: 6,
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				outline: {
					color: null,
					width: 0.75,
				},
			},
			label: 'Tropical Storm',
		},
		{
			value: 'Tropical Depression',
			symbol: {
				type: 'simple-marker',
				color: null,
				size: 6,
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				outline: {
					color: null,
					width: 0.75,
				},
			},
			label: 'Tropical Depression',
		},
	],
};

export const blueDotRenderer = {
	visualVariables: [
		{
			type: 'size',
			field: null,
			valueExpression:
				'var INTENSITY=$feature.INTENSITY\r\nvar cs=$view.scale\r\n\r\nWhen (cs<=74000000&&cs>=37000000&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\ncs<37000000&&cs>=18500000&&INTENSITY<=63&&INTENSITY>33,3,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=33&&INTENSITY>=0,2,\r\n\r\ncs<18500000&&cs>=9300000&&INTENSITY<=63&&INTENSITY>33,5,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=33&&INTENSITY>=0,2,\r\n\r\ncs<9300000&&cs>=1200&&INTENSITY<=63&&INTENSITY>33,6,\r\ncs<9300000&&cs>=1200&&INTENSITY<=33&&INTENSITY>=0,3,\r\n\r\n1)',
			valueExpressionTitle: 'Set the Symbol Size by Map Scale',
			valueUnit: 'unknown',
			minSize: 1.5,
			maxSize: 4.5,
			minDataValue: 2,
			maxDataValue: 6,
		},
	],
	authoringInfo: {
		visualVariables: [
			{
				type: 'size',
				minSliderValue: 1,
				maxSliderValue: 6,
			},
		],
	},
	type: 'unique-value',
	valueExpression:
		'Var INTENSITY=$feature.INTENSITY\nVar cs=$view.scale\n\nWhen(INTENSITY>=137,"Category 5 Hurricane",\nINTENSITY<137&&INTENSITY>112, "Category 4 Hurricane",\nINTENSITY<=112&&INTENSITY>95, "Category 3 Hurricane",\nINTENSITY<=95&&INTENSITY>82,"Category 2 Hurricane",\nINTENSITY<=82&&INTENSITY>63, "Category 1 Hurricane",\nINTENSITY<=63&&INTENSITY>33, "Tropical Storm",\nINTENSITY<=33&&INTENSITY>=0, "Tropical Depression", "NO DATA")',
	valueExpressionTitle: 'Assign Storm Type (Saffir) by Intensity',
	defaultSymbol: null,
	uniqueValueInfos: [
		{
			value: 'Tropical Storm',
			label: 'Tropical Storm',
			symbol: {
				color: [43, 212, 212, 255],
				size: 6,
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-marker',
				// style: 'esriSMSCircle',
				outline: {
					color: null,
					width: 0.75,
					// type: 'esriSLS',
					// style: 'esriSLSNull',
				},
			},
		},
		{
			value: 'Tropical Depression',
			label: 'Tropical Depression',
			symbol: {
				color: [43, 212, 212, 255],
				size: 6,
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-marker',
				// style: 'esriSMSCircle',
				outline: {
					color: null,
					width: 0.75,
					// type: 'esriSLS',
					// style: 'esriSLSNull',
				},
			},
		},
	],
};

export const lightEyeOrbRenderer = {
	type: 'unique-value',
	visualVariables: [
		{
			type: 'size',
			field: null,
			valueExpression:
				'var INTENSITY=$feature.INTENSITY\r\nvar cs=$view.scale\r\n\r\nWhen (cs<=74000000&&cs>=37000000&&INTENSITY>=137,45,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<137&&INTENSITY>112,37,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=112&&INTENSITY>95,28,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=95&&INTENSITY>82,25,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=82&&INTENSITY>63,23,\t\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<=74000000&&cs>=37000000&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\ncs<37000000&&cs>=18500000&&INTENSITY>=137,70,\r\ncs<37000000&&cs>=18500000&&INTENSITY<137&&INTENSITY>112,60,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=112&&INTENSITY>95,50,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=95&&INTENSITY>82,40,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=82&&INTENSITY>63,30,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<37000000&&cs>=18500000&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\ncs<18500000&&cs>=9300000&&INTENSITY>=137,120,\r\ncs<18500000&&cs>=9300000&&INTENSITY<137&&INTENSITY>112,100,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=112&&INTENSITY>95,80,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=95&&INTENSITY>82,60,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=82&&INTENSITY>63,40,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<18500000&&cs>=9300000&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\ncs<9300000&&cs>=1200&&INTENSITY>=137,150,\r\ncs<9300000&&cs>=1200&&INTENSITY<137&&INTENSITY>112,140,\r\ncs<9300000&&cs>=1200&&INTENSITY<=112&&INTENSITY>95,110,\r\ncs<9300000&&cs>=1200&&INTENSITY<=95&&INTENSITY>82,100,\r\ncs<9300000&&cs>=1200&&INTENSITY<=82&&INTENSITY>63,90,\r\ncs<9300000&&cs>=1200&&INTENSITY<=63&&INTENSITY>33,0,\r\ncs<9300000&&cs>=1200&&INTENSITY<=33&&INTENSITY>=0,0,\r\n\r\n1)',
			valueExpressionTitle: 'Set the Symbol Size by Map Scale',
			valueUnit: 'unknown',
			minSize: 6,
			maxSize: 90,
			minDataValue: 0,
			maxDataValue: 150,
		},
	],
	authoringInfo: {
		visualVariables: [
			{
				type: 'size',
				minSliderValue: 0,
				maxSliderValue: 150,
			},
		],
	},
	valueExpression:
		'Var INTENSITY=$feature.INTENSITY\r\n\r\nWhen(INTENSITY>=137,"Category 5 Hurricane",\r\nINTENSITY<137&&INTENSITY>112, "Category 4 Hurricane",\r\nINTENSITY<=112&&INTENSITY>95, "Category 3 Hurricane",\r\nINTENSITY<=95&&INTENSITY>82,"Category 2 Hurricane",\r\nINTENSITY<=82&&INTENSITY>63, "Category 1 Hurricane",\r\nINTENSITY<=63&&INTENSITY>33, "Tropical Storm",\r\nINTENSITY<=33&&INTENSITY>=0, "Tropical Depression", "NO DATA")\r\n',
	valueExpressionTitle: 'Assign Storm Type (Saffir) by Intensity',
	defaultSymbol: null,
	uniqueValueInfos: [
		{
			value: 'Category 5 Hurricane',
			symbol: {
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-picture',
				url:
					'https://www.arcgis.com/sharing/rest/content/items/9b3fd377f25a4caf9864a4da316e221c/data',
				width: 6,
				height: 3.882352941176471,
			},
			label: 'Category 5 Hurricane',
		},
		{
			value: 'Category 4 Hurricane',
			symbol: {
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-picture',
				url:
					'https://www.arcgis.com/sharing/rest/content/items/9b3fd377f25a4caf9864a4da316e221c/data',
				width: 6,
				height: 3.882352941176471,
			},
			label: 'Category 4 Hurricane',
		},
		{
			value: 'Category 3 Hurricane',
			symbol: {
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-picture',
				url:
					'https://www.arcgis.com/sharing/rest/content/items/9b3fd377f25a4caf9864a4da316e221c/data',
				width: 6,
				height: 3.882352941176471,
			},
			label: 'Category 3 Hurricane',
		},
		{
			value: 'Category 2 Hurricane',
			symbol: {
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-picture',
				url:
					'https://www.arcgis.com/sharing/rest/content/items/9b3fd377f25a4caf9864a4da316e221c/data',
				width: 6,
				height: 3.882352941176471,
			},
			label: 'Category 2 Hurricane',
		},
		{
			value: 'Category 1 Hurricane',
			symbol: {
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-picture',
				url:
					'https://www.arcgis.com/sharing/rest/content/items/9b3fd377f25a4caf9864a4da316e221c/data',
				width: 6,
				height: 3.882352941176471,
			},
			label: 'Category 1 Hurricane',
		},
		{
			value: 'Tropical Storm',
			symbol: {
				color: null,
				size: 6,
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-marker',
				outline: {
					color: null,
					width: 0.75,
				},
			},
			label: 'Tropical Storm',
		},
		{
			value: 'Tropical Depression',
			symbol: {
				color: null,
				size: 6,
				angle: 0,
				xoffset: 0,
				yoffset: 0,
				type: 'simple-marker',
				outline: {
					color: null,
					width: 0.75,
				},
			},
			label: 'Tropical Depression',
		},
	],
};

export const whiteGhostLineRenderer = {
	defaultSymbol: {
		color: [255, 241, 224, 255],
		width: 0.75,
		type: 'simple-line',
		style: 'short-dot',
	},
	visualVariables: [
		{
			type: 'size',
			field: null,
			valueExpression:
				'var cs=$view.scale\r\n\r\nWhen (cs<=74000000&&cs>=37000000,0.5,\r\ncs<37000000&&cs>=18500000,.75,\r\ncs<18500000&&cs>=9300000,2.5,\r\ncs<9300000&&cs>=1200,2.5,\r\n\r\n1)',
			valueExpressionTitle: 'Red Solid Line Expression',
			valueUnit: 'unknown',
			minSize: 0.75,
			maxSize: 2.25,
			minDataValue: 0.5,
			maxDataValue: 2.5,
		},
	],
	authoringInfo: {
		visualVariables: [
			{
				type: 'size',
				minSliderValue: 0.5,
				maxSliderValue: 2.5,
			},
		],
	},
	type: 'class-breaks',
	field: null,
	valueExpression:
		'var cs=$view.scale\r\n\r\nWhen (cs<=74000000&&cs>=37000000,0.5,\r\ncs<37000000&&cs>=18500000,.75,\r\ncs<18500000&&cs>=9300000,2.5,\r\ncs<9300000&&cs>=1200,2.5,\r\n\r\n1)',
	classBreakInfos: [
		{
			symbol: {
				color: [255, 241, 224, 255],
				width: 0.75,
				type: 'simple-line',
			},
			classMaxValue: 9007199254740991,
		},
	],
};

export const blueThatchRenderer = {
	type: 'class-breaks',
	defaultSymbol: {
		color: [43, 212, 212, 255],
		width: 0.75,
		type: 'simple-line',
		style: 'short-dot',
	},
	visualVariables: [
		{
			type: 'size',
			field: null,
			valueExpression:
				'var cs=$view.scale\r\n\r\nWhen (cs<=74000000&&cs>=37000000,0.4,\r\ncs<37000000&&cs>=18500000,.75,\r\ncs<18500000&&cs>=9300000,1,\r\ncs<9300000&&cs>=1200,1,\r\n\r\n1)',
			valueExpressionTitle: 'Custom',
			valueUnit: 'unknown',
			minSize: 0.75,
			maxSize: 0.75,
			minDataValue: 0.4,
			maxDataValue: 1.5,
		},
	],
	authoringInfo: {
		visualVariables: [
			{
				type: 'size',
				minSliderValue: 0.4,
				maxSliderValue: 1.5,
			},
		],
	},
	field: null,
	valueExpression:
		'var cs=$view.scale\r\n\r\nWhen (cs<=74000000&&cs>=37000000,0.4,\r\ncs<37000000&&cs>=18500000,.75,\r\ncs<18500000&&cs>=9300000,1,\r\ncs<9300000&&cs>=1200,1,\r\n\r\n1)',
	classBreakInfos: [
		{
			symbol: {
				color: [43, 212, 212, 255],
				width: 0.75,
				type: 'simple-line',
				style: 'short-dot',
			},
			// classMaxValue: 9007199254740991,
		},
	],
};
