import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    TextInput,
    Image,
    FlatList,
    TouchableOpacity
}from "react-native";
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { insertNewChatTemplate, queryAllChatTemplate} from '../../database/Data_chat';
import Button_chat from './component/Button_chat';
import Realm from 'realm';
let realm;

class TambahChat extends Component{
    constructor(props) {
        super(props);
        this.state = {
          chat_id: null,
          chat_judul: '',
          chat_isi: '',
          isAddNew: true,
        };
      }
  
    render(){
        return(

            <View style={{flex: 1, backgroundColor: 'white'}}>
              <View style={{paddingLeft: 20, paddingEnd: 20}}>
                <InputForm
                    question="Judul Pesan "
                    example="Tulis judul pesan"
                    onChangeText={judul => this.setState({chat_judul:judul})}
                    >
                      
                    </InputForm>
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
                    onChangeText={(pass) => this.setState({ulangiPassword: pass})}
                    returnKeyType="done"
                    onChangeText={chat_isi => this.setState({chat_isi})}
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
                    <TouchableWithoutFeedback 
                    // customClick={this.tambah_chat.bind(this)}
                    onPress = {() =>{
                      if (this.state.chat_judul.trim() == "") {
                        alert("Mohon Isi Judul");
                        return;
                      }
                      if (this.state.chat_isi.trim() == "") {
                        alert("Isi pesan belum ada");
                        return;
                      }
                      if (this.state.isAddNew == true){
                        const newChatTemplate = {
                          chat_id: Math.floor(Date.now()/ 1000),
                          chat_judul: this.state.chat_judul,
                          chat_isi: this.state.chat_isi,
                          creationDate: new Date()
                        };
                        insertNewChatTemplate(newChatTemplate).then().catch((error) =>{
                        alert(`Insert new chat error ${error}`);
                      });
                      } else {

                      }
                    // alert(`Insert new chat ${newChatTemplate.chat_judul}`)
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

            </View>
        );
    }
}
export default TambahChat;

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