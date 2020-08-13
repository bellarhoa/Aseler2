import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  ScrollView,
  Switch,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class EditAkun extends React.Component {
  state = {
    nama: '',
    harga: null,
    stok: null,
    merek: '',
    berat: null,
    kategori: '',
    variasi: '',
    publikasi: true,
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableWithoutFeedback>
            <View style={{alignItems: 'center', flex: 1}}>
                <View
                style={{
                    height: 80,
                    width: 80,
                    backgroundColor: '#EFEFEF',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                <View
                    style={{
                    height: 70,
                    width: 70,
                    borderWidth: 1,
                    borderColor: '#707070',
                    borderRadius: 5,
                    borderStyle: 'dashed',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Text style={[styles.hint, {textAlign: 'center'}]}>
                    Tambah Gambar
                    </Text>
                </View>
                </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Nama User
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
            }}>
            <TextInput
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
                width: Dimensions.get('window').width - 18 - 18 - 18,
              }}
              placeholder="John Doe"
              onChangeText={(ans) => this.setState({nama: ans})}
              returnKeyType="done"
            />
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Nama Toko
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                padding: 9,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
                width: Dimensions.get('window').width - 18 - 18 - 18,
              }}
              placeholder="Miniso"
              onChangeText={(ans) => this.setState({nama: ans})}
              returnKeyType="done"
            />
          </View>
          <View style = {{
                  flexDirection : 'row',
                  justifyContent :'space-evenly', 
                  marginTop : 20, 
                  alignItems: 'center', 
                  alignContent : 'center',
                  }}>
                    <TouchableWithoutFeedback onPress = {() => this.props.navigation.navigate('ProfilPage')}>
                      <View
                        style={[
                          this.props.style,
                          {
                            flexDirection: 'row',
                            backgroundColor:'#284B63',
                            borderColor: 'white',
                            borderWidth: 1,
                            borderRadius: 16,
                            paddingTop: 6,
                            paddingBottom: 6,
                            paddingRight: 8,
                            margin: 5,
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 2,
                            elevation: 3,
                            width : 200,
                            justifyContent: "center",
                          },
                        ]}>
                      {this.props.children}
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'OpenSans-SemiBold',
                            fontSize: 14,
                            marginLeft : 15,
                          }}>
                          Simpan
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: 'white',
  },
  pertanyaan: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#353535',
  },
  hint: {fontFamily: 'OpenSans-Regular', fontSize: 14, color: '#707070'},
});
