import { Alert } from 'react-native';
import firebase from 'react-native-firebase';
import types from '../constants/testTypesActionTypes';
import { NavigationActions } from 'react-navigation';

function requestTestTypes() {
  return {
    type: types.REQUEST_TEST_TYPES,
  };
}

export function requestTestTypesSuccess(data) {
  return {
    type: types.TEST_TYPES_SUCCESS,
    data,
  };
}

function requestTestTypesError(message) {
  return {
    type: types.TEST_TYPES_FAILURE,
    error: message,
  };
}

export function fetchTestTypes() {
  return (dispatch) => {
    dispatch(requestTestTypes());
    const testTypesData = [];
    firebase
      .firestore()
      .collection('testType')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach((doc) => {
          testTypesData.push({
            key: doc.id,
            ...doc.data(),
          });
        });
        dispatch(requestTestTypesSuccess(testTypesData));
      });
  };
}
