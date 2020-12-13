import React from 'react'
import { workoutFocus } from "../helpers/Functions"
import Exercise from '../components/Exercise'
import { Title, Text, Button } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

const WorkoutScreen = ({ route, workouts, navigation }) => {

  const { workoutId } = route.params
  const workout = workouts.find(workout => workout.id === workoutId)

  return (
    <ScrollView>
      <Title>{workout.name ? workout.name : "Created before Workout name required"}</Title>
      <Text>Difficulty: {workout.difficulty}</Text>
      <Text>Duration: {workout.duration}</Text>
      <Text>Focus: {workoutFocus(workout)}</Text>
      <Text>Completed: {workout.completed ? "Yes" : "No"}</Text>
      <Title>Exercises:</Title>
      {workout.exercises.map(exercise => <Exercise exercise={exercise} divide={true} key={exercise.id} />)}
      <Button
        icon="play-circle-outline"
        onPress={() => navigation.navigate("Workout In Progress", { workoutId: workout.id })}
        >Start
      </Button>
    </ScrollView>
  )
}

const mapStateToProps = store => ({ workouts: store.workouts })

export default connect(mapStateToProps)(WorkoutScreen)
