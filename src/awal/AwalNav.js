import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import SignUpPage2 from './SignUpPage2';

const Stack = createStackNavigator();

export default function AwalNav() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftar Akun"
        component={SignUpPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftar Akun 2"
        component={SignUpPage2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Masuk Akun"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
