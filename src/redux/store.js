import {applyMiddleware, createStore, compose} from 'redux';
import appReducer from './reducer/index.js';
import thunk from 'redux-thunk';

export let store = createStore(appReducer, applyMiddleware(thunk));
