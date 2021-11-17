import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "../screens/home";
import Cart from "../screens/cart";
import Details from "../screens/details";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Settings from "../screens/settings";

const Stack = createBottomTabNavigator();

export default function BottomRoute() {
  return (
    <Stack.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
          color: "ash",
        },
        showLabel: false,
        // activeTintColor:'gray',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderColor: "#f99e3a",
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}
            >
              <Ionicons name="search" size={24} color="black" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="favorite" color="black" size={24} />
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => <Ionicons name="md-cart" color="black" size={24} />,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
