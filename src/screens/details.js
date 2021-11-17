import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Other } from "./chk";
import { ScrollView } from "react-native-gesture-handler";

export default function Details(navigation, route) {
  const item = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          onPress={navigation.goBack}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Product Details
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={styles.info}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              {item.name}
            </Text>
            <View style={styles.icon}>
              <MaterialIcons name="favorite-border" size={24} color="#350070" />
            </View>
          </View>
          <Text style={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <Other title="Add To Cart" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  info: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "#350070",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  icon: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  about: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: "white",
  },
});
