import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Login from "../screens/login";
import Cart from "../screens/cart";
import Checkout from "../screens/checkout";
import ProDetails from "../screens/proDetails";
import SignUp from "../screens/signup";
import ProStore from "../screens/proStore";

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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ProStore" component={ProStore} />
      <Stack.Screen name="ProDetails" component={ProDetails} />
    </Stack.Navigator>
  );
}

// <Stack.Screen name='Drawer' children={({navigation}) => <Drawer navigation={navigation} />}
