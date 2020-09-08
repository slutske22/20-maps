import React from 'react'
import { hot } from 'react-hot-loader'

import Header from './Header'
import Intro from './Intro'


const App = () => (
   <div className="App">
      <Header />
      <Intro />
   </div>

)

export default hot(module)(App)