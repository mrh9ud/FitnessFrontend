import React from 'react'
import {Text} from "react-native-paper";
import { View } from 'react-native'
import NavBar from "../navigations/NavBar";

const MyWorkoutScreen = ({ navigation }) => {
  return (
    <View>
      <NavBar title='My Workout' drawerNavigation={navigation}/>
      <Text>
        This is the my workout screen
      </Text>
    </View>
  )
}

export default MyWorkoutScreen
