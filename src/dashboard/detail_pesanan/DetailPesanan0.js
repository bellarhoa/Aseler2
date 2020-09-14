import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  Image,
  Linking,
} from 'react-native';
import BarisInfoDP from '../component/BarisInfo_DetailPesanan';
import BarisHargaDP from '../component/BarisHarga_DetailPesanan';
import ButtonDP from '../component/Button_DetailPesanan';
import {ScrollView} from 'react-native-gesture-handler';
import {
  tambahPesanan1,
  deletePesanan0,
  tambahPesananMin1,
} from '../../database/Realm';
import {CommonActions} from '@react-navigation/native';

export default class DetailPesanan0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pesanan: [],
    };
  }
  componentDidMount() {
    this.setState({pesanan: this.props.route.params.item});
  }

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
          <BarisInfoDP pertanyaan="Status Pesanan" jawaban="Belum Bayar" />
          <BarisInfoDP
            pertanyaan="Tanggal Pesan"
            jawaban={this.state.pesanan.tanggal_pesan}
          />
          <Text style={styles.judul}>Data Pembeli</Text>
          <BarisInfoDP
            pertanyaan="Nama Lengkap"
            jawaban={this.state.pesanan.nama_pelanggan}
          />
          <BarisInfoDP
            pertanyaan="Alamat Pengiriman"
            jawaban={this.state.pesanan.alamat_pelanggan}
          />
          <BarisInfoDP
            pertanyaan="Nomor WhatsApp"
            jawaban={'(+628) ' + this.state.pesanan.notelp_pelanggan}
          />
          <Text style={styles.judul}>Data Pembeli</Text>
          <BarisInfoDP
            pertanyaan="Metode Pembayaran"
            jawaban={this.state.pesanan.metode_pembayaran}
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
              source={{uri: this.state.pesanan.gambarproduk_pesanan}}
            />
            <View style={{marginLeft: 8}}>
              <Text style={[styles.produk, {width: 220}]}>
                {this.state.pesanan.namaproduk_pesanan}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: Dimensions.get('window').width - 26 - 26 - 55 - 8,
                }}>
                <Text style={styles.variasi}>
                  {this.state.pesanan.modelproduk_pesanan}
                </Text>
                <Text style={styles.variasi}>
                  x{this.state.pesanan.jumlah_produk}
                </Text>
              </View>
              <Text style={[styles.produk, {alignSelf: 'flex-end'}]}>
                Rp{' '}
                {currencyFormat(Number(this.state.pesanan.hargaproduk_pesanan))}
              </Text>
            </View>
          </View>
          <BarisHargaDP
            pertanyaan="Biaya Pengiriman"
            jawaban={
              'Rp ' +
              currencyFormat(Number(this.state.pesanan.biaya_pengiriman))
            }
            color="#353535"
          />
          <BarisHargaDP
            pertanyaan="Total Pesanan"
            jawaban={
              'Rp ' + currencyFormat(Number(this.state.pesanan.total_harga))
            }
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
                this.props.navigation.navigate('PesanTemplate', {
                  notelp: this.state.pesanan.notelp_pelanggan,
                })
              }
            />
            <ButtonDP
              text="Hubungi Pembeli"
              backgroundColor="#284B63"
              textColor="white"
              onPress={() =>
                Linking.openURL(
                  `https://wa.me/628${this.state.pesanan.notelp_pelanggan}`,
                ).catch((e) =>
                  Alert.alert(
                    'Gagal Menghubungi Pembeli',
                    'Pastikan internet anda terjangkau',
                  ),
                )
              }
            />
            <ButtonDP
              text="Tandai Pesanan telah Dibayar"
              backgroundColor="#284B63"
              textColor="white"
              onPress={() => {
                Alert.alert(
                  'Pesanan Telah Dibayar',
                  'Konfirmasi pesanan telah dibayar',
                  [
                    {
                      text: 'Batal',
                      onPress: () => {}, //Do nothing
                      style: 'cancel',
                    },
                    {
                      text: 'Iya',
                      onPress: () => {
                        const newPesanan = {
                          pesanan_id: this.state.pesanan.pesanan_id,
                          nama_pelanggan: this.state.pesanan.nama_pelanggan,
                          alamat_pelanggan: this.state.pesanan.alamat_pelanggan,
                          notelp_pelanggan: this.state.pesanan.notelp_pelanggan,
                          status_pesanan: '1',
                          metode_pembayaran: this.state.pesanan
                            .metode_pembayaran,
                          jumlah_produk: this.state.pesanan.jumlah_produk,
                          foto_produk: this.state.pesanan.foto_produk,
                          namaproduk_pesanan: this.state.pesanan
                            .namaproduk_pesanan,
                          hargaproduk_pesanan: this.state.pesanan
                            .hargaproduk_pesanan,
                          modelproduk_pesanan: this.state.pesanan
                            .modelproduk_pesanan,
                          gambarproduk_pesanan: this.state.pesanan
                            .gambarproduk_pesanan,
                          biaya_pengiriman: this.state.pesanan.biaya_pengiriman,
                          total_harga: this.state.pesanan.total_harga,
                          tanggal_pesan: this.state.pesanan.tanggal_pesan,
                        };
                        tambahPesanan1(newPesanan)
                          .then(() =>
                            deletePesanan0(this.state.pesanan.pesanan_id)
                              .then(() => {
                                this.props.navigation.navigate('DaftarPesanan');
                              })
                              .catch((error) => {
                                alert(`Gagal menghapus pesanan ${error}`);
                              }),
                          )
                          .catch((error) => {
                            alert(`Gagal menambah pesanan ${error}`);
                          });
                      },
                    },
                  ],
                  {cancelable: true},
                );
              }}
            />
            <ButtonDP
              text="Tandai Pesanan Dibatalkan"
              backgroundColor="white"
              textColor="#284B63"
              onPress={() => {
                Alert.alert(
                  'Pesanan Dibatalkan',
                  'Konfirmasi pesanan dibatalkan',
                  [
                    {
                      text: 'Batal',
                      onPress: () => {}, //Do nothing
                      style: 'cancel',
                    },
                    {
                      text: 'Iya',
                      onPress: () => {
                        const newPesanan = {
                          pesanan_id: this.state.pesanan.pesanan_id,
                          nama_pelanggan: this.state.pesanan.nama_pelanggan,
                          alamat_pelanggan: this.state.pesanan.alamat_pelanggan,
                          notelp_pelanggan: this.state.pesanan.notelp_pelanggan,
                          status_pesanan: '-1',
                          metode_pembayaran: this.state.pesanan
                            .metode_pembayaran,
                          jumlah_produk: this.state.pesanan.jumlah_produk,
                          foto_produk: this.state.pesanan.foto_produk,
                          namaproduk_pesanan: this.state.pesanan
                            .namaproduk_pesanan,
                          hargaproduk_pesanan: this.state.pesanan
                            .hargaproduk_pesanan,
                          modelproduk_pesanan: this.state.pesanan
                            .modelproduk_pesanan,
                          gambarproduk_pesanan: this.state.pesanan
                            .gambarproduk_pesanan,
                          biaya_pengiriman: this.state.pesanan.biaya_pengiriman,
                          total_harga: this.state.pesanan.total_harga,
                          tanggal_pesan: this.state.pesanan.tanggal_pesan,
                        };
                        tambahPesananMin1(newPesanan)
                          .then(() =>
                            deletePesanan0(this.state.pesanan_id)
                              .then(() => {
                                this.props.navigation.dispatch(
                                  CommonActions.goBack(),
                                );
                              })
                              .catch((error) => {
                                alert(`Gagal menghapus pesanan ${error}`);
                              }),
                          )
                          .catch((error) => {
                            alert(`Gagal menambah pesanan ${error}`);
                          });
                      },
                    },
                  ],
                  {cancelable: true},
                );
              }}
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

function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
