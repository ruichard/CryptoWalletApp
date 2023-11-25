import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { RegistrationScreen } from './src/screens/RegistrationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Crypto Currency Wallet' }} />

        <Stack.Screen
          name="Registration"
          component={RegistrationScreen} />

        <Stack.Screen
          name="Details"
          component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}