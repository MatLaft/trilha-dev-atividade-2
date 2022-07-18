import React from 'react';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from  "react-native-splash-screen"

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Index from './src/pages/Intro/Index'
import Login from './src/pages/Login/Login';

import Intro1 from './src/pages/Intro/Intro1';
import Intro2 from './src/pages/Intro/Intro2';
import Intro3 from './src/pages/Intro/Intro3';
import Cadastro from './src/pages/Login/Cadastro';
import Recuperar from './src/pages/Login/Recuperar';
import TelaInicial from './src/pages/Inicio/TelaInicial';



const Stack = createStackNavigator()

export default function App() {
  return ( 
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name = 'Intro1' component = {Intro1}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Intro2' component = {Intro2}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Intro3' component = {Intro3}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Login' component = {Login}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Recuperar' component = {Recuperar}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Cadastro' component = {Cadastro}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'TelaInicial' component = {TelaInicial}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
});
