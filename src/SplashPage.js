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
  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          style={styles.image}
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
  image: {
    height: 150,
  },
};
