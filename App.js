import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection'
import Routes from './src/routes'
import AuthProvider from './src/contexts/auth';

console.disableYellowBox = true

export default function financas() {
 return (
   <NavigationContainer>
     <AuthProvider>
     <StatusBar backgroundColor='#131313' barStyle='light-content' />
     <Routes />
     </AuthProvider>
   </NavigationContainer>
  );
}
