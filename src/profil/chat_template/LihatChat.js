import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    Image,
    FlatList,
    TouchableOpacity
}from "react-native";
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button_chat from '../../profil/chat_template/component/Button_chat';

const listKategori = [
    {
      id: 1,
      title: 'Boneka',
      jumlah: '12 Produk',
    },
    {
        id: 2,
        title: 'Boneka',
        jumlah: '12 Produk',
      },
  ];

class LihatChat extends Component{
    render(){
        return(

            <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style = {{flexDirection : 'row',justifyContent :'space-evenly', marginTop : 20, alignItems: 'center', alignContent : 'center'}}>
                <Button_chat 
                text="Hapus"
                backgroundColor="#F45B69"
                borderColor="white"
                textColor="white"
                >
                <View>
                <Ionicons name= 'trash' color="white" size={20} />
                </View>
                </Button_chat>

                <Button_chat
                text="Edit"
                backgroundColor="#3C6E71"
                borderColor="white"
                textColor="white"
                onPress = {this.props.navigation.navigate('EditChat')}
                >
                <View>
                <Ionicons name= 'create' color="white" size={20} />
                </View>
                </Button_chat>
            </View>
            
            <View
              style={{
                marginTop: 20,
                marginLeft: 20
              }}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={{color: '#353535', fontSize : 26, fontFamily : 'OpenSans-SemiBold',}}>Terima Kasih</Text>
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
export default LihatChat;

const Item = ({title, jumlah, gambar, tekan}) => (
    <TouchableWithoutFeedback onPress={tekan}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 6,
          paddingBottom: null,
          paddingLeft: 20,
          paddingRight: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#C4C4C4',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            //backgroundColor : 'pink',
            
          }}>
          <View style={{marginLeft: 10, height: 40, alignItems:'center',marginTop: 8,}}>
            <Text style={[styles.h2, {color: '#353535'}]}>{title}</Text>
          </View>
          <View style={{flex: 1,height: 40, alignItems:'flex-end'}}>
            <Ionicons name= 'send' color="#284B63" size={20} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center', 
    },
    h1: {
        color: '#FFFFFF',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 18,
      },
      h2: {
        color: '#FFFFFF',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
      },
})