import type { ReactElement } from 'react';
import type EsriMap from 'esri/Map';
import type MapView from 'esri/views/MapView';
import type Basemap from 'esri/Basemap';
import type Layer from 'esri/layers/Layer';

export type EsriMapRefTypes = {
	map: EsriMap;
	view: MapView;
};

export type MapState = {
	center: number[];
	zoom: number;
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
};

export type ModelSchema = {
	metadata: MetaData;
	pages: PageTypes[];
	customFeatures?: (...args: any[]) => any;
};

export type MapProps = {
	metadata: MetaData;
	mapState: MapState;
	customFeatures?: () => void;
};
