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

function requestResetPassword() {
  return {
    type: types.REQUEST_RESET_PASSWORD,
  };
}

export function requestResetPasswordSuccess(data) {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
    data,
  };
}

function requestResetPasswordError(message) {
  return {
    type: types.RESET_PASSWORD_FAILURE,
    error: message,
  };
}

function requestConfirmResetPassword() {
  return {
    type: types.REQUEST_CONFIRM_RESET_PASSWORD,
  };
}

export function requestConfirmResetPasswordSuccess(data) {
  return {
    type: types.CONFIRM_RESET_PASSWORD_SUCCESS,
    data,
  };
}

function requestConfirmResetPasswordError(message) {
  return {
    type: types.CONFIRM_RESET_PASSWORD_FAILURE,
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
        dispatch(requestLoginSuccess(response));
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

export function sendPasswordResetEmail(email) {
  const actionCodeSettings = {
    url: `https://puconline-c176c.firebaseio.com?email=${email}`,
    iOS: {
      bundleId: 'com.puconline.apps',
    },
    android: {
      packageName: 'com.puconline.apps',
      installApp: true,
      minimumVersion: '12',
    },
    handleCodeInApp: true,
  };
  return (dispatch) => {
    dispatch(requestLogin());
    firebase
      .auth()
      .sendPasswordResetEmail(email, actionCodeSettings)
      .then((response) => {
        dispatch(requestLoginSuccess(response.user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case errorCode == 'auth/invalid-email':
            alert('Thrown if the email address is not valid..');
            break;
          case errorCode == 'auth/missing-android-pkg-name':
            alert('An Android package name must be provided if the Android app is required to be installed.');
            break;
          case errorCode == 'auth/missing-continue-uri':
            alert('A continue URL must be provided in the request.');
            break;
          case errorCode == 'auth/missing-ios-bundle-id':
            alert('An iOS Bundle ID must be provided if an App Store ID is provided.');
            break;
          case errorCode == 'auth/invalid-continue-uri':
            alert('The continue URL provided in the request is invalid.');
            break;
          case errorCode == 'auth/unauthorized-continue-uri':
            alert('The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.');
            break;
          case errorCode == 'auth/user-not-found':
            alert('Thrown if there is no user corresponding to the email address.');
            break;
          default:
            alert(errorMessage);
        }
        dispatch(requestLoginError(error.code));
      });
  };
}
