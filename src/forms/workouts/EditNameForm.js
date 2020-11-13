import { Formik } from 'formik'
import React from 'react'
import { Dialog, TextInput, Portal, Text, Button } from 'react-native-paper'
import { connect } from 'react-redux'
import { WORKOUT_NAME } from '../../helpers/FormKeyType'
import { changeWorkoutName } from '../../redux/actions/workouts/actionCreators'
import { editNameFormValidations } from '../../helpers/Validations'
import { StyleSheet } from 'react-native'

const EditNameForm = ({ visible, hideModal, workout, changeWorkoutName }) => {
  return (
    <Portal>
      <Formik
        initialValues={{
          [WORKOUT_NAME]: workout.name
        }}
        onSubmit={values => changeWorkoutName(workout.id, values)}
        validationSchema={() => editNameFormValidations}
      >
        {({handleChange, handleSubmit, errors, isValid, values}) => (
          <Dialog visible={visible} onDismiss={hideModal}>
            <Dialog.Title>Edit Workout Name</Dialog.Title>
            <Dialog.Content>
              <TextInput
                placeholder={workout.name}
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
                  hideModal()
                }}
                >Submit
              </Button>
              <Button
                mode="contained"
                onPress={hideModal}
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

const mapDispatchToProps = dispatch => { return { changeWorkoutName: (workoutId, workoutName) => dispatch(changeWorkoutName(workoutId, workoutName)) } }

export default connect(null, mapDispatchToProps)(EditNameForm)