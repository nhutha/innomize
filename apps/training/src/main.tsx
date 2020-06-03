import React from 'react';
import ReactDOM from 'react-dom';

import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from './app/app';
import myReducers from "./reducers/index";

const store = createStore(myReducers,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
