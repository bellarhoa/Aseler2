import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SignUpPage from './src/awal/SignUpPage';
import LoginPage from './src/awal/LoginPage';
import WelcomePage from './src/awal/WelcomePage';
import PesananPage from './src/pesanan/PesananPage';
import SplashPage from './src/SplashPage';
import ProdukPage from './src/produk/ProdukPage';
import ProfilPage from './src/profil/ProfilPage';
import DetailPesanan0 from './src/pesanan/DetailPesanan0';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AwalScreen() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftar Akun"
        component={SignUpPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Masuk Akun"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function PesananScreen() {
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
    </Stack.Navigator>
  );
}

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
    </Stack.Navigator>
  );
}

function getTabBarVisibility(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'DetailPesanan0') {
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
        component={PesananScreen}
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
        options={{
          tabBarLabel: 'Produk',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cube" color={color} size={size} />
          ),
        }}
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
            component={AwalScreen}
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
