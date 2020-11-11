import React from 'react'
import { Text } from "react-native-paper";
import { View } from "react-native";
import { setMenuOptions } from "../redux/actions/navBar/actionCreators";
import { connect } from "react-redux";
import { useFocusEffect } from '@react-navigation/native'

const StatisticsScreen = ({ setMenuOptions }) => {

  useFocusEffect(() => {
    let test = [{
      execFunc: () => console.log("Stats Screen"),
      title: "Stats Screen"
    }]
    setMenuOptions(test)
  })

  return (
    <View>
      <Text>
        This is the statistics screen
      </Text>
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  setMenuOptions: data => dispatch(setMenuOptions(data))
})

export default connect(null, mapDispatchToProps)(StatisticsScreen)
