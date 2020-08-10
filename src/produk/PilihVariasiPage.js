import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

const fruits = ['Apples', 'Oranges', 'Pears'];

export default class PilihVariasiPage extends React.Component {
  state = {selectedFruits: [], new: false};
  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({selectedFruits});
  };
  render() {
    return (
      <View style={styles.container}>
        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange}
        />

        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2,
            elevation: 3,
          }}>
          <Image
            style={{width: 45, height: 45}}
            source={require('../../assets/image/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: 'white',
  },
});
