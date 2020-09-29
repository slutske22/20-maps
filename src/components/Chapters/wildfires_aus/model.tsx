import React from 'react';
import { ModelSchema } from '../../../types';

const model: ModelSchema = {
   metadata: {
      name: 'wildfires_australia',
      theme: 'light',
   },
   pages: [
      {
         title: 'Australia Wildfires',
         content: <>'Some stuff in here'</>,
         mapState: {
            center: [100, 21],
            zoom: 4,
            layers: [],
         },
      },
   ],
};

export default model;
