import React, { useState } from 'react'
import { workoutFocus } from "../helpers/WorkoutType"
import Exercise from '../components/Exercise'
import { Title, Text, Subheading, Button } from 'react-native-paper'
import { ScrollView } from 'react-native'
import EditNameForm from '../forms/workouts/EditNameForm'
import { connect } from 'react-redux'

const WorkoutScreen = ({ route }) => {

  const { workout } = route.params
  const [visible, setVisible] = useState(false)
  const hideModal = () => setVisible(false)
  const showModal = () => setVisible(true)
  
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
      <Subheading>Exercises:</Subheading>
      {workout.exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}/>)}
      <Button
        mode="outlined"
        onPress={showModal}
        >Edit Name
      </Button>
    </ScrollView>
  )
}

const mapStateToProps = store => ({ workouts: store.workouts })

export default connect(mapStateToProps)(WorkoutScreen)
