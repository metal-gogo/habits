import React from 'react';
import ReactDOM from 'react-dom';

import './dependencies/firebase';

import './styles/main.scss';

import bootstrapHoudini from 'utils/bootstrapHoudini';

import App from './App';
import AppProviders from './AppProviders';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Bootstrap Houdini should register all the Modules, and Properties in the application.
// This is something that we only want to happen once, therefore it is added on the
// application `index.js` file.
bootstrapHoudini();
