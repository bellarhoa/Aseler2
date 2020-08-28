import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {queryAllPesanan, tambahPesanan} from '../../database/Data_chat';
import realm from '../../database/Data_chat';

//Selesai

const listKategori = [
  {
    pesanan_id: Math.floor(Math.random()* 10000000000),
    nama_pelanggan: 'Nabila',
    alamat_pelanggan : 'Malang, Sumbersari 3 No 186',
    notelp_pelanggan : '0987654321',
    status_pesanan : 'Selesai',
    metode_pembayaran: 'Transfer - BNI',
    jumlah_produk : '2',
    foto_produk: 'https://cf.shopee.co.id/file/ecc20f8291b0545ea15ceb545d7e2b95',
    namaproduk_pesanan : 'Tas Selempang Kikono',
    hargaproduk_pesanan: '78000',
    modelproduk_pesanan : 'coklat',
    gambarproduk_pesanan: 'https://cf.shopee.co.id/file/ecc20f8291b0545ea15ceb545d7e2b95',
    biaya_pengiriman: '10000',
    total_harga : '166000',
    tanggal_pesan : '18 September 2020',
  },
  {
    pesanan_id: Math.floor(Math.random()* 10000000000),
    nama_pelanggan: 'Zahra',
    alamat_pelanggan : 'Malang, Sigura gura 19 No 6',
    notelp_pelanggan : '0987654321',
    status_pesanan : 'Selesai',
    metode_pembayaran: 'Transfer - BCA',
    jumlah_produk : '1',
    foto_produk: 'https://cf.shopee.co.id/file/d41792b94e34f7494d1930df6da74612',
    namaproduk_pesanan : 'Tas Selempang Rantai',
    hargaproduk_pesanan: '78000',
    modelproduk_pesanan : 'pink',
    gambarproduk_pesanan: 'https://cf.shopee.co.id/file/d41792b94e34f7494d1930df6da74612',
    biaya_pengiriman: '10000',
    total_harga : '88000',
    tanggal_pesan : '20 September 2020',
  },

];

class DaftarPesanan extends Component {
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
  //   tambahPesanan(listKategori[0]).then().catch((error) =>{
  //     alert(`Insert new chat error ${error}`);
  //   });
  // }

  reloadData = () => {
    queryAllPesanan().then((listKategori) => {
      this.setState({listKategori});
    }).catch((error) => {
      alert(`Insert new chat error ${error}`);
    });
    console.log('reloadData');
  }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
            style={{marginTop: 10}}
            data={this.state.listKategori}
            renderItem={({item}) => (
                <Item
                nama={item.nama_pelanggan}
                produk={item.namaproduk_pesanan}
                harga={item.hargaproduk_pesanan}
                status={item.status_pesanan}
                tekan={() => this.props.navigation.navigate('DetailPesananSel', {item})}
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
            <Text style={[styles.h4, {color: '#1985A1'}]}>{status}</Text>
            <Text style={[styles.h3, {color: '#858585'}]}>{harga}</Text>
          </View>
        </View>
      </View>
      
    </TouchableWithoutFeedback>
  );

export default DaftarPesanan;


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