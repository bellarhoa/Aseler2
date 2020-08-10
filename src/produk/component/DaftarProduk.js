import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Card from '../../component/Card';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  LongPressGestureHandler,
} from 'react-native-gesture-handler';

export default class DaftarProduk extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({item}) => (
          <Produk
            //onPress={item.onPress}
            image={item.image}
            namaProduk={item.nama}
            harga={item.harga}
            sisaStok={item.sisaStok}
            navigation={this.props.navigation}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{alignSelf: 'center'}}
        nestedScrollEnabled={true}
      />
    );
  }
}

class Produk extends React.Component {
  render() {
    return (
      <Card
        onPress={() => this.props.navigation.navigate('Detail Produk')}
        style={{
          width: Dimensions.get('window').width / 2 - 40,
          margin: 5,
        }}
        //onPress={this.props.onPress}
      >
        <View>
          <Image
            style={{
              resizeMode: 'stretch',
              height: Dimensions.get('window').width / 2 - 40,
              width: Dimensions.get('window').width / 2 - 40,
            }}
            source={this.props.image}
          />
          <Text
            style={[
              styles.txt,
              {marginTop: 8, marginLeft: 12, marginRight: 12, height: 30},
            ]}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {this.props.namaProduk}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
              marginBottom: 12,
              marginLeft: 12,
              marginRight: 12,
            }}>
            <Text style={styles.txt}>
              Rp {currencyFormat(this.props.harga)}
            </Text>
            <Text style={styles.stok}>{this.props.sisaStok} tersisa</Text>
          </View>
        </View>
      </Card>
    );
  }
}

function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    color: '#353535',
  },
  stok: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    color: '#6E6E6E',
  },
});
