import React, { Component } from 'react';
import { View } from 'react-native'
// import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { Appbar } from "react-native-paper";

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title='Title' subtitle='Subtitle' />
          <Appbar.Action icon='magnify' />
          <Appbar.Action icon='dots-vertical' />
        </Appbar.Header>
      </View>
    );
  }
}

export default LoginForm;