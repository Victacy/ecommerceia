import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import products from "./items";
import category from "./category";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Store({ navigation }) {
  const [optionIndex, setOptionIndex] = useState(0);

  const HomeItems = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cat}
      >
        {category.map((categories, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setOptionIndex(index)}
          >
            <View
            // style={{
            //   backgroundColor: optionIndex == index ? "#F9813A" : "#fedac5",
            //   ...style.catBtn,
            // }}
            >
              <Image
                source={categories.image}
                style={{ height: 35, width: 35, resizeMode: "cover" }}
              />
            </View>
            <Text
              style={{
                fontSize: 15.5,
                fontWeight: "bold",
                marginLeft: 10,
                color: optionIndex == index ? "white" : "#F9813A",
              }}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Display = ({ accessories }) => {
    return (
      <TouchableOpacity
        underlayColor="white"
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Details", accessories)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Image
              source={accessories.image}
              style={{ height: 170, width: 210 }}
            />
          </View>
          <View style={{ marginHorizontal: 20, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {accessories.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#908e8c",
                marginTop: 2,
                padding: 10,
              }}
            >
              {accessories.description}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              GHC {``} {accessories.price}
            </Text>
            <View style={styles.addcat}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Cart")}
                style={styles.addcat}
              >
                <Text style={{ color: "white" }}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.addcat}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <View>
          <View
            style={{
              flexDirection: "row",
              // paddingLeft: 250,
            }}
          >
            <Text style={{ fontSize: 23 }}>Welcome to Rina's shop</Text>
          </View>
          <Text
            style={{
              marginTop: 5,
              // paddingLeft: 250,
              fontSize: 22,
              color: "#908e8c",
            }}
          >
            How can i help you today ?
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        >
          <Ionicons name="md-cart" color="black" size={25} />
        </TouchableOpacity>
      </View>
      <View
        style={{ marginTop: 40, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <View style={styles.input}>
          <Ionicons name="search-sharp" size={24} color="gray" />
          <TextInput
            style={{ flex: 1, fontSize: 18, paddingRight: 10 }}
            placeholder="Search for items"
          />
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            backgroundColor: "#F9813A",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="tune" size={24} color="black" />
        </View>
      </View>
      <View>
        <HomeItems />
      </View>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => <Display accessories={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cat: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  catBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  card: {
    height: 380,
    width: 330,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: "#f1f1f1",
    // alignItems: "center",
  },
  addcat: {
    height: 35,
    padding: 10,
    marginLeft: 10,

    // width: 30,
    borderRadius: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
