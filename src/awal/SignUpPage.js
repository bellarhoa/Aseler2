import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {tambahUser} from '../database/Realm';
import AsyncStorage from '@react-native-community/async-storage';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_user: '',
      nama_toko: '',
      email: '',
      password_user: '',
      ulangipassword_user: '',
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>Sebelum Mulai,</Text>
          <Text style={(styles.p, {marginBottom: 10})}>
            Lengkapi informasi data diri kamu terlebih dahulu untuk membuat akun
            baru
          </Text>
          <InputForm
            question="Nama User"
            example="John Doe"
            onChangeText={(namauser) => this.setState({nama_user: namauser})}
          />
          <InputForm
            question="Nama Toko"
            example="Jaya Market"
            onChangeText={(namatoko) => this.setState({nama_toko: namatoko})}
          />
          <InputForm
            question="Email"
            example="example@email.com"
            type="email-address"
            onChangeText={(email) => this.setState({email: email})}
          />
          <InputForm
            question="Kata Sandi"
            example="......"
            pass={true}
            onChangeText={(pass) => this.setState({password_user: pass})}
          />
          <InputForm
            question="Ulangi Kata Sandi"
            example="......"
            pass={true}
            onChangeText={(pass) => this.setState({ulangipassword_user: pass})}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              if (this.state.nama_user.trim() == '') {
                alert('Mohon lengkapi Nama User');
                return;
              } else if (this.state.nama_toko.trim() == '') {
                alert('Mohon lengkapi Nama Toko');
                return;
              } else if (this.state.email.trim() == '') {
                alert('Mohon lengkapi Email');
                return;
              } else if (this.state.password_user.trim() == '') {
                alert('Mohon lengkapi Password');
                return;
              } else if (
                this.state.password_user.trim() !=
                this.state.ulangipassword_user.trim()
              ) {
                alert('Password Tidak Sama Mohon Ulangi');
                return;
              } else if (this.state.isAddNew == true) {
                const newUser = {
                  user_id: Math.floor(Math.random() * 10000000000),
                  nama_user: this.state.nama_user,
                  nama_toko: this.state.nama_toko,
                  url_user: 'Urls',
                  foto_produk:
                    'https://www.popularitas.com/wp-content/uploads/2018/04/user-hero-blue.png',
                  email: this.state.email,
                  password_user: this.state.password_user,
                  ulangipassword_user: this.state.ulangipassword_user,
                  pemasukkan_user: '900000000',
                  userToken: Math.random().toString(36).substring(7),
                };
                tambahUser(newUser)
                  .then(() => {
                    AsyncStorage.setItem('USER', newUser.nama_user);
                    AsyncStorage.setItem('TOKEN', newUser.userToken);
                    this.props.navigation.navigate('TabScreen');
                  })
                  .catch((error) => {
                    alert(`Tambah User Error ${error}`);
                  });
              }
            }}>
            <View
              style={{
                backgroundColor: '#284B63',
                borderRadius: 50,
                alignItems: 'center',
                marginTop: 30,
                width: 250,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 14,
                  padding: 9,
                }}>
                Daftar
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              flex: 1,
              marginTop: 10,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.p}>Sudah mempunyai akun?</Text>
              <Text
                style={{
                  color: '#1985A1',
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 14,
                  textDecorationLine: 'underline',

                  marginLeft: 10,
                }}
                onPress={() => this.props.navigation.navigate('Masuk Akun')}>
                Masuk disini
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 10,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  h1: {
    color: '#1985A1',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
  p: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
});

class InputForm extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text style={styles.p}>{this.props.question}</Text>
        <View
          style={{
            backgroundColor: '#EFEFEF',
            borderRadius: 5,
          }}>
          <TextInput
            style={{
              padding: 9,
              fontFamily: 'OpenSans-Regular',
              fontSize: 14,
            }}
            placeholder={this.props.example}
            keyboardType={this.props.type}
            onChangeText={this.props.onChangeText}
            returnKeyType="done"
            secureTextEntry={this.props.pass}
          />
        </View>
      </View>
    );
  }
}

const validateEmail = (email) => {
  const expression = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  return expression.test(String(email).toLowerCase());
};

export default SignUpPage;
