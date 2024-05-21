import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "expo-checkbox";
import Auth from "../components/Auth";

export default function LoginScreen({ navigation }) {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Dummy login validation
    if (email === "email" && password === "pass") {
      try {
        const token = "asd";
        await AsyncStorage.setItem("userToken", token);
        Alert.alert("Login Successful", "You are logged in");
        navigation.navigate("Home");
      } catch (error) {
        console.error("Failed to save the token", error);
      }
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hey, Welcome back!</Text>
      <Text style={styles.labelText}>Hello again, you have been missed.</Text>

      <Text style={styles.labelText}>Email</Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder='Enter "email"'
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
      </View>
      <Text style={styles.labelText}>Password</Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder='Enter "pass"'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isPasswordShown}
          style={{ width: "100%" }}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{ position: "absolute", right: 12 }}
        >
          {isPasswordShown == true ? (
            <Ionicons name="eye-off-outline" size={24}></Ionicons>
          ) : (
            <Ionicons name="eye-outline" size={24}></Ionicons>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.checkBoxText}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text style={{ marginLeft: 10, color: "#5e5d5b" }}>Remember me</Text>
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.loginButton}>
          <Text style={styles.buttonTextLogin}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.orLoginWithTitle}>
        <View style={styles.line} />
        <Text style={styles.orLoginWithText}>Or log in with</Text>
        <View style={styles.line} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Auth navigation={navigation}></Auth>
      </View>
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 22,
        }}
      >
        <Text style={{ fontSize: 16, color: "#5e5d5b" }}>
          Don't have an account?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("Sign Up")}>
          <Text style={{ fontSize: 16, color: "#31b52f", fontWeight: "bold" }}>
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#31b52f",
  },
  labelText: {
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 2,
    lineHeight: 18,
    color: "#5e5d5b",
  },
  textInput: {
    borderColor: "#5e5d5b",
    borderWidth: 1,
    borderRadius: 8,
    height: 48,
    alignItems: "left",
    justifyContent: "center",
    paddingLeft: 10,
  },
  checkBoxText: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 2,
    lineHeight: 18,
    color: "#5e5d5b",
  },
  loginButton: {
    backgroundColor: "#31b52f",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextLogin: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 14,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#5e5d5b",
    marginHorizontal: 10,
  },
  orLoginWithTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orLoginWithText: {
    fontSize: 14,
    color: "#5e5d5b",
  },
  googleLoginButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#5e5d5b",
    borderWidth: 1,
    borderRadius: 10,
  },
  googleIcon: {
    width: 40,
    height: 40,
  },
});
