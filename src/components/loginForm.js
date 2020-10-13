import React, { Component } from 'react';
import { View, Text } from 'react-native'
// import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { Appbar } from "react-native-paper";

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }
  
  render() {
    //deconstructing the params I sent from MainContainer to test JSON info passage
    const { exampleInfo } = this.props.route.params

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title='App Title Here' subtitle='Subtitle' />
          <Appbar.Action icon='magnify' />
          <Appbar.Action icon='dots-vertical' />
        </Appbar.Header>
        <Text>{exampleInfo}</Text>
      </View>
    );
  }
}

export default LoginForm;