import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardPage from './DashboardPage';
import DetailPesanan0 from './DetailPesanan0';
import DetailPesanan1 from './DetailPesanan1';
import DetailPesanan2 from './DetailPesanan2';

const Stack = createStackNavigator();

export default function DashboardNav() {
  return (
    <Stack.Navigator
      initialRouteName="Pesanan Saya"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: '#353535',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontFamily: 'OpenSans-Regular', fontSize: 18},
      }}>
      <Stack.Screen name="Pesanan Saya" component={DashboardPage} />
      <Stack.Screen
        name="DetailPesanan0"
        component={DetailPesanan0}
        options={{headerTitle: '', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DetailPesanan1"
        component={DetailPesanan1}
        options={{headerTitle: '', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DetailPesanan2"
        component={DetailPesanan2}
        options={{headerTitle: '', tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
}
