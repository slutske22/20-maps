import React from 'react';
import type { FunctionComponent } from 'react';

import model from './model';
import ChapterTemplate from '../../molecules/ChapterTemplate';

const Chapter: FunctionComponent<{}> = () => {
	return <ChapterTemplate data={model} />;
};

export default Chapter;
