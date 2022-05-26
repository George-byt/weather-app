import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from './routers/AppRouters';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvcmdlYnl0IiwiYSI6ImNsM2w0eXdpOTA0N3ozanFndG5ycWxtc2QifQ.fXbjdzbLtgPyDRC1ZJ8Gwg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouters />
    </React.StrictMode>
  </Provider>
);
