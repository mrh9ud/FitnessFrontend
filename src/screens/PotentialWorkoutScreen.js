import React from 'react'
import { connect } from 'react-redux'
import PotentialExercise from '../components/PotentialExercise'
import { Title, Button } from 'react-native-paper'
import { StyleSheet, View, ScrollView } from 'react-native'

const PotentialWorkoutScreen = ({ workoutPending }) => {

  const renderExercises = () => {
    if (workoutPending) {
      return (
        <ScrollView>
          <Title>Current Generated Workout</Title>
          {workoutPending.current_exercises.map(exercise => <PotentialExercise key={exercise.id} exercise={exercise} />)}
          <View style={styles.button}>
            <Button
            mode="contained"

            >Try Again
            </Button>
            <Button
            mode="contained"

            >Accept
            </Button>
          </View>
        </ScrollView>
      )
    }
    return null
  }

  return (
    renderExercises()
  )
}

const styles= StyleSheet.create({
  button: {
    alignItems: 'center',
  }
})

const mapStateToProps = store => ({ workoutPending: store.workoutPending })

export default connect(mapStateToProps)(PotentialWorkoutScreen)