import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../rootReducers';
import { composeEnhancers } from './utils';

const middlewares = [];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

const store = createStore(rootReducer(), initialState, enhancer);

export default store;
