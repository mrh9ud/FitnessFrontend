import React, { useState } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setExerciseStat } from '../../redux/actions/workouts/actionCreators'

const WeightTimeForm = ({ setNum, weighted, setted, timed, workoutId, exerciseId, setExerciseStat }) => {

  const [weight, setWeight] = useState('0')
  const [reps, setReps] = useState('0')
  const [time, setTime] = useState("0")

  return (
    <>
    {setted
    ?
    <Text>Set {setNum}:</Text>
    :
    null}

    <View>
      {weighted
      ?
      <View style={styles.unitStyling}>
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
        <Text>lbs.</Text>
      </View>
      :
      null}

      {timed
      ?
      <View style={styles.unitStyling}>
        <TextInput 
          label="Time"
          mode="outlined"
          placeholder="prev time"
          value={time}
          keyboardType={'numeric'}
          style={styles.inputField}
          onChangeText={value => setTime(value)}
          onBlur={() => setExerciseStat({ key: 'time', value: time, setNum, workoutId, exerciseId })} 
        />
        <Text>secs.</Text>
      </View>
      :
      null}

      {setted
      ?
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
      :
      null}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  inputField: {
    height: 30, width: 80
  },
  unitStyling: { 
    flexDirection: 'row', alignItems: 'center' 
  },
})

const mapDispatchToProps = dispatch => {
  return {
    setExerciseStat: (key, value, setNum, workoutId, exerciseId) => dispatch(setExerciseStat(key, value, setNum, workoutId, exerciseId))
  }
}

export default connect(null, mapDispatchToProps)(WeightTimeForm)