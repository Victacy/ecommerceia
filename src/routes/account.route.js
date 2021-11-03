import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
// import { View, Text } from 'react-native'
import Login from "../screens/login";
import SignUp from "../screens/signup";

const Account = createDrawerNavigator();

export default function AccountRoute() {
  return (
    <Account.Navigator>
      <Account.Screen name="Login" component={Login} />
      <Account.Screen name="Signup" component={SignUp} />
    </Account.Navigator>
  );
}
