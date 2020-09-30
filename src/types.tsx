import type { ReactElement } from 'react';

export type MapState = {
	center: number[];
	zoom: number;
	basemap?: any;
	layers: any[];
};

export type Pages = {
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
	pages: Pages[];
	customBehavior?: () => void;
};

export type MapProps = {
	metadata: MetaData;
	mapState: MapState;
	customBehavior?: () => void;
};
