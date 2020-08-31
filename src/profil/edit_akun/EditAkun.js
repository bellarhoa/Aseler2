import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  ScrollView,
  Switch,
  Alert,
  Dimensions,
} from 'react-native';
import {updateUser} from '../../database/Data_chat'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class EditAkun extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: null,
      nama_user: '',
      nama_toko : '',
      foto_produk: '',
      url_user : '',
      email : '',
      password_user : '',
      ulangipassword_user : '',
      userToken : '',
      pemasukkan_user : '',
      isAddNew : true,
    };
  }

  // componentDidMount(){
  //   this.setState({user_id : this.props.route.params.item.user_id});
  //   this.setState({nama_user : this.props.route.params.item.nama_user});
  //   this.setState({nama_toko : this.props.route.params.item.nama_toko});
  //   this.setState({foto_produk : this.props.route.params.item.foto_produk});
  //   this.setState({url_user : this.props.route.params.item.url_user});
  //   this.setState({email : this.props.route.params.item.email});
  //   this.setState({password_user : this.props.route.params.item.password_user});
  //   this.setState({ulangipassword_user : this.props.route.params.item.ulangipassword_user});
  //   this.setState({userToken : this.props.route.params.item.userToken});
  //   this.setState({pemasukkan_user : this.props.route.params.item.pemasukkan_user});
  //   console.log('qwerty'+JSON.stringify(this.props.route.params.item.chat_judul));
  // }

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
                    <TouchableWithoutFeedback onPress = {() => {
                      Alert.alert(
                        'Simpan Perubahan',
                        'Apakah anda yakin?',
                        [
                            {
                                text: 'No', onPress: () => { },//Do nothing
                                style: 'cancel'
                            },
                            {
                                text: 'Yes', onPress: () => {
                                  this.props.navigation.navigate('Profil Saya');
                                }
                            },
                        ],
                        { cancelable: true }
                        );
                   
                    }
                      }>
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
