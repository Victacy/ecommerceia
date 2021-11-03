import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Settings({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
