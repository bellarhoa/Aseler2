import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';

export default class DetailPesanan0 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 25,
          paddingBottom: 25,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
        <BarisInfo pertanyaan="Status Pesanan" jawaban="Belum Bayar" />
        <Text style={styles.judul}>Data Pembeli</Text>
        <BarisInfo pertanyaan="Nama Lengkap" jawaban="John Doe" />
        <BarisInfo
          pertanyaan="Alamat Pengiriman"
          jawaban="Jalan Simpang Siur V No. 1, Kota Pinggir, Palapa, Jawa Timur, Indonesia, 12543"
        />
        <BarisInfo
          pertanyaan="Nomor WhatsApp"
          jawaban={'(+62) ' + '81234567890'}
        />
        <Text style={styles.judul}>Data Pembeli</Text>
        <BarisInfo pertanyaan="Metode Pembayaran" jawaban="Transfer - BCA" />
        <FlatList
          data={this.props.pesanan}
          renderItem={({item}) => (
            <RowProduk
              nama={item.nama}
              produk={item.produk}
              status={item.status}
              harga={item.harga}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

class BarisInfo extends React.Component {
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            flexDirection: 'row',
            paddingLeft: 10,
            paddingTop: 8,
            paddingBottom: 8,
          },
        ]}>
        <Text style={styles.pertanyaan}>{this.props.pertanyaan}</Text>
        <Text style={styles.jawaban}>{this.props.jawaban}</Text>
      </View>
    );
  }
}

class RowProduk extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 55, width: 55}}
          source={require('../../assets/image/aseler.png')}
        />
        <View>
          <Text style={styles.pertanyaan}>Nama Produk</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  judul: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingTop: 12,
  },
  pertanyaan: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    width: 137,
  },
  jawaban: {
    color: '#353535',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    width: Dimensions.get('window').width - 26 - 26 - 137,
  },
});
