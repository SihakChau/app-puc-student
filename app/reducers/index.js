import { combineReducers } from 'redux';
import nav from './navReducer';
import authReducer from './authReducer';
import testRegistrationReducer from './testRegistrationReducer';

const rootReducer = combineReducers({
  nav,
  authReducer,
  testRegistrationReducer,
});

export default rootReducer;
