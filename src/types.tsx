import type { ReactElement, Component, Dispatch, SetStateAction } from 'react';
import type EsriMap from 'esri/Map';
import type MapView from 'esri/views/MapView';
import SceneView from 'esri/views/SceneView';
import Camera from 'esri/Camera';
import Extent from 'esri/geometry/Extent';
import type Basemap from 'esri/Basemap';
import type Layer from 'esri/layers/Layer';

export type ViewType = MapView | SceneView;

export type EsriMapRefTypes = {
	map: EsriMap;
	view: ViewType;
};

export type MapState = {
	position: {
		center?: number[];
		zoom?: number;
		extent?: Extent;
		camera?: Camera;
	};
	basemap?: Basemap | string;
	layers: Layer[];
	customBehavior?: ({ map: EsriMap, view: ViewType }) => () => void;
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
	sceneview?: boolean;
	disableSpinnerAfterInitialLoad?: boolean;
};

export type CustomFeaturesArgs = {
	layers?: Layer[];
	map?: EsriMap;
	view?: ViewType;
	pageRefs?: { [key: string]: HTMLElement };
	currentPage?: number;
};

export type ModelSchema = {
	metadata: MetaData;
	sources: {
		name: string;
		url: string;
	}[];
	pages: PageTypes[];
	customFeatures?: any;
	customFeaturesPerPage?: any;
	customMapDOM?: (
		arg: CustomFeaturesArgs
	) => HTMLElement | ReactElement | Component;
	customChapterDOM?: HTMLElement | ReactElement | Component;
};

export type MapProps = {
	metadata: MetaData;
	sources: {
		name: string;
		url: string;
	}[];
	mapState: MapState;
	customFeatures?: (arg: CustomFeaturesArgs) => any;
	customFeaturesPerPage?: (arg: CustomFeaturesArgs) => any;
	customMapDOM?: (
		arg: CustomFeaturesArgs
	) => HTMLElement | ReactElement | Component;
	pageRefs: { [key: string]: HTMLElement };
	currentPage: number;
};
