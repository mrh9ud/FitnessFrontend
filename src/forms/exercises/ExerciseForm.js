import React, { useState } from 'react'
import WeightTimeForm from '../exercises/WeightTimeForm'
import { Button, Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

const ExerciseForm = ({ exercise, workoutId }) => {
  const { timed, setted, weighted } = exercise
  const [numOfSets, setNumOfSets] = useState([ 1 ])

  const decrementSets = () => {
    if (numOfSets.length > 1)
      setNumOfSets(numOfSets.slice(0, numOfSets.length - 1))
  }
  const incrementSets = () => {
    if (numOfSets.length < 10) 
      setNumOfSets([ ...numOfSets, numOfSets.length + 1 ])
  }

  const renderSetNumChanger = () => {
    return (
      <>
      <Text>No. Sets</Text>
      <Button 
        icon="minus" 
        onPress={decrementSets}>
      </Button>
      <Text>{numOfSets.length}</Text>
      <Button 
        icon="plus" 
        onPress={incrementSets}>
      </Button>
      </>
    )
  }

  if (timed && weighted && setted) {
    return (
      <View style={styles.inline}>
        {renderSetNumChanger()}
        {numOfSets.map(setNum => <WeightTimeForm key={setNum} setNum={setNum} workoutId={workoutId} exerciseId={exercise.id} />)}
      </View>
    )
  } else if (timed && setted) {
    return (
      <View style={styles.inline}>
        {renderSetNumChanger()}
        {numOfSets.map(setNum => <WeightTimeForm key={setNum} timed={true} setted={true} setNum={setNum} workoutId={workoutId} exerciseId={exercise.id} />)}
      </View>
    )
  } else if (weighted && setted) {
    return (
      <View style={styles.inline}>
        {renderSetNumChanger()}
        {numOfSets.map(setNum => <WeightTimeForm weighted={true} setted={true} key={setNum} setNum={setNum} workoutId={workoutId} exerciseId={exercise.id} />)}
      </View>
    )
  } else if (timed && weighted)
      return <WeightTimeForm setNum={numOfSets.length} timed={true} weighted={true} workoutId={workoutId} exerciseId={exercise.id} />
    else if (timed)
      return <WeightTimeForm setNum={numOfSets.length} timed={true} workoutId={workoutId} exerciseId={exercise.id} />
    else if (weighted)
      return <WeightTimeForm setNum={numOfSets.length} weighted={true} workoutId={workoutId} exerciseId={exercise.id} />
    else if (setted) {
      return (
        <View style={styles.inline}>
          {renderSetNumChanger()}
          {numOfSets.map(setNum => <WeightTimeForm key={setNum} setNum={setNum} setted={true} workoutId={workoutId} exerciseId={exercise.id} />)}
        </View>
      )
    }
    else
      return null
}

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
  }
})

export default ExerciseForm