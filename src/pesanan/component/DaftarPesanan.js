import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Card from '../../component/Card';
import moment from 'moment';
import 'moment/locale/id';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

// 0 : belum bayar
// 1 : belum konfirmasi
// 2 : belum kirim
// 3 : selesai
// -1 : dibatalkan

export default class DaftarPesanan extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({item}) => (
          <PesananPerHari
            tanggal={item.tanggal}
            pesanan={item.pesanan}
            navigation={this.props.navigation}
          />
        )}
        keyExtractor={(item) => item.tanggal}
      />
    );
  }
}

class PesananPerHari extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            color: '#353535',
            fontFamily: 'OpenSans-Regular',
            fontSize: 20,
            marginTop: 19,
          }}>
          {moment(this.props.tanggal).format('dddd, DD MMMM YYYY')}
        </Text>
        <FlatList
          data={this.props.pesanan}
          renderItem={({item}) => (
            <RowPesanan
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

class RowPesanan extends React.Component {
  render() {
    let sts, stsColor, press;
    if (this.props.status === 0) {
      sts = 'Belum Bayar';
      stsColor = '#FFB4A2';
      press = () => this.props.navigation.navigate('DetailPesanan0');
    } else if (this.props.status === 1) {
      sts = 'Belum Konfirmasi';
      stsColor = '#E5989B';
      press = () => this.props.navigation.navigate('DetailPesanan0');
    } else if (this.props.status === 2) {
      sts = 'Belum Kirim';
      stsColor = '#B5838D';
      press = () => this.props.navigation.navigate('DetailPesanan0');
    } else if (this.props.status === 3) {
      sts = 'Selesai';
      stsColor = '#06D6A0';
      press = () => this.props.navigation.navigate('DetailPesanan0');
    } else if (this.props.status === -1) {
      sts = 'Dibatalkan';
      stsColor = '#F45B69';
      press = () => this.props.navigation.navigate('DetailPesanan0');
    }
    return (
      <Card
        style={{marginTop: 5, marginBottom: 5, borderRadius: 10}}
        onPress={press}>
        <View
          style={{
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.txt}>{this.props.nama}</Text>
            <Text
              style={[styles.txt, {color: '#707070', marginLeft: 7}]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {this.props.produk}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text style={[styles.txtStatus, {color: stsColor}]}>{sts}</Text>
            <Text style={styles.txtHarga}>
              Rp {currencyFormat(this.props.harga)}
            </Text>
          </View>
        </View>
      </Card>
    );
  }
}

function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

const styles = StyleSheet.create({
  txtHarga: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  txtStatus: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 10,
  },
  txt: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    color: '#353535',
  },
});
