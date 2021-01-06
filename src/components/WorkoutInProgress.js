import React, { useEffect } from 'react'
import { List, Button, Divider } from 'react-native-paper'
import { connect } from 'react-redux'
import { FlatList, View, StyleSheet, ScrollView } from 'react-native'
import { keyExtractor } from '../helpers/Functions'
import ExerciseForm from '../forms/exercises/ExerciseForm'
import { swapWorkoutExercise } from '../redux/actions/workouts/actionCreators'

const WorkoutInProgress = ({ navigation, workouts, route, swapWorkoutExercise }) => {

  useEffect(() => {
    navigation.setOptions({ headerTitle: workout.name })
  }, [])

  const { workoutId } = route.params
  const workout = workouts.find(workout => workout.id === workoutId)

  const renderExercises = ({ item }) => {
    return (
      <>
      <List.Item
        title={item.name}
      />
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <ExerciseForm exercise={item} workoutId={workout.id}/>
      </ScrollView>
      <View style={styles.inline}>
        <Button
          mode="inline"
          onPress={() => swapWorkoutExercise(workout.id, item.id)}
          >Swap
        </Button>
      </View>
      <Divider />
      </>
    )
  }

  return (
    <>
    {
    workout
    ?
    <>
    <FlatList 
      data={workout.exercises}
      keyExtractor={keyExtractor}
      renderItem={item => renderExercises(item)}
    />
    <Button
      mode="outlined"
      onPress={() => console.log("workout completed")}
      >Workout Completed
    </Button>
    </>
    :
    null
    }
    </>
  )
}

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
  }
})

const mapStateToProps = store => ({ workouts: store.workouts })
const mapDispatchToProps = dispatch => { 
  return { 
    swapWorkoutExercise: (workoutId, exerciseId) => dispatch(swapWorkoutExercise(workoutId, exerciseId)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutInProgress)