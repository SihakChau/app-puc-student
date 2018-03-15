import { Record } from 'immutable';
import testRegistrationActionTypes from '../constants/testRegistrationActionTypes';

const Form = Record({
  data: [],
  error: null,
  loading: false,
  form: null,
});

const initialState = new Form();

export default function testRegistrationReducer(state = initialState, action) {
  switch (action.type) {
    case testRegistrationActionTypes.START_FETCH_TEST: {
      return state.set('loading', true).set('data', []);
    }
    case testRegistrationActionTypes.FETCH_TEST_SUCCESS: {
      return state.set('loading', false).set('data', action.data);
    }
    case testRegistrationActionTypes.START_SAVE_FORM: {
      return state.set('loading', true).set('form', null);
    }
    case testRegistrationActionTypes.COMPLETED_FORM_SUCCESS: {
      return state.set('loading', false).set('form', action.data);
    }
    case testRegistrationActionTypes.REQUEST_TEST_REGISTRATION: {
      return state.set('loading', true).set('data', []);
    }
    case testRegistrationActionTypes.TEST_REGISTRATION_SUCCESS: {
      return state.set('loading', false).set('data', action.data);
    }
    case testRegistrationActionTypes.TEST_REGISTRATION_FAILURE: {
      return state.set('loading', false).set('error', action.error);
    }

    default:
      return state;
  }
}
