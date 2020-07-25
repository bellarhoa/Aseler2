import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Halaman Login</Text>
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
});

export default LoginPage;
