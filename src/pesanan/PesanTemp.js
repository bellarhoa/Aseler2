import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    Image,
    Button
}from "react-native";

class PesanTemp extends Component{
    render(){
        return(
        <View>
            <Text>
                Hai
            </Text>
      </View>
        );
    }
}
export default PesanTemp;


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