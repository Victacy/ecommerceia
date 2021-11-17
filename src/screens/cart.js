import { MaterialIcons, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import items from "./items";

export default function Cart({ navigation }) {
  const [myCart, setMyCart] = useState(3);

  const ShopCart = ({ item }) => {
    return (
      <View style={styles.shop}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: "#908e8c" }}>
            {item.description}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            GHC {""}
            {item.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <View style={styles.adel}>
            <Octicons
              name="diff-removed"
              size={24}
              color="black"
              style={{ padding: 10 }}
              onPress={() => setMyCart(myCart - 1)}
            />
            <Text style={{ fontWeight: "bold", fontSize: 18, padding: 10 }}>
              {myCart}
            </Text>
            <Octicons
              name="diff-added"
              size={24}
              color="black"
              style={{ padding: 10 }}
              onPress={() => setMyCart(myCart + 1)}
            />
          </View>
        </View>
      </View>
    );
  };
  const MainBtn = ({ title, onPress = () => {} }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.btnContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          onPress={navigation.goBack}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Shopping Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={items}
        renderItem={({ item }) => <ShopCart item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>GHC 70</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <MainBtn title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  shop: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  adel: {
    width: 110,
    height: 50,
    // backgroundColor: "#d35aa2",
    // borderRadius: 10,
    // borderColor: "gray",
    // borderWidth: 1,
    // paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  title: { color: "white", fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    // backgroundColor: '#F9813A',
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
