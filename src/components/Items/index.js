import React from 'react';
import { Dimensions, StyleSheet, View, ListView, TouchableHighlight, Text } from 'react-native';
import { Container, Content, Body, Left, Right } from "native-base";
import Item from '../Item';
import store from '../../todoStore';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Items extends React.Component {  

  constructor(props, context) {
    super(props, context);
    this.state = store.getState();    
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  addTask() {
    const randomNumber = Math.floor(Math.random() * 6);
    const title = 'Title' + randomNumber
    const subTitle = 'Subtitle ' + randomNumber
    const description = 'Description ' + randomNumber;
    const stars = randomNumber > 0 ? '' + randomNumber * 123 : '999'; 
      store.dispatch({
          type: 'ADD_TODO',          
          title,
          subTitle,
          description,
          stars,          
      });      
    }

  renderItem(data, key) {
    console.log(data);
    return (
      <View key={key} style={styles.row}>
        <Item title={data.title} subTitle={data.subTitle} description={data.description} stars={data.stars} />
      </View>
    );
  }

  render() {
    const renderItem = this.renderItem;
    const todos = this.state.todos;
    return (      
      <View>
        <View style={styles.list}>
          { 
            todos.map((row, i) => { return renderItem(row, i) })
           }           
        </View>        
        <TouchableHighlight onPress={this.addTask.bind(this)} style={styles.buttonText}>
            <Text>
                Add test
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
  },
  buttonText: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: (screenWidth / 2) - 5,
    height: 300,
  },
});
