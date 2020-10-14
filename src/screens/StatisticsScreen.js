import React from 'react'
import {Text} from "react-native-paper";
import {View} from "react-native";
import NavBar from "../navigations/NavBar";

const StatisticsScreen = ({ navigation }) => {
  return (
    <View>
      <NavBar title='Stats' navigation={navigation}/>
      <Text>
        This is the statistics screen
      </Text>
    </View>
  )
}

export default StatisticsScreen
