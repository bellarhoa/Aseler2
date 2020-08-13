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
      tanggal: '25 Agustus 2020',
      jumlah: '12 Produk',
      harga: 'Rp. 70.000',
      next: 'DaftarBatal',
    },
    {
        id: 2,
        tanggal: '25 Agustus 2020',
        jumlah: '12 Produk',
        harga: 'Rp. 70.000',
        next: 'DaftarBatal',
      },

      {
        id: 3,
        tanggal: '25 Agustus 2020',
        jumlah: '12 Produk',
        harga: 'Rp. 70.000',
        next: 'DaftarBatal',
      },
      {
        id: 4,
        tanggal: '25 Agustus 2020',
        jumlah: '12 Produk',
        harga: 'Rp. 70.000',
        next: 'DaftarBatal',
      },
      
  ];

class PesananBatal extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
            style={{marginTop: 10}}
            data={listKategori}
            renderItem={({item}) => (
                <Item
                tanggal={item.tanggal}
                jumlah={item.jumlah}
                harga={item.harga}
                tekan={() => this.props.navigation.navigate(item.next)}
                />
            )}
            keyExtractor={(item) => item.id}
            />
            </View>
        );
    }
}

const Item = ({tanggal, jumlah, harga, next, tekan}) => (
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
            <Text style={[styles.h2, {color: '#353535'}]}>{tanggal}</Text>
            <Text style={[styles.h1, {color: '#858585'}]}>{jumlah}</Text>
          </View>
          <View style={{flex: 1, alignItems:'flex-end'}}>
            <Text style={[styles.h3, {color: '#858585'}]}>{harga}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

export default PesananBatal;


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
})