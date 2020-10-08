import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './utils/arcgis.config.tsx';
import './assets/arcgis-css/themes/light.css';
import './assets/arcgis-css/themes/dark.css';
import './assets/arcgis-css/themes/dark-blue.css';

ReactDOM.render(<App />, document.getElementById('root'));
