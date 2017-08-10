import React from 'react';
import AppInit from "./src/AppInit";

import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { Root } from "native-base";
import HeaderMain from './src/components/HeaderMain';
import SideDrawer from './src/components/SideDrawer';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      Urba: require('./fonts/Urba.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <View><Text>Loading...</Text></View>;
    }
    return <AppInit />
    /*
    StatusBar.setBarStyle('light-content', true)
    return (      
      <Root style={styles.container}>
        <HeaderMain />
        <SideDrawer />
      </Root>      
    );
    */
  }
}
