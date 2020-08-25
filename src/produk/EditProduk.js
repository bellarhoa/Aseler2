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
import { updateProduk, deleteProduk} from '../database/Data_chat';
import realm from '../database/Data_chat';

class EditProduk extends Component{
  constructor(props){
    super(props);
    this.state = {
      produk_id: 0,
      foto_produk: '',
      nama_produk: '',
      tersisa_produk: 0,
      terjual_produk: 0,
      harga_produk: '',
      isAddNew: true,
    };
  }

  componentDidMount(){
    this.setState({foto_produk : this.props.route.params.item.foto_produk});
    this.setState({nama_produk : this.props.route.params.item.nama_produk});
    this.setState({terjual_produk : this.props.route.params.item.terjual_produk});
    this.setState({tersisa_produk : this.props.route.params.item.tersisa_produk});
    this.setState({harga_produk : this.props.route.params.item.harga_produk});
    console.log('Id : '+JSON.stringify(this.props.route.params.item.produk_id));
  }

//   showDialogComponentForUpdate = (existingChatTemplate) => {
//     this.refs.popupDialog.show();
//     this.setState({
//         dialogTitle: 'Update a Chat Template',             
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
                <Text style={{marginTop : 20}}> Nama Produk </Text>
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
                    onChangeText={(namaproduk) => this.setState({nama_produk : namaproduk})} value={this.state.nama_produk}
                    returnKeyType="done"
                  />
                </View>

                <Text style={{marginTop : 20}}> Terjual Produk </Text>
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
                    onChangeText={(terjualp) => this.setState({terjual_produk : terjualp})} value={this.state.terjual_produk}
                    returnKeyType="done"
                  />
                </View>

                <Text style={{marginTop : 20}}> Tersisa Produk </Text>
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
                    onChangeText={(tersisap) => this.setState({tersisa_produk : tersisap})} value={this.state.tersisa_produk}
                    returnKeyType="done"
                  />
                </View>

               <Text style={{marginTop : 20}}> Foto Produk </Text>
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
                      onChangeText={(fotop) => this.setState({foto_produk : fotop})} value={this.state.foto_produk}
                      returnKeyType="done"
                    />
                  </View>

                  <Text style={{marginTop : 20}}> Harga Produk </Text>
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
                        onChangeText={(hargap) => this.setState({harga_produk : hargap})} value={this.state.harga_produk}
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
                                  deleteProduk(this.state.produk_id).then(() => {
                                    this.props.navigation.navigate('PesanTamplate');
                                  }).catch(error => {
                                    alert(`Failed to delete todoList with id = ${this.state.produk_id}, error=${error}`);
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
                      {const produkUp = {    
                            produk_id: this.state.produk_id,
                            foto_produk: this.state.foto_produk,
                            nama_produk: this.state.nama_produk,
                            tersisa_produk: this.state.tersisa_produk,
                            terjual_produk: this.state.terjual_produk,
                            harga_produk: this.state.harga_produk,                                      
                        };    
                        updateProduk(produkUp).then().catch((error) => {
                            alert(`Update produk error ${error}`);
                        });   
                      this.props.navigation.navigate('ProdukPage')}}
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
export default EditProduk;

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