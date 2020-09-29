import React from 'react';
import type { FunctionComponent } from 'react';

import model from './model';
import Template from '../../molecules/Chapter';
import Map from './Map';

type ChapterProps = {
	data: any;
	map: FunctionComponent;
};

const Chapter: FunctionComponent<ChapterProps> = () => {
	return <Template fullWidthMap data={model} map={<Map />} />;
};

export default Chapter;
