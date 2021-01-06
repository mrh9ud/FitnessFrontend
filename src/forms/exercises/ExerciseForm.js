import React, { useState } from 'react'
import TimeForm from './TimeForm'
import WeightForm from '../exercises/WeightForm'
import { Button, Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

const ExerciseForm = ({ exercise, workoutId }) => {
  const { timed, setted, weighted } = exercise
  const [numOfSets, setNumOfSets] = useState([1, 2, 3])

  const decrementSets = () => {
    if (numOfSets.length > 1)
      setNumOfSets(numOfSets.slice(0, numOfSets.length - 1))
  }
  const incrementSets = () => {
    if (numOfSets.length < 10) {
      setNumOfSets([ ...numOfSets, numOfSets.length + 1 ])
    }
  }

  if (timed && weighted && setted) {
    return (
      <View style={style.inline}>
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

        {numOfSets.map(setNum => {
          return (
            <>
            <WeightForm key={setNum} setNum={setNum} workoutId={workoutId} exerciseId={exercise.id} />
            <TimeForm key={setNum} setNum={setNum} workoutId={workoutId} exerciseId={exercise.id} />
            </>
          )
        })}
      </View>
    )
  } else if (timed && setted) {
    return (
      <View style={style.inline}>
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

        {numOfSets.map(setNum => <TimeForm key={setNum} setNum={setNum} workoutId={workoutId} exerciseId={exercise.id} />)}
      </View>
    )
  } else if (weighted && setted) {
    return (
      <View style={style.inline}>
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

        {numOfSets.map(setNum => <WeightForm key={setNum} setNum={setNum} workoutId={workoutId} exerciseId={exercise.id} />)}
      </View>
    )
  } else if (timed && weighted) {
    return (
      <>
      <TimeForm workoutId={workoutId} exerciseId={exercise.id} />
      <WeightForm workoutId={workoutId} exerciseId={exercise.id} />
      </>
    )
  } else if (timed) {
    return <TimeForm workoutId={workoutId} exerciseId={exercise.id} />
  } else if (weighted) {
    return <WeightForm workoutId={workoutId} exerciseId={exercise.id} />
  } else {
    return null
  }
}

const style = StyleSheet.create({
  inline: {
    flexDirection: 'row',
  }
})

export default ExerciseForm