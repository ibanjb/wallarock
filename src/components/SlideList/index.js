import React from 'react';
import { Dimensions, StyleSheet, Image, View, Text } from 'react-native';
import { Container, Content } from "native-base";

const deviceWidth = Dimensions.get("window").width;

export default class Slide extends React.Component {  

  constructor(props, context) {
    super(props, context);
  }  

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>
              slide
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {     
  },
});
