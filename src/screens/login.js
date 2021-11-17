import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "400",
          marginBottom: 10,
          textAlign: "center",
          fontWeight: "bold",
          fontStyle: "italic",
          marginBottom: 20,
        }}
      >
        SignIn
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email address or Username"
          placeholderTextColor="#484848"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#484848"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity style={styles.forgot_button}>
          <Text style={{ justifyContent: "flex-end" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Store")}
      >
        <Text style={styles.loginText}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>
          Already have an account?
          <Text
            style={{ color: "green", fontWeight: "600" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login here
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    // backgroundColor: "#FFC0CB",
    // backgroundColor: "#ededed",
    borderColor: "#929292",
    borderWidth: 3,
    borderRadius: 5,
    width: "60%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    // color:'white',
    width: "95%",
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgot_button: {
    height: 30,
    marginBottom: 15,
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "60%",
    borderRadius: 5,
    height: 50,
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    color: "white",
    //    backgroundColor:"#FF1493",
    backgroundColor: "#280c86",
  },
});
