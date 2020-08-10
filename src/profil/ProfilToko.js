import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    Image
}from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TentangToko from "./component/TentangToko";
import Produk from "./component/Produk";
import Kategori from "./component/Kategori";
import Card from '../component/Card';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';


const Tab2 = createMaterialTopTabNavigator();

class ProfilToko extends Component{
    render(){
        return(
        //untuk gambar profil atas
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 40
            }}>
            <Image
              style={styles.gambar}
              source={require('../../assets/image/tas1.jpg')}
            />

            <View style={{marginLeft: 15, justifyContent: 'center'}}>
              <Text style={styles.h3}>Miniso Indonesia</Text>
              <TouchableWithoutFeedback style={{alignItems: 'flex-start'}}>
                <Card style={styles.button}>
                  <Text style={[styles.h4, {color: '#353535'}]}>
                    Salin Link Toko
                  </Text>
                </Card>
              </TouchableWithoutFeedback>
            </View>
            
          </View>

          <Tab2.Navigator
            initialRouteName = "Profile Toko"
            tabBarOptions={{
            activeTintColor: 'black',
            labelStyle: {fontSize: 12},
            style: {backgroundColor: 'white', height: 40}
          }}>
          <Tab2.Screen 
            name = "TentangToko" 
            component = {TentangToko} 
            options={{tabBarLabel: 'Tentang Toko'}}/>
          <Tab2.Screen 
            name = "Produk" 
            component = {Produk} 
            options={{tabBarLabel: 'Produk'}}/>
          <Tab2.Screen 
            name = "Kategori" 
            component = {Kategori} 
            options={{tabBarLabel: 'Kategori'}}/>
          </Tab2.Navigator>
          </View>
        );
    }
}
export default ProfilToko;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center', 
    },
    gambar: {
        height: 82, 
        width: 82, 
        borderRadius: 82 / 2
    },
    h3: {            
        fontFamily: 'OpenSans-Bold',
        fontSize: 25,
    },
})