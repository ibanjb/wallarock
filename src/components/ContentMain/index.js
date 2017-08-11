import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content } from "native-base";
import HeaderMain from '../HeaderMain';

export default class ContentMain extends React.Component {  

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container>
        <HeaderMain navigation={this.props.navigation} />        
        <Content>          
          <View>
            <Text> 
                Main content component 
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}