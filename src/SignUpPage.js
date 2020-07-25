import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

class SignUpPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Sebelum Mulai,</Text>
        <Text style={(styles.p, {marginBottom: 10})}>
          Lengkapi informasi data diri kamu terlebih dahulu untuk membuat akun
          baru
        </Text>
        <InputForm question="Nama Lengkap" example="John Doe" />
        <InputForm
          question="Email"
          example="example@email.com"
          type="email-address"
        />
        <InputForm question="Kata Sandi" example="......" pass={true} />
        <TouchableWithoutFeedback>
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
              Daftar
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.p}>Sudah mempunyai akun?</Text>
            <Text
              style={{
                color: '#3C6E71',
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 50,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  h1: {
    color: '#3C6E71',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
  p: {
    color: '#000000',
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

export default SignUpPage;
