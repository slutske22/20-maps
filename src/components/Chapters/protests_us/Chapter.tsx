import React from 'react';

import model from './model';
import Template from '../../molecules/Chapter';
import Map from './Map';

const Chapter = () => {
	return <Template fullWidthMap data={model} map={<Map />} />;
};

export default Chapter;
