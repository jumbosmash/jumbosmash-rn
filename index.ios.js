/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  TabBarIOS,
} from 'react-native';

import SwipingPage from "./components/cards/SwipingPage.js";
import ChatPage    from "./components/chat/ChatPage.js";
import LoginPage   from "./components/login/LoginPage.js";


export default class jumbosmash extends Component {
  render() {
    return (
      <TabBar/>
    );
  }
}

<<<<<<< HEAD
// TEMPORARY, will remove once we get a menu design
class TemporaryMenu extends Component {
  _toSwipingPage = () => {
    this.props.navigator.push({
      component: SwipingPage,
      title: 'Swiping',
    });
  }

  _toChatPage = () => {
    this.props.navigator.push({
      component: ChatPage,
      title: 'Chat',
      chatroomId: "THIS_WILL_NORMALLY_BE_UNIQUE_ID" //TODO: change this when fully integrated
    });
  }

  _toLoginPage = () => {
    this.props.navigator.push({
      component: LoginPage,
      title: 'Login',
    });
=======
class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cardsTab',
      chatNotifCount: 0,
    }
>>>>>>> 5e81e310752885cca95832f700fbf873b7da8e97
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">
        {/* @jade temporary to access the login page until login code is complete */}
        <TabBarIOS.Item
          title="Login"
          systemIcon="downloads"
          selected={this.state.selectedTab === 'loginTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'loginTab',
            });
          }}>
          <LoginPage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Cards"
          systemIcon="history"
          selected={this.state.selectedTab === 'cardsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'cardsTab',
            });
          }}>
          <SwipingPage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Chat"
          systemIcon="contacts"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          badgeColor="black"
          selected={this.state.selectedTab === 'chatTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'chatTab',
            });
          }}>
          <ChatPage
          />
          {/* ^ penis */}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          systemIcon="more"
          selected={this.state.selectedTab === 'settingsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'settingsTab',
            });
          }}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><Text>Soon to be Settings</Text></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('jumbosmash', () => jumbosmash);
