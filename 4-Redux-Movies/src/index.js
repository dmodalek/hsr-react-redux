import React from 'react';
import ReactDOM from 'react-dom';
import HomepageView from './container/HomepageView';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';
import { applyMiddleware, createStore, compose } from 'redux';
import './index.css';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HomepageView />
  </Provider>,
  document.getElementById('root')
);
