import React from 'react';
import { StyleSheet } from 'react-native';
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Drawer from "./Drawer";
import ContentMain from "./components/ContentMain";
import HeaderMain from './components/HeaderMain';

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Home: { screen: ContentMain },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root style={styles.container}>
        <HeaderMain />
        <AppNavigator />
    </Root>;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});
