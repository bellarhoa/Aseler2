import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  filterUsers,
  queryAllPesanan0,
  queryAllPesanan1,
  queryAllPesanan2,
  queryAllPesanan3,
  queryAllPesananMin1,
} from '../database/Realm';
import realm from '../database/Realm';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

const listProfil = [
  {
    id: 1,
    icon: 'person',
    title: 'Profil Akun',
    desc: 'Mengedit data akun aplikasi',
    isRequired: false,
    next: 'EditAkun',
    type: null,
  },
  {
    id: 2,
    icon: 'chatbubble-ellipses',
    title: 'Pesan Template',
    desc: 'Tidak perlu mengetik berulang-ulang',
    isRequired: false,
    next: 'PesanTemplate',
    type: null,
  },
  {
    id: 3,
    icon: 'checkmark-circle',
    title: 'Daftar Pesanan Selesai',
    desc: 'Berisi semua pesanan yang sudah selesai',
    isRequired: false,
    next: 'DaftarPesanan',
    type: '3',
  },
  {
    id: 4,
    icon: 'close-circle',
    title: 'Daftar Pesanan Dibatalkan',
    desc: 'Berisi semua pesanan yang dibatalkan',
    isRequired: false,
    next: 'DaftarPesanan',
    type: '-1',
  },
];

export default class ProfilPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      nUSER: '',
      belumBayar: [],
      belumKonfirmasi: [],
      belumKirim: [],
      selesai: [],
      batal: [],
    };
    this.getUser();
    realm.addListener('change', () => {
      this.getUser();
    });
  }
  getUser = async () => {
    try {
      let user;
      user = '';
      user = await AsyncStorage.getItem('USER');
      this.setState({nUSER: user});
    } catch (e) {
      console.log(e);
    } finally {
      this.reloadData();
    }
  };
  reloadData = () => {
    filterUsers(this.state.nUSER)
      .then((res) => {
        this.setState({user: res[0]});
      })
      .catch((error) => {
        alert(`User Tidak Terdaftar Mohon Daftarkan ${error}`);
      });
    queryAllPesanan0()
      .then((pesanan) => {
        this.setState({belumBayar: pesanan});
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
    queryAllPesanan1()
      .then((pesanan) => {
        this.setState({belumKonfirmasi: pesanan});
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
    queryAllPesanan2()
      .then((pesanan) => {
        this.setState({belumKirim: pesanan});
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
    queryAllPesanan3()
      .then((pesanan) => {
        this.setState({selesai: pesanan});
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
    queryAllPesananMin1()
      .then((pesanan) => {
        this.setState({batal: pesanan});
      })
      .catch((error) => {
        alert(`Gagal mendapatkan pesanan ${error}`);
      });
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: '#284B63',
            paddingBottom: 20,
          }}>
          <View
            style={{
              marginTop: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={[styles.image, {marginLeft: 15}]}
              source={require('../../assets/image/profile.png')}
            />
            <View
              style={{marginLeft: 15, marginTop: 5, justifyContent: 'center'}}>
              <Text style={[styles.h1, {textAlign: 'center'}]}>
                {this.state.user.nama_user}
              </Text>
              <Text style={[styles.h3, {textAlign: 'center'}]}>
                {this.state.user.nama_toko}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={[styles.h6, {marginBottom: 0}]}>
              Harga Total Pemasukan
            </Text>
            <Text style={[styles.h7, {marginTop: 0}]}>
              Rp {currencyFormat(Number(this.state.user.pemasukkan_user))}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 43,
              marginRight: 43,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={[styles.h2, {textAlign: 'center'}]}>
                {this.state.belumBayar.length +
                  this.state.belumKonfirmasi.length +
                  this.state.belumKirim.length +
                  this.state.selesai.length}
              </Text>
              <Text style={[styles.h5, {textAlign: 'left'}]}>Pesanan</Text>
            </View>
            <View>
              <Text style={[styles.h2, {textAlign: 'center'}]}>
                {this.state.selesai.length}
              </Text>
              <Text style={[styles.h5, {textAlign: 'left'}]}>Selesai</Text>
            </View>
            <View>
              <Text style={[styles.h2, {textAlign: 'center'}]}>
                {this.state.batal.length}
              </Text>
              <Text style={[styles.h5, {textAlign: 'left'}]}>Dibatalkan</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <FlatList
            data={listProfil}
            renderItem={({item}) => (
              <Item
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                isRequired={item.isRequired}
                tekan={() =>
                  this.props.navigation.navigate(item.next, {
                    type: item.type,
                    user: this.state.user,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert(
                'Keluar',
                'Anda yakin ingin keluar?',
                [
                  {
                    text: 'Batal',
                    onPress: () => {}, //Do nothing
                    style: 'cancel',
                  },
                  {
                    text: 'Iya',
                    onPress: () => {
                      AsyncStorage.removeItem('USER');
                      AsyncStorage.removeItem('TOKEN');
                      this.props.navigation.navigate('AwalScreen');
                    },
                  },
                ],
                {cancelable: true},
              );
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 16,
                paddingRight: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#C4C4C4',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name="log-out-outline" color="#858585" size={20} />
              <Text style={[styles.h2, {color: '#525252', marginLeft: 10}]}>
                Keluar
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}

const Item = ({icon, title, next, desc, isRequired, tekan}) => (
  <TouchableWithoutFeedback onPress={tekan}>
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,
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
        <Ionicons name={icon} color="#858585" size={20} />
        <View style={{marginLeft: 15}}>
          <Text style={[styles.h2, {color: '#353535'}]}>{title}</Text>
          <Text style={[styles.h4, {color: '#858585'}]}>{desc}</Text>
        </View>
      </View>
      {isRequired === true ? (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 10 / 2,
            backgroundColor: '#F45B69',
          }}
        />
      ) : null}
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  image: {height: 60, width: 60, borderRadius: 60 / 2},
  h1: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  h2: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  h3: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  h4: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  h5: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
  },
  h6: {
    fontSize: 13,
    fontFamily: 'OpenSans',
    color: 'white',
    alignContent: 'center',
    textAlign: 'center',
  },
  h7: {
    marginTop: 5,
    fontSize: 30,
    fontFamily: 'OpenSans-SemiBold',
    color: 'white',
    alignContent: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 9,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
