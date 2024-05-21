// OnboardingSlider.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { slides } from "./slides";

const OnboardingSlider = () => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const onDone = () => {
    console.log("Onboarding finished");
  };

  return (
    <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 350,
    height: 250,
    marginBottom: 70,
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OnboardingSlider;
