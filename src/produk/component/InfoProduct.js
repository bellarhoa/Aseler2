import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export default class InfoProduct extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: 6,
        }}>
        <Text style={styles.pertanyaan}>{this.props.pertanyaan}</Text>
        <Text style={styles.jawaban}>{this.props.jawaban}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pertanyaan: {
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    width: 137,
  },
  jawaban: {
    color: '#353535',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
    width: Dimensions.get('window').width - 26 - 26 - 137,
  },
});
