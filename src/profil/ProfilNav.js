import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PesanTamplate from './chat_template/PesanTemplate';
import ProfilPage from './ProfilPage';
import LihatChat from './chat_template/LihatChat';
import EditChat from './chat_template/EditChat';
import PesananSelesai from './pesanan_selesai/PesananSelesai';
import DaftarSelesai from './pesanan_selesai/DaftarSelesai';
import PesananBatal from './pesanan_batal/PesananBatal';
import DaftarBatal from './pesanan_batal/DaftarBatal';
import EditAkun from './edit_akun/EditAkun';

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
        name="PesananSelesai"
        component={PesananSelesai}
        options={{headerTitle: 'Pesanan Selesai', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DaftarSelesai"
        component={DaftarSelesai}
        options={{headerTitle: '25 Agustus 2020', tabBarVisible: false}}
      />
      <Stack.Screen
        name="PesananBatal"
        component={PesananBatal}
        options={{headerTitle: 'Pesanan di Batalkan', tabBarVisible: false}}
      />
      <Stack.Screen
        name="DaftarBatal"
        component={DaftarBatal}
        options={{headerTitle: '25 Agustus 2020', tabBarVisible: false}}
      />
      <Stack.Screen
        name="EditAkun"
        component={EditAkun}
        options={{headerTitle: 'Edit Akun', tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
}
