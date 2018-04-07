import { Alert } from 'react-native';
import firebase from 'react-native-firebase';
import types from '../constants/myAccountType';
import { NavigationActions } from 'react-navigation';


function startFetchProfile() {
  return {
    type: types.START_FETCH_PROFILE,
  };
}
function fetchProfileSuccess(data) {
  return {
    type: types.FETCH_PROFILE_SUCCESS,
    data: data,
  };
}
function fetchProfileError() {
  return { type: types.FETCH_PROFILE_ERROR }
}


export function fetchProfile() {
  return (dispatch, getState) => {
    const current_user = getState().authReducer.get('data');
    dispatch(startFetchProfile())
    firebase
      .firestore()
      .collection('students')
      .doc(current_user.uid)
      .onSnapshot((snapshots) => {
        if (snapshots.exists) {
          const profile = { id: snapshots.id, ...snapshots.data() }
          dispatch(fetchProfileSuccess(profile))
        }
        else
          dispatch(fetchProfileError())
      });
  };
}
