import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {queryOneUser, filterUsers, queryAllUser} from '../database/Data_chat';
import RealmTask from '../database/RealmTask';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      nama_user: '',
      nama_toko : '',
      foto_produk: '',
      url_user : '',
      email : '',
      password_user : '',
      ulangipassword_user : '',
      userToken : '',
      pemasukkan_user : '',
      isAddNew: true,
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
          example="example@email.com"
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
            if (this.state.nama_user.trim()==""){
              alert("Mohon lengkapi Nama User");
              return;
            }
            if (this.state.password_user.trim()==""){
              alert("Mohon lengkapi Password");
              return;
            }
            filterUsers(this.state.nama_user).then((res) => {
              console.warn('nn')
              if(res.user_id != undefined){
                alert('user_ada')
                
              } else {
                alert(`User Tidak Terdaftar Mohon Daftarkan ${this.state.nama_user}`);
              }
              // console.log('Id : '+JSON.stringify(this.state.user_id
            }).catch((error) => {
              alert(`User Tidak Terdaftar Mohon Daftar ${this.state.nama_user + error}`);
              
            });
            if (this.state.isAddNew ==true){
              
            }
            //   Realm.Sync.User.login('https://crossgroup-wooden-chair.us1a.cloud.realm.io', this.state.email, this.state.password,
            //     (error, user) => {
            //         if (error) {
            //             console.log(error);
            //         } else {
            //           RealmTask = new Realm({
            //               sync: {
            //                   user
            //               }
            //           });
            //             queryOneUser(this.state.nama_user).then().catch((error) => {

            //               alert(`User Tidak Terdaftar Mohon Daftar${error}`);
            //             });
            //         }
            //     }
            // );
            this.props.navigation.navigate('TabScreen');
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
    paddingTop: getStatusBarHeight() + 40,
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
