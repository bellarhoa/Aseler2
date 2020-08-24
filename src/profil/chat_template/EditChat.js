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
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { updateChatTemplate, deleteChatTemplate} from '../../database/Data_chat';
import realm from '../../database/Data_chat';
import Button_chat from '../../profil/chat_template/component/Button_chat';

class EditChat extends Component{
  constructor(props){
    super(props);
    this.state = {
      chat_id: 0,
      chat_judul: '',
      chat_isi:'',
      isAddNew: true,
    };
  }

  componentDidMount(){
    this.setState({chat_id : this.props.route.params.item.chat_id});
    this.setState({chat_judul : this.props.route.params.item.chat_judul});
    this.setState({chat_isi : this.props.route.params.item.chat_isi});
    console.log('qwerty'+JSON.stringify(this.props.route.params.item.chat_judul));
  }

  showDialogComponentForUpdate = (existingChatTemplate) => {
    this.refs.popupDialog.show();
    this.setState({
        dialogTitle: 'Update a Chat Template',             
        chat_id: existingChatTemplate.chat_id,
        chat_judul: existingChatTemplate.chat_judul,
        chat_isi: existingChatTemplate.chat_isi,
        isAddNew: false
    });
}

    render(){
        return(  
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <View style={{paddingLeft: 20, paddingEnd: 20}}>
                <InputForm
                    question="Judul Pesan "
                    example="Tulis judul pesan"
                    onChangeText={(judul) => this.setState({chat_judul : judul})} value={this.state.chat_judul}
                    />
                <Text style={{marginTop : 20}}> Isi Pesan Tamplate </Text>

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
                      height: 300,
                      textAlignVertical: 'top',
                    }}
                    multiline={true}
                    placeholder="Tulis pesan template yang dikirim"
                    keyboardType={this.props.type}
                    onChangeText={(isi) => this.setState({chat_isi : isi})} value={this.state.chat_isi}
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
                                  deleteChatTemplate(this.state.chat_id).then(() => {
                                    this.props.navigation.navigate('PesanTamplate');
                                  }).catch(error => {
                                    alert(`Failed to delete todoList with id = ${this.state.chat_id}, error=${error}`);
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
                      {const chatTemplate = {    
                            chat_id:  this.state.chat_id,
                            chat_judul: this.state.chat_judul,   
                            chat_isi: this.state.chat_isi,                                        
                        };    
                        updateChatTemplate(chatTemplate).then().catch((error) => {
                            alert(`Update todoList error ${error}`);
                        });   
                      this.props.navigation.navigate('PesanTamplate')}}
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
                <TouchableWithoutFeedback onPress = {() => 
                      {
                      this.props.navigation.navigate('PesanTamplate')}}
                      >
                      <View
                        style={[
                          this.props.style,
                          {
                            flexDirection: 'row',
                            backgroundColor:'#033C67',
                            borderColor: 'white',
                            borderWidth: 1,
                            borderRadius: 16,
                            paddingTop: 6,
                            paddingBottom: 6,
                            paddingRight: 8,
                            marginTop: 10,
                            marginLeft: 58,
                            margin: 2,
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 2,
                            elevation: 3,
                            width : 300,
                            justifyContent: 'center',
            
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
                          Kirim
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
            </View>
        );
    }
}
export default EditChat;

class InputForm extends Component {
    render() {
      return (
        <View style={{marginTop: 20}}>
          <Text style={styles.p}>{this.props.question}</Text>
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
              }}
              placeholder={this.props.example}
              keyboardType={this.props.type}
              onChangeText={this.props.onChangeText}
              returnKeyType="done"
              secureTextEntry={this.props.pass}
              value = {this.props.value}
            />
          </View>
        </View>
      );
    }
  }

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