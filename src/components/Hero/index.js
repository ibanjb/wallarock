import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Container, Content } from "native-base";

const heroImage = require("../../../images/gradient.png");

export default class Hero extends React.Component {  

  constructor(props, context) {
    super(props, context);
  }  

  render() {
    return (
      <View style={styles.container}>
          <Image source={heroImage} style={styles.heroImage}>
              <Text style={styles.heroText}>
                  Hero is trending!
              </Text>
              <Text style={styles.text}>
                  Here we go with the typical Lore ipsum  ;)
              </Text>
          </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    width: '100%',
  },
  heroText: {
    marginTop: 50,
    marginLeft: 20,
    fontFamily: 'Urba',
    fontSize: 32,
    color: '#fff',
  },
  text: {
    marginLeft: 20,
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#fff',
  }
});
