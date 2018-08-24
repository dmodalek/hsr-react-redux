import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.count;
    case 'DECREMENT':
      return state - action.count;
    default:
      return state;
  }
};

const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => ReactDOM.render(<App store={store} />, document.getElementById('root'));

render();
store.subscribe(render);
