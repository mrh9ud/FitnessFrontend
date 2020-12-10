import React from 'react'
import { Portal, Dialog, TextInput, Text, Button } from 'react-native-paper'
import { Formik } from 'formik'
import { WORKOUT_NAME } from '../helpers/FormKeyType'
import { editNameFormValidations } from '../helpers/Validations'
import { StyleSheet } from 'react-native'
import * as yup  from 'yup'

const WorkoutNameModal = ({ visible, closeModal, exercises, user, createOwnWorkout }) => {
  return (
    <Portal>
      <Formik
        initialValues={{ [WORKOUT_NAME]: "" }}
        onSubmit={values => createOwnWorkout(exercises, user, values)}
        validationSchema={() => editNameFormValidations }
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
                  handleSubmit()
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