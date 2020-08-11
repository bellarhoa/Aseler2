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

      {
        id: 3,
        title: 'Boneka',
        jumlah: '12 Produk',
      },
      {
        id: 4,
        title: 'Boneka',
        jumlah: '12 Produk',
      },
      {
        id: 5,
        title: 'Boneka',
        jumlah: '12 Produk',
      },
      {
        id: 6,
        title: 'Boneka',
        jumlah: '12 Produk',
      },
      {
        id: 7,
        title: 'Boneka',
        jumlah: '12 Produk',
      },
      {
        id: 8,
        title: 'Boneka',
        jumlah: '12 Produk',
      },
      {
          id:9,
          title: 'Boneka',
          jumlah: '12 Produk',
        },
  
        {
          id: 10,
          title: 'Boneka',
          jumlah: '12 Produk',
        },
        {
          id: 11,
          title: 'Boneka',
          jumlah: '12 Produk',
        },
        {
          id: 12,
          title: 'Boneka',
          jumlah: '12 Produk',
        },
        {
          id: 13,
          title: 'Boneka',
          jumlah: '12 Produk',
        },
        {
          id: 14,
          title: 'Boneka',
          jumlah: '12 Produk',
        },
      
  ];

class PesanTemplate extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
            style={{marginTop: 10}}
            data={listKategori}
            renderItem={({item}) => (
                <Item
                title={item.title}
                jumlah={item.jumlah}
                gambar={item.gambar}
                tekan={() => this.props.navigation.navigate(item.title)}
                />
            )}
            keyExtractor={(item) => item.id}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 2,
                elevation: 3,
              }}
              onPress={() => this.props.navigation.navigate('LihatChat')}>
              <Image
                style={{width: 60, height: 60, marginEnd: 5, marginBottom : 5}}
                source={require('../../../assets/image/plus.png')}
              />
            </TouchableOpacity>
            </View>


        );
    }
}

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

export default PesanTemplate;


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