import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const HomeScreen = ({ navigation }) => {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      "911650034947-vucbrr4g6kpnkocfev222qvc0ivju54m.apps.googleusercontent.com", // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
  });
  return (
    <View style={styles.container}>
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Home Screen
      </Text>

      <TouchableOpacity style={styles.signOutButton}
        onPress={async () => {
          try {
            await GoogleSignin.signOut();
            await AsyncStorage.removeItem("userToken");
            navigation.navigate("WelcomeScreen");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  signOutButton: {
    backgroundColor: "#31b52f",
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    
  }
});
export default HomeScreen;
