import React, {Component} from 'react';
import {View, StyleSheet,FlatList, Text, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import KategoriPesanan from './component/KategoriPesanan';
import {PieChart} from 'react-native-chart-kit';
import {queryAllPesanan4, queryAllPesanan5, queryAllPesanan6} from '../database/Data_chat';
import realm from '../database/Data_chat';
import RealmTask from '../database/RealmTask';

//Pesanan 2 = selsai, Pesanan 3 = batal, Pesanan 4 = belum kirim, Pesanan 5 = konfirmasi, Pesanan 6 = belum bayar

const pesananA = [
  {
    id: 1,
    nama: 'Bella Rhobiatul Adhawiyah',
    produk: 'Jam Tangan, Tas Selempang',
    status: 0,
    harga: 82000,
    tanggal: '15 Agustus 2020',
  },
  {
    id: 2,
    nama: 'Rhobiatul Adhawiyah',
    produk: 'Jam Dinding',
    status: 0,
    harga: 14000,
    tanggal: '15 Agustus 2020',
  },
];

const pesananB = [
  {
    id: 1,
    nama: 'Bella Rhobiatul Adhawiyah',
    produk: 'Jam Tangan, Tas Selempang',
    status: 1,
    harga: 82000,
    tanggal: '15 Agustus 2020',
  },
  {
    id: 2,
    nama: 'Rhobiatul Adhawiyah',
    produk: 'Jam Dinding',
    status: 1,
    harga: 14000,
    tanggal: '15 Agustus 2020',
  },
];

const pesananC = [
  {
    id: 1,
    nama: 'Bella Rhobiatul Adhawiyah',
    produk: 'Jam Tangan, Tas Selempang',
    status: 2,
    harga: 82000,
    tanggal: '15 Agustus 2020',
  },
  {
    id: 2,
    nama: 'Rhobiatul Adhawiyah',
    produk: 'Jam Dinding',
    status: 2,
    harga: 14000,
    tanggal: '15 Agustus 2020',
  },
];

class DashboardPage extends Component {
  constructor (props){
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
    this.reloadData1()
    realm.addListener('change', () => {
      this.reloadData1();
    });
    this.reloadData2()
    realm.addListener('change', () => {
      this.reloadData2();
    });
    this.reloadData2()
    realm.addListener('change', () => {
      this.reloadData2();
    });
  }

  reloadData1 = () => {
    queryAllPesanan6().then((belumBayar) => {
      this.setState({belumBayar:belumBayar});
    }).catch((error) => {
      alert(`Insert new chat error ${error}`);
    });
    console.log('reloadData');
    this.setState({duaBelumBayar: [this.state.belumBayar[0], this.state.belumBayar[1]]});
  }

  reloadData2 = () => {
    queryAllPesanan5().then((belumKonfirmasi) => {
      this.setState({belumKonfirmasi});
    }).catch((error) => {
      alert(`Insert new chat error ${error}`);
    });
    console.log('reloadData');
    this.setState({duaBelumKonfirmasi: [this.state.belumKonfirmasi[0], this.state.belumKonfirmasi[1]]});
  }

  reloadData3 = () => {
    queryAllPesanan4().then((belumKirim) => {
      this.setState({belumKirim});
    }).catch((error) => {
      alert(`Insert new chat error ${error}`);
    });
    console.log('reloadData');
    this.setState({duaBelumKirim: [this.state.belumKirim[0], this.state.belumKirim[1]]});
  }

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
                population: 60,
                color: '#F97206',
                legendFontColor: '#353535',
                legendFontSize: 12,
              },
              {
                name: 'Selesai',
                population: 40.0,
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
              color="#FD8204"
            />
            <DiagramJual
              name={'Belum\nKonfirmasi'}
              jumlahPesanan={this.state.belumKonfirmasi.length}
              color="#FEC831"
            />
            <DiagramJual
              name="Belum Kirim"
              jumlahPesanan={this.state.belumKirim.length}
              color="#BF60EC"
            />
          </View>
          <KategoriPesanan
            judul="Pesanan Belum Dibayar"
            data={this.state.duaBelumBayar}
            navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate('DaftarPesanan2', pesananA)
            }
          />
          <KategoriPesanan
            judul="Pesanan Belum Konfirmasi"
            // data={this.state.duaBelumKonfirmasi}
            // navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate('DaftarPesanan1', pesananA)
            }
          >
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <FlatList
              style={{marginTop: 10}}
              data={this.state.belumKonfirmasi}
              renderItem={({item}) => (
                  <Item
                  nama={item.nama_pelanggan}
                  produk={item.namaproduk_pesanan}
                  harga={item.hargaproduk_pesanan}
                  status={item.status_pesanan}
                  tekan={() => this.props.navigation.navigate('DetailPesanan1', {item})}
                  />
              )}
              keyExtractor={(item) => item.id}
              />
            </View>
          </KategoriPesanan>


          <KategoriPesanan
            judul="Pesanan Belum Dikirim"
            data={this.state.duaBelumKirim}
            navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate('DaftarPesanan', pesananA)
            }
          />
        </ScrollView>
      </View>
    );
  }
}

const Item = ({nama, produk, harga, tekan, status}) => (
  <TouchableWithoutFeedback onPress={tekan}>
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
          //marginTop: 10,
        }}>
        <View style = {{width : 250}}>
          <Text style={[styles.h2, {color: '#353535'}]}>{nama}</Text>
          <Text style={[styles.h1, {color: '#858585'}]}>{produk}</Text>
        </View>
        <View style={{alignItems:'flex-end', flex: 1}}>
          <Text style={[styles.h4, {color: 'red'}]}>{status}</Text>
          <Text style={[styles.h3, {color: '#858585'}]}> Rp. {harga}</Text>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

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
    marginTop: 10
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
              population: 100 - this.props.jumlahPesanan,
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
          {this.props.jumlahPesanan}%
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
