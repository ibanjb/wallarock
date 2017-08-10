
import React from "react";
import { DrawerNavigator } from "react-navigation";
import ContentMain from "./components/ContentMain";
import SideBar from './components/SideBar';

const DrawerRock = DrawerNavigator(
  {
    Home: { screen: ContentMain },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerRock;
