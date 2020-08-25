import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import BarisInfoDP from '../component/BarisInfo_DetailPesanan';
import BarisHargaDP from '../component/BarisHarga_DetailPesanan';
import ButtonDP from '../component/Button_DetailPesanan';
import {ScrollView} from 'react-native-gesture-handler';
import {User2Schema} from '../../database/Data_chat';


export default class DetailPesanan2 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 25,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
        <ScrollView>
          <BarisInfoDP pertanyaan="Status Pesanan" jawaban="Belum Kirim" />
          <Text style={styles.judul}>Data Pembeli</Text>
          <BarisInfoDP pertanyaan="Nama Lengkap" jawaban="John Doe" />
          <BarisInfoDP
            pertanyaan="Alamat Pengiriman"
            jawaban="Jalan Simpang Siur V No. 1, Kota Pinggir, Palapa, Jawa Timur, Indonesia, 12543"
          />
          <BarisInfoDP
            pertanyaan="Nomor WhatsApp"
            jawaban={'(+62) ' + '81234567890'}
          />
          <Text style={styles.judul}>Data Pembeli</Text>
          <BarisInfoDP
            pertanyaan="Metode Pembayaran"
            jawaban="Transfer - BCA"
          />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              marginTop: 6,
              marginBottom: 6,
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 55,
                width: 55,
                borderColor: '#D3D3D3',
                borderWidth: 1,
              }}
              source={require('../../../assets/image/profile.png')}
            />
            <View style={{marginLeft: 8}}>
              <Text style={styles.produk}>Nama Produk</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: Dimensions.get('window').width - 26 - 26 - 55 - 8,
                }}>
                <Text style={styles.variasi}>Hitam</Text>
                <Text style={styles.variasi}>x2</Text>
              </View>
              <Text style={[styles.produk, {alignSelf: 'flex-end'}]}>
                Rp 20.000
              </Text>
            </View>
          </View>
          <BarisHargaDP
            pertanyaan="Biaya Pengiriman"
            jawaban="Rp 1.000"
            color="#353535"
          />
          <BarisHargaDP
            pertanyaan="Total Pesanan"
            jawaban="Rp 21.000"
            color="#3C6E71"
          />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 14,
            }}>
            <ButtonDP
              text="Kirim Pesan Template"
              backgroundColor="#284B63"
              textColor="white"
              onPress={() =>
                this.props.navigation.navigate('Pilih Pesan Template')
              }
            />
            <ButtonDP
              text="Hubungi Pembeli"
              backgroundColor="#284B63"
              textColor="white"
            />
            <ButtonDP
              text="Tandai Pesanan sudah Dikirim"
              backgroundColor="#284B63"
              textColor="white"
            />
            <ButtonDP
              text="Tandai Pesanan Dibatalkan"
              backgroundColor="white"
              borderColor="#284B63"
              textColor="#284B63"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  judul: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingTop: 20,
  },
  produk: {color: '#353535', fontFamily: 'OpenSans-Regular', fontSize: 12},
  variasi: {color: '#707070', fontFamily: 'OpenSans-Regular', fontSize: 12},
});
