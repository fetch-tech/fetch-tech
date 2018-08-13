import { createStore, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise-middleware";
import { combineReducers } from "redux";

import articlesReducer from "./ducks/articlesReducer";
import storiesReducer from "./ducks/storiesReducer";
import usersReducer from "./ducks/usersReducer";

/*
 *  This component sets up the store
 *  This is where the reducer will live
 *  The store is responsible for containing important data that will be used by multiple components
 */

const middleware = applyMiddleware(promiseMiddleWare());

const combinedReducers = combineReducers({
  articlesReducer,
  storiesReducer,
  usersReducer
});

const store = createStore(combinedReducers, middleware);

export default store;
