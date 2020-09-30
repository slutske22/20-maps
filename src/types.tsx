import type { ReactElement } from 'react';

export type MapState = {
	center: number[];
	zoom: number;
	basemap?: any;
	layers: any[];
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
