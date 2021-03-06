import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashPage from './src/SplashPage';
import AwalNav from './src/awal/AwalNav';
import DashboardNav from './src/dashboard/DashboardNav';
import ProdukNav from './src/produk/ProdukNav';
import ProfilNav from './src/profil/ProfilNav';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getTabBarVisibility(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (
    routeName === 'DaftarPesanan' ||
    routeName === 'DetailPesanan0' ||
    routeName === 'DetailPesanan1' ||
    routeName === 'DetailPesanan2' ||
    routeName === 'DetailPesananSel' ||
    routeName === 'DetailPesananBt' ||
    routeName === 'PesanTemplate' ||
    routeName === 'EditChat' ||
    routeName === 'TambahChat' ||
    routeName === 'EditAkun'
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
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="speedometer" color={color} size={size} />
          ),
          tabBarVisible: getTabBarVisibility(route),
          headerLeft: null,
        })}
      />
      <Tab.Screen
        name="ProdukScreen"
        component={ProdukNav}
        options={({route}) => ({
          tabBarLabel: 'Produk',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cube" color={color} size={size} />
          ),
          tabBarVisible: getTabBarVisibility(route),
          headerLeft: null,
        })}
      />
      <Tab.Screen
        name="ProfilScreen"
        component={ProfilNav}
        options={({route}) => ({
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          tabBarVisible: getTabBarVisibility(route),
          headerLeft: null,
        })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
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
          options={{headerShown: false, headerLeft: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
