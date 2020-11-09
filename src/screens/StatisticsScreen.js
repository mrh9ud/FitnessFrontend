import React, { useEffect } from 'react'
import { Text } from "react-native-paper";
import { View } from "react-native";
import { setMenuOptions } from "../redux/actions/navBar/actionCreators";
import { connect } from "react-redux";


const StatisticsScreen = ({ setMenuOptions }) => {

  useEffect(() => {
    let test = [{
      execFunc: () => console.log("test"),
      title: "test"
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
