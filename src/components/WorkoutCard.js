import React, { useState } from 'react'
import { Card, List, Divider, Button } from 'react-native-paper'
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
      <Card
        onPress={() => navigation.navigate("Workout", { workoutId: workout.id })}
      >
        <Card.Title
          title={workout.name}
          subtitle={focusObj.focus}
          right={props => focusObj.icons.map(icon => <List.Icon {...props} key={Math.random()} icon={icon} />)}
        />
        <Card.Actions>
          {loading
          ?
          <LoadingIndicator />
          :
          <>
          <Button
            icon="play-circle-outline"
            onPress={() => navigation.navigate("Workout In Progress", { workoutId: workout.id })}
          >Start
          </Button>
          <Button
            icon="square-edit-outline"
            onPress={() => navigation.navigate("Edit Workout", { workoutId: workout.id })}
          >Edit
          </Button>
          <Button
            icon="trash-can"
            onPress={confirmWorkoutDeletion}
          >Delete
          </Button>
          </>
          }
          <Divider />
        </Card.Actions>
        <Divider />
      </Card>
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