import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PesanTemplate from './chat_template/PesanTemplate';
import ProfilPage from './ProfilPage';
import EditChat from './chat_template/EditChat';
import DetailPesananSel from './pesanan_selesai/DetailPesananSel';
import DetailPesananBt from './pesanan_batal/DetailPesananBt';
import EditAkun from './edit_akun/EditAkun';
import TambahChat from './chat_template/TambahChat';
import DaftarPesanan from '../dashboard/component/DaftarPesanan';

const Stack = createStackNavigator();

export default function ProfilScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Profil Saya"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: '#353535',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontFamily: 'OpenSans-Regular', fontSize: 18},
      }}>
      <Stack.Screen
        name="Profil Saya"
        component={ProfilPage}
        options={{headerLeft: null}}
      />
      <Stack.Screen
        name="PesanTemplate"
        component={PesanTemplate}
        options={{headerTitle: 'Pesan Template', tabBarVisible: false}}
      />
      <Stack.Screen
        name="EditChat"
        component={EditChat}
        options={{headerTitle: 'Edit Pesan Template', tabBarVisible: false}}
      />
      <Stack.Screen
        name="TambahChat"
        component={TambahChat}
        options={{headerTitle: 'Tambah Pesan Template', tabBarVisible: false}}
      />
      <Stack.Screen
        name="EditAkun"
        component={EditAkun}
        options={{headerTitle: 'Edit Akun', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DetailPesananSel"
        component={DetailPesananSel}
        options={{headerTitle: 'Detail Pesanan', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DetailPesananBt"
        component={DetailPesananBt}
        options={{headerTitle: 'Detail Pesanan', tabBarVisible: false}}
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
