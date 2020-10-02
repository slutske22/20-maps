import React from 'react';
import type { FunctionComponent } from 'react';

import model from './model';
import ChapterTemplate from '../../molecules/ChapterTemplate';
import Map from './Map';

const Chapter: FunctionComponent<{}> = () => {
	return <ChapterTemplate data={model} map={Map} />;
};

export default Chapter;
