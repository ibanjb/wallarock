import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Body, Left, Right } from "native-base";
import HeaderMain from '../HeaderMain';
import LoginModal from '../LoginModal';
import Hero from '../Hero';
import BannerHorizontal from '../BannerHorizontal';
import Items from '../Items';

export default class ContentMain extends React.Component {  

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container>
        <HeaderMain navigation={this.props.navigation} />        
        <Content>
          <Hero />
          <BannerHorizontal />
          <View style={styles.innerContainer}>            
            <Text style={[styles.text, styles.textDestacado]}> 
              Here we have a typical grid 2x2
            </Text>
            <Items />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
  },
  innerContainer: {
    paddingTop: 20,    
  },
  text: {
    color: '#000',
    fontFamily: 'Roboto',
  },
  textDestacado: {    
    fontSize: 18,    
  },
});
