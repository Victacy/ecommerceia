import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const MainBtn = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.box}>
        <Text style={styles.header}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Other = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.box}>
        <Text style={style.header}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: { color: "white", fontWeight: "bold", fontSize: 18 },
  box: {
    // backgroundColor: '#F9813A',
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
export { MainBtn, Other };
