import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Alert, Text, Dimensions, Image} from 'react-native';
import BarisInfoDP from '../component/BarisInfo_DetailPesanan';
import BarisHargaDP from '../component/BarisHarga_DetailPesanan';
import ButtonDP from '../component/Button_DetailPesanan';
import {ScrollView} from 'react-native-gesture-handler';
import {deletePesanan6, tambah5Pesanan, tambah3Pesanan, tambah4Pesanan, deletePesanan4} from '../../database/Data_chat';
import realm from '../../database/Data_chat';

//Pesanan 2 = selsai, Pesanan 3 = batal, Pesanan 4 = belum kirim, Pesanan 5 = konfirmasi, Pesanan 6 = belum bayar
//belum bayar


export default class DetailPesanan2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pesanan_id: 0,
      nama_pelanggan: '',
      alamat_pelanggan : '',
      notelp_pelanggan : '',
      status_pesanan : '',
      metode_pembayaran: '',
      jumlah_produk : '',
      foto_produk: '',
      namaproduk_pesanan : '',
      hargaproduk_pesanan: '',
      modelproduk_pesanan : '',
      gambarproduk_pesanan: '',
      biaya_pengiriman: '',
      total_harga : '',
      tanggal_pesan : '',
      isAddNew: true,
    };
  }

  componentDidMount(){
    this.setState({pesanan_id: this.props.route.params.item.pesanan_id});
    this.setState({nama_pelanggan: this.props.route.params.item.nama_pelanggan});
    this.setState({alamat_pelanggan: this.props.route.params.item.alamat_pelanggan});
    this.setState({notelp_pelanggan: this.props.route.params.item.notelp_pelanggan});
    this.setState({status_pesanan: this.props.route.params.item.status_pesanan});
    this.setState({metode_pembayaran: this.props.route.params.item.metode_pembayaran});
    this.setState({jumlah_produk: this.props.route.params.item.jumlah_produk});
    this.setState({foto_produk: this.props.route.params.item.foto_produk});
    this.setState({namaproduk_pesanan: this.props.route.params.item.namaproduk_pesanan});
    this.setState({hargaproduk_pesanan: this.props.route.params.item.hargaproduk_pesanan});
    this.setState({modelproduk_pesanan: this.props.route.params.item.modelproduk_pesanan});
    this.setState({gambarproduk_pesanan: this.props.route.params.item.gambarproduk_pesanan});
    this.setState({biaya_pengiriman: this.props.route.params.item.biaya_pengiriman});
    this.setState({total_harga: this.props.route.params.item.total_harga});
    this.setState({tanggal_pesan: this.props.route.params.item.tanggal_pesan});
    console.log('Id : '+JSON.stringify(this.props.route.params.item.pesanan_id));
  }

  showDialogComponentForUpdate = (existingChatTemplate) => {
    this.refs.popupDialog.show();
    this.setState({
        dialogTitle: 'Update a Chat Template',             
        chat_id: existingChatTemplate.chat_id,
        chat_judul: existingChatTemplate.chat_judul,
        chat_isi: existingChatTemplate.chat_isi,
        isAddNew: false
    });
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
          <BarisInfoDP pertanyaan="Status Pesanan" jawaban={this.state.status_pesanan} />
          <Text style={styles.judul}>Data Pembeli</Text>
          <BarisInfoDP pertanyaan="Nama Lengkap" jawaban={this.state.nama_pelanggan} />
          <BarisInfoDP
            pertanyaan="Alamat Pengiriman"
            jawaban={this.state.alamat_pelanggan}
          />
          <BarisInfoDP
            pertanyaan="Nomor WhatsApp"
            jawaban={'(+62) ' + this.state.notelp_pelanggan}
          />
          <Text style={styles.judul}>Data Pembeli</Text>
          <BarisInfoDP
            pertanyaan="Metode Pembayaran"
            jawaban= {this.state.metode_pembayaran}
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
              source = {{uri : this.state.gambarproduk_pesanan}}
            />
            <View style={{marginLeft: 8}}>
            <Text style = {[styles.produk,{width : 220}]}>{this.state.namaproduk_pesanan}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: Dimensions.get('window').width - 26 - 26 - 55 - 8,
                }}>
                <Text style={styles.variasi}>{this.state.modelproduk_pesanan}</Text>
              <Text style={styles.variasi}>x{this.state.jumlah_produk}</Text>
              </View>
              <Text style={[styles.produk, {alignSelf: 'flex-end'}]}>
                Rp {this.state.hargaproduk_pesanan}
              </Text>
            </View>
          </View>
          <BarisHargaDP
            pertanyaan="Biaya Pengiriman"
            jawaban={"Rp "+this.state.biaya_pengiriman}
            color="#353535"
          />
          <BarisHargaDP
            pertanyaan="Total Pesanan"
            jawaban={"Rp "+this.state.total_harga}
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
            
            {/* Hubung diganti Hapus Sementara */}
            <TouchableWithoutFeedback onPress = {() => {
                      Alert.alert(
                        'Delete',
                        'Delete',
                        [
                            {
                                text: 'No', onPress: () => { },//Do nothing
                                style: 'cancel'
                            },
                            {
                                text: 'Yes', onPress: () => {
                                  deletePesanan6(this.state.pesanan_id).then(() => {
                                    this.props.navigation.navigate('DaftarPesanan2');
                                  }).catch(error => {
                                    alert(`Failed to delete produk with id = ${this.state.pesanan_id}, error=${error}`);
                                });                                
                                }
                            },
                        ],
                        { cancelable: true }
                        );
                   
                    }
                      }>
              <View
                style={[
                  this.props.style,
                  {
                    flexDirection: 'row',
                    backgroundColor: '#284B63',
                    borderColor: this.props.borderColor,
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 8,
                    paddingRight: 8,
                    margin: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 2,
                    elevation: 3,
                  },
                ]}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 14,
                  }}>
                  Hubungi Pembeli
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {/* Telah Dibayar */}
            <TouchableWithoutFeedback onPress = {() => {
                      Alert.alert(
                        'Pesanan Telah Dibayar',
                        'Konfirmasi pesanan telah dibayar',
                        [
                            {
                                text: 'No', onPress: () => { },//Do nothing
                                style: 'cancel'
                            },
                            {
                                text: 'Yes', onPress: () => {
                                  const newPesanan = {
                                    pesanan_id: this.state.pesanan_id,
                                    nama_pelanggan: this.state.nama_pelanggan,
                                    alamat_pelanggan : this.state.alamat_pelanggan,
                                    notelp_pelanggan : this.state.notelp_pelanggan,
                                    status_pesanan : 'Belum Konfirmasi ',
                                    metode_pembayaran: this.state.metode_pembayaran,
                                    jumlah_produk : this.state.jumlah_produk,
                                    foto_produk: this.state.foto_produk,
                                    namaproduk_pesanan : this.state.namaproduk_pesanan,
                                    hargaproduk_pesanan: this.state.hargaproduk_pesanan,
                                    modelproduk_pesanan : this.state.modelproduk_pesanan,
                                    gambarproduk_pesanan: this.state.gambarproduk_pesanan,
                                    biaya_pengiriman: this.state.biaya_pengiriman,
                                    total_harga : this.state.total_harga,
                                    tanggal_pesan : this.state.tanggal_pesan,
                                  };
                                  tambah5Pesanan(newPesanan).then().catch((error) => {
                                    alert(`Tambah User Error ${error}`);
                                   });;
                                  deletePesanan6(this.state.pesanan_id).then(() => {
                                    this.props.navigation.navigate('DaftarPesanan2');
                                  }).catch(error => {
                                    alert(`Failed to delete produk with id = ${this.state.pesanan_id}, error=${error}`);
                                });                                
                                }
                            },
                        ],
                        { cancelable: true }
                        );
                   
                    }
                      }>
              <View
                style={[
                  this.props.style,
                  {
                    flexDirection: 'row',
                    backgroundColor: '#284B63',
                    borderColor: this.props.borderColor,
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 8,
                    paddingRight: 8,
                    margin: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 2,
                    elevation: 3,
                  },
                ]}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 14,
                  }}>
                  Tandai Pesanan Telah Dibayar
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {/* Batal */}

            <TouchableWithoutFeedback onPress = {() => {
                      Alert.alert(
                        'Pesanan Dibatalkan',
                        'Konfirmasi pesanan dibatalkan',
                        [
                            {
                                text: 'No', onPress: () => { },//Do nothing
                                style: 'cancel'
                            },
                            {
                                text: 'Yes', onPress: () => {
                                  const newPesanan = {
                                    pesanan_id: this.state.pesanan_id,
                                    nama_pelanggan: this.state.nama_pelanggan,
                                    alamat_pelanggan : this.state.alamat_pelanggan,
                                    notelp_pelanggan : this.state.notelp_pelanggan,
                                    status_pesanan : 'Batal',
                                    metode_pembayaran: this.state.metode_pembayaran,
                                    jumlah_produk : this.state.jumlah_produk,
                                    foto_produk: this.state.foto_produk,
                                    namaproduk_pesanan : this.state.namaproduk_pesanan,
                                    hargaproduk_pesanan: this.state.hargaproduk_pesanan,
                                    modelproduk_pesanan : this.state.modelproduk_pesanan,
                                    gambarproduk_pesanan: this.state.gambarproduk_pesanan,
                                    biaya_pengiriman: this.state.biaya_pengiriman,
                                    total_harga : this.state.total_harga,
                                    tanggal_pesan : this.state.tanggal_pesan,
                                  };
                                  tambah3Pesanan(newPesanan).then().catch((error) => {
                                    alert(`Tambah User Error ${error}`);
                                   });;
                                  deletePesanan6(this.state.pesanan_id).then(() => {
                                    this.props.navigation.navigate('DaftarPesanan2');
                                  }).catch(error => {
                                    alert(`Failed to delete produk with id = ${this.state.pesanan_id}, error=${error}`);
                                });                                
                                }
                            },
                        ],
                        { cancelable: true }
                        );
                   
                    }
                      }>
              <View
                style={[
                  this.props.style,
                  {
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    borderColor: '#284B63',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 8,
                    paddingRight: 8,
                    margin: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 2,
                    elevation: 3,
                  },
                ]}>
                <Text
                  style={{
                    color: '#284B63',
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 14,
                    
                  }}>
                  Tandai Pesanan Dibatalkan
                </Text>
              </View>
            </TouchableWithoutFeedback>

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


