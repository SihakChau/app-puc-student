import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';

import { COLORS, ICONS } from '../../modules';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class PaymentComponent extends Component {
  _wings = () => {
    const { form, user, navigation } = this.props;
    this.props.actions.testRegistration(form, navigation, user);
  };
  _pipay = () => {
    const { form, user, navigation } = this.props;
    this.props.actions.testRegistration(form, navigation, user);
  };
  render() {
    const { form } = this.props;
    const admissiondate = moment();
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowBackNoTitle} onPress={() => this.props.navigation.goBack(null)}>
            <SimpleLineIcons style={styles.paddingIcon} name="arrow-left" size={19} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Text style={styles.title}>Payments</Text>
          </View>
        </View>

        <ScrollView style={styles.container}>
          <View style={styles.companyInfo}>
            <Text style={styles.h4}>{form.latinname}</Text>
            <View style={styles.departure}>
              <Text style={styles.departText}>{form.testtype}</Text>
            </View>
            <Text style={styles.memo}>{admissiondate.calendar()}</Text>
          </View>
          <View style={styles.headerSchedule}>
            <Text style={styles.seatText}>Test Payment</Text>
            <View style={styles.fbox} />
            <View style={styles.priceInfo}>
              <Text style={styles.price}>10,000</Text>
              <Text style={styles.subtitle}>Riel</Text>
            </View>
            <View style={styles.bagBooking}>
              <Text style={styles.bagText}>Unpaid</Text>
            </View>
          </View>
          <View style={styles.totalSelect}>
            <Text style={styles.seatSelection}>Pay with:</Text>
            <View style={styles.payments}>
              <TouchableOpacity style={styles.paycard} onPress={this._wings}>
                <Image source={ICONS.WING} resizeMode={'contain'} style={styles.logo} />
                <Text style={styles.paycardText}>Wings</Text>
              </TouchableOpacity>
              <View style={styles.fboxSize} />
              <TouchableOpacity style={styles.paycard} onPress={this._pipay}>
                <Image source={ICONS.PIPAY} resizeMode={'contain'} style={styles.logo} />
                <Text style={styles.paycardText}>Pi Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.scheduleInfo}>
            {/* <View style={styles.departureMemo}>
                            <Text style={styles.departTextMemo}>{fromWhere==null?'':fromWhere.shortcut}</Text>
                            <Text style={styles.departTextSpace}>-</Text>
                            <Text style={styles.departTextMemoStart}>{toWhere==null?'':toWhere.shortcut}</Text>
                        </View>
                        <Text style={styles.memomemo}>{timetravel.format('dddd D MMMM, YYYY h:mm a')}</Text> */}
          </View>
        </ScrollView>
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

  companyInfo: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  departure: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  departText: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
  },
  h4: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 10,
    marginTop: 5,
  },
  textPendding: {
    marginLeft: 5,
    marginRight: 5,
  },
  memo: {
    color: colors.gray,
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
  },
  headerSchedule: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 25,
    padding: 10,
    alignItems: 'center',
  },
  seatText: {
    color: colors.text,
    fontWeight: '700',
  },
  company: {
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  companyName: {
    fontSize: 11,
  },
  fbox: {
    flex: 1,
  },
  operators: {
    backgroundColor: colors.white,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 15,
    alignItems: 'center',
  },
  bagBooking: {
    marginLeft: 8,
    backgroundColor: colors.blue,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 2,
  },
  bagText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '300',
  },
  priceInfo: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '300',
    color: colors.text,
  },
  totalSelect: {
    padding: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F5',
    paddingBottom: 15,
  },
  seatSelection: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
    color: colors.text,
  },
  payments: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fboxSize: {
    width: 10,
  },
  paycard: {
    backgroundColor: '#F9F9FA',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paycardText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  scheduleInfo: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  departTextMemo: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  departTextMemoStart: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  departTextSpace: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.apple,
    width: 20,
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  memomemo: {
    color: colors.gray,
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'center',
  },
  departureMemo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItem: {
    backgroundColor: colors.white,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  cartInfo: {
    flexDirection: 'column',
  },
  cartshortcut: {
    color: colors.gray,
    fontSize: 15,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mtb: {
    marginTop: 5,
    marginBottom: 10,
  },
  duration: {
    color: colors.text,
    fontWeight: '500',
    fontSize: 15,
  },
  carttime: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '800',
  },
  cartfull: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '400',
  },
  seatNo: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  myseatPrice: {
    padding: 10,
    backgroundColor: '#F9F9FA',
    borderRadius: 50,
  },
  myseatNo: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F9F9FA',
    borderRadius: 50,
  },
  myseatNoText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  myPriceText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '800',
  },
  fboxBorder: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 1,
    backgroundColor: '#121212',
  },
  logo: {
    width: 100,
    height: 60,
    alignSelf: 'stretch',
  },
});

export default PaymentComponent;
