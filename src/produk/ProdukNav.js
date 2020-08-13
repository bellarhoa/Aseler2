import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProdukPage from './ProdukPage';

const Stack = createStackNavigator();

export default function ProdukScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Produk Saya"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: '#353535',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontFamily: 'OpenSans-Regular', fontSize: 18},
      }}>
      <Stack.Screen name="Produk Saya" component={ProdukPage} />
    </Stack.Navigator>
  );
}
