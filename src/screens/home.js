import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fbecc9" }}>
      <View style={{ height: 200 }}>
        {/* <Image
          style={{ width: 100, height: 150, resizeMode: "contain" }}
          source={require("../images/home.jpeg")}
        /> */}
      </View>
      <View style={styles.txt}>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Affordable Items for both males and females
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              textAlign: "center",
              color: "#908e8c",
            }}
          >
            At Rina's shop you can get nice bags for both males and
            females,jewelries and other items
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                backgroundColor: "blue",
                height: 40,
                width: 85,
                padding: 20,
                borderRadius: 5,
                elevation: 5,
                // alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              style={{
                backgroundColor: "blue",
                height: 40,
                width: 85,
                padding: 20,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.display}>
          <View style={styles.read} />
          <View style={styles.write} />
          <View style={styles.write} />
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
    // paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  display: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  read: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: "#F9813A",
    marginHorizontal: 5,
  },
  write: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#908e8c",
    marginHorizontal: 5,
  },
});
