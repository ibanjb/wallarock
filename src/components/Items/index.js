import React from 'react';
import { Dimensions, StyleSheet, View, ListView, TouchableHighlight, Text } from 'react-native';
import { Container, Content, Body, Left, Right } from "native-base";
import Item from '../Item';
import store from '../../itemsStore';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Items extends React.Component {  

  constructor(props, context) {
    super(props, context);
    this.state = store.getState();    
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  addItem() {
    for (let i=0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * 6);
      const id = randomNumber;
      const title = 'Title' + randomNumber
      const subTitle = 'Subtitle ' + randomNumber
      const description = 'Description ' + randomNumber;
      const stars = randomNumber > 0 ? '' + randomNumber * 123 : '999'; 
        store.dispatch({
            type: 'ADD_ITEM',          
            id,
            title,
            subTitle,
            description,
            stars,          
        });      
      }    
    }

  renderItem(data, key) {
    return (
      <View key={key} style={styles.row}>
        <Item identifier={data.id} title={data.title} subTitle={data.subTitle} description={data.description} stars={data.stars} />
      </View>
    );
  }

  render() {
    const renderItem = this.renderItem;
    const items = this.state.items;
    return (      
      <View>
        <View style={styles.list}>
          { 
            items.map((row, i) => { return renderItem(row, i) })
           }           
        </View>        
        <TouchableHighlight onPress={this.addItem.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>
                Add new item
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
  },
  button: {
    height: 60,
    borderColor: '#13C3AC',
    borderWidth: 2,
    backgroundColor: '#13C3AC',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:  {
    color: '#fff',
  },
  list: {    
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',  
    marginLeft: 3,
    marginRight: 2,  
  },
  row: {    
    width: (deviceWidth / 2) - 5,
    height: 300,
  },
});
