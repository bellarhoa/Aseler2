import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Card from '../component/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = ['Baju', 'Celana'];

export default class PilihKategoriPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <Kategori kategori={item} />}
          keyExtractor={(item) => item}
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

class Kategori extends React.Component {
  render() {
    return (
      <Card
        style={{
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 15,
            paddingRight: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#353535',
              fontFamily: 'OpenSans-Regular',
              fontSize: 14,
            }}>
            {this.props.kategori}
          </Text>
          <Ionicons name="ellipsis-vertical" color="#858585" size={18} />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: 'white',
  },
});
