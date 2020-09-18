import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import {updateUser} from '../../database/Realm';

export default class EditAkun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_user: '',
      nama_toko: '',
      email: '',
      password_user: '',
      ulangipassword_user: '',
    };
  }

  componentDidMount() {
    this.setState({nama_user: this.props.route.params.user.nama_user});
    this.setState({nama_toko: this.props.route.params.user.nama_toko});
    this.setState({email: this.props.route.params.user.email});
    this.setState({password_user: this.props.route.params.user.password_user});
    this.setState({
      ulangipassword_user: this.props.route.params.user.ulangipassword_user,
    });
  }

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
          <Text style={[styles.pertanyaan, {marginTop: 15, marginBottom: 5}]}>
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
              onChangeText={(ans) => this.setState({nama_user: ans})}
              returnKeyType="done"
              value={this.state.nama_user}
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
              onChangeText={(ans) => this.setState({nama_toko: ans})}
              returnKeyType="done"
              value={this.state.nama_toko}
            />
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Email
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
              onChangeText={(ans) => this.setState({email: ans})}
              returnKeyType="done"
              value={this.state.email}
            />
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Kata Sandi
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
              onChangeText={(ans) => this.setState({password_user: ans})}
              returnKeyType="done"
              value={this.state.password_user}
              secureTextEntry={true}
            />
          </View>
          <Text style={[styles.pertanyaan, {marginTop: 20, marginBottom: 5}]}>
            Ulangi Kata Sandi
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
              onChangeText={(ans) => this.setState({ulangipassword_user: ans})}
              returnKeyType="done"
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                Alert.alert(
                  'Simpan Perubahan',
                  'Apakah anda yakin?',
                  [
                    {
                      text: 'Batal',
                      onPress: () => {}, //Do nothing
                      style: 'cancel',
                    },
                    {
                      text: 'Iya',
                      onPress: () => {
                        try {
                          if (this.state.ulangipassword_user == '') {
                            const update = {
                              user_id: this.props.route.params.user.user_id,
                              nama_user: this.state.nama_user,
                              nama_toko: this.state.nama_toko,
                              foto_produk: this.props.route.params.user
                                .foto_produk,
                              url_user: this.props.route.params.user.url_user,
                              email: this.state.email,
                              password_user: this.state.password_user,
                              ulangipassword_user: this.state.password_user,
                              userToken: this.props.route.params.user.userToken,
                              pemasukkan_user: this.props.route.params.user
                                .pemasukkan_user,
                            };
                            updateUser(update);
                          } else if (
                            this.state.password_user ==
                            this.state.ulangipassword_user
                          ) {
                            const update = {
                              user_id: this.props.route.params.user.user_id,
                              nama_user: this.state.nama_user,
                              nama_toko: this.state.nama_toko,
                              foto_produk: this.props.route.params.user
                                .foto_produk,
                              url_user: this.props.route.params.user.url_user,
                              email: this.state.email,
                              password_user: this.state.password_user,
                              ulangipassword_user: this.state
                                .ulangipassword_user,
                              userToken: this.props.route.params.user.userToken,
                              pemasukkan_user: this.props.route.params.user
                                .pemasukkan_user,
                            };
                            updateUser(update);
                          } else {
                          }
                        } catch (e) {
                          Alert.alert(
                            'Pemberitahuan',
                            'Gagal mengubah data akun, mohon dicoba lagi',
                          );
                          console.log(e);
                        } finally {
                          Alert.alert(
                            'Pemberitahuan',
                            'Data akun berhasil diubah',
                          );
                        }
                      },
                    },
                  ],
                  {cancelable: true},
                );
              }}>
              <View
                style={[
                  this.props.style,
                  {
                    flexDirection: 'row',
                    backgroundColor: '#284B63',
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
                    width: 200,
                    justifyContent: 'center',
                  },
                ]}>
                {this.props.children}
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 14,
                    marginLeft: 15,
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
