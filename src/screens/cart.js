import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-elements";

export default function Cart() {
  const [shop, setShop] = useState([]);

  const shopCart = async () => {
    const response = await fetch("https://fakestoreapi.com/carts");
    console.log(response);
    const Info = await response.json();
    // console.log(Info);
    setShop(Info);
  };
  // storeData();

  useEffect(() => {
    shopCart();
  }, []);

  return (
    <View style={styles.container}>
      {shop.map((values) => {
        return (
          <>
            <View
              style={{
                flexDirection: "column",
                marginTop: 13,
                justifyContent: "space-evenly",
              }}
            >
              <Card>
                <Text style={{ paddingTop: 20, marginTop: 25 }}></Text>
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    borderRadius: 20,
                    marginRight: 10,
                    paddingLeft: 10,
                    // marginTop: 25,
                    // backgroundColor: "#f0efef",
                    height: 500,
                    width: 450,
                  }}
                >
                  <Text
                    style={{
                      // color: "#a5a4a3",
                      fontWeight: "500",
                      fontSize: 16.5,
                      textAlign: "center",
                    }}
                  >
                    {values.date}
                  </Text>
                  {/* <Image
                    source={values.image}
                    style={{ alignContent: "center", height: 280, width: 250 }}
                  /> */}
                  <Text
                    style={{
                      color: "#e36100",
                      textAlign: "center",
                      fontWeight: "300",
                    }}
                  >
                    $ {""}
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: 16.5,
                      }}
                    >
                      {values.products}
                    </Text>
                  </Text>
                  {/* <Text style={{ padding: 15, fontSize: 18 }}>
                    {values.category}
                  </Text>
                  <Text>{values.description}</Text> */}
                </TouchableOpacity>
              </Card>
            </View>
          </>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "blue",
    width: "28%",
    margin: 10,
    padding: 20,
    shadowOpacity: 2,
  },
});
