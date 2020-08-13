import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
          question="Email"
          example="example@email.com"
          type="email-address"
          onChangeText={(email) => this.setState({email: email})}
        />
        <InputForm
          question="Kata Sandi"
          example="......"
          pass={true}
          onChangeText={(pass) => this.setState({password: pass})}
        />
        <TouchableWithoutFeedback
          onPress={() => {
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
