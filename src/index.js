import React from 'react';
import ReactDOM from 'react-dom';
import { setGlobal } from 'reactn'
import './index.css';
import './notifications.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import API from './utils/api';
let api = new API();


setGlobal({
  properties: [],
  users: [],
  reports: [],
  requests: [],
  agents: [],
  subscribers: []
})


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
