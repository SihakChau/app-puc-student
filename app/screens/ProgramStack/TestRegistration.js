import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity, SafeAreaView, StyleSheet, Platform, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { CheckBox } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Modal from 'react-native-modal';

import InputField from '../../components/InputField';
import { TestTypesData } from '../../dummy';
import { COLORS, ICONS } from '../../modules';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class TestRegistration extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      isPickerVisiable: false,
      admissiondate: new Date(),
      datecreate: new Date(),
      datemodified: '',
      dob: '',
      email: '',
      expiredate: '',
      gender: '',
      isPaid: '',
      khname: '',
      latinname: '',
      memo: '',
      mobilephone: '',
      serialid: `S ${moment(moment(), 'YYmmss: A')
        .diff(moment().startOf('days'), 'seconds')
        .toString()}`,
      testresult: '',
      testtype: '',
      uid: user.uid,
      username: '',
    };
    this._handleTestingSubmit = this._handleTestingSubmit.bind(this);
    this._renderTestTypes = this._renderTestTypes.bind(this);
    this._handlePicker = this._handlePicker.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleThis: this._handleTestingSubmit,
    });
  }

  _handleTestingSubmit() {
    const {
      admissiondate,
      datecreate,
      datemodified,
      dob,
      email,
      expiredate,
      gender,
      isPaid,
      khname,
      latinname,
      memo,
      mobilephone,
      serialid,
      testresult,
      testtype,
      uid,
      username,
    } = this.state;

    const params = {
      admissiondate,
      datecreate,
      datemodified,
      dob,
      email,
      expiredate,
      gender,
      isPaid,
      khname,
      latinname,
      memo,
      mobilephone,
      serialid,
      testresult,
      testtype,
      uid,
      username,
    };
    this.props.actions.completedForm(params, this.props.navigation);
  }

  _renderTestTypes() {
    if (TestTypesData !== undefined && TestTypesData.length > 0) {
      return TestTypesData.map((item, index) => <Picker.Item key={index} label={item.title} value={item.title} />);
    }
    return <Picker.Item label="No Data" value="default" />;
  }

  _handlePicker(type) {
    const { isPickerVisiable } = this.state;
    switch (type) {
      case 'test_types':
        this.setState({ isPickerVisiable: !isPickerVisiable });
        break;
      default:
        this.setState({ isPickerVisiable: false });
    }
  }

  render() {
    const { isLoading } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowBackNoTitle} onPress={() => this.props.navigation.goBack(null)}>
            <SimpleLineIcons style={styles.paddingIcon} name="arrow-left" size={19} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Text style={styles.title}>Register Test</Text>
          </View>
          <Modal isVisible={this.state.isPickerVisiable}>
            <View style={{ backgroundColor: 'white', borderRadius: 15, alignItems: 'center' }}>
              <View
                style={{
                  marginBottom: 20,
                }}>
                <Picker
                  style={{ width: 300, backgroundColor: 'white' }}
                  selectedValue={this.state.testtype}
                  mode="dropdown"
                  onValueChange={(type) => this.setState({ testtype: type })}>
                  <Picker.Item label="" value="" />
                  {this._renderTestTypes()}
                </Picker>
                <TouchableOpacity onPress={() => this._handlePicker('test_types')} style={{ marginTop: 20 }}>
                  <Button onPress={() => this._handlePicker('test_types')}>Done</Button>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <KeyboardAwareScrollView style={styles.container}>
          <View style={{ padding: 20, paddingBottom: 30 }}>
            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={[styles.inputStyle]}
              label="Khmer Name: "
              value={this.state.khname}
              onChangeText={(text) => this.setState({ khname: text })}
            />
            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={[styles.inputStyle]}
              label="English Name: "
              value={this.state.latinname}
              onChangeText={(text) => this.setState({ latinname: text })}
            />
            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={[styles.inputStyle]}
              label="Email: "
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Text style={{ color: '#9AA3B7' }}>Date of Birth</Text>
            <DatePicker
              style={{ width: '100%', marginBottom: 20 }}
              date={this.state.dob}
              mode="date"
              placeholder=" "
              format="YYYY-MM-DD"
              minDate="1950-01-01"
              maxDate="2015-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              onDateChange={(date) => {
                this.setState({ dob: date });
              }}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: '#CDD7E0',
                  alignItems: 'flex-start',
                },
              }}
            />
            {/*
              <Text style={{ color: '#9AA3B7' }}>Gender</Text>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                title="Male"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.blue}
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                style={{ backgroundColor: 'transparent' }}
                checked={this.state.gender === 'male'}
                onPress={() => this.setState({ gender: 'male' })}
              />
              <CheckBox
                title="Female"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.blue}
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                style={{ backgroundColor: 'transparent' }}
                checked={this.state.gender === 'female'}
                onPress={() => this.setState({ gender: 'female' })}
              />
            </View>
            */}
            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={[styles.inputStyle]}
              label="Mobile Phone: "
              value={this.state.mobilephone}
              onChangeText={(text) => this.setState({ mobilephone: text })}
            />
            <TouchableOpacity onPress={() => this._handlePicker('test_types')}>
              <Text style={{ color: '#9AA3B7' }}>Test Types</Text>
              <Text style={{ marginTop: 20 }}>{this.state.testtype}</Text>
            </TouchableOpacity>
            <View style={styles.registerButtonWrapper}>
              <Button
                style={styles.registerButton}
                onPress={() => this._handleTestingSubmit()}
                isLoading={isLoading}
                isDisabled={isLoading}
                activeOpacity={0.7}>
                <View>
                  <Text style={styles.registerButtonTitle}>Register</Text>
                </View>
              </Button>

              <Button
                style={[
                  styles.registerButton,
                  {
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    borderColor: colors.blue,
                  },
                ]}
                onPress={() => this.props.navigation.goBack()}
                activeOpacity={0.7}>
                <View>
                  <Text style={[styles.registerButtonTitle, { color: colors.blue }]}>Cancel</Text>
                </View>
              </Button>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const colors = {
  white: '#fff',
  text: '#0f0f0f',
  dark: '#333',
  blue: '#228AE6',
  background: '#F4F6FB',
  border: '#F0F0F5',
  hColor: '#2E3B53',
  gray: '#555',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  groupHeader: {
    marginVertical: 20,
  },
  registerButtonWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    borderWidth: 0,
    marginBottom: 0,
    height: 45,
    flex: 1,
  },
  registerButtonTitle: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputStyle: {
    color: '#484E5D',
    borderBottomWidth: 1,
    borderBottomColor: '#CDD7E0',
    borderRadius: 0,
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowOpacity: 0,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  labelStyle: {
    color: '#9AA3B7',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0,
  },
});

export default TestRegistration;
