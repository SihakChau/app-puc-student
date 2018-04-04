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
  onList(data) {
    if (this.state.tab === 'newsFeed') return (this.onNewFeed(data));
    if(this.state.tab === 'inbox') return(this.onInbox(data));
  }
  inboxItem() {
    if (this.state.tab === 'inbox') {
      return (
        <View style={styles.inboxItem}>
          <View style={styles.searchBox}>
            <TextInput placeholder={'search message'} style={styles.searchInput} />   
            <Ionicons name={'ios-search'} style={styles.searchIcon} />
          </View>
          <TouchableOpacity>
          <Ionicons name={'ios-create-outline'} style={styles.newMessageIcon} />
          </TouchableOpacity>
        </View>
      )
    }
  }
  onInbox(data){
    return(
      <TouchableOpacity style={[styles.notificationContainer, data.unread && styles.unread]}>
        <Image
          resizeMode={'contain'}
          source={data.userImg}
          style={styles.inboxAvartar} />
      <View style={styles.notificaion}>
        <View style={styles.notificaionHeader}>
          <Text style={styles.userName}>{data.user}</Text>
          <Text style={styles.dateTime}>{data.dateTime}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text
            numberOfLines={1}
            style={[styles.messageNotif, data.unread && styles.unreadText]} >{data.message}</Text>
        </View>
      </View>
    </TouchableOpacity>
    )
  }
  onNewFeed(data) {
    return (
      <TouchableOpacity style={[styles.notificationContainer, data.unread && styles.unread]}>
        <View style={styles.avartarContainer}>
          <Image
            resizeMode={'contain'}
            source={data.userImg}
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
      </TouchableOpacity>
    )
  }

  render() {
    const inboxes = [
      {
        user: 'Sihak',
        userImg: require('../../assets/image/me.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '29.03.2017',
        seen: false,
        unread: false,
      },
      {
        user: 'Sitha',
        userImg: require('../../assets/image/teacher.jpg'),
        message: 'Its been a while since I dribbbled something. I have a lot to show and I decided to start with this small personal project called Pear. Pear is super simple messaging app which will help you to meet new people in your area. It would be especially useful in college campuses and schools.',
        dateTime: '25.03.2017',
        seen: true,
        unread: false,

      },
      {
        user: 'Vireak',
        userImg: require('../../assets/image/bvireak.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        seen: true,
        unread: false,
        
      },
      {
        user: 'Sihak',
        userImg: require('../../assets/image/me.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '29.03.2017',
        seen: false,
        unread: false,
        
      },
      {
        user: 'Sitha',
        userImg: require('../../assets/image/teacher.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        seen: false,
        unread: true,

      },
      {
        user: 'Vireak',
        userImg: require('../../assets/image/bvireak.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        seen: true,
        unread: true,

      },
      {
        user: 'Sihak',
        userImg: require('../../assets/image/me.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '29.03.2017',
        seen: false,
        unread: false,
        
      },
      {
        user: 'Sitha',
        userImg: require('../../assets/image/teacher.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        seen: false,
        unread: false,
        

      },
      {
        user: 'Vireak',
        userImg: require('../../assets/image/bvireak.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        seen: true,
        unread: false,

      }
    ];
    const notifications = [
      {
        type : 'new-feed',
        user: 'Sihak',
        userImg: require('../../assets/image/me.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '29.03.2017',
        unread: false,
      },
      {
        type : 'new-feed',      
        user: 'Sitha',
        userImg: require('../../assets/image/teacher.jpg'),
        message: 'Its been a while since I dribbbled something. I have a lot to show and I decided to start with this small personal project called Pear. Pear is super simple messaging app which will help you to meet new people in your area. It would be especially useful in college campuses and schools.',
        dateTime: '25.03.2017',
        unread: true,

      },
      {
        type : 'new-feed',        
        user: 'Vireak',
        userImg: require('../../assets/image/bvireak.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        unread: true,

      },
      {
        type : 'new-feed',        
        user: 'Sihak',
        userImg: require('../../assets/image/me.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '29.03.2017',
        unread: false,
      },
      {
        type : 'new-feed',        
        user: 'Sitha',
        userImg: require('../../assets/image/teacher.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        unread: true,

      },
      {
        type : 'new-feed',      
        user: 'Vireak',
        userImg: require('../../assets/image/bvireak.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        unread: true,

      },
      {
        type : 'new-feed',        
        user: 'Sihak',
        userImg: require('../../assets/image/me.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '29.03.2017',
        unread: false,
      },
      {
        type : 'new-feed',        
        user: 'Sitha',
        userImg: require('../../assets/image/teacher.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
        unread: false,

      },
      {
        type : 'new-feed',        
        user: 'Vireak',
        userImg: require('../../assets/image/bvireak.jpg'),
        message: 'Nice colors choices. Cool!',
        dateTime: '25.03.2017',
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
        {this.inboxItem()}
        <FlatList
          style={{ flex: 1 }}
          data={this.state.tab === 'newsFeed' ? notifications : inboxes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => this.onList(item)}
        />
      </View>
    );
  }
}
const avartar = 35;
const styles = StyleSheet.create({
  inboxItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  searchInput: {
    marginRight: 15,
    fontSize: 12,
    backgroundColor: '#F6F7F9',
    paddingVertical: 6,
    paddingLeft: 15,
    width: 250,
    borderRadius: 10,
  },
  searchIcon: {
    position: 'absolute', 
    right :15,
    fontSize: 18,
    marginRight: 10,
    color: '#C3C7CC',
  },
  newMessageIcon: {
    fontSize: 32,
    color: COLORS.BLUE,
  },
  notificaion: {
    flex: 1,
    margin:5,
  },
  notificaionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  messageContainer:{
    marginLeft:10,
  },
  messageNotif:{
    marginTop:5,
    color: '#333',
    fontSize: 12,
    fontWeight :'300',
  },
  unreadText:{
    fontWeight :'600',
  },
  dateTime: {
    fontSize: 13,
    fontWeight: '400',
    color: '#545454'
  },
  
  userName: {
    color: '#333',
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: '700',
  },
  inboxAvartar: {
    width: avartar,
    height: avartar,
    borderRadius: 18,
  },
  avartar: {
  
    width: avartar,
    height: avartar,
    borderRadius: 4,
  },
  avartarContainer: {
    width: avartar,
    height: avartar,
  },
  notificationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.BORDER,
    borderLeftColor: COLORS.BORDER,
    borderLeftWidth: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: COLORS.BLUE,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerTittle: {
    marginVertical: 15,
    fontSize: 15,
    color: COLORS.WHITE,
  },
  headerTabContainer: {
    flexDirection: 'row',
  },
  tabText: {
    fontSize: 14,
  },
  tabButton: {
    paddingVertical: 10,
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
    color: COLORS.BLUE,
  },
  unread: {
    backgroundColor: '#F6F7F9',
    borderLeftColor: COLORS.BLUE,
    borderLeftWidth: 3,
  },
});

export default NotificationComponent;
