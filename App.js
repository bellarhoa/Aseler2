import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SignUpPage from './src/awal/SignUpPage';
import LoginPage from './src/awal/LoginPage';
import WelcomePage from './src/awal/WelcomePage';
import PesananPage from './src/pesanan/DashboardPage';
import SplashPage from './src/SplashPage';
import ProdukPage from './src/produk/ProdukPage';
import PesanTamplate from './src/profil/chat_template/PesanTemplate';
import ProfilPage from './src/profil/ProfilPage';
import DetailProduk from './src/produk/DetailProduk';
import LihatChat from './src/profil/chat_template/LihatChat';
import EditChat from './src/profil/chat_template/EditChat';
import PesananSelesai from './src/profil/pesanan_selesai/PesananSelesai';
import DaftarSelesai from './src/profil/pesanan_selesai/DaftarSelesai';
import PesananBatal from './src/profil/pesanan_batal/PesananBatal';
import DaftarBatal from './src/profil/pesanan_batal/DaftarBatal';
import EditAkun from './src/profil/edit_akun/EditAkun';
import AwalNav from './src/awal/AwalNav';
import DashboardNav from './src/pesanan/DashboardNav';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Tab2 = createMaterialTopTabNavigator();

function ProdukScreen() {
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
      <Stack.Screen
        name="Detail Produk"
        component={DetailProduk}
        options={{tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
}

function ProfilScreen() {
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

function getTabBarVisibility(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (
    routeName === 'DetailPesanan0' ||
    routeName === 'DetailPesanan1' ||
    routeName === 'DetailPesanan2' ||
    routeName === 'Tambah Data Produk' ||
    routeName === 'Pilih Kategori' ||
    routeName === 'Pilih Variasi'
  ) {
    return false;
  }

  return true;
}

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="PesananScreen"
      tabBarOptions={{
        activeTintColor: '#284B63',
        inactiveTintColor: '#858585',
        showLabel: false,
      }}>
      <Tab.Screen
        name="PesananScreen"
        component={DashboardNav}
        options={({route}) => ({
          tabBarLabel: 'Pesanan',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen
        name="ProdukScreen"
        component={ProdukScreen}
        options={({route}) => ({
          tabBarLabel: 'Produk',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cube" color={color} size={size} />
          ),
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen
        name="ProfilScreen"
        component={ProfilScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashPage">
          <Stack.Screen
            name="SplashPage"
            component={SplashPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AwalScreen"
            component={AwalNav}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TabScreen"
            component={TabScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function MyTabs() {
  return (
    <Tab2.Navigator
      initialRouteName="Profile Toko"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'powderblue'},
      }}>
      <Tab2.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab2.Screen
        name="Setting"
        component={SettingsScreen}
        options={{tabBarLabel: 'Setting'}}
      />
      <Tab2.Screen
        name="Album"
        component={SettingsScreen}
        options={{tabBarLabel: 'Album'}}
      />
    </Tab2.Navigator>
  );
}
