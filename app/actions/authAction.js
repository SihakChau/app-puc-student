import firebase from 'react-native-firebase';
import { NavigationActions } from 'react-navigation';
import types from '../constants/authActionTypes';

function requestLogin() {
  return {
    type: types.REQUEST_LOGIN,
  };
}

export function requestLoginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS,
    data,
  };
}

function requestLoginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    error: message,
  };
}

function requestLogout() {
  return {
    type: types.REQUEST_LOGOUT,
  };
}

function requestLogoutSuccess(data) {
  return {
    type: types.LOGOUT_SUCCESS,
    data,
  };
}

function requestLogoutError(message) {
  return {
    type: types.LOGOUT_FAILURE,
    error: message,
  };
}

export function loginWithEmail(email, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then((response) => {
        dispatch(requestLoginSuccess(response._user));
      })
      .catch((error) => {
        alert(JSON.stringify(error.code));
        dispatch(requestLoginError(error.code));
      });
  };
}

export function logout(navigation) {
  const navigateToLogin = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'loginStack' })],
  });

  return (dispatch) => {
    dispatch(requestLogout());
    firebase
      .auth()
      .signOut()
      .then((response) => {
        dispatch(requestLogoutSuccess(response));
        navigation.dispatch(navigateToLogin);
      })
      .catch((error) => {
        alert(JSON.stringify(error.code));
        dispatch(requestLogoutError(error.code));
      });
  };
}
