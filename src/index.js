import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootApp, document.getElementById('root'));
registerServiceWorker();
