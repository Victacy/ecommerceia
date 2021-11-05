import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View, Text } from "react-native";
import Cart from "../screens/cart";
import Checkout from "../screens/checkout";
import Home from "../screens/home";
import Login from "../screens/login";
import ProDetails from "../screens/proDetails";
import ProStore from "../screens/proStore";
import SignUp from "../screens/signup";

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
    <Drawer.Navigator initialRouteName="Product Store">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Checkout" component={Checkout} />
      <Drawer.Screen name="Product Details" component={ProDetails} />
      <Drawer.Screen name="Product Store" component={ProStore} />
      <Drawer.Screen name="Signup" component={SignUp} />
      {/* <Drawer.Screen name="Account" component={AccountRoute} /> */}
    </Drawer.Navigator>
  );
}
