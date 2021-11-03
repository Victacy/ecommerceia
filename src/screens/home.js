import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";

export default function Home({ navigation }) {
  return (
    <View>
      <ScrollView>
        <Text>Homepage</Text>
        <Text>
          The homepage can be in a list card design with each card representing
          a different product. The page should scroll to allow users to scroll
          through multiple products.From this home screen, the user should be
          able to access a settings menu and product search bar. They should
          also be able to access theirmenu and product search bar. They should
          also be able to access their product cart.
        </Text>
        <Card>
          <Image source={require("../images/banana.jpeg")} resizeMode="cover" />
          <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
            Timberland shoes
          </Text>
          <Text style={styles.price} h4>
            $ 450
          </Text>
          <Text h6 style={styles.description}>
            added 1d ago
          </Text>
          <Button
            type="clear"
            title="Buy now"
            onPress={() => navigation.navigate("Login")}
          />
        </Card>

        <Card
          image={{
            uri: "https://i-verve.com/blog/wp-content/uploads/2019/06/timberland-shoes.jpg",
          }}
        >
          <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
            Timberland shoes
          </Text>
          <Text style={styles.price} h4>
            $ 450
          </Text>
          <Text h6 style={styles.description}>
            added 1d ago
          </Text>
          <Button
            type="clear"
            title="Buy now"
            onPress={() => navigation.navigate("Login")}
          />
        </Card>

        <Card
          image={{
            uri: "https://i-verve.com/blog/wp-content/uploads/2019/06/timberland-shoes.jpg",
          }}
        >
          <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
            Timberland shoes
          </Text>
          <Text style={styles.price} h4>
            $ 450
          </Text>
          <Text h6 style={styles.description}>
            added 1d ago
          </Text>
          <Button
            type="clear"
            title="Buy now"
            onPress={() => navigation.navigate("Login")}
          />
        </Card>

        <Card
          image={{
            uri: "https://i-verve.com/blog/wp-content/uploads/2019/06/timberland-shoes.jpg",
          }}
        >
          <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
            Timberland shoes
          </Text>
          <Text style={styles.price} h4>
            $ 450
          </Text>
          <Text h6 style={styles.description}>
            added 1d ago
          </Text>
          <Button
            type="clear"
            title="Buy now"
            onPress={() => navigation.navigate("Login")}
          />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#5a647d",
    fontWeight: "bold",
    fontSize: 30,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: "#c1c4cd",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  col: {
    flex: 1,
  },
});
