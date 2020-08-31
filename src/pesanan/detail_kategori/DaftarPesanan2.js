import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {queryAllPesanan6, tambah6Pesanan} from '../../database/Data_chat';
import realm from '../../database/Data_chat';

//Belum Bayar

const listKategori = [
  {
    pesanan_id: Math.floor(Math.random()* 10000000000),
    nama_pelanggan: 'Dwi Anisa',
    status_pesanan: 'Belum Bayar',
    tanggal_pesan: '30 Agustus 2020',
    alamat_pelanggan: 'Jl Tambak Aji 8, Semarang, Jawa Tengah, 50185',
    notelp_pelanggan: '0248663315',
    metode_pembayaran: 'Transfer - Mandiri',
    jumlah_produk: '1',
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/6/29/78419712/78419712_51994a14-b5f6-4fe9-bad0-243f15af4a09_1100_1100.webp',
    namaproduk_pesanan: 'Dompet Wanita Pendek Kecil Lipat Motif Lucu Karakter',
    hargaproduk_pesanan: '69900',
    modelproduk_pesanan: 'Beige',
    gambarproduk_pesanan:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/6/29/78419712/78419712_51994a14-b5f6-4fe9-bad0-243f15af4a09_1100_1100.webp',
    biaya_pengiriman: '12000',
    total_harga: '81900',
  },
  {
    pesanan_id: Math.floor(Math.random()* 10000000000),
    nama_pelanggan: 'Vina Aminah',
    status_pesanan: 'Belum Bayar',
    tanggal_pesan: '28 Agustus 2020',
    alamat_pelanggan:
      'Jl Arya Mukti Raya 4 RT 02/03, Semarang, Jawa Tengah, 50196',
    notelp_pelanggan: '0246721406',
    metode_pembayaran: 'Transfer - BCA',
    jumlah_produk: '1',
    foto_produk:
      'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/22/78419712/78419712_d3dd32cf-8ea7-41ea-a397-a043469c7c8e_1100_1100',
    namaproduk_pesanan:
      'Tas Selempang Wanita Logam Rantai Sling Bag Fahion Pesta Basic',
    hargaproduk_pesanan: '69900',
    modelproduk_pesanan: 'Hijau',
    gambarproduk_pesanan:
      'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/22/78419712/78419712_d3dd32cf-8ea7-41ea-a397-a043469c7c8e_1100_1100',
    biaya_pengiriman: '12000',
    total_harga: '81900',
  },
  {
    pesanan_id: Math.floor(Math.random()* 10000000000),
    nama_pelanggan: 'Gusti Indah',
    status_pesanan: 'Belum Bayar',
    tanggal_pesan: '30 Agustus 2020',
    alamat_pelanggan: 'Jl Tanjung 50, Jakarta, DKI Jakarta, 10350',
    notelp_pelanggan: '0213923030',
    metode_pembayaran: 'Transfer - BNI',
    jumlah_produk: '2',
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/4/29/78419712/78419712_d0f3f6ea-0048-49ed-a064-24d529738491_1000_1000.webp',
    namaproduk_pesanan: 'Wanita Handbag Dompet Panjang Lipat Zipper Simple',
    hargaproduk_pesanan: '59900',
    modelproduk_pesanan: 'Merah Muda',
    gambarproduk_pesanan:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/4/29/78419712/78419712_d0f3f6ea-0048-49ed-a064-24d529738491_1000_1000.webp',
    biaya_pengiriman: '12000',
    total_harga: '131800',
  },
  {
    pesanan_id: Math.floor(Math.random()* 10000000000),
    nama_pelanggan: 'Nur Iskandar',
    status_pesanan: 'Belum Bayar',
    tanggal_pesan: '28 Agustus 2020',
    alamat_pelanggan: 'Jl Ngagel Jaya Slt 119, Surabaya, Jawa Timur, 60284',
    notelp_pelanggan: '0315027163',
    metode_pembayaran: 'Transfer - BRI',
    jumlah_produk: '3',
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/6/29/78419712/78419712_51994a14-b5f6-4fe9-bad0-243f15af4a09_1100_1100.webp',
    namaproduk_pesanan: 'Dompet Wanita Pendek Kecil Lipat Motif Lucu Karakter',
    hargaproduk_pesanan: '69900',
    modelproduk_pesanan: 'Beige',
    gambarproduk_pesanan:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/6/29/78419712/78419712_51994a14-b5f6-4fe9-bad0-243f15af4a09_1100_1100.webp',
    biaya_pengiriman: '7000',
    total_harga: '216700',
  },
  {
    pesanan_id: Math.floor(Math.random()* 10000000000),
    nama_pelanggan: 'Yohanes Agung',
    status_pesanan: 'Belum Bayar',
    tanggal_pesan: '30 Agustus 2020',
    alamat_pelanggan:
      'Jl Kb Sirih 34 Ged Dewan Pers, Jakarta, DKI Jakarta, 10340',
    notelp_pelanggan: '0213459839',
    metode_pembayaran: 'Transfer - BRI',
    jumlah_produk: '1',
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/4/28/78419712/78419712_c7f17a5b-1443-471a-8ea4-74a957a4a465_1000_1000.webp',
    namaproduk_pesanan:
      'Tas Organizer Perlengkapan Mandi Lipat Portable Kosmetik',
    hargaproduk_pesanan: '59900',
    modelproduk_pesanan: 'Abu-Abu',
    gambarproduk_pesanan:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/4/28/78419712/78419712_c7f17a5b-1443-471a-8ea4-74a957a4a465_1000_1000.webp',
    biaya_pengiriman: '12000',
    total_harga: '71900',
  },
  {
    pesanan_id: Math.floor(Math.random()* 10000000000),
    nama_pelanggan: 'Sari Rahman',
    status_pesanan: 'Belum Bayar',
    tanggal_pesan: '28 Agustus 2020',
    alamat_pelanggan: 'Jl Karangmenjangan 34 A, Surabaya, Jawa Timur, 60286',
    notelp_pelanggan: '0315021539',
    metode_pembayaran: 'Transfer - BNI',
    jumlah_produk: '1',
    foto_produk:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/8/20/24071379/24071379_e74484ad-6a88-4cc9-8d9b-7ee5d92f3679_1100_1100.webp',
    namaproduk_pesanan:
      'Handuk Mandi Bath Towel 140x70cm Besar Berdaya Serap Tinggi',
    hargaproduk_pesanan: '109900',
    modelproduk_pesanan: 'Koala',
    gambarproduk_pesanan:
      'https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/8/20/24071379/24071379_e74484ad-6a88-4cc9-8d9b-7ee5d92f3679_1100_1100.webp',
    biaya_pengiriman: '7000',
    total_harga: '116900',
  },

];

class DaftarPesanan2 extends Component {
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
  //   tambah6Pesanan(listKategori[5]).then().catch((error) =>{
  //     alert(`Insert new chat error ${error}`);
  //   });
  // }

  reloadData = () => {
    queryAllPesanan6().then((listKategori) => {
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
                tekan={() => this.props.navigation.navigate('DetailPesanan2', {item})}
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
        paddingTop: 7,
        paddingBottom: 20,
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
          //marginTop: 10,
        }}>
        <View style = {{width : 250}}>
          <Text style={[styles.h2, {color: '#353535'}]}>{nama}</Text>
          <Text style={[styles.h1, {color: '#858585'}]}>{produk}</Text>
        </View>
        <View style={{alignItems:'flex-end', flex: 1}}>
          <Text style={[styles.h4, {color: 'red'}]}>{status}</Text>
          <Text style={[styles.h3, {color: '#858585'}]}> Rp. {harga}</Text>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default DaftarPesanan2;


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