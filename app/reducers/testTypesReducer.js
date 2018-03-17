import { Record } from 'immutable';
import testTypesActionTypes from '../constants/testTypesActionTypes';

const Form = Record({
  data: [],
  error: null,
  loading: false,
  form: null,
});

const initialState = new Form();

export default function testTypeReducer(state = initialState, action) {
  switch (action.type) {
    case testTypesActionTypes.REQUEST_TEST_TYPES: {
      return state.set('loading', true).set('data', []);
    }
    case testTypesActionTypes.TEST_TYPES_SUCCESS: {
      return state.set('loading', false).set('data', action.data);
    }
    case testTypesActionTypes.TEST_REGISTRATION_FAILURE: {
      return state.set('loading', false).set('error', action.error);
    }
    default:
      return state;
  }
}
