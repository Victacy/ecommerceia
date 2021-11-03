import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import AccountRoute from "./src/routes/account.route";
// import StackRoute from "./src/routes/stack.route";
import DrawerRoute from "./src/routes/drawer.route";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <StackRoute /> */}
        <DrawerRoute />
        {/* <AccountRoute /> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
