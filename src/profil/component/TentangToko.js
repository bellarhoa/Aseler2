import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    Image
}from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

class TentangToko extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginLeft: 20
              }}>
                  <Ionicons name= "location" color="#858585" size={20} />
              <View style={{marginLeft: 15, justifyContent: 'center'}}>
                <Text>Malang, Jawa Timur</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginLeft: 20
              }}>
                  <Ionicons name= "calendar" color="#858585" size={20} />
              <View style={{marginLeft: 15, justifyContent: 'center'}}>
                <Text>Berdiri sejak 2018</Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 30,
                marginLeft: 20
              }}>
              <View style={{ justifyContent: 'center'}}>
                <Text>Miniso Indonesia Official</Text>
              </View>
            </View>

            </View>
        );
    }
}
export default TentangToko;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center', 
    },
})