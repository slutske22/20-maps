import FeatureLayer from 'esri/layers/FeatureLayer';
import * as renderers from './renderers';

export const usAvailability = new FeatureLayer({
	url:
		'https://services9.arcgis.com/LJKafwRzLHEkKeOL/arcgis/rest/services/US_COVID_Vaccines_Allocation_and_Administration_Read_Only/FeatureServer',
	outFields: ['*'],
	maxScale: 9244620,
});

export const seattleProviders = new FeatureLayer({
	url:
		'https://services9.arcgis.com/691gUcz8Lfc8VwnZ/arcgis/rest/services/COVID_Vaccine_Providers/FeatureServer',
	// @ts-ignore
	renderer: renderers.providerRenderer,
});

export const minneapolisProviers = new FeatureLayer({
	url:
		'https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/MDH_COVID19Vaccine_Enrolled_Providers_DEC142020/FeatureServer',
	minScale: 4622330,
	// @ts-ignore
	renderer: renderers.providerRenderer,
});

export const HoustonProviders = new FeatureLayer({
	url:
		'https://services.arcgis.com/su8ic9KbA7PYVxPS/arcgis/rest/services/COVID_VaccineProviders/FeatureServer',
	minScale: 2311170,
	// @ts-ignore
	renderer: renderers.providerRenderer,
});

export const availabilityTypes = [
	{ name: 'Total Doses Allocated', field: 'Total_Doses_Allocated' },
	{ name: 'Total Doses Administered', field: 'Total_Doses_Administered' },
	{ name: 'Pfizer Total Dose Allocation', field: 'Pfizer_Total_Doses' },
	{ name: 'Moderna Total Dose Allocation', field: 'Moderna_Total_Doses' },
	{
		name: 'Pfizer First Dose Total Allocation',
		field: 'Pfizer_Total_First_Dose',
	},
	{
		name: 'Pfizer Second Dose Total Allocation',
		field: 'Pfizer_Total_Second_Dose',
	},
	{
		name: 'Moderna First Dose Total Allocation',
		field: 'Moderna_Total_First_Dose',
	},
	{
		name: 'Moderna Second Dose Total Allocation',
		field: 'Moderna_Total_Second_Dose',
	},
	{
		name: 'Percentage of Population by Total Pfizer Doses Allocated',
		field: 'Perc_Pop_Total_Pfizer_Alloca',
	},
	{
		name: 'Percentage of Population by Total Moderna Doses Allocated',
		field: 'Perc_Pop_Total_Moderna_Alloca',
	},
	{
		name: 'Percentage of Population by Total Doses Allocated',
		field: 'Perc_Pop_Total_Doses_Alloca',
	},
	{
		name: 'Pfizer Total Doses Administered',
		field: 'Pfizer_Total_Administered',
	},
	{
		name: 'Moderna Total Doses Administered',
		field: 'Moderna_Total_Administered',
	},
	{
		name: 'Percentage of Population by Total Pfizer Doses Administered',
		field: 'Perc_Pop_Total_Pfizer_Admin',
	},
	{
		name: 'Percentage of Population by Total Moderna Doses Administered',
		field: 'Perc_Pop_Total_Moderna_Admin',
	},
	{
		name: 'Percentage of Population by Total Doses Administered',
		field: 'Perc_Pop_Total_Admin',
	},
];
