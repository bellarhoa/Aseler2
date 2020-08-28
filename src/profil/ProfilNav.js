import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PesanTamplate from './chat_template/PesanTemplate';
import ProfilPage from './ProfilPage';
import LihatChat from './chat_template/LihatChat';
import EditChat from './chat_template/EditChat';
import PesananSelesai from './pesanan_selesai/PesananSelesai';
import DaftarSelesai from './pesanan_selesai/DaftarSelesai';
import DetailPesananSel from './pesanan_selesai/DetailPesananSel';
import PesananBatal from './pesanan_batal/PesananBatal';
import DaftarBatal from './pesanan_batal/DaftarBatal';
import DetailPesananBt from './pesanan_batal/DetailPesananBt';
import EditAkun from './edit_akun/EditAkun';
import TambahChat from './chat_template/TambahChat';

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
      <Stack.Screen name="Profil Saya" component={ProfilPage} />
      <Stack.Screen
        name="PesanTamplate"
        component={PesanTamplate}
        options={{headerTitle: 'Pesan Tamplete', tabBarVisible: false}}
      />
      <Stack.Screen
        name="LihatChat"
        component={LihatChat}
        options={{headerTitle: 'Pesan Template', tabBarVisible: false}}
      />
      <Stack.Screen
        name="EditChat"
        component={EditChat}
        options={{headerTitle: 'Edit Pesan Tamplate', tabBarVisible: false}}
      />
      <Stack.Screen
        name="TambahChat"
        component={TambahChat}
        options={{headerTitle: 'Tambah Pesan Tamplate', tabBarVisible: false}}
      />
      <Stack.Screen
        name="PesananSelesai"
        component={PesananSelesai}
        options={{headerTitle: 'Pesanan Selesai', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DaftarSelesai"
        component={DaftarSelesai}
        options={{headerTitle: 'Daftar Selesai', tabBarVisible: false}}
      />
      <Stack.Screen
        name="PesananBatal"
        component={PesananBatal}
        options={{headerTitle: 'Pesanan di Batalkan', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DaftarBatal"
        component={DaftarBatal}
        options={{headerTitle: 'Daftar Batal', tabBarVisible: false}}
      />
      <Stack.Screen
        name="EditAkun"
        component={EditAkun}
        options={{headerTitle: 'Edit Akun', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DetailPesananSel"
        component={DetailPesananSel}
        options={{headerTitle: 'Pesanan Selesai', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DetailPesananBt"
        component={DetailPesananBt}
        options={{headerTitle: 'Pesanan di Batalkan', tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
}
