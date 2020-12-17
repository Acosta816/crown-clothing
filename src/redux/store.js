//we import applyMiddleware to use the redux-logger to basically just log the actions that get dispatched and processed thru the reducers which are junctioned at the root-reducer.
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';// handy for debugging redux
import { persistStore } from 'redux-persist'; //allows our browser to cache our store depending on certain configuration options

import rootReducer from './root-reducer';

//setup middleware. the store is expecting an ARRAY of middleware from redux
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

//create store
//takes 2 arguments: the root reducer and the applyMiddleware method with any comma-seperated middleware that you wanted to add. 
//Here we are simply spreading the inner elements of our "middlewares" array.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };