import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "expo-checkbox";
import Auth from "../components/Auth";
export default function SignUpScreen({ navigation }) {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create Account</Text>
      <Text style={styles.labelText}>
        Join us today to unlock exclusive features and stay connected with our
        community.
      </Text>
      <Text style={styles.labelText}>Full Name</Text>
      <View style={styles.textInput}>
        <TextInput placeholder="Enter your name"></TextInput>
      </View>

      <Text style={styles.labelText}>Email</Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
        ></TextInput>
      </View>
      <Text style={styles.labelText}>Password</Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Enter your password"
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
      <Text style={styles.labelText}>Confirm Password</Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Confirm password"
          secureTextEntry={isConfirmPasswordShown}
          style={{ width: "100%" }}
        />
        <TouchableOpacity
          onPress={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)}
          style={{ position: "absolute", right: 12 }}
        >
          {isConfirmPasswordShown == true ? (
            <Ionicons name="eye-off-outline" size={24}></Ionicons>
          ) : (
            <Ionicons name="eye-outline" size={24}></Ionicons>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.checkBoxText}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text style={{ marginLeft: 10, color: "#5e5d5b" }}>
          I agree to the terms and conditions
        </Text>
      </View>
      <TouchableOpacity>
        <View style={styles.signUpButton}>
          <Text style={styles.buttonTextSignUp}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.orSignUpWithTitle}>
        <View style={styles.line} />
        <Text style={styles.orSignUpWithText}>Or sign up with</Text>
        <View style={styles.line} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Auth navigation={navigation}></Auth>
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
    borderRadius: 10,
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
  signUpButton: {
    backgroundColor: "#31b52f",
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextSignUp: {
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
  orSignUpWithTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orSignUpWithText: {
    fontSize: 14,
    color: "#5e5d5b",
  },
  googleSignUpButton: {
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
