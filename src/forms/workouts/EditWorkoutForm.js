import React, { useState } from 'react'
import { workoutFocus } from "../../helpers/WorkoutType"
import Exercise from '../../components/Exercise'
import { Title, Text, Button } from 'react-native-paper'
import { ScrollView } from 'react-native'
import EditNameForm from '../workouts/EditNameForm'
import { connect } from 'react-redux'
import SwapExercise from "../../components/SwapExercise";

const EditWorkoutForm = ({ route, workouts }) => {

  const { workoutId } = route.params
  const [visible, setVisible] = useState(false)
  const hideModal = () => setVisible(false)
  const showModal = () => setVisible(true)

  const workout = workouts.find(workout => workout.id === workoutId)

  return (
    <ScrollView>
      {visible
        ?
        <EditNameForm
          visible={visible}
          hideModal={hideModal}
          workout={workout}
        />
        :
        null}

      <Title>{workout.name ? workout.name : "Created before Workout name required"}</Title>
      <Text>Difficulty: {workout.difficulty}</Text>
      <Text>Duration: {workout.duration}</Text>
      <Text>Focus: {workoutFocus(workout)}</Text>
      <Text>Completed: {workout.completed ? "Yes" : "No"}</Text>
      <Title>Exercises:</Title>
      {workout.exercises.map(exercise => <SwapExercise workoutId={workout.id} exercise={exercise} key={exercise.id}/>)}
      <Button
        mode="outlined"
        onPress={showModal}
      >Edit Name
      </Button>
    </ScrollView>
  )
}

const mapStateToProps = store => ({ workouts: store.workouts })

export default connect(mapStateToProps)(EditWorkoutForm)
