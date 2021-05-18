import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import combineReducers from './Assets/combineReducers';
import { Provider } from 'react-redux';

const store = createStore(combineReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);

