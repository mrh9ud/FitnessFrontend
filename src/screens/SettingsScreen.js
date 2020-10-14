import React from 'react'
import {Text} from "react-native-paper";
import {View} from "react-native";
import NavBar from "../navigations/NavBar";

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <NavBar title='Settings' navigation={navigation}/>
      <Text>
        This is the settings screen
      </Text>
    </View>
  )
}

export default SettingsScreen
