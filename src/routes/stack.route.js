import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Login from "../screens/login";
import Cart from "../screens/cart";
// import Checkout from "../screens/checkout";
import Details from "../screens/details";
import SignUp from "../screens/signup";
import Store from "../screens/store";
import Settings from "../screens/settings";

const Stack = createStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      //   screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        children={({ navigation }) => <Home naviagtion={navigation} />}
      />
      {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Product Details" component={Details} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

// <Stack.Screen name='Drawer' children={({navigation}) => <Drawer navigation={navigation} />}
