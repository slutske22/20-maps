export type MapState = {
	center: number[];
	zoom: number;
	basemap: any;
	layers: any[];
};

export type Pages = {
	title: string;
	content: string;
	mapState: MapState;
};

export type MetaData = {
	name: string;
	theme: string;
};

export type ModelSchema = {
	metadata: MetaData;
	pages: Pages[];
};
