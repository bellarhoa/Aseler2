import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {IsiProduk, queryAllProduk} from '../database/Realm';
import realm from '../database/Realm';
import {ProdukModel} from '../database/Model';

class ProdukPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produk: [],
    };
    // this.addData();
    this.reloadData();
    realm.addListener('change', () => {
      this.reloadData();
    });
  }
  // addData = () => {
  //   for (let i = 0; i < ProdukModel.length; i++) {
  //     IsiProduk(ProdukModel[i])
  //       .then(() => console.log('tambah produk selesai'))
  //       .catch((error) => {
  //         alert(`Gagal menambahkan pesanan ${error}`);
  //       });
  //   }
  // };
  reloadData = () => {
    queryAllProduk()
      .then((produk) => {
        this.setState({produk});
      })
      .catch((error) => {
        alert(`Gagal mengambil semua produk ${error}`);
      });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 10,
          paddingLeft: 18,
          paddingRight: 18,
        }}>
        <FlatList
          style={{marginTop: 10}}
          data={this.state.produk}
          renderItem={({item}) => (
            <Item
              title={item.nama_produk}
              tersisa={item.tersisa_produk}
              terjual={item.terjual_produk}
              gambar={item.foto_produk}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const Item = ({title, gambar, terjual, tersisa, tekan}) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#d6d6d6',
          marginBottom: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{flex: 0.18}}>
            <Image
              source={{uri: gambar}}
              style={{width: 60, height: 60, resizeMode: 'cover'}}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', marginLeft: 10, width: 300}}>
            <Text
              style={[
                styles.h1,
                {
                  marginLeft: 15,
                  marginTop: 8,
                  marginBottom: 10,
                  justifyContent: 'center',
                },
              ]}>
              {title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                marginLeft: 60,
                marginRight: 60,
              }}>
              <Text style={[styles.h2]}>tersisa {tersisa}</Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={[styles.h2]}>terjual {terjual}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProdukPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: 'black',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  h2: {
    color: '#858585',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
});
