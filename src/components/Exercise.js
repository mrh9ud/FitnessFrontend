import React, { useState } from 'react'
import { List, Divider } from 'react-native-paper'
import ExerciseModal from './ExerciseModal'
import { connect } from 'react-redux'
import { swapWorkoutExercise } from '../redux/actions/workouts/actionCreators'

const Exercise = ({ exercise, divide=false }) => {

  const [visible, setVisible] = useState(false)
  const closeModal = () => setVisible(false)

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
    null
    }
    <>
      <List.Item
        title={exercise.name}
        description="Press for more info."
        onPress={() => setVisible(true)}
      />
    </>
    {divide
    ?
    <Divider />
    :
    null
    }
    </>
  )
}


const mapDispatchToProps = dispatch => { return { swapWorkoutExercise: (workoutId, exerciseId) => dispatch(swapWorkoutExercise(workoutId, exerciseId)) } }

export default connect(null, mapDispatchToProps)(Exercise)