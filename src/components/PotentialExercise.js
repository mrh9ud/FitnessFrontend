import React, { useState } from 'react'
import { List, Button, Divider } from 'react-native-paper'
import PotentialExerciseModal from './PotentialExerciseModal'
import { StyleSheet, View } from 'react-native'
import { getNextPotentialExercise, getPreviousPotentialExercise } from '../redux/actions/workouts/actionCreators'
import { connect } from 'react-redux'

const PotentialExercise = ({ exercise, currentUser, getPreviousPotentialExercise, getNextPotentialExercise, potentialExercises }) => {

  const [visible, setVisible] = useState(false)

  // cycle exercise hooks
  const [alreadyCycledExercises, setAlreadyCycledExercises] = useState([])
  const [currentExercise, setCurrentExercise] = useState(exercise)
  let cycleIndex = 0
  const closeModal = () => setVisible(false)

  const cycleNextExercise = () => {
    for (let i = 0; i < potentialExercises.length; i++) {
      if (currentExercise.id === potentialExercises[i].id) {
        cycleIndex = i + 1
        break
      }
    }
    if (cycleIndex % potentialExercises.length === 0)
      cycleIndex = 0
    setCurrentExercise(potentialExercises[cycleIndex])

    // alreadyCycledExercises
    setAlreadyCycledExercises([...alreadyCycledExercises, currentExercise])
  }

  const cyclePreviousExercise = () => {
    setCurrentExercise(alreadyCycledExercises.pop())
  }

  return (
    <>
    {visible
    ?
    <PotentialExerciseModal 
      visible={visible} 
      closeModal={closeModal} 
      exercise={currentExercise}
    />
    :
    <>
    <List.Item 
      title={currentExercise.name}
      description="Press for more info."
      onPress={() => setVisible(true)}
    />
    <View style={styles.inline}>
      <Button
        onPress={() => {
          if (alreadyCycledExercises.length === 0)
            alert("There is no history")
          else
            cyclePreviousExercise()
        }}
        icon="arrow-left-bold"
        >Back
      </Button>
      <Button
        // onPress={() => getNextPotentialExercise(exercise.id)}
        onPress={() => cycleNextExercise()}
        icon="arrow-right-bold"
        >Next
      </Button>
    </View>
    <Divider />
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

const mapStateToProps = store => ({
  currentUser: store.currentUser,
  potentialExercises: store.workoutPending.potential_exercises
})
const mapDispatchToProps = dispatch => { 
  return { 
    getNextPotentialExercise: exerciseId => dispatch(getNextPotentialExercise(exerciseId)),
    getPreviousPotentialExercise: exerciseId => dispatch(getPreviousPotentialExercise(exerciseId))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(PotentialExercise)