import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import KategoriPesanan from './component/KategoriPesanan';
import {PieChart} from 'react-native-chart-kit';
import {
  queryAllPesanan0,
  queryAllPesanan1,
  queryAllPesanan2,
  queryAllPesanan3,
  tambahPesanan0,
  tambahPesanan1,
  tambahPesanan2,
  tambahPesanan3,
  tambahPesananMin1,
} from '../database/Realm';
import realm from '../database/Realm';
import {
  PesananSelesai,
  PesananBatal,
  PesananBelumBayar,
  PesananBelumKonfirmasi,
  PesananBelumKirim,
} from '../database/Model';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      belumBayar: [],
      belumKonfirmasi: [],
      belumKirim: [],
      selesai: [],
      duaBelumBayar: [],
      duaBelumKonfirmasi: [],
      duaBelumKirim: [],
    };
    // this.addData();
    this.reloadData1();
    realm.addListener('change', () => {
      this.reloadData1();
    });
    this.reloadData2();
    realm.addListener('change', () => {
      this.reloadData2();
    });
    this.reloadData3();
    realm.addListener('change', () => {
      this.reloadData3();
    });
    this.reloadData4();
    realm.addListener('change', () => {
      this.reloadData4();
    });
  }
  // addData = () => {
  //   for (let i = 0; i < PesananBatal.length; i++) {
  //     tambahPesananMin1(PesananBatal[i])
  //       .then(() => console.log('tambah pesanan selesai'))
  //       .catch((error) => {
  //         alert(`Gagal menambahkan pesanan ${error}`);
  //       });
  //   }
  // };
  reloadData1 = () => {
    queryAllPesanan0()
      .then((pesanan) => {
        this.setState({belumBayar: pesanan});
        this.setState({
          duaBelumBayar: [this.state.belumBayar[0], this.state.belumBayar[1]],
        });
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
  };
  reloadData2 = () => {
    queryAllPesanan1()
      .then((pesanan) => {
        this.setState({belumKonfirmasi: pesanan});
        this.setState({
          duaBelumKonfirmasi: [
            this.state.belumKonfirmasi[0],
            this.state.belumKonfirmasi[1],
          ],
        });
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
  };
  reloadData3 = () => {
    queryAllPesanan2()
      .then((pesanan) => {
        this.setState({belumKirim: pesanan});
        this.setState({
          duaBelumKirim: [this.state.belumKirim[0], this.state.belumKirim[1]],
        });
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
  };
  reloadData4 = () => {
    queryAllPesanan3()
      .then((pesanan) => {
        this.setState({selesai: pesanan});
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text
            style={{
              color: '#353535',
              fontFamily: 'OpenSans-SemiBold',
              fontSize: 14,
            }}>
            Diagram Pemesanan
          </Text>
          <PieChart
            data={[
              {
                name: 'Belum Selesai',
                population:
                  this.state.belumBayar.length +
                  this.state.belumKonfirmasi.length +
                  this.state.belumKirim.length,
                color: '#F97206',
                legendFontColor: '#353535',
                legendFontSize: 12,
              },
              {
                name: 'Selesai',
                population: this.state.selesai.length,
                color: '#033C66',
                legendFontColor: '#353535',
                legendFontSize: 12,
              },
            ]}
            width={300}
            height={130}
            chartConfig={{
              color: (opacity = 1) => 'white',
              labelColor: (opacity = 1) => 'white',
            }}
            accessor="population"
          />
          <Text
            style={{
              color: '#353535',
              fontFamily: 'OpenSans-SemiBold',
              fontSize: 14,
              marginTop: 10,
            }}>
            Diagram Penjualan
          </Text>
          <View style={{flexDirection: 'row'}}>
            <DiagramJual
              name="Belum Bayar"
              jumlahPesanan={this.state.belumBayar.length}
              jumlahTotal={
                this.state.belumBayar.length +
                this.state.belumKonfirmasi.length +
                this.state.duaBelumKirim.length
              }
              color="#FD8204"
            />
            <DiagramJual
              name={'Belum\nKonfirmasi'}
              jumlahPesanan={this.state.belumKonfirmasi.length}
              jumlahTotal={
                this.state.belumBayar.length +
                this.state.belumKonfirmasi.length +
                this.state.duaBelumKirim.length
              }
              color="#FEC831"
            />
            <DiagramJual
              name="Belum Kirim"
              jumlahPesanan={this.state.belumKirim.length}
              jumlahTotal={
                this.state.belumBayar.length +
                this.state.belumKonfirmasi.length +
                this.state.duaBelumKirim.length
              }
              color="#BF60EC"
            />
          </View>
          <KategoriPesanan
            judul="Pesanan Belum Dibayar"
            data={this.state.duaBelumBayar}
            navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate('DaftarPesanan', {type: '0'})
            }
          />
          <KategoriPesanan
            judul="Pesanan Belum Konfirmasi"
            data={this.state.duaBelumKonfirmasi}
            navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate('DaftarPesanan', {type: '1'})
            }
          />
          {/* <View style={{flex: 1, backgroundColor: 'white'}}>
              <FlatList
                style={{marginTop: 10}}
                data={this.state.belumKonfirmasi}
                renderItem={({item}) => (
                  <Item
                    nama={item.nama_pelanggan}
                    produk={item.namaproduk_pesanan}
                    harga={item.hargaproduk_pesanan}
                    status={item.status_pesanan}
                    tekan={() =>
                      this.props.navigation.navigate('DetailPesanan1', {item})
                    }
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </KategoriPesanan> */}
          <KategoriPesanan
            judul="Pesanan Belum Dikirim"
            data={this.state.duaBelumKirim}
            navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate('DaftarPesanan', {type: '2'})
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default DashboardPage;

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

class DiagramJual extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <PieChart
          data={[
            {
              name: 'Belum',
              population: this.props.jumlahPesanan,
              color: this.props.color,
              legendFontColor: '#353535',
              legendFontSize: 12,
            },
            {
              name: 'Selesai',
              population: this.props.jumlahTotal,
              color: '#858585',
              legendFontColor: '#353535',
              legendFontSize: 12,
            },
          ]}
          width={130}
          height={80}
          chartConfig={{
            color: (opacity = 1) => 'white',
            labelColor: (opacity = 1) => 'white',
          }}
          accessor="population"
          hasLegend={false}
        />
        <Text
          style={{
            color: '#353535',
            fontFamily: 'OpenSans-Bold',
            fontSize: 15,
            paddingRight: 60,
          }}>
          {((this.props.jumlahPesanan / this.props.jumlahTotal) * 100).toFixed(
            1,
          )}
          %
        </Text>
        <Text
          style={{
            color: '#353535',
            fontFamily: 'OpenSans-Regular',
            fontSize: 12,
            textAlign: 'center',
            paddingRight: 60,
            marginTop: 5,
          }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
