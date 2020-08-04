import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Warning from '../component/Warning';
import DaftarProduk from './component/DaftarProduk';

const data = [
  {
    id: 1,
    image: {
      uri:
        'https://raw.githubusercontent.com/bellarhoa/Marketplace-Sederhana/master/assets/product_mug(1).jpg',
    },
    nama: 'Nama Produk 1',
    harga: 32000,
    sisaStok: 128,
  },
  {
    id: 2,
    image: {
      uri:
        'https://raw.githubusercontent.com/bellarhoa/Marketplace-Sederhana/master/assets/product_phonecase(1).jpg',
    },
    nama: 'Nama Produk 2',
    harga: 27000,
    sisaStok: 273,
  },
  {
    id: 3,
    image: {
      uri:
        'https://raw.githubusercontent.com/bellarhoa/Marketplace-Sederhana/master/assets/product_phonecase(2).jpg',
    },
    nama: 'Nama Produk 3',
    harga: 17000,
    sisaStok: 375,
  },
  {
    id: 4,
    image: {
      uri:
        'https://raw.githubusercontent.com/bellarhoa/Marketplace-Sederhana/master/assets/product_mug(2).jpg',
    },
    nama: 'Nama Produk 4',
    harga: 84000,
    sisaStok: 285,
  },
  {
    id: 5,
    image: {
      uri:
        'https://raw.githubusercontent.com/bellarhoa/Marketplace-Sederhana/master/assets/product_mug(1).jpg',
    },
    nama: 'Nama Produk 5',
    harga: 63000,
    sisaStok: 936,
  },
  {
    id: 6,
    image: {
      uri:
        'https://raw.githubusercontent.com/bellarhoa/Marketplace-Sederhana/master/assets/product_phonecase(1).jpg',
    },
    nama: 'Nama Produk 6',
    harga: 36000,
    sisaStok: 274,
  },
];

class ProdukPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Warning navigation={this.props.navigation} />
        <DaftarProduk data={data} />
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
          onPress={() => this.props.navigation.navigate('Tambah Data Produk')}>
          <Image
            style={{width: 45, height: 45}}
            source={require('../../assets/image/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProdukPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    right: 18,
    bottom: 18,
  },
});
