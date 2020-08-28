import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DaftarUser from './DaftarUser';
import ProdukPage from './ProdukPage';
import EditProduk from './EditProduk';
import EditUser from './EditUser';

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
      {/* <Stack.Screen name="Produk Saya" component={ProdukPage} />
      <Stack.Screen
        name="EditProduk"
        component={EditProduk}
        options={{headerTitle: 'Edit Aja', tabBarVisible: false}}
      /> */}
      <Stack.Screen name="Daftar User" component={DaftarUser} />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{headerTitle: 'Edit Aja', tabBarVisible: false}}
      />
    </Stack.Navigator>

    
  );
}
