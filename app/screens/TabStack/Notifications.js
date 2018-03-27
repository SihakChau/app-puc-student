import React, { Component } from 'react';
import { Button, Text, View, FlatList, TouchableOpacity, Dimensions, SafeAreaView, TextInput, StyleSheet, Platform, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS, ICONS } from '../../modules';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class NotificationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'newsFeed',
    }
  }

  onTab = (value) => {
    this.setState({ tab: value })
  }

  onList (data){
      if(this.state.tab === 'newsFeed')return(this.onNewFeed(data));
      // if(this.state.tab === 'inbox')this.onInbox(data);
  }

  onNewFeed(data) {
    return (
      <View style={[styles.notificationContainer, data.unread && styles.unread]}>
        <View style={styles.avartarContainer}>
          <Image
            source={require('../../assets/image/avatar.png')}
            style={styles.avartar} />
        </View>
        <View style={styles.notificaion}>
          <View style={styles.notificaionHeader}>
            <Text style={styles.userName}>{data.user}</Text>
            <Text style={styles.dateTime}>{data.dateTime}</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text
              numberOfLines={1}
              style={styles.messageNotif} >{data.message}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const inboxes = [];
    const notifications = [
      {
        user: 'Sihak',
        userImg: '',
        message: 'Nice colors choices. Cool!',
        dateTime: '12.12.12',
        unread: false,
      },
      {
        user: 'Sitha',
        userImg: '',
        message: 'Nice colors choices. Cool!',
        dateTime: '12.12.12',
        unread: false,

      },
      {
        user: 'Vireak',
        userImg: '',
        message: 'Nice colors choices. Cool!',
        dateTime: '12.12.12',
        unread: true,

      }
    ]
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTittle}>Notifications</Text>
        </View>
        <View style={styles.headerTabContainer}>
          <TouchableOpacity
            onPress={() => this.onTab('newsFeed')}
            style={[styles.tabButton, this.state.tab === 'newsFeed' && styles.activeTab]}>
            <Text style={[styles.tabText, this.state.tab === 'newsFeed' && styles.activeText]}>News Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTab('inbox')}
            style={[styles.tabButton, this.state.tab === 'inbox' && styles.activeTab]}>
            <Text style={[styles.tabText, this.state.tab === 'inbox' && styles.activeText]}>Inbox</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.tab === 'newsFeed'?notifications:inboxes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => this.onList(item)}
        />
      </View>
    );
  }
}
const avartar = 50;
const styles = StyleSheet.create({
  messageContainer: {
    marginTop: 5,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  notificaion: {
    flex: 1,
  },
  notificaionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateTime: {
    fontWeight: '700',
    color: COLORS.PLACEHOLDER
  },
  userName: {
    fontSize: 16,
    marginHorizontal: 15,
    fontWeight: '700',
  },
  avartar: {
    width: avartar,
    height: avartar,
    borderRadius: 15,
  },
  avartarContainer: {
    width: avartar,
    height: avartar,
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerTittle: {
    marginVertical: 15,
    fontSize: 15,
  },
  headerTabContainer: {
    paddingTop: 5,
    flexDirection: 'row',
  },
  tabText: {
    fontSize: 16,
  },
  tabButton: {
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  activeTab: {
    borderBottomColor: COLORS.BLUE,
    borderBottomWidth: 2,
  },
  activeText: {
    fontSize: 16,
    color: COLORS.BLUE,
  },
  unread: {
    backgroundColor: '#C7EAFA'
  },
});

export default NotificationComponent;
