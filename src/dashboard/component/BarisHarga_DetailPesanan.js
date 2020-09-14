import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class BarisHarga extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 6,
          paddingBottom: 6,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.pertanyaan}>{this.props.pertanyaan}</Text>
        <Text
          style={{
            color: this.props.color,
            fontFamily: 'OpenSans-SemiBold',
            fontSize: 12,
          }}>
          {this.props.jawaban}
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
