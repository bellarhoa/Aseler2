import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import firebase from '../../Firebase';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      ulangiPassword: '',
      errorMessage: null,
    };
  }

  // handleSignUp = () => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => this.props.navigation.navigate('TabScreen'))
  //     .catch((error) => this.setState({errorMessage: error.message}));
  //   console.log('button pressed');
  // };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Sebelum Mulai,</Text>
        <Text style={(styles.p, {marginBottom: 10})}>
          Lengkapi informasi data diri kamu terlebih dahulu untuk membuat akun
          baru
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
        <InputForm
          question="Ulangi Kata Sandi"
          example="......"
          pass={true}
          onChangeText={(pass) => this.setState({ulangiPassword: pass})}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            // if (
            //   this.state.email != '' &&
            //   this.state.password != '' &&
            //   this.state.ulangiPassword != ''
            // ) {
            //   if (validateEmail(this.state.email)) {
            //     if (this.state.password == this.state.ulangiPassword) {
            //       if (this.state.errorMessage != null) {
            //         alert(this.state.errorMessage);
            //       }
            //       this.handleSignUp;
            //     } else {
            //       alert('Kata sandi tidak sama');
            //     }
            //   } else {
            //     alert('Harap isi email dengan benar');
            //   }
            // } else {
            //   alert('Harap isi dengan lengkap');
            // }
            this.props.navigation.navigate('Daftar Akun 2');
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

export default SignUpPage;
