import React from 'react';
import { Dimensions, StyleSheet, Image, View, Text } from 'react-native';
import { Container, Content } from "native-base";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class BannerHorizontal extends React.Component {  

  constructor(props, context) {
    super(props, context);
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>
              this is a banner
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    marginTop: 0,       
    backgroundColor: '#fff',
  },
  innerContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#f4df42',
    width: (deviceWidth / 2) + 150,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: 'Bosk',
    fontSize: 42,
    color: 'black',
  }
});
