import React from 'react';
import { hot } from 'react-hot-loader';

import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Intro from './Intro';
import Chapter2 from './chapters/protests_us/Chapter';
import Chapter3 from './chapters/wildfires_aus/Chapter';
import Chapter4 from './chapters/arctic_ice/Chapter';

const App = () => (
	<div className="App">
		<GlobalStyles />
		<Header />
		<Intro />
		<Chapter2 />
		<Chapter3 />
		<Chapter4 />
	</div>
);

export default hot(module)(App);
