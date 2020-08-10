import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    Image
}from "react-native";

class DetailDaftar extends Component{
    render(){
        return(
            <View style={{
                height: 250, 
                width: 250, 
                marginLeft: 20, 
                backgroundColor: 'white'}}>

                <View style={{flex: 99,backgroundColor: 'black'}}>
                  <Image source={this.props.imageUri}
                  style={{flex:40, width: null, height: null,alignItems:'center'}}/> 
                </View>

                <View style={{flex: 1}}>
                </View>
                
              </View>
        );
    }
}
export default DetailDaftar;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
})