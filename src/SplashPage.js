import React, {Component} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class SplashPage extends Component {
  loading = async () => {
    return new Promise((resolve) =>
      setTimeout(async () => {
        let userToken;
        userToken = null;
        try {
          userToken = await AsyncStorage.getItem('TOKEN');
        } catch (e) {
          console.log(e);
        }
        resolve(userToken);
      }, 1000),
    );
  };
  async componentDidMount() {
    const data = await this.loading();
    if (data !== null) {
      this.props.navigation.navigate('TabScreen');
    } else {
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
