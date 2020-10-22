import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button, Switch, Title, Checkbox } from "react-native-paper";
import { Formik } from 'formik'
import { connect } from 'react-redux'
import * as yup from 'yup'
import { DURATION } from '../helpers/FormKeyType'
import { submitWorkoutQuestionnaire } from '../redux/actions/workouts/actionCreators'

const validationSchema = yup.object().shape({
  duration: yup
    .string().required("Must include a workout duration")
    .max(3, "You shouldn't exercise for over 999 minutes a days")
    .matches(/^\d+$/g, { message: "Numbers only!" })
})

const WorkoutQuestionForm = ({ submitWorkoutQuestionnaire, currentUser }) => {

  const [workoutBeginner, setWorkoutBeginner] = useState(false)
  const [workoutIntermediate, setWorkoutIntermediate] = useState(false)
  const [workoutAdvanced, setWorkoutAdvanced] = useState(false)
  const [workoutStrFocus, setWorkoutStrFocus] = useState(false)
  const [workoutCardioFocus, setWorkoutCardioFocus] = useState(false)

  const handleSubmit = duration => {
    const difficulty = {}
    if (workoutBeginner) {
      difficulty['difficulty'] = 'beginner'
    } else if (workoutIntermediate) {
      difficulty['difficulty'] = 'intermediate'
    } else {
      difficulty['difficulty'] = 'advanced'
    }

    const durationInt = parseInt(duration, 10)

    const workoutObj = {
      strength: workoutStrFocus,
      cardio: workoutCardioFocus,
      durationInt,
      ...difficulty
    }
    submitWorkoutQuestionnaire(workoutObj, currentUser)
  }

  return (
    <Formik
      initialValues={{
        [DURATION]: ''
      }}
      validationSchema={validationSchema}
    >
    {({isValid, errors, handleChange, values}) => (
      <View>
        <Title>Workout Focus</Title>

        <Text>Strength</Text>
        <Switch 
          value={workoutStrFocus}
          onValueChange={() => setWorkoutStrFocus(!workoutStrFocus)}
        />

        <Text>Cardio</Text>
        <Switch
          value={workoutCardioFocus}
          onValueChange={() => setWorkoutCardioFocus(!workoutCardioFocus)}
        />
        
        <Title>Duration</Title>
        <TextInput
          mode="outlined"
          placeholder="Enter duration in minutes"
          keyboardType={'numeric'}
          value={values.duration}
          onChangeText={handleChange('duration')}
        />
        {errors.duration &&
          <Text style={styles.error}>{errors.duration}</Text>}

        <Title>Workout Complexity Level</Title>
        <Checkbox.Item
          label="Beginner"
          status={workoutBeginner ? 'checked' : 'unchecked'}
          onPress={() => {
            setWorkoutBeginner(!workoutBeginner)
            setWorkoutIntermediate(false)
            setWorkoutAdvanced(false)
          }}
        />
         <Checkbox.Item
          label="Intermediate"
          status={workoutIntermediate ? 'checked' : 'unchecked'}
          onPress={() => {
            setWorkoutIntermediate(!workoutIntermediate)
            setWorkoutBeginner(false)
            setWorkoutAdvanced(false)
          }}
        />
         <Checkbox.Item
          label="Advanced"
          status={workoutAdvanced ? 'checked' : 'unchecked'}
          onPress={() => {
            setWorkoutAdvanced(!workoutAdvanced)
            setWorkoutBeginner(false)
            setWorkoutIntermediate(false)
          }}
        />

        <View style={styles.button}>
          <Button
            mode="contained" 
            onPress={() => handleSubmit(values.duration)}
            disabled={!isValid}
            >Generate New Workout
          </Button>
        </View>
      </View>
    )}
    </Formik>
  )
}

const styles= StyleSheet.create({
    inputField: {
      paddingHorizontal: '5%', 
      paddingVertical: '5%'
    },
    button: {
      alignItems: 'center'
    },
    error: { 
      fontSize: 10, 
      color: 'red'  
    }
  })

const mapStateToProps = store => ({ currentUser: store.currentUser})
const mapDispatchToProps = dispatch => { return { submitWorkoutQuestionnaire: answers => dispatch(submitWorkoutQuestionnaire(answers)) } }

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutQuestionForm)