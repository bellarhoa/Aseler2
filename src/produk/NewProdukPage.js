import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  ScrollView,
  Switch,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonDP from '../pesanan/component/Button_DetailPesanan';

export default class NewProdukPage extends React.Component {
  state = {
    nama: '',
    harga: null,
    stok: null,
    merek: '',
    berat: null,
    kategori: '',
    variasi: '',
    publikasi: true,
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableWithoutFeedback>
            <View
              style={{
                height: 80,
                width: 80,
                backgroundColor: '#EFEFEF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderColor: '#707070',
                  borderRadius: 5,
                  borderStyle: 'dashed',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[styles.hint, {textAlign: 'center'}]}>
                  Tambah Gambar
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Nama Produk
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
            }}>
            <TextInput
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
                width: Dimensions.get('window').width - 18 - 18 - 18,
              }}
              placeholder="Jam Tangan"
              onChangeText={(ans) => this.setState({nama: ans})}
              returnKeyType="done"
            />
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Harga Satuan
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                paddingTop: 9,
                paddingBottom: 9,
                paddingLeft: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
              }}>
              Rp{' '}
            </Text>
            <TextInput
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
              }}
              placeholder="10000"
              keyboardType="numeric"
              onChangeText={(ans) => this.setState({harga: ans})}
              returnKeyType="done"
            />
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Stok
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
              }}
              placeholder="200"
              keyboardType="numeric"
              onChangeText={(ans) => this.setState({nama: ans})}
              returnKeyType="done"
            />
            <Text
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
              }}>
              Buah
            </Text>
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Merek
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
            }}>
            <TextInput
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
                width: Dimensions.get('window').width - 18 - 18 - 18,
              }}
              placeholder="Merek Barang"
              onChangeText={(ans) => this.setState({nama: ans})}
              returnKeyType="done"
            />
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Berat
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
              }}
              placeholder="1000"
              onChangeText={(ans) => this.setState({nama: ans})}
              returnKeyType="done"
            />
            <Text
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
              }}>
              Gram
            </Text>
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Kategori
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('Pilih Kategori');
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#EFEFEF',
                borderRadius: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  padding: 9,
                  fontFamily: 'OpenSans-Regular',
                  fontSize: 14,
                }}>
                Pilih Kategori
              </Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="#353535"
                style={{paddingRight: 9}}
              />
            </View>
          </TouchableWithoutFeedback>

          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Variasi
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('Pilih Variasi');
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#EFEFEF',
                borderRadius: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  padding: 9,
                  fontFamily: 'OpenSans-Regular',
                  fontSize: 14,
                }}>
                Pilih Variasi
              </Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="#353535"
                style={{paddingRight: 9}}
              />
            </View>
          </TouchableWithoutFeedback>

          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Deskripsi Produk
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
            }}>
            <TextInput
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
                width: Dimensions.get('window').width - 18 - 18 - 18,
              }}
              placeholder="Tulis Deskripsi Produk"
              onChangeText={(ans) => this.setState({nama: ans})}
              returnKeyType="done"
              multiline={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[styles.pertanyaan, {marginTop: 20, marginBottom: 20}]}>
              Tampilkan di Publik{'\n'}(dapat dibagikan melalui link)
            </Text>
            <Switch
              trackColor={{false: '#F5F5F5', true: '#E5E5E5'}}
              thumbColor={this.state.publikasi ? '#284B63' : '#E5E5E5'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(sts) => this.setState({publikasi: sts})}
              value={this.state.publikasi}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <ButtonDP
              text="Simpan"
              backgroundColor="#284B63"
              textColor="white"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: Dimensions.get('window').width - 220,
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: 'white',
  },
  pertanyaan: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#353535',
  },
  hint: {fontFamily: 'OpenSans-Regular', fontSize: 14, color: '#707070'},
});
