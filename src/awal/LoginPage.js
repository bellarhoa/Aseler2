import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {filterUsers} from '../database/Realm';
import AsyncStorage from '@react-native-community/async-storage';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_user: '',
      password_user: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Selamat Datang Kembali</Text>
        <Text style={(styles.p, {marginBottom: 10})}>
          Lengkapi informasi akun kamu terlebih dahulu
        </Text>
        <InputForm
          question="Nama User"
          example="John Doe"
          // type="email-address"
          onChangeText={(namauser) => this.setState({nama_user: namauser})}
        />
        <InputForm
          question="Kata Sandi"
          example="......"
          pass={true}
          onChangeText={(pass) => this.setState({password_user: pass})}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            if (this.state.nama_user.trim() == '') {
              alert('Mohon lengkapi Nama User');
              return;
            } else if (this.state.password_user.trim() == '') {
              alert('Mohon lengkapi Password');
              return;
            } else {
              filterUsers(this.state.nama_user)
                .then((res) => {
                  if (
                    res[0].nama_user == this.state.nama_user &&
                    res[0].password_user == this.state.password_user
                  ) {
                    AsyncStorage.setItem('USER', res[0].nama_user);
                    AsyncStorage.setItem('TOKEN', res[0].userToken);
                    this.props.navigation.navigate('TabScreen');
                  } else {
                    alert(
                      `User Tidak Terdaftar Mohon Daftarkan ${this.state.nama_user}`,
                    );
                  }
                })
                .catch((error) => {
                  alert(
                    `User Tidak Terdaftar Mohon Daftarkan ${
                      this.state.nama_user + error
                    }`,
                  );
                });
            }
          }}>
          <View
            style={{
              backgroundColor: '#284B63',
              borderRadius: 50,
              alignItems: 'center',
              marginTop: 60,
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
              Masuk
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.p}>Belum mempunyai akun?</Text>
            <Text
              style={{
                color: '#1985A1',
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 14,
                textDecorationLine: 'underline',
                marginLeft: 10,
              }}
              onPress={() => this.props.navigation.navigate('Daftar Akun')}>
              Daftar disini
            </Text>
          </View>
        </View>
      </View>
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

export default LoginPage;
