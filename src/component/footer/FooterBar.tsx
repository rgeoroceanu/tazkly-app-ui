import React from "react";
import HomeScreen from "../../screen/home/HomeScreen";
import ProfileScreen from "../../screen/profile/ProfileScreen";
import HelpScreen from "../../screen/help/HelpScreen";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Theme from "../../../Theme";

const Tab = createMaterialBottomTabNavigator();

function FooterBar() {
  return (
    <Tab.Navigator initialRouteName="Home"
                   activeColor={Theme.colors.secondary}
                   inactiveColor={"#a0a0a0"}
                   barStyle={{ backgroundColor: 'transparent', position: "absolute", left: 0, bottom: 0, elevation: 0, borderTopWidth: 0 }}>
      <Tab.Screen name="Home"
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                  }}/>
      <Tab.Screen name="Profile"
                  component={ProfileScreen}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account" color={color} size={26} style={{ textAlign: 'center'}}/>
                    ),
                  }}/>
      <Tab.Screen name="Help"
                  component={HelpScreen}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="help" color={color} size={26} style={{ textAlign: 'center'}}/>
                    ),
                  }}/>
    </Tab.Navigator>
  );
}

export default FooterBar;