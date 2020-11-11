import React from 'react'
import { Card } from 'react-native-paper'

const WorkoutCard = ({ workout, navigation }) => {
  return (
    <Card onPress={() => navigation.navigate("Workout", {
      workout: workout
    })}>
      <Card.Title title={"Workout " + workout.id} subtitle="Strength" />
    </Card>
  )
}

export default WorkoutCard