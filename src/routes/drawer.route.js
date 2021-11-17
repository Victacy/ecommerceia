import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
// import { View, Text } from "react-native";
import Cart from "../screens/cart";
import Checkout from "../screens/checkout";
import Home from "../screens/home";
import Login from "../screens/login.js";
import Details from "../screens/details";
import Store from "../screens/store";
// import Settings from "../screens/settings";
import SignUp from "../screens/signup";

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Store" component={Store} />
      <Drawer.Screen name="Cart" component={Cart} />
      {/* <Drawer.Screen name="Checkout" component={Checkout} /> */}
      <Drawer.Screen name="Product Details" component={Details} />
      <Drawer.Screen name="Signup" component={SignUp} />
      <Drawer.Screen name="Login" component={Login} />
      {/* <Drawer.Screen name="Settings" component={Settings} /> */}
    </Drawer.Navigator>
  );
}
