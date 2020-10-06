import type { ReactElement, Component } from 'react';
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
	customBehavior?: (...args: any[]) => any;
};

export type PageTypes = {
	title: string;
	content: string | ReactElement;
	mapState: MapState;
};

export type MetaData = {
	name: string;
	theme: string;
	fullWidthMap: boolean;
};

export type CustomFeaturesArgs = {
	layers: Layer[];
	map: EsriMap;
	view: MapView;
};

export type ModelSchema = {
	metadata: MetaData;
	pages: PageTypes[];
	customFeatures?: any;
	customDOM?: HTMLElement | ReactElement | Component;
};

export type MapProps = {
	metadata: MetaData;
	mapState: MapState;
	customFeatures?: any;
};
