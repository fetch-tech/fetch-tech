import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise-middleware';
import { combineReducers } from 'redux';

import articlesReducer from './ducks/articlesReducer';
import storiesReducer from './ducks/storiesReducer';

/*
 *  This component sets up the store
 *  This is where the reducer will live
 *  The store is responsible for containing important data that will be used by multiple components
 */

 const middleware = applyMiddleware(promiseMiddleWare());

 const combinedReducers = combineReducers({
   articlesReducer,
   storiesReducer
 });

 const store = createStore(combinedReducers, middleware);

 export default store;