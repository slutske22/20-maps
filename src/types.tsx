import type { ReactElement, ReactNode, Component } from 'react';
import type EsriMap from 'esri/Map';
import type MapView from 'esri/views/MapView';
import type Basemap from 'esri/Basemap';
import type Layer from 'esri/layers/Layer';

export type EsriMapRefTypes = {
	map: EsriMap;
	view: MapView;
};

export type MapState = {
	position: {
		center?: number[];
		zoom?: number;
		extent?: any;
	};
	basemap?: Basemap | string;
	layers: Layer[];
	customBehavior?: ({ map: EsriMap, view: MapView }) => () => void;
};

export type PageTypes = {
	title: string;
	content: any;
	mapState: MapState;
};

export type MetaData = {
	name: string;
	theme: 'light' | 'dark' | 'dark-blue' | 'dark-red';
	fullWidthMap: boolean;
};

export type CustomFeaturesArgs = {
	layers: Layer[];
	map: EsriMap;
	view: MapView;
};

export type ModelSchema = {
	metadata: MetaData;
	sources: {
		name: string;
		url: string;
	}[];
	pages: PageTypes[];
	customFeatures?: any;
	customDOM?: HTMLElement | ReactElement | Component;
};

export type MapProps = {
	metadata: MetaData;
	sources: {
		name: string;
		url: string;
	}[];
	mapState: MapState;
	customFeatures?: (arg: {
		map: EsriMap;
		view: MapView;
		layers?: Layer[];
	}) => any;
	customDOM?: HTMLElement | ReactElement | Component;
};
