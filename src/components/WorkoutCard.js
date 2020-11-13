import React from 'react'
import {List, Divider} from 'react-native-paper'
import { focusHelper } from "../helpers/Functions";
import {StyleSheet, View} from "react-native";

const WorkoutCard = ({ workout, navigation }) => {
  const focusObj = focusHelper(workout)
  return (
    <View style={styleSheet.cards}>
      <List.Item
        title={workout.name ? workout.name : "Created before name was required"}
        description={focusObj.focus}
        right={props => focusObj.icons.map(icon => <List.Icon {...props} icon={icon} />)}
        onPress={() => navigation.navigate("Workout", {
        workout
      })}>
        <Divider />
      </List.Item>
    </View>
  )
}

const styleSheet = StyleSheet.create({
  cards: {
    paddingHorizontal: '2%',
    paddingVertical: '1%'
  }
})

export default WorkoutCard