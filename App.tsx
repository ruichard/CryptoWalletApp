import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import * as Constants from './src/Constants';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Constants.SCREEN_HOME}
          component={HomeScreen}
          options={{ title: 'Crypto Currency Wallet' }} />

        <Stack.Screen
          name={Constants.SCREEN_REGISTRATION}
          component={RegistrationScreen} />

        <Stack.Screen
          name={Constants.SCREEN_DETAILS}
          component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}