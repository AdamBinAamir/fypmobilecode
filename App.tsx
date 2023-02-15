
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Screens/Start';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Dashboard from './Screens/Dashboard';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import AdminLoginScreen from './Screens/AdminLoginScreen';
import Demo from './Screens/Demo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Demo">
        <Stack.Screen name="Demo" component={Demo} options={{ headerShown: false, title: 'Demo' }} />
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false, title: 'Start' }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, title: 'Login' }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, title: 'LoginScreen' }}/>
        <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} options={{ headerShown: false, title: 'AdminLoginScreen' }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false, title: 'SignUpScreen' }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, title: 'SignUp' }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});