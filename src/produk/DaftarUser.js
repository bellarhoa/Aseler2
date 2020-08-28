import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {queryAllUser} from '../database/Data_chat';
import realm from '../database/Data_chat';
import Realm from 'realm';

class DaftarUser extends Component {
  constructor (props){
    super(props);
    this.state = {
        userlist:[]
    };
    this.reloadData()
    realm.addListener('change', () => {
      this.reloadData();
    });
  }

  reloadData = () => {
    queryAllUser().then((userlist) => {
      this.setState({userlist});
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
          data={this.state.userlist}
          renderItem={({item, index}) => (
            <Item
              title={item.nama_user}
              id = {item.user_id}
              itemIndex = {index}
              tekan={() => {this.props.navigation.navigate('EditUser', {item}); 
            }
            }
            />
          )}
          keyExtractor={(item) => item.user_id}
        />
      </View>
    );
  }
}

const Item = ({title, id, tekan}) => (
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
            marginBottom : 10
          }}>
          <Text style={[styles.h2, {color: '#353535'}]}>{title}</Text>
          <Text style={[styles.h2, {color: '#353535'}]}>{id}</Text>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default DaftarUser;

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
