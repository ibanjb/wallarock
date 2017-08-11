import React from 'react';
import { Dimensions, StyleSheet, Modal, View, Text, TouchableHighlight } from 'react-native';
import { Container, Content } from "native-base";

export default class LoginModal extends React.Component {  

  constructor(props, context) {
    super(props, context);
    this.state = {
      modalVisible: true,
    };
  }

  setModalVisible() {
    const visibility = this.state.modalVisible;
    this.setState({
      modalVisible: !visibility,
    });
  }

  render() {
    return ( 
      <View style={styles.container} >     
        <Modal 
              animationType={'slide'}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {console.log('Modal has been closed.')}}
        >
          <Text> 
              Login component
          </Text>
          <TouchableHighlight onPress={this.setModalVisible.bind(this)} >
              <Text>Hide Modal</Text>
          </TouchableHighlight>
        </Modal>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13C3AC',
    backgroundColor: 'rgba(19, 195, 172, 0.2)',
  },
});

