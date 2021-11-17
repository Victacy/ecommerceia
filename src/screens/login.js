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
      <Text>SignIn</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="example@email.com"
          placeholderTextColor="#ffffff"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LogIn</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity>
  <Text style={styles.forgot_button}>Don't have an account?<Text style={{color:'green'}} onPress={() =>navigation.navigate('Signup')}>Signup here</Text></Text>
</TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    // backgroundColor: "#FFC0CB",
    backgroundColor: "#9d9b9d",
    borderRadius: 5,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    // color:'white',
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginText: {
    color: "white",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: 80,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    color: "white",
    //    backgroundColor:"#FF1493",
    backgroundColor: "#280c86",
  },
});
