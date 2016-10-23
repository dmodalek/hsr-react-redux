import React from 'react';
import ReactDOM from 'react-dom';
import HomepageView from './container/HomepageView';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducer';
import { applyMiddleware, createStore, compose } from 'redux'
import './index.css';

const initialState = {}

let middleware = applyMiddleware(thunk)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
middleware = compose(middleware, devTools)

const store = createStore(rootReducer, initialState, middleware)

ReactDOM.render(
  <Provider store={store}>
    <HomepageView />
  </Provider>,
  document.getElementById('root')
);
