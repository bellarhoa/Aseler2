import React, {Component} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '../Firebase';

export default class SplashPage extends Component {
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.props.navigation.navigate(user ? 'TabScreen' : 'AwalScreen');
  //   });
  // }
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('AwalScreen');
    }
  }
  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          style={{height: 150, width: 200, marginBottom: 10}}
          source={require('../assets/image/aseler.png')}
        />
        <ActivityIndicator size="small" color="#284B63" />
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
};
