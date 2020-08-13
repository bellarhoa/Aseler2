import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    Image,
    FlatList
}from "react-native";
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const listKategori = [
    {
      id: 1,
      nama: 'Nabila Fai',
      produk: 'tas',
      status: 'batal',
      harga: 'Rp. 70.000',
      next: 'DaftarSelesai',
    },
    {
        id: 2,
        nama: 'Nabila Fai',
        produk: 'dompet',
        status: 'batal',
        harga: 'Rp. 70.000',
        next: 'DaftarSelesai',
      },

      {
        id: 3,
        nama: 'Nabila Fai',
        produk: 'baju',
        status: 'batal',
        harga: 'Rp. 70.000',
        next: 'DaftarSelesai',
      },
      {
        id: 4,
        nama: 'Nabila Fai',
        produk: 'tas',
        status: 'batal',
        harga: 'Rp. 70.000',
        next: 'DaftarSelesai',
      },
      
  ];

class DaftarBatal extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
            style={{marginTop: 10}}
            data={listKategori}
            renderItem={({item}) => (
                <Item
                nama={item.nama}
                produk={item.produk}
                harga={item.harga}
                status={item.status}
                tekan={() => this.props.navigation.navigate(item.title)}
                />
            )}
            keyExtractor={(item) => item.id}
            />
            </View>
        );
    }
}

const Item = ({nama, produk, harga, tekan, status}) => (
    <TouchableWithoutFeedback onPress={tekan}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 30,
          paddingRight: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#C4C4C4',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            //marginTop: 10,
          }}>
          <View>
            <Text style={[styles.h2, {color: '#353535'}]}>{nama}</Text>
            <Text style={[styles.h1, {color: '#858585'}]}>{produk}</Text>
          </View>
          <View style={{alignItems:'flex-end', flex: 1}}>
            <Text style={[styles.h4, {color: 'red'}]}>{status}</Text>
            <Text style={[styles.h3, {color: '#858585'}]}>{harga}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

export default DaftarBatal;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center', 
    },
    h1: {
        color: '#FFFFFF',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
      },
      h2: {
        color: '#FFFFFF',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        marginTop: 10
      },
      h3: {
        color: '#FFFFFF',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
      },
      h4: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 12,
      },
})