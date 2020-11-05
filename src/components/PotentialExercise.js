import React, { useState } from 'react'
import { List, Button, Divider } from 'react-native-paper'
import PotentialExerciseModal from './PotentialExerciseModal'
import { StyleSheet, View } from 'react-native'
import { getNextPotentialExercise, getPreviousPotentialExercise } from '../redux/actions/workouts/actionCreators'
import { connect } from 'react-redux'

const PotentialExercise = ({ exercise, getPreviousPotentialExercise, getNextPotentialExercise }) => {

  const [visible, setVisible] = useState(false)
  const closeModal = () => setVisible(false)

  return (
    <>
    {visible
    ?
    <PotentialExerciseModal 
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
      <Button
        onPress={() => getPreviousPotentialExercise(exercise.id)}
        icon="arrow-left-bold"
        >Back
      </Button>
      <Button
        onPress={() => getNextPotentialExercise(exercise.id)}
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

const mapDispatchToProps = dispatch => { 
  return { 
    getNextPotentialExercise: exerciseId => dispatch(getNextPotentialExercise(exerciseId)),
    getPreviousPotentialExercise: exerciseId => dispatch(getPreviousPotentialExercise(exerciseId))
  } 
}

export default connect(null, mapDispatchToProps)(PotentialExercise)