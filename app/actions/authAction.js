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

function requestSignUp() {
  return {
    type: types.REQUEST_SIGNUP,
  };
}

export function requestSignUpSuccess(data) {
  return {
    type: types.SIGNUP_SUCCESS,
    data,
  };
}

function requestSignUpError(message) {
  return {
    type: types.SIGNUP_FAILURE,
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
        dispatch(requestLoginSuccess(response.user));
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

export function signUpWithEmail(email, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then((response) => {
        dispatch(requestLoginSuccess(response.user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case errorCode == 'auth/weak-password':
            alert('The password is too weak.');
            break;
          case errorCode == 'auth/email-already-in-use':
            alert('Email Already used.');
            break;
          case errorCode == 'auth/invalid-email':
            alert('Email is invalid.');
            break;
          case errorCode == 'auth/operation-not-allowed':
            alert('Your email was disabled.');
            break;
          default:
            alert(errorMessage);
        }
        dispatch(requestLoginError(error.code));
      });
  };
}
