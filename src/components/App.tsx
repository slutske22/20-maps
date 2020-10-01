import React from 'react';
import { hot } from 'react-hot-loader';

import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Intro from './Intro';
import Chapter1 from './chapters/Chapter1';
import Chapter2 from './chapters/protests_us/Chapter';
import Chapter3 from './chapters/wildfires_aus/Chapter';

const App = () => (
   <div className="App">
      <GlobalStyles />
      <Header />
      <Intro />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
   </div>
);

export default hot(module)(App);
