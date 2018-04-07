import { combineReducers } from 'redux';
import nav from './navReducer';
import authReducer from './authReducer';
import testRegistrationReducer from './testRegistrationReducer';
import testTypesReducer from './testTypesReducer';
import myAccountReducer from './myAccountReducer'

const rootReducer = combineReducers({
  nav,
  authReducer,
  testRegistrationReducer,
  testTypesReducer,
  myAccountReducer
});

export default rootReducer;
