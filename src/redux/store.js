import {applyMiddleware, createStore, compose} from 'redux';
import appReducer from './reducer/index.js';
import {composeWithDevTools} from 'remote-redux-devtools';
import thunk from 'redux-thunk';

// export let store = createStore(appReducer, composeWithDevTools());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(appReducer, applyMiddleware(thunk));
