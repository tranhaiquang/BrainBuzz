import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import LoginScreen from './app/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const checkSignInStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log('Token:', token); // Log the token to verify
        if (token) {
          console.log('User is signed in');
          setIsSignedIn(true);
        } else {
          console.log('User is not signed in');
          setIsSignedIn(false);
        }
      } catch (error) {
        console.error('Error checking sign-in status:', error);
      } finally {
        setLoading(false); // Set loading to false after the check
      }
    };

    checkSignInStatus();
  }, []);

  useEffect(() => {
  }, [isSignedIn]);

  if (loading) {
    return null; // Optionally, render a loading spinner or screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSignedIn ? 'Home' : 'WelcomeScreen'}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Log In" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
