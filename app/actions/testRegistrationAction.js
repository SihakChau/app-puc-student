import { Alert } from 'react-native';
import firebase from 'react-native-firebase';
import types from '../constants/testRegistrationActionTypes';
import { NavigationActions } from 'react-navigation';

function startSaveForm() {
  return {
    type: types.START_SAVE_FORM,
  };
}
function completedFormSuccess(profile) {
  return {
    type: types.COMPLETED_FORM_SUCCESS,
    data: profile,
  };
}
function startFetchTest() {
  return {
    type: types.START_FETCH_TEST,
  };
}
function fetchTestSuccess(data) {
  return {
    type: types.FETCH_TEST_SUCCESS,
    data: data,
  };
}

function requestTestRegistration() {
  return {
    type: types.REQUEST_TEST_REGISTRATION,
  };
}

function requestTestRegistrationSuccess(data) {
  return {
    type: types.TEST_REGISTRATION_SUCCESS,
    data,
  };
}

function requestTestRegistrationError(message) {
  return {
    type: types.TEST_REGISTRATION_FAILURE,
    error: message,
  };
}

export function fetchTest() {
  const fetchTestData = [];
  return (dispatch, getState) => {
    const current_user = getState().authReducer.get('data');
    dispatch(startFetchTest());
    firebase
      .firestore()
      .collection('testing')
      .where('uid', '==', current_user.uid)
      .orderBy('admissiondate', 'desc')
      .onSnapshot((snapshots) => {
        snapshots.forEach((doc) => {
          fetchTestData.push({
            key: doc.id,
            doc,
            ...doc.data(),
          });
        });
        dispatch(fetchTestSuccess(fetchTestData));
      });
  };
}

export function completedForm(params, navigation) {
  return (dispatch) => {
    dispatch(startSaveForm());
    dispatch(completedFormSuccess(params));
    navigation.navigate('PaymentScreen');
  };
}

export function testRegistration(params, navigation, user) {
  return (dispatch) => {
    dispatch(requestTestRegistration());
    firebase
      .firestore()
      .collection('testing')
      .add({
        admissiondate: new Date(),
        datecreate: new Date(),
        datemodified: new Date(),
        dob: params.dob,
        email: params.email,
        expiredate: params.expiredate,
        gender: params.gender,
        isPaid: params.isPaid,
        khname: params.khname,
        latinname: params.latinname,
        memo: params.memo,
        mobilephone: params.mobilephone,
        serialid: params.serialid,
        testresult: params.testresult,
        test_type: params.testtype[0],
        uid: user.uid,
        username: params.username,
      })
      .then((response) => {
        dispatch(requestTestRegistrationSuccess(response));
        let navigateAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'ProgramsScreen' })],
        });
        Alert.alert(
          'Successfully',
          'Your information has been sent successfully',
          [{ text: 'OK', onPress: () => navigation.dispatch(navigateAction) }],
          { cancelable: false }
        );
      })
      .catch((error) => {
        dispatch(requestTestRegistrationError(error));
      });
  };
}
