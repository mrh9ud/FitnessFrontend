import React from 'react'
import { Portal, Dialog, TextInput, Text, Button } from 'react-native-paper'
import { Formik } from 'formik'
import { WORKOUT_NAME } from '../helpers/FormKeyType'
import { editNameFormValidations as workoutNameValidations } from '../helpers/Validations'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const WorkoutNameModal = ({ visible, closeWorkoutModal, closeModal, exercises, user, createOwnWorkout }) => {
  const navigation = useNavigation()
  return (
    <Portal>
      <Formik
        initialValues={{ [WORKOUT_NAME]: "" }}
        onSubmit={values => {
          createOwnWorkout(exercises, user, values.name)
          closeWorkoutModal()
          navigation.navigate('My Workouts')
        }}
        validationSchema={() => workoutNameValidations }
      >
        {({handleChange, handleSubmit, errors, isValid, values}) => (
          <Dialog visible={visible} onDismiss={closeModal}>
            <Dialog.Title>Input a name for your workout</Dialog.Title>
            <Dialog.Content>
              <TextInput 
                placeholder={"Name here!"}
                mode="outlined"
                value={values.name}
                onChangeText={handleChange("name")}
              />
              {errors.name &&
                <Text style={styles.error}>{errors.name}</Text>}
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                disabled={!isValid}
                mode="contained"
                onPress={() => {
                  handleSubmit(values)
                  closeModal()
                }}
                >Submit
              </Button>
              <Button
                mode="contained"
                onPress={closeModal}
                >Close
              </Button>
            </Dialog.Actions>
          </Dialog>
        )}
      </Formik>
    </Portal>
  )
}

const styles = StyleSheet.create({
  error: { 
    fontSize: 10, 
    color: 'red'  
  }
})

export default WorkoutNameModal