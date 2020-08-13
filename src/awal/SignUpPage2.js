import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SignUpPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Lengkapi Informasi Website</Text>
        <Text style={(styles.p, {marginBottom: 10})}>
          Lengkapi informasi data website kamu terlebih dahulu untuk
          menyambungkan website ke aplikasi Aseler
        </Text>
        <Text style={(styles.p, {marginTop: 20})}>URL Website</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#EFEFEF',
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <Text
            style={
              (styles.p,
              {
                paddingTop: 9,
                paddingBottom: 9,
                paddingLeft: 9,
              })
            }>
            https://
          </Text>
          <TextInput
            style={{
              padding: 9,
              fontFamily: 'OpenSans-Regular',
              fontSize: 14,
              width: 300,
            }}
            placeholder="example.com"
            returnKeyType="done"
            keyboardType="url"
            textContentType="URL"
            onChange={(url) => this.setState({url: url})}
          />
        </View>
        <Text style={(styles.p, {marginTop: 20})}>QRCode API</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            if (this.state.url != '') {
              this.props.navigation.navigate('TabScreen');
            } else {
              alert('Harap isi URL Website terlebih dahulu');
            }
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
              }}>
              Mulai memindai QRCode
            </Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color="#353535"
              style={{paddingRight: 9}}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text
          style={{
            marginTop: 30,
            fontFamily: 'OpenSans-SemiBold',
            fontSize: 14,
            color: '#353535',
          }}>
          Cara Mendapatkan QRCode API
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontFamily: 'OpenSans-Regular',
            fontSize: 12,
            color: '#353535',
            lineHeight: 25,
          }}>
          1. Buka Wordpress - WooCommerce - Settings - Advance{'\n'}2. Buka tab
          REST API dan tekan Add Key{'\n'}3. Tambahkan Description, User, dan
          Permissions menjadi Read/Write{'\n'}4. Tekan Generate API Key{'\n'}5.
          QRCode akan tampil
        </Text>
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
