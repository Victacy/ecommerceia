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
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 180,
          padding: 5,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Create an account
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full name"
          placeholderTextColor="black"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email Address"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="dd/mm/yyyy"
          placeholderTextColor="black"
          onChangeText={(birth) => setBirth(birth)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Place of Birth"
          placeholderTextColor="black"
          onChangeText={(pob) => setPob(pob)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="black"
          onChangeText={(number) => setNumber(number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          autocomplete
          style={styles.TextInput}
          placeholder="Gender"
          placeholderTextColor="black"
          onChangeText={(gender) => setGender(gender)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Repeat Password."
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>
          Already have an account?
          <Text
            style={{ color: "blue", fontWeight: "600" }}
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
    backgroundColor: "#ededed",
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
    fontSize: 15,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  signupText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  signupBtn: {
    width: "60%",
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
