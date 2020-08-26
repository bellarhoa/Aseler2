import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import KategoriPesanan from './component/KategoriPesanan';
import {PieChart} from 'react-native-chart-kit';

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
              jumlahPesanan={34}
              color="#FD8204"
            />
            <DiagramJual
              name={'Belum\nKonfirmasi'}
              jumlahPesanan={40}
              color="#FEC831"
            />
            <DiagramJual
              name="Belum Kirim"
              jumlahPesanan={58}
              color="#BF60EC"
            />
          </View>
          <KategoriPesanan
            judul="Pesanan Belum Dibayar"
            data={pesananA}
            navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate('DaftarPesanan', pesananA)
            }
          />
          <KategoriPesanan
            judul="Pesanan Belum Konfirmasi"
            data={pesananB}
            navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate('DaftarPesanan', pesananA)
            }
          />
          <KategoriPesanan
            judul="Pesanan Belum Dikirim"
            data={pesananC}
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
