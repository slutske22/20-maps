import React from 'react'
import { hot } from 'react-hot-loader'

import Header from './Header'


const App = () => (
   <div className="App">
      <Header />
      <div>This is a react app</div>
   </div>

)

export default hot(module)(App)