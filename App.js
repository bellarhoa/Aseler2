import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import SignUpPage from './src/SignUpPage';
import LoginPage from './src/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Daftar Akun">
          <Stack.Screen
            name="Daftar Akun"
            component={SignUpPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Masuk Akun"
            component={LoginPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
