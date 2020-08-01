import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Warning from '../component/Warning';

class ProdukPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Warning navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ProdukPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
});
