import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import realm, {
  queryAllPesanan0,
  queryAllPesanan1,
  queryAllPesanan2,
  queryAllPesanan3,
  queryAllPesananMin1,
} from '../../database/Realm';

// 0 : belum bayar
// 1 : belum konfirmasi
// 2 : belum kirim
// 3 : selesai
// -1 : dibatalkanzd

export default class DaftarPesanan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daftarPesanan: [],
    };
    this.reloadData();
    realm.addListener('change', () => {
      this.reloadData();
    });
  }
  reloadData = () => {
    if (this.props.route.params.type == '0') {
      queryAllPesanan0()
        .then((pesanan) => {
          this.setState({daftarPesanan: pesanan});
        })
        .catch((error) => {
          alert(`Gagal mendapatkan pesanan ${error}`);
        });
    } else if (this.props.route.params.type == '1') {
      queryAllPesanan1()
        .then((pesanan) => {
          this.setState({daftarPesanan: pesanan});
        })
        .catch((error) => {
          alert(`Gagal mendapatkan pesanan ${error}`);
        });
    } else if (this.props.route.params.type == '2') {
      queryAllPesanan2()
        .then((pesanan) => {
          this.setState({daftarPesanan: pesanan});
        })
        .catch((error) => {
          alert(`Gagal mendapatkan pesanan ${error}`);
        });
    } else if (this.props.route.params.type == '3') {
      queryAllPesanan3()
        .then((pesanan) => {
          this.setState({daftarPesanan: pesanan});
        })
        .catch((error) => {
          alert(`Gagal mendapatkan pesanan ${error}`);
        });
    } else if (this.props.route.params.type == '-1') {
      queryAllPesananMin1()
        .then((pesanan) => {
          this.setState({daftarPesanan: pesanan});
        })
        .catch((error) => {
          alert(`Gagal mendapatkan pesanan ${error}`);
        });
    }
  };
  render() {
    return (
      <FlatList
        style={{paddingTop: 10, backgroundColor: 'white'}}
        data={this.state.daftarPesanan}
        renderItem={({item}) => (
          <RowPesanan
            data={item}
            nama={item.nama_pelanggan}
            produk={item.namaproduk_pesanan}
            status={item.status_pesanan}
            harga={item.total_harga}
            navigation={this.props.navigation}
          />
        )}
        keyExtractor={(item) => item.pesanan_id}
      />
    );
  }
}

class RowPesanan extends React.Component {
  render() {
    let sts, stsColor, press;
    if (this.props.status == '0') {
      sts = 'Belum Bayar';
      stsColor = '#FFB4A2';
      press = 'DetailPesanan0';
    } else if (this.props.status == '1') {
      sts = 'Belum Konfirmasi';
      stsColor = '#E5989B';
      press = 'DetailPesanan1';
    } else if (this.props.status == '2') {
      sts = 'Belum Kirim';
      stsColor = '#B5838D';
      press = 'DetailPesanan2';
    } else if (this.props.status == '3') {
      sts = 'Selesai';
      stsColor = '#06D6A0';
      press = 'DetailPesananSel';
    } else if (this.props.status == '-1') {
      sts = 'Dibatalkan';
      stsColor = '#F45B69';
      press = 'DetailPesananBt';
    }
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          this.props.navigation.navigate(press, {item: this.props.data})
        }>
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
            }}>
            <View style={{width: 250}}>
              <Text style={[styles.h2, {color: '#353535'}]}>
                {this.props.nama}
              </Text>
              <Text style={[styles.h1, {color: '#858585'}]}>
                {this.props.produk}
              </Text>
            </View>
            <View style={{alignItems: 'flex-end', flex: 1}}>
              <Text style={[styles.h4, {color: stsColor}]}>{sts}</Text>
              <Text style={[styles.h3, {color: '#858585'}]}>
                Rp {currencyFormat(Number(this.props.harga))}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

const styles = StyleSheet.create({
  h1: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    textAlignVertical: 'top',
  },
  h2: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    marginTop: 10,
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
});
