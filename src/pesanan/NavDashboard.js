import React from 'react';
import {} from 'react-native';

export default function NavDashboard() {
  return (
    <Stack.Navigator
      initialRouteName="Pesanan Saya"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: '#353535',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontFamily: 'OpenSans-Regular', fontSize: 18},
      }}>
      <Stack.Screen name="Pesanan Saya" component={PesananPage} />
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
