import React from 'react'
import { workoutFocus } from "../helpers/Functions"
import Exercise from '../components/Exercise'
import { Title, Text, Button } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import LoadingIndicator from '../components/LoadingIndicator'

const WorkoutScreen = ({ workouts, route, navigation, loading }) => {

  const { workoutId } = route.params
  const workout = workouts.find(workout => workout.id === workoutId)

  return (
    <>
    {!loading.loading
    ?
    <ScrollView>
      <Title>{workout.name}</Title>
      <Text>Difficulty: {workout.difficulty}</Text>
      <Text>Focus: {workoutFocus(workout)}</Text>
      <Title>Exercises:</Title>
      {workout.exercises.map(exercise => <Exercise exercise={exercise} divide={true} key={exercise.id} />)}
      <Button
        icon="play-circle-outline"
        onPress={() => navigation.navigate("Workout In Progress", { workoutId })}
        >Start
      </Button>
    </ScrollView>
    :
    <LoadingIndicator />
    }
    </>
  )
}

const mapStateToProps = store => ({ workouts: store.workouts, loading: store.loading })

export default connect(mapStateToProps)(WorkoutScreen)
