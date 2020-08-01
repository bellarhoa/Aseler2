import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  // Item,
  // Input,
  // Form,
  // Label,
  // Button,
  // Thumbnail,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import Logo from '../../assets/image/aseler.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoStyle}>
          <Image source={Logo} />
          <Text style={styles.textLogoStyle}>Aseler</Text>
        </View>
        <TextInput placeholder="Email" />
        {/* <Form style={styles.formLoginStyles}>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Username</Text>
            </Label>
            <Input style={styles.inputStyle} />
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Password</Text>
            </Label>
            <Input style={styles.inputStyle} secureTextEntry={true} />
          </Item>
        </Form> */}
        {/* <Button style={styles.footerBottomStyle}>Daftar</Button> */}
        <View style={styles.footersignUpStyle}>
          <TouchableOpacity>
            <Text style={styles.signUpStyle}>
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
  logoStyle: {
    marginTop: 70,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogoStyle: {
    fontSize: 15,
    color: 'black',
  },
  formLoginStyles: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
  },
  inputStyle: {
    color: 'black',
    marginBottom: 6,
    fontSize: 14,
  },
  footerBottomStyle: {
    marginTop: 26,
    paddingTop: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  footersignUpStyle: {
    marginTop: 25,
    alignItems: 'center',
  },
  signUpStyle: {
    color: 'black',
    fontSize: 12,
  },
});

export default LoginPage;
