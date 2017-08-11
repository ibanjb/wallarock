import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Content } from "native-base";
import HeaderMain from '../HeaderMain';

export default class ContentMain extends React.Component {  

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Content>
        <HeaderMain navigation={this.props.navigation} />        
        <View>
          <Text> 
              Main content component 
          </Text>
        </View>
      </Content>
    );
  }
}