import React, { useState } from 'react'
import { Divider, Button } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { swapWorkoutExercise } from '../redux/actions/workouts/actionCreators'
import LoadingIndicator from './LoadingIndicator'
import Exercise from "./Exercise";

const SwapExercise = ({ workoutId, exercise, swapWorkoutExercise }) => {

  const [loading, setLoading] = useState(false)

  return (
    <>
      <Exercise exercise={exercise} />
      <View style={styles.inline}>
        <Button
          mode="inline"
          loading={loading}
          onPress={() => {
            swapWorkoutExercise(workoutId, exercise.id)
            setLoading(true)
          }}
        >{loading ? null : "Swap"}
        </Button>
      </View>
      <Divider />
    </>
  )
}

const styles = StyleSheet.create({
  inline: {
    flexDirection:'row',
  }
})

const mapDispatchToProps = dispatch => { return { swapWorkoutExercise: (workoutId, exerciseId) => dispatch(swapWorkoutExercise(workoutId, exerciseId)) } }

export default connect(null, mapDispatchToProps)(SwapExercise)
