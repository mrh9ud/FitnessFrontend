import React, { useEffect } from 'react'
import { Text } from 'react-native-paper'
import { connect } from 'react-redux'

const WorkoutInProgress = ({ navigation, workouts, route }) => {

  useEffect(() => {
    navigation.setOptions({ title: workout.name })
  }, [workouts])

  const { workoutId } = route.params
  const workout = workouts.find(workout => workout.id === workoutId)

  console.log("route: ", route, "route.params: ", route.params, "navigation: ", navigation)
  return (
    <Text>Testing Workout in progress component</Text>
  )
}

const mapStateToProps = store => ({ workouts: store.workouts })

export default connect(mapStateToProps)(WorkoutInProgress)