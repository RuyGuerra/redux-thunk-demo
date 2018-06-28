import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../store/reducers/index';

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(rootReducer, enhancer);

export default store;