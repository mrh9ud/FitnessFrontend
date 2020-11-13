import React, { useState } from 'react'
import { List, Button } from 'react-native-paper'
import ExerciseModal from './ExerciseModal'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { swapWorkoutExercise } from '../redux/actions/workouts/actionCreators'
import LoadingIndicator from './LoadingIndicator'

const Exercise = ({ exercise, swapWorkoutExercise, workoutId }) => {

  const [visible, setVisible] = useState(false)
  const closeModal = () => setVisible(false)
  const [loading, setLoading] = useState(false)

  return (
    <>
    {visible
    ?
    <ExerciseModal 
      visible={visible}
      closeModal={closeModal}
      exercise={exercise}
    />
    :
    <>
    <List.Item 
      title={exercise.name}
      description="Press for more info."
      onPress={() => setVisible(true)}
    />
    <View style={styles.inline}>
      {loading
      ? 
      <LoadingIndicator />
      :
      <Button
        mode="outlined"
        onPress={() => {
          swapWorkoutExercise(workoutId, exercise.id)
          setLoading(true)
        }}
        >Swap
      </Button>
      }
    </View>
    </>
    }
    </>
  )
}

const styles = StyleSheet.create({
  inline: {
    flexDirection:'row', 
  }
})

const mapDispatchToProps = dispatch => { return { swapWorkoutExercise: (workoutId, exerciseId) => dispatch(swapWorkoutExercise(workoutId, exerciseId)) } }

export default connect(null, mapDispatchToProps)(Exercise)