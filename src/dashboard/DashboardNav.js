import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardPage from './DashboardPage';
import DetailPesanan0 from './detail_pesanan/DetailPesanan0';
import DetailPesanan1 from './detail_pesanan/DetailPesanan1';
import DetailPesanan2 from './detail_pesanan/DetailPesanan2';
import PesanTemplate from '../profil/chat_template/PesanTemplate';
import TambahChat from '../profil/chat_template/TambahChat';
import EditChat from '../profil/chat_template/EditChat';
import DaftarPesanan from './component/DaftarPesanan';

const Stack = createStackNavigator();

export default function DashboardNav() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: '#353535',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontFamily: 'OpenSans-Regular', fontSize: 18},
      }}>
      <Stack.Screen
        name="Dashboard"
        component={DashboardPage}
        options={{headerLeft: null}}
      />
      <Stack.Screen
        name="DetailPesanan0"
        component={DetailPesanan0}
        options={{headerTitle: 'Detail Pesanan', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DetailPesanan1"
        component={DetailPesanan1}
        options={{headerTitle: 'Detail Pesanan', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DetailPesanan2"
        component={DetailPesanan2}
        options={{headerTitle: 'Detail Pesanan', tabBarVisible: false}}
      />
      <Stack.Screen
        name="PesanTemplate"
        component={PesanTemplate}
        options={{tabBarVisible: false, headerTitle: 'Pilih Pesan Template'}}
      />
      <Stack.Screen
        name="EditChat"
        component={EditChat}
        options={{tabBarVisible: false, headerTitle: 'Edit Pesan Template'}}
      />
      <Stack.Screen
        name="TambahChat"
        component={TambahChat}
        options={{tabBarVisible: false, headerTitle: 'Tambah Pesan Template'}}
      />
      <Stack.Screen
        name="DaftarPesanan"
        component={DaftarPesanan}
        options={{tabBarVisible: false}}
        options={{headerTitle: 'Daftar Pesanan', tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
}
