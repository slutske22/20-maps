import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Chapter from './index';

export default {
	title: 'Chapters/VoterTurnout',
	component: Chapter,
} as Meta;

export const VoterTurnout = () => <div>Some stupid thing</div>;
