import React, { useState } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setExerciseStat } from '../../redux/actions/workouts/actionCreators'

const WeightForm = ({ setNum, workoutId, exerciseId, setExerciseStat }) => {

  const [weight, setWeight] = useState('1337')
  const [reps, setReps] = useState('10')

  return (
    <>
    <Text>Set {setNum}:</Text>
    <View>
      <TextInput
        label="Weight"
        mode="outlined"
        placeholder="prev weight"
        value={weight}
        keyboardType={'numeric'}
        style={styles.inputField}
        onChangeText={value => setWeight(value)}
        onBlur={() => setExerciseStat({ key: 'weight', value: weight, setNum, workoutId, exerciseId })}
      />
  
      <TextInput 
        label="Reps"
        mode="outlined"
        placeholder="10"
        value={reps}
        keyboardType={'numeric'}
        style={styles.inputField}
        onChangeText={value => setReps(value)}
        onBlur={() => setExerciseStat({ key: 'reps', value: reps, setNum, workoutId, exerciseId })}
      />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  inputField: {
    height: 30, width: 80
  }
})

const mapDispatchToProps = dispatch => {
  return {
    setExerciseStat: (key, value, setNum, workoutId, exerciseId) => dispatch(setExerciseStat(key, value, setNum, workoutId, exerciseId))
  }
}

export default connect(null, mapDispatchToProps)(WeightForm)