import { combineReducers } from 'redux';
import nav from './navReducer';
import authReducer from './authReducer';
import testRegistrationReducer from './testRegistrationReducer';
import testTypesReducer from './testTypesReducer';

const rootReducer = combineReducers({
  nav,
  authReducer,
  testRegistrationReducer,
  testTypesReducer,
});

export default rootReducer;
