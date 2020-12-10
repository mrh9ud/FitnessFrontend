import React, { useState } from 'react'
import { Dialog, List, Portal, Colors, Button, Subheading } from 'react-native-paper'
import { sanitizeFocus } from '../helpers/Functions'
import ExerciseDescription from './ExerciseDescription'
import { TouchableOpacity, ScrollView } from 'react-native'
import { clearAllPotentialExercises, createOwnWorkout, removePotentialExercise, setExercise } from '../redux/actions/exercises/actionCreators'
import { connect } from 'react-redux'
import ExerciseModal from './ExerciseModal'
import WorkoutNameModal from './WorkoutNameModal'

const WorkoutModal = ({ visible, closeModal, currentUser, createOwnWorkout, setExercise, exercise, removePotentialExercise, clearAllPotentialExercises, potentialExercises }) => {

  const [exerciseVisible, setExerciseVisible] = useState(false)
  const closeExerciseModal = () => setExerciseVisible(false)
  const [workoutNameVisible, setWorkoutNameVisible] = useState(false)
  const closeWorkoutNameModal = () => setWorkoutNameVisible(false)

  return (
    <>
    {workoutNameVisible
    ?
    <WorkoutNameModal 
      visible={workoutNameVisible}
      closeModal={closeWorkoutNameModal}
      exercises={potentialExercises}
      user={currentUser}
      createOwnWorkout={createOwnWorkout}
    />
    :
    null
    }
    {exerciseVisible
    ?
    <ExerciseModal 
      visible={exerciseVisible}
      closeModal={closeExerciseModal}
      exercise={exercise}
    />
    :
    null
    }
    <ScrollView>
      <Portal>
        <Dialog visible={visible} onDismiss={closeModal}>
          <Dialog.Title>Currently Selected Exercises</Dialog.Title>
          {potentialExercises.length === 0
          ?
          <>
          <Subheading style={{marginHorizontal: 10}} >When you add exercises, they will appear here!</Subheading>
          <Dialog.Actions>
            <Button
              mode="contained"
              onPress={closeModal}
              >Close
            </Button>
          </Dialog.Actions>
          </>
          :
          <>
          {potentialExercises.map(exercise => {
            return (
              <List.Item
                onPress={() => {
                  setExercise(exercise)
                  setExerciseVisible(true)
                }}
                key={exercise.id}
                title={exercise.name}
                description={<ExerciseDescription focus={sanitizeFocus(exercise.focus)} primary={exercise.primary} secondary={exercise.secondary} />}
                descriptionNumberOfLines={10}
                titleStyle={{color: "#0000cd"}}
                right={props => <TouchableOpacity onPress={() => removePotentialExercise(exercise.id)}>
                                  <List.Icon {...props} color={Colors.red500} icon="minus-box" />
                                </TouchableOpacity>}
                />
            )
          })}
          <Dialog.Actions>
            <Button
              onPress={() => setWorkoutNameVisible(true)}
              mode="contained"
              >Save
            </Button>
            <Button
              mode="contained"
              onPress={() => clearAllPotentialExercises()}
              >Clear All
            </Button>
            <Button
              mode="contained"
              onPress={closeModal}
              >Close
            </Button>
          </Dialog.Actions>
          </>
          }
        </Dialog>
      </Portal>
    </ScrollView>
    </>
  )
}

const mapStateToProps = store => ({ 
  potentialExercises: store.potentialExercises,
  exercise: store.exercise,
  currentUser: store.currentUser
 })

const mapDispatchToProps = dispatch => { 
  return { 
    clearAllPotentialExercises: () => dispatch(clearAllPotentialExercises()),
    removePotentialExercise: exerciseId => dispatch(removePotentialExercise(exerciseId)),
    setExercise: exercise => dispatch(setExercise(exercise)),
    createOwnWorkout: (exercises, currentUser) => dispatch(createOwnWorkout(exercises, currentUser))
  } }

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutModal)