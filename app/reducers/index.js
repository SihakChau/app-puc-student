import { combineReducers } from 'redux';
import nav from './nav';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  nav,
  authReducer,
});

export default rootReducer;
