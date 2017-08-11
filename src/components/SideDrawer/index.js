import React from 'react';
import { Drawer } from 'native-base';
import SideBar from '../SideBar';

export default class SideDrawer extends React.Component {

  render() {

    closeDrawer = () => {
      this.drawer._root.close()
    };

    openDrawer = () => {
      this.drawer._root.open()
    };

    return (
      <Drawer ref={(ref) => { this.drawer = ref; }}
              content={<SideBar navigator={this.navigator} openDrawer={this.openDrawer.bind(this)} />}
              onClose={() => this.closeDrawer()} >        
        <SideBar />        
      </Drawer>
    );
  }
}