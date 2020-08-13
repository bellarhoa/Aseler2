import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';

export default class ButtonChat extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress = {this.props.onPress}>
        <View
          style={[
            this.props.style,
            {
              flexDirection: 'row',
              backgroundColor: this.props.backgroundColor,
              borderColor: this.props.borderColor,
              borderWidth: 1,
              borderRadius: 5,
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 8,
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
              width : 100,
              justifyContent: "center",
            },
          ]}>
        {this.props.children}
          <Text
            style={{
              color: this.props.textColor,
              fontFamily: 'OpenSans-SemiBold',
              fontSize: 14,
              marginLeft : 15,
            }}>
            {this.props.text}
          </Text>
        </View>

      </TouchableWithoutFeedback>

    );
  }
}
