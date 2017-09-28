import React from 'react';
import { StyleSheet, View } from 'react-native';
import {  Header, Left, Right, Body, Icon, Button, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class DetailMain extends React.Component {  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
          <Text> detail main </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#13C3AC',
  },
});
