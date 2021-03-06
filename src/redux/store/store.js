import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import newUserReducer from '../reducers/newUserReducer';
import weatherReducer from '../reducers/weatherReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers(
  {
    authReducer: authReducer,
    weatherReducer: weatherReducer,
    newUserReducer: newUserReducer
  }
)

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
