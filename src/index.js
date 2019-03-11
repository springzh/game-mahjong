'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import Test from './containers/test'
let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <Test/>
  </Provider>,
  document.getElementById('content')
);