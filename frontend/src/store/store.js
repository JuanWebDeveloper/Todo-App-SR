import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { appReducer } from './appReducer';

// Middleware For Asynchronous Requests
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Combination Of Reducers
const reducers = combineReducers({
  state: appReducer,
});

// Store
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
