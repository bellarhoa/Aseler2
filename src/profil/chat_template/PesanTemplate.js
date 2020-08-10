import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';


 class PesanTamplate extends React.Component {
  render() {
    return (
      <View >
            <Text>
                Tas selempang 
            </Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  pertanyaan: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    width: 137,
  },
});

export default PesanTamplate;