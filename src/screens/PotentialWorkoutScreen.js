import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PotentialExercise from '../components/PotentialExercise'
import { Title, Button } from 'react-native-paper'
import { StyleSheet, View, ScrollView } from 'react-native'
import { submitWorkoutQuestionnaire, createNewWorkout } from '../redux/actions/workouts/actionCreators'

const PotentialWorkoutScreen = ({ workoutPending, workouts, workoutQuestionResponses, submitWorkoutQuestionnaire, currentUser, createNewWorkout, navigation }) => {

  useEffect(() => {
    navigation.navigate("Workout", { id: workouts[workouts.length - 1].id })
  }, [workouts])

  const renderExercises = () => {
    if (workoutPending.current_exercises) {
      return (
        <ScrollView>
          <Title>Current Generated Workout</Title>
          {workoutPending.current_exercises.map((exercise, index) => <PotentialExercise
            index={index}
            exercise={exercise} />)
          }
          <View style={styles.button}>
            <Button
              mode="contained"
              onPress={() => {
                submitWorkoutQuestionnaire(workoutQuestionResponses, currentUser)
              }}
              >Try Again
            </Button>
            <Button
              mode="contained"
              onPress={() => {
                createNewWorkout(workoutPending.current_exercises, workoutQuestionResponses, currentUser)              
              }}
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

const mapStateToProps = store => ({ 
  workoutPending: store.workoutPending, 
  workoutQuestionResponses: store.workoutQuestionResponses,
  currentUser: store.currentUser,
  workouts: store.workouts
})
const mapDispatchToProps = dispatch => { 
  return { 
    submitWorkoutQuestionnaire: (workoutQuestionResponses, currentUser) => dispatch(submitWorkoutQuestionnaire(workoutQuestionResponses, currentUser)),
    createNewWorkout: (currentExercises, workoutQuestionResponses, currentUser) => dispatch(createNewWorkout(currentExercises, workoutQuestionResponses, currentUser))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(PotentialWorkoutScreen)