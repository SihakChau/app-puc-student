import { Record } from 'immutable';
import types from '../constants/myAccountType';

const Form = Record({
  data: [],
  error: null,
  loading: false,
});

const initialState = new Form();

export default function myAccountReducer(state = initialState, action) {
  switch (action.type) {
    case types.START_FETCH_PROFILE: {
      return state.set('loading', true).set('data', []);
    }
    case types.FETCH_PROFILE_SUCCESS: {
      return state.set('loading', false).set('data', action.data);
    }
    case types.FETCH_PROFILE_ERROR:{
      return state.set('loading',false).set('error','404')
    }
    
    default:
      return state;
  }
}
