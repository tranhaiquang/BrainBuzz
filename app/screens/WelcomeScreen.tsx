// WelcomeScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import OnboardingSlider from "../components/Onboarding";

const WelcomeScreen = ({ navigation }) => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleDone = () => {
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return (
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>BrainBuzz</Text>
          <Image
            style={styles.searchIcon}
            source={require("../../assets/search-icon.png")}
          ></Image>
        </View>
        <OnboardingSlider onDone={handleDone} />
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <View style={styles.signUpButton}>
            <Text style={styles.buttonTextSignUp}>Sign up for free</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Log In")}>
          <View style={styles.logInButton}>
            <Text style={styles.buttonTextLogIn}>Or log in</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    marginTop: -40,
  },
  headerSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: -450,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginTop: 35,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    color: "#31b52f",
  },
  logInButton: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: "#31b52f",
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonTextSignUp: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextLogIn: {
    color: "#31b52f",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
