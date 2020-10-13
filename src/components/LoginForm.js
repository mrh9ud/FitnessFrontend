import React, { useState } from 'react';
import { View } from 'react-native'
import { Appbar, TextInput } from "react-native-paper";

function LoginForm() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title='Login' subtitle='Submit Login Info' />
        <Appbar.Action icon='magnify' />
        <Appbar.Action icon='dots-vertical' />
      </Appbar.Header>

      <View>
        <TextInput
          label='Username'
          mode='outlined'
          style={{paddingHorizontal: '5%', paddingVertical: '5%'}}
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          label='Password'
          mode='outlined'
          style={{paddingHorizontal: '5%', paddingVertical: '5%'}}
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

export default LoginForm;