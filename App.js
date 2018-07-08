/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Drawer from './src/drawer/Drawer';
import Home from './src/Home';
import Chat from './src/Chat';
import Profile from './src/Profile';
import DrawerEvents from './src/drawer/DrawerEvents';

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Chat: {
    screen: Chat,
  },
  Profile: {
    screen: Profile,
  },
}, {
  initialRouteName: 'Home',
  contentComponent: Drawer
});

const defaultGetStateForAction = DrawerNavigator.router.getStateForAction;

DrawerNavigator.router.getStateForAction = (action, state) => {
    if (action.type === 'Navigation/DRAWER_CLOSED') {
        DrawerEvents.notify('DRAWER_CLOSED')
    }

    return defaultGetStateForAction(action, state);
};

export default class App extends Component {
  render() {
    return (
      <DrawerNavigator />
    );
  }
}
