import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {IsiProduk, queryAllProduk} from '../database/Data_chat';
import realm from '../database/Data_chat';
import Realm from 'realm';

const listKategori = [
  {
    produk_id: 1,
    foto_produk: '../../assets/image/tas1.jpg',
    nama_produk: 'Tas Selempang Cute',
    tersisa_produk: 12,
    terjual_produk: 12,
    harga_produk: '84000',
  },
  {
    produk_id: 2,
    foto_produk: '../../assets/image/tas2.jpg',
    nama_produk: 'Tas Selempang Roses',
    tersisa_produk: 10,
    terjual_produk: 12,
    harga_produk: '82000',
  },

  {
    produk_id: 3,
    foto_produk: '../../assets/image/tas3.jpg',
    nama_produk: 'Tas Selempang Fujiama',
    tersisa_produk: 12,
    terjual_produk: 12,
    harga_produk: '83000',
  },
  {
    produk_id: 4,
    foto_produk: '../../assets/image/tas1.jpg',
    nama_produk: 'Tas Selempang Sakura',
    tersisa_produk: 12,
    terjual_produk: 12,
    harga_produk: '85000',
  },
  {
    produk_id: 5,
    foto_produk: 'https://cf.shopee.co.id/file/609bb4d7ed433df33b621c7c09a30d68',
    nama_produk: 'Tas Selempang Sakura',
    tersisa_produk: 12,
    terjual_produk: 12,
    harga_produk: '85000',
  },
  {
    produk_id: 6,
    foto_produk: 'https://cf.shopee.co.id/file/609bb4d7ed433df33b621c7c09a30d68',
    nama_produk: 'Tas Selempang Sakura',
    tersisa_produk: 12,
    terjual_produk: 12,
    harga_produk: '85000',
  },
//Baru
  {
    produk_id: Math.floor(Math.random()* 10000000000),
    foto_produk:
      'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/22/78419712/78419712_d3dd32cf-8ea7-41ea-a397-a043469c7c8e_1100_1100',
    nama_produk:
      'Tas Selempang Wanita Logam Rantai Sling Bag Fahion Pesta Basic - Hijau',
    tersisa_produk: 11,
    terjual_produk: 9,
    harga_produk: '69900',
  },
  {
    produk_id: Math.floor(Math.random()* 10000000000),
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/4/29/78419712/78419712_d0f3f6ea-0048-49ed-a064-24d529738491_1000_1000.webp',
    nama_produk:
      'Wanita Handbag Dompet Panjang Lipat Zipper Simple - Merah Muda',
    tersisa_produk: 11,
    terjual_produk: 9,
    harga_produk: '59900',
  },
  {
    produk_id: Math.floor(Math.random()* 10000000000),
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/6/29/78419712/78419712_51994a14-b5f6-4fe9-bad0-243f15af4a09_1100_1100.webp',
    nama_produk: 'Dompet Wanita Pendek Kecil Lipat Motif Lucu Karakter - Beige',
    tersisa_produk: 11,
    terjual_produk: 9,
    harga_produk: '69900',
  },
  {
    produk_id: Math.floor(Math.random()* 10000000000),
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/4/28/78419712/78419712_c7f17a5b-1443-471a-8ea4-74a957a4a465_1000_1000.webp',
    nama_produk:
      'Tas Organizer Perlengkapan Mandi Lipat Portable Kosmetik - Abu-abu',
    tersisa_produk: 11,
    terjual_produk: 9,
    harga_produk: '59900',
  },
  {
    produk_id: Math.floor(Math.random()* 10000000000),
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/8/20/24071379/24071379_e74484ad-6a88-4cc9-8d9b-7ee5d92f3679_1100_1100.webp',
    nama_produk:
      'Handuk Mandi Bath Towel 140x70cm Besar Berdaya Serap Tinggi - Koala',
    tersisa_produk: 12,
    terjual_produk: 8,
    harga_produk: '109900',
  },
];


class ProdukPage extends Component {
  constructor (props){
    super(props);
    this.state = {
      listKategori:[]
    };
    this.reloadData()
    realm.addListener('change', () => {
      this.reloadData();
    });
  }

  // componentDidMount(){
  //   IsiProduk(listKategori[10]).then().catch((error) =>{
  //     alert(`Insert new chat error ${error}`);
  //   });
  // }

  reloadData = () => {
    queryAllProduk().then((listKategori) => {
      this.setState({listKategori});
    }).catch((error) => {
      alert(`Insert new chat error ${error}`);
    });
    console.log('reloadData');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 20,
          paddingLeft: 18,
          paddingRight: 18,
        }}>
        <FlatList
          style={{marginTop: 10}}
          data={this.state.listKategori}
          renderItem={({item}) => (
            <Item
              title={item.nama_produk}
              tersisa={item.tersisa_produk}
              terjual={item.terjual_produk}
              gambar={item.foto_produk}
              tekan={() => {this.props.navigation.navigate('DaftarUser', {item})}
              }
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const Item = ({title, gambar, terjual, tersisa, tekan}) => {
  console.log(gambar);
  return(
  <TouchableWithoutFeedback onPress={tekan}>
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
            source={{ uri: gambar}}
            style={{ width: 60, height: 60, resizeMode: 'cover'}}
          />
        </View>
        <View style={{flex : 1, alignItems : 'center', marginLeft : 10, width : 300}}>
          <Text style={[styles.h1, {marginLeft:15, marginTop: 8, marginBottom : 10, justifyContent : 'center'}]}>
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
)};

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
