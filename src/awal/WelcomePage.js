import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Selamat Datang',
    desc: 'Mengatur penjualan online kamu dalam satu aplikasi',
    image: require('../../assets/image/welcome1.png'),
  },
  {
    key: 2,
    title: '',
    desc: 'Semua orang dapat mengakses toko online kamu dengan satu link URL',
    image: require('../../assets/image/welcome2.png'),
  },
  {
    key: 3,
    title: '',
    desc:
      'Kamu bisa menghubungi WhatsApp pembeli tanpa mengetik berulang-ulang',
    image: require('../../assets/image/welcome3.png'),
  },
];

class WelcomePage extends Component {
  state = {
    isFirst: true,
  };
  // componentDidMount() {
  //   if (this.state.isFirst) {
  //     this.setState({isFirst: false});
  //   } else {
  //     this.props.navigation.navigate('Daftar Akun');
  //   }
  // }
  _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <Text
        style={{
          color: '#3C6E71',
          fontFamily: 'OpenSans-SemiBold',
          fontSize: 16,
          margin: 12,
        }}>
        Lanjut
      </Text>
    );
  };
  _renderSkipButton = () => {
    return (
      <Text
        style={{
          color: '#353535',
          fontFamily: 'OpenSans-SemiBold',
          fontSize: 16,
          margin: 12,
        }}>
        Lewati
      </Text>
    );
  };
  _renderDoneButton = () => {
    return (
      <Text
        style={{
          color: '#3C6E71',
          fontFamily: 'OpenSans-SemiBold',
          fontSize: 16,
          margin: 12,
        }}>
        Mulai
      </Text>
    );
  };
  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        showSkipButton={true}
        onDone={() => {
          this.setState({isFirst: false});
          this.props.navigation.navigate('Daftar Akun');
        }}
        activeDotStyle={{backgroundColor: '#353535'}}
        renderNextButton={this._renderNextButton}
        renderSkipButton={this._renderSkipButton}
        renderDoneButton={this._renderDoneButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 40,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#3C6E71',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  image: {
    marginTop: 50,
    height: 190,
    alignSelf: 'center',
  },
  desc: {
    marginTop: 50,
    color: '#353535',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    alignSelf: 'center',
    width: 301,
    textAlign: 'center',
  },
});

export default WelcomePage;
