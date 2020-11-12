import React from 'react'
import { workoutFocus } from "../helpers/WorkoutType"
import Exercise from '../components/Exercise'
import { Title, Text, Subheading } from 'react-native-paper'

const WorkoutScreen = ({ route }) => {
  const { workout } = route.params
  
  return (
    <>
    <Title>Workout Title Here</Title>
    <Text>Difficulty: {workout.difficulty}</Text>
    <Text>Duration: {workout.duration}</Text>
    <Text>Focus: {workoutFocus(workout)}</Text>
    <Text>Completed: {workout.completed ? "Yes" : "No"}</Text>
    <Subheading>Exercises:</Subheading>
    {workout.exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}/>)}
    </>
  )
}

export default (WorkoutScreen)
