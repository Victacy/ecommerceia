import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [pob, setPob] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Create an account</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="e.g John Doe"
          placeholderTextColor="#ffffff"
          onChangeText={(name) => setEmail(setName)}
        />
      </View>

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
          placeholder="dd/mm/yyyy"
          placeholderTextColor="#ffffff"
          onChangeText={(birth) => setBirth(birth)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="e.g Tema"
          placeholderTextColor="#ffffff"
          onChangeText={(pob) => setPob(pob)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="+233(0) *********"
          placeholderTextColor="#ffffff"
          onChangeText={(number) => setNumber(number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          autocomplete
          style={styles.TextInput}
          placeholder="Male/Female"
          placeholderTextColor="#ffffff"
          onChangeText={(gender) => setGender(gender)}
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
      <View>
        <TextInput
          style={styles.TextInput}
          placeholder="Repeat Password."
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>
          Already have an account?
          <Text
            style={{ color: "blue" }}
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
    width: "80%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    color: "white",
    //    backgroundColor:"#FF1493",
    backgroundColor: "#280c86",
  },
});
