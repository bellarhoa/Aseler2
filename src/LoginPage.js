import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  Item,
  Input,
  Form,
  Label,
  Button,
  Thumbnail,
  Text
} from 'native-base';

import Logo from '../images/logo aselern.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginPage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={style.logoStyle}>
          <Thumbnail square large source={Logo}/>
          <Text style={style.textLogoStyle}>Aseler</Text>
        </View>
        <Form style={style.formLoginStyles}>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Username</Text>
            </Label>
            <Input style={styles.inputStyle}/>
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Password</Text>
            </Label>
            <Input style={styles.inputStyle} secureTextEntry={true}/>
          </Item>
        </Form>
        <Button block info style={styles.footerBottomStyle}>
          <Text>Sign In</Text>
        </Button>
        <View style={styles.footersignUpStyle}>
          <TouchableOpacity>
            <Text style={style.signUpStyle}>
              Don't have an account? Register now
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 40,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  logoStyle:{
    marginTop: 70,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLogoStyle:{
    fontSize: 15,
    color: 'white'
  },
  formLoginStyles: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30
  },
  inputStyle:{
    color: 'white',
    marginBottom: 6,
    fontSize: 14
  },
  footerBottomStyle:{
    marginTop : 26,
    paddingTop: 10,
    marginLeft: 16,
    marginRight: 16
  },
  footersignUpStyle:{
    marginTop: 25,
    alignItems: 'center'
  },
  signUpStyle:{
    color: 'white',
    fontSize: 12
  }
});

export default LoginPage;
