import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


const drawerCover = require("../../../images/gradient.png");

export default class Item extends React.Component {  

  constructor(props, context) {
    super(props, context);    
  } 

  render() {
    const title = this.props.value;
    const subTitle = this.props.subTitle;
    const description = this.props.description;
    const stars = this.props.stars;
    return ( 
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={drawerCover} />
              <Body>
                <Text>{title}</Text>
                <Text note>{subTitle}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={drawerCover} style={{width: 100, height: 100}}/>
              <Text>
                { description }
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>{stars} stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>        
    );
  }
}

Item.propTypes = {
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    stars: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: { 
  },
});
