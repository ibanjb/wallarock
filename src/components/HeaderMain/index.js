import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {  Header, Left, Right, Body, Icon, Button, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default class HeaderMain extends React.Component {  
  constructor(props, context) {
    super(props, context);    
  }

  onBurguerButtonPress() {
    console.log('burguer button press')
  }

  onSearchButtonPress() {
    console.log('serch button press')
  }

  render() {
    return (
      <Header style={styles.container}>
          <Left>
            <Button transparent onPress={this.onBurguerButtonPress.bind(this)} >
              <Icon name='menu' style={styles.button} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.headerText}> 
              wallarock 
            </Text>
          </Body>
          <Right>
            <Button transparent onPress={this.onSearchButtonPress.bind(this)} >
              <Icon name="search" style={styles.button} />
            </Button>              
          </Right>      
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: 70,
    backgroundColor: '#13C3AC',
  },
  button: {
    color: '#fff',
  },
  headerText: {
    fontFamily: 'Urba',
    fontSize: 28,
    color: '#fff',
  }
});
