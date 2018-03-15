import { Record } from 'immutable'
import authActionTypes from '../constants/authActionTypes'

const Form = Record({
  data: [],
  error: null,
  loading: false,
})

const initialState = new Form()

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActionTypes.REQUEST_LOGIN: {
      return state.set('loading', true).set('data', [])
    }
    case authActionTypes.LOGIN_SUCCESS: {
      return state.set('loading', false).set('data', action.data)
    }
    case authActionTypes.LOGIN_FAILURE: {
      return state.set('loading', false).set('error', action.error)
    }

    case authActionTypes.REQUEST_LOGOUT: {
      return state.set('loading', true)
    }
    case authActionTypes.LOGOUT_SUCCESS: {
      return state.set('loading', false).set('data', [])
    }
    case authActionTypes.LOGOUT_FAILURE: {
      return state.set('loading', false).set('error', action.error)
    }

    default:
      return state
  }
}
