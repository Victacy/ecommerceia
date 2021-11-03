import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import Home from "../screens/home";
import accountRoute from "./account.route";

const Tab = createBottomTabNavigator();

export default function bottomRoute() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={accountRoute} />
    </Tab.Navigator>
  );
}
