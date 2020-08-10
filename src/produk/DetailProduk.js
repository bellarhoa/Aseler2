import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import DetailDaftar from './component/DetailDaftar'
import InfoProduct from './component/InfoProduct'


 class DetailProduk extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView scrollEventThrottle={16}>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop : 20}}>
          <View style={{height:250, backgroundColor: 'black'}}>
            <ScrollView horizontal = {true}>
              <DetailDaftar imageUri = 
              {require ('../../assets/image/tas1.jpg')}/>
              <DetailDaftar imageUri = 
              {require ('../../assets/image/tas2.jpg')}/>
              <DetailDaftar imageUri = 
              {require ('../../assets/image/tas3.jpg')}/>
            </ScrollView>
          </View>

          <View style={{ marginTop: 20, paddingHorizontal: 20}}>
            <Text style= {{fontSize: 24, fontWeight: '400'}}>
              Tas Selempang Miniso
            </Text>
            <Text style={{
              fontSize: 24, 
              fontWeight: '700', 
              marginTop: 8, 
              color : '#284B63', 
              marginBottom: 7}}>
              Rp. 180.000
            </Text>
            <InfoProduct pertanyaan="Stok" jawaban="100" />
            <InfoProduct pertanyaan="Terjual" jawaban="50" />
            <InfoProduct pertanyaan="Merek" jawaban="Miniso" />
            <InfoProduct pertanyaan="Dikirim dari" jawaban="Malang, Jawa Timur" />
            <InfoProduct pertanyaan="Kategori" jawaban="Sling Bag" />
            <InfoProduct pertanyaan="Variasi" jawaban="Pink, Biru, Putih" />
            <InfoProduct pertanyaan="Berat" jawaban="100 gram" />

            <View style={{marginTop: 15}}> 
            <Text style={{
              color: '#353535',
              fontFamily: 'OpenSans-Regular',
              fontSize: 15, alignContent:'center'}}>
                Tas selempang kecil buat lipstik atau hp, ukuran kecil yang lucu, bikin look kamu simple tapi tetep kece
 Ukuran: 13.5x4x9.5cm. Bahan PVC yang premium, kualitas yang terbaik, cukup tahan lama.
Multiwarna: biru, merah muda,hitam
Struktur wajar dan Kapasitas besar
Cocok untuk pesta,perjalanan, berbelanja.

MINISO Tas Selempang Lipstik Rantai Wanita Sling Bag Lipstick Kecil
Tas selempang mini buat lipstik,barang-barang kecil atau HP! Cocok untuk acara formal maupun nonformal. Warna yang klasik dan elegan, bikin look Anda terlihat cantik dan fashion. Tas terbuat dari bahan kualitas premium yang cukup tahan lama. 
Fitur:
Chain/rantai yang cantik dan berkelas.
Bahan PVC yang premium, kualitas yang terbaik, cukup tahan lama.
Struktur wajar dan Kapasitas besar.
Cocok untuk pesta,perjalanan, berbelanja.

#taskecil #taslucu #taswanita
            </Text>
            </View>
          </View>

          <View>

          </View>
        </View>
      </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  pertanyaan: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    width: 137,
  },
});

export default DetailProduk;