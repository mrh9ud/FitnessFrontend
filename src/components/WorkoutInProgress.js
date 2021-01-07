import React, { useEffect } from 'react'
import { List, Button, Divider } from 'react-native-paper'
import { connect } from 'react-redux'
import { FlatList, View, StyleSheet, ScrollView, Alert } from 'react-native'
import { keyExtractor } from '../helpers/Functions'
import ExerciseForm from '../forms/exercises/ExerciseForm'
import { swapWorkoutExercise, submitCompletedWorkout } from '../redux/actions/workouts/actionCreators'

const WorkoutInProgress = ({ navigation, loading, currentUser, submitCompletedWorkout, workouts, route, swapWorkoutExercise }) => {

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
          loading={loading.loading}
          disabled={loading.loading}
          >Swap
        </Button>
      </View>
      <Divider />
      </>
    )
  }

  const validateFieldValues = () => {
    let noStatExercises = []
    workout.exercises.forEach(exercise => {
      if (!exercise.stats)
        noStatExercises.push(exercise.name)
    })
    if (noStatExercises.length > 0) {
      Alert.alert(
        "Warning: Exercises with no information",
        `Submit workout without info. for ${noStatExercises.join(', ')}?`,
        [
          {
            text: "Cancel",
            style: 'cancel'
          },
          { text: "Confirm", onPress: () => {
            submitCompletedWorkout(currentUser.id, workout.id, workout.exercises)
          }}
        ],
        { cancelable: false }
      )
    }
    submitCompletedWorkout(currentUser.id, workout.id, workout.exercises)
  }

  return (
    <>
    {
    workout
    ?
    <ScrollView>
      <FlatList 
        data={workout.exercises}
        keyExtractor={keyExtractor}
        renderItem={item => renderExercises(item)}
      />
      <Button
        mode="outlined"
        onPress={() => validateFieldValues()}
        >Workout Completed
      </Button>
    </ScrollView>
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

const mapStateToProps = store => ({ workouts: store.workouts, loading: store.loading, currentUser: store.currentUser })
const mapDispatchToProps = dispatch => { 
  return { 
    swapWorkoutExercise: (workoutId, exerciseId) => dispatch(swapWorkoutExercise(workoutId, exerciseId)),
    submitCompletedWorkout: (currentUserId, workoutId, workoutExercises) => dispatch(submitCompletedWorkout(currentUserId, workoutId, workoutExercises))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutInProgress)