import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from "redux";
import {Provider} from "react-redux";
import App from './app/app';
import myReducers from "./reducers/index";
const store = createStore(myReducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
