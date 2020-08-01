import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

class Warning extends Component {
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            backgroundColor: '#F45B69',
            height: 50,
            borderRadius: 5,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 13,
            paddingRight: 13,
          },
        ]}>
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'OpenSans-Regular',
            fontSize: 12,
          }}>
          Profil toko kamu belum lengkap nih
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'OpenSans-Regular',
              fontSize: 12,
            }}>
            Lengkapi dulu yuk profil toko kamu,{' '}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('Profil Saya')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'OpenSans-Regular',
                fontSize: 12,
                textDecorationLine: 'underline',
              }}>
              klik disini
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default Warning;
