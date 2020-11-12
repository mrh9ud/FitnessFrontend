import React from 'react'
import { Card } from 'react-native-paper'

const WorkoutCard = ({ workout, navigation }) => {
  const focusHelper = () => {
    const focus = []
    if (workout.strength)
      focus.push("Strength")
    if (workout.cardio)
      focus.push("Cardio")
    if (workout.flexibility)
      focus.push("Flexibility")
    return focus.join(", ")
  }
  return (
    <>
      <Card onPress={() => navigation.navigate("Workout", {
        workout
      })}>
        <Card.Title title={"Workout " + workout.id} subtitle={focusHelper()}/>
      </Card>
    </>
  )
}

export default WorkoutCard