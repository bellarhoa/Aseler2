import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    TextInput,
    Alert,
    Image,
    FlatList,
    TouchableOpacity,
    PickerIOSComponent
}from "react-native";
import {TouchableWithoutFeedback, ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { updateUser, deleteUser} from '../database/Data_chat';
import realm from '../database/Data_chat';

class EditUser extends Component{
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
      isAddNew: true,
    };
  }

  componentDidMount(){
    this.setState({user_id : this.props.route.params.item.user_id})
    this.setState({nama_user : this.props.route.params.item.nama_user});
    this.setState({nama_toko : this.props.route.params.item.nama_toko});
    this.setState({foto_produk : this.props.route.params.item.foto_produk});
    this.setState({url_user : this.props.route.params.item.url_user});
    this.setState({email : this.props.route.params.item.email});
    this.setState({password_user : this.props.route.params.item.password_user});
    this.setState({ulangipassword_user : this.props.route.params.item.ulangipassword_user});
    this.setState({userToken : this.props.route.params.item.userToken});
    this.setState({pemasukkan_user : this.props.route.params.item.pemasukkan_user});
    console.log('Id : '+JSON.stringify(this.props.route.params.item.user_id));
  }

//   showDialogComponentForUpdate = (existingChatTemplate) => {
//     this.refs.popupDialog.show();
//     this.setState({
//         dialogTitle: 'Update a User',             
//         chat_id: existingChatTemplate.chat_id,
//         chat_judul: existingChatTemplate.chat_judul,
//         chat_isi: existingChatTemplate.chat_isi,
//         isAddNew: false
//     });
// }

    render(){
        return(  
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <ScrollView>
              <View style={{paddingLeft: 20, paddingEnd: 20}}>
                <Text style={{marginTop : 20}}> Nama User </Text>
              <View
                  style={{
                    backgroundColor: '#EFEFEF',
                    borderRadius: 5,
                  }}>
                  <TextInput
                    style={{
                      padding: 9,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 14,
                      textAlignVertical: 'top',
                    }}
                    multiline={true}
                    placeholder="Tulis pesan template yang dikirim"
                    keyboardType={this.props.type}
                    onChangeText={(namauser) => this.setState({nama_user : namauser})} 
                    value={this.state.nama_user}
                    returnKeyType="done"
                  />
                </View>

               <Text style={{marginTop : 20}}> Id User </Text>
               <Text style={[styles.h2, {color: '#353535'}]}>{this.state.user_id}</Text>
                <View
                    style={{
                      backgroundColor: '#EFEFEF',
                      borderRadius: 5,
                    }}>
                    <TextInput
                      style={{
                        padding: 9,
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 14,
                        textAlignVertical: 'top',
                      }}
                      multiline={true}
                      placeholder="Tulis pesan template yang dikirim"
                      keyboardType={this.props.type}
                      onChangeText={(iduser) => this.setState({user_id : iduser})} 
                      value={this.state.user_id}
                      returnKeyType="done"
                    />
                  </View>

                  <Text style={{marginTop : 20}}> Nama Toko </Text>
                  <View
                      style={{
                        backgroundColor: '#EFEFEF',
                        borderRadius: 5,
                      }}>
                      <TextInput
                        style={{
                          padding: 9,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 14,
                          textAlignVertical: 'top',
                        }}
                        multiline={true}
                        placeholder="Tulis pesan template yang dikirim"
                        keyboardType={this.props.type}
                        onChangeText={(namatoko) => this.setState({nama_toko : namatoko})} 
                        value={this.state.nama_toko}
                        returnKeyType="done"
                      />
                  </View>

                  <Text style={{marginTop : 20}}> foto user</Text>
                  <View
                      style={{
                        backgroundColor: '#EFEFEF',
                        borderRadius: 5,
                      }}>
                      <TextInput
                        style={{
                          padding: 9,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 14,
                          textAlignVertical: 'top',
                        }}
                        multiline={true}
                        placeholder="Tulis pesan template yang dikirim"
                        keyboardType={this.props.type}
                        onChangeText={(fotouser) => this.setState({foto_produk : fotouser})} 
                        value={this.state.foto_produk}
                        returnKeyType="done"
                      />
                  </View>

                  <Text style={{marginTop : 20}}> email </Text>
                  <View
                      style={{
                        backgroundColor: '#EFEFEF',
                        borderRadius: 5,
                      }}>
                      <TextInput
                        style={{
                          padding: 9,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 14,
                          textAlignVertical: 'top',
                        }}
                        multiline={true}
                        placeholder="Tulis pesan template yang dikirim"
                        keyboardType={this.props.type}
                        onChangeText={(emailuser) => this.setState({email : emailuser})} 
                        value={this.state.email}
                        returnKeyType="done"
                      />
                  </View>

                  <Text style={{marginTop : 20}}> Password 1 </Text>
                  <View
                      style={{
                        backgroundColor: '#EFEFEF',
                        borderRadius: 5,
                      }}>
                      <TextInput
                        style={{
                          padding: 9,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 14,
                          textAlignVertical: 'top',
                        }}
                        multiline={true}
                        placeholder="Tulis pesan template yang dikirim"
                        keyboardType={this.props.type}
                        onChangeText={(passworduser) => this.setState({password_user : passworduser})} 
                        value={this.state.password_user}
                        returnKeyType="done"
                      />
                  </View>

                  <Text style={{marginTop : 20}}> Password 2 </Text>
                  <View
                      style={{
                        backgroundColor: '#EFEFEF',
                        borderRadius: 5,
                      }}>
                      <TextInput
                        style={{
                          padding: 9,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 14,
                          textAlignVertical: 'top',
                        }}
                        multiline={true}
                        placeholder="Tulis pesan template yang dikirim"
                        keyboardType={this.props.type}
                        onChangeText={(ulangpass) => this.setState({ulangipassword_user : ulangpass})} 
                        value={this.state.ulangipassword_user}
                        returnKeyType="done"
                      />
                  </View>

                  <Text style={{marginTop : 20}}> User Token </Text>
                  <View
                      style={{
                        backgroundColor: '#EFEFEF',
                        borderRadius: 5,
                      }}>
                      <TextInput
                        style={{
                          padding: 9,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 14,
                          textAlignVertical: 'top',
                        }}
                        multiline={true}
                        placeholder="Tulis pesan template yang dikirim"
                        keyboardType={this.props.type}
                        onChangeText={(tokenus) => this.setState({userToken : tokenus})} 
                        value={this.state.userToken}
                        returnKeyType="done"
                      />
                  </View>

                  <Text style={{marginTop : 20}}> Pemasukan </Text>
                  <View
                      style={{
                        backgroundColor: '#EFEFEF',
                        borderRadius: 5,
                      }}>
                      <TextInput
                        style={{
                          padding: 9,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 14,
                          textAlignVertical: 'top',
                        }}
                        multiline={true}
                        placeholder="Tulis pesan template yang dikirim"
                        keyboardType={this.props.type}
                        onChangeText={(pemasukantok) => this.setState({pemasukkan_user : pemasukantok})} 
                        value={this.state.pemasukkan_user}
                        returnKeyType="done"
                      />
                  </View>
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
                        'Delete',
                        'Delete a chat',
                        [
                            {
                                text: 'No', onPress: () => { },//Do nothing
                                style: 'cancel'
                            },
                            {
                                text: 'Yes', onPress: () => {
                                  deleteUser(this.state.user_id).then(() => {
                                    this.props.navigation.navigate('ProdukPage');
                                  }).catch(error => {
                                    alert(`Failed to delete produk with id = ${this.state.user_id}, error=${error}`);
                                });                                
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
                            backgroundColor:'#F45B69',
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
                            width : 120,
                            justifyContent: "center",
                          },
                        ]}>
                      {this.props.children}
                      <View>
                        <Ionicons name= 'trash' color="white" size={20} />
                        </View>
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'OpenSans-SemiBold',
                            fontSize: 14,
                            marginLeft : 10,
                          }}>
                          Hapus
                        </Text>
                        
                      </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress = {() => 
                    
                      {
                        const newUser = {
                            user_id : this.state.user_id,
                            nama_user : this.state.nama_user,
                            nama_toko : this.state.nama_toko,
                            url_user : 'Urlsuser',
                            foto_produk : this.state.foto_produk,
                            email : this.state.email,
                            password_user : this.state.password_user,
                            ulangipassword_user : this.state.ulangipassword_user,
                            pemasukkan_user : this.state.pemasukkan_user,
                            userToken : this.state.userToken,
                          };
                           
                        updateUser(newUser).then().catch((error) => {
                            alert(`Update produk error ${error}`);
                        });   
                        this.props.navigation.navigate('ProdukPage');}}
                      >
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
                            margin: 2,
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 2,
                            elevation: 3,
                            width : 120,
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
export default EditUser;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center', 
    },
    h1: {
        color: '#FFFFFF',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 18,
      },
      h2: {
        color: '#FFFFFF',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
      },
})