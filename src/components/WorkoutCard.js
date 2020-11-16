import React, { useState } from 'react'
import { List, Divider, Button } from 'react-native-paper'
import { focusHelper } from "../helpers/Functions";
import { StyleSheet, View, Alert } from "react-native";
import { connect } from 'react-redux'
import { deleteWorkout } from '../redux/actions/workouts/actionCreators'
import LoadingIndicator from './LoadingIndicator'

const WorkoutCard = ({ workout, navigation, deleteWorkout }) => {
  
  const focusObj = focusHelper(workout)
  const [loading, setLoading] = useState(false)

  const confirmWorkoutDeletion = () => {
    Alert.alert(
      "Workout Deletion Confirmation",
      `Are you sure you want to remove "${workout.name}"?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Confirm", onPress: () => {
          setLoading(true)
          deleteWorkout(workout.id) 
        }}
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styleSheet.cards}>
      <List.Item
        title={workout.name ? workout.name : "Created before name was required"}
        description={focusObj.focus}
        right={props => focusObj.icons.map(icon => <List.Icon {...props} key={Math.random()} icon={icon} />)}
        onPress={() => navigation.navigate("Workout", {
        workoutId: workout.id
      })}>
      <Divider />
      </List.Item>
      {loading
      ?
      <LoadingIndicator />
      :
      <Button
        mode="text"
        icon="trash-can"
        onPress={confirmWorkoutDeletion}>
        Delete
      </Button>
      }
      <Divider />
    </View>
  )
}

const styleSheet = StyleSheet.create({
  cards: {
    paddingHorizontal: '2%',
    paddingVertical: '1%'
  }
})

const mapDispatchToProps = dispatch => { return { deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId)) } }

export default connect(null, mapDispatchToProps)(WorkoutCard)