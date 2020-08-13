import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardPage from './DashboardPage';
import DetailPesanan0 from './DetailPesanan0';
import DetailPesanan1 from './DetailPesanan1';
import DetailPesanan2 from './DetailPesanan2';
import PesanTemplate from '../profil/chat_template/PesanTemplate';
import LihatChat from '../profil/chat_template/LihatChat';
import EditChat from '../profil/chat_template/EditChat';
import DaftarPesanan from './detail_kategori/DaftarPesanan';
import TanggalPesanan from './detail_kategori/TanggalPesanan';

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
        name="Pilih Pesan Template"
        component={PesanTemplate}
        options={{tabBarVisible: false}}
      />
      <Stack.Screen
        name="LihatChat"
        component={LihatChat}
        options={{tabBarVisible: false}}
      />
      <Stack.Screen
        name="EditChat"
        component={EditChat}
        options={{tabBarVisible: false}}
      />
      <Stack.Screen
        name="DaftarPesanan"
        component={DaftarPesanan}
        options={{tabBarVisible: false}}
      />
      <Stack.Screen
        name="TanggalPesanan"
        component={TanggalPesanan}
        options={{tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
}
