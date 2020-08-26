import React from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class KategoriPesanan extends React.Component {
  render() {
    return (
      <View
        style={{
          margin: 1,
          marginTop: 20,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          elevation: 3,
          borderRadius: 5,
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 12,
          paddingBottom: 15,
        }}>
        <TouchableWithoutFeedback>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: '#353535',
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 14,
              }}>
              {this.props.judul}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <View
          style={{
            height: 1,
            backgroundColor: '#D6D6D6',
            marginTop: 10,
          }}
        />
        <TigaPesanan
          data={this.props.data}
          navigation={this.props.navigation}
        />
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#284B63',
              borderRadius: 5,
              padding: 8,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 2,
              elevation: 3,
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 14,
              }}>
              Lihat Lebih Banyak
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class TigaPesanan extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
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
        scrollEnabled={false}
      />
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
      press = () => this.props.navigation.navigate('DetailPesanan1');
    } else if (this.props.status === 2) {
      sts = 'Belum Kirim';
      stsColor = '#B5838D';
      press = () => this.props.navigation.navigate('DetailPesanan2');
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
      <TouchableWithoutFeedback onPress={press}>
        <View
          style={{
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: '#D6D6D6',
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 12,
                color: '#353535',
              }}>
              {this.props.nama}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 12,
                color: '#707070',
                marginLeft: 7,
              }}
              numberOfLines={1}
              ellipsizeMode="tail">
              {this.props.produk}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: 10,
                color: stsColor,
              }}>
              {sts}
            </Text>
            <Text
              style={{
                color: '#353535',
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
              }}>
              Rp {currencyFormat(this.props.harga)}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
