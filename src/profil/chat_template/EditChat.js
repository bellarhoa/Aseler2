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
import Button_chat from '../../profil/chat_template/component/Button_chat';


class EditChat extends Component{
    render(){
        return(

            <View style={{flex: 1, backgroundColor: 'white'}}>
              <View style={{paddingLeft: 20, paddingEnd: 20}}>
                <InputForm
                    question="Judul Pesan "
                    example="Tulis judul pesan"
                    onChangeText={(pass) => this.setState({ulangiPassword: pass})}
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
                    onChangeText={(pass) => this.setState({ulangiPassword: pass})}
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
                    <TouchableWithoutFeedback onPress = {() => this.props.navigation.navigate('PesanTamplate')}>
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