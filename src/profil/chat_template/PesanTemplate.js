import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { updateChatTemplate, queryAllChatTemplate} from '../../database/Data_chat';
import realm from '../../database/Data_chat';
import Realm from 'realm';

class PesanTemplate extends Component {
  constructor (props){
    super(props);
    this.state = {
      chatTemplate:[]
    };
    this.reloadData()
    realm.addListener('change', () => {
      this.reloadData();
    });
  }

  reloadData = () => {
    queryAllChatTemplate().then((chatTemplate) => {
      this.setState({chatTemplate});
    }).catch((error) => {
      alert(`Insert new chat error ${error}`);
    });
    console.log('reloadData');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          style={{marginTop: 10}}
          data={this.state.chatTemplate}
          renderItem={({item, index}) => (
            <Item
              title={item.chat_judul}
              itemIndex = {index}
              tekan={() => {this.props.navigation.navigate('EditChat'); 
              console.log(item.chat_id)}}
            />
          )}
          keyExtractor={(item) => item.chat_id}
        />

        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2,
            elevation: 3,
          }}
          onPress={() => this.props.navigation.navigate('TambahChat')}>
          <Image
            style={{width: 60, height: 60, marginEnd: 5, marginBottom: 5}}
            source={require('../../../assets/image/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Item = ({title, tekan}) => (
  <TouchableWithoutFeedback onPress={tekan}>
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 6,
        paddingBottom: null,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
          //backgroundColor : 'pink',
        }}>
        <View
          style={{
            marginLeft: 10,
            height: 40,
            alignItems: 'center',
            marginTop: 8,
          }}>
          <Text style={[styles.h2, {color: '#353535'}]}>{title}</Text>
        </View>
        <View style={{flex: 1, height: 40, alignItems: 'flex-end'}}>
          <Ionicons name="send" color="#284B63" size={20} />
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default PesanTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
});
