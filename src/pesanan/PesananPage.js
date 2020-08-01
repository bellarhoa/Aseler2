import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from '../component/Card';
import Warning from '../component/Warning';
import DaftarPesanan from './component/DaftarPesanan';
import {ScrollView} from 'react-native-gesture-handler';

const pesananA = [
  {
    id: 1,
    nama: 'Bella Rhobiatul Adhawiyah',
    produk: 'Jam Tangan, Tas Selempang',
    status: 0,
    harga: 82000,
  },
  {
    id: 2,
    nama: 'Rhobiatul Adhawiyah',
    produk: 'Jam Dinding',
    status: 1,
    harga: 14000,
  },
];

const pesananB = [
  {
    id: 1,
    nama: 'Adhawiyah',
    produk: 'Tas Selempang, Rumah 2 Lantai',
    status: 2,
    harga: 100000,
  },
  {
    id: 2,
    nama: 'Nabila',
    produk: 'Jam Dinding, Mobil',
    status: 3,
    harga: 278000,
  },
  {
    id: 3,
    nama: 'Sukma',
    produk: 'Motor, Sepeda Kayuh',
    status: -1,
    harga: 629000,
  },
];

const data = [
  {tanggal: '2020-07-29', pesanan: pesananA},
  {tanggal: '2020-07-28', pesanan: pesananB},
];

class PesananPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Card style={styles.cardJumlahPesanan}>
              <Text style={styles.atasJumlah}>0</Text>
              <Text style={styles.atasTitle}>Belum Bayar</Text>
            </Card>
            <Card style={styles.cardJumlahPesanan}>
              <Text style={styles.atasJumlah}>0</Text>
              <Text style={styles.atasTitle}>Belum Konfirmasi</Text>
            </Card>
            <Card style={styles.cardJumlahPesanan}>
              <Text style={styles.atasJumlah}>0</Text>
              <Text style={styles.atasTitle}>Belum Kirim</Text>
            </Card>
          </View>
          <Warning style={{marginTop: 20}} navigation={this.props.navigation} />
          <DaftarPesanan data={data} navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default PesananPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  cardJumlahPesanan: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
  },
  atasJumlah: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  atasTitle: {
    color: '#707070',
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    marginLeft: 10,
    marginRight: 10,
  },
});
