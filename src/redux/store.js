import {applyMiddleware, createStore} from 'redux';
import appReducer from './reducer/index.js';

export let store = createStore(appReducer);
