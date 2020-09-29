import React from 'react';
import { hot } from 'react-hot-loader';

import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Intro from './Intro';
import Chapter1 from './Chapters/Chapter1';
import Chapter2 from './Chapters/protests_us/Chapter';

const App = () => (
   <div className="App">
      <GlobalStyles />
      <Header />
      <Intro />
      <Chapter1 />
      <Chapter2 />
   </div>
);

export default hot(module)(App);
