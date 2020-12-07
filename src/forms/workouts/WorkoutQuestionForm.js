import React, { useState } from 'react'
import {View, StyleSheet, ScrollView, Picker} from 'react-native'
import {Text, TextInput, Button, Switch, Title, Checkbox, Headline} from "react-native-paper";
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { DURATION, WORKOUT_NAME } from '../../helpers/FormKeyType'
import { submitWorkoutQuestionnaire } from '../../redux/actions/workouts/actionCreators'
import { workoutQuestionsValidations } from '../../helpers/Validations'

const WorkoutQuestionForm = ({ submitWorkoutQuestionnaire, currentUser, navigation }) => {

  const [workoutBeginner, setWorkoutBeginner] = useState(false)
  const [workoutIntermediate, setWorkoutIntermediate] = useState(false)
  const [workoutAdvanced, setWorkoutAdvanced] = useState(false)
  const [workoutStrFocus, setWorkoutStrFocus] = useState(false)
  const [workoutCardioFocus, setWorkoutCardioFocus] = useState(false)
  const [workoutFlexibilityFocus, setWorkoutFlexibilityFocus] = useState(false)

  const [workoutTargetAreas, setWorkoutTargetAreas] = useState([])
  const [firstTargetArea, setFirstTargetArea] = useState('')
  const [secondTargetArea, setSecondTargetArea] = useState('')

  const handleSubmit = ({ duration, name }) => {
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
      duration: durationInt,
      ...difficulty,
      name,
      target: workoutTargetArea
    }
    navigation.navigate("Potential Workout")
    submitWorkoutQuestionnaire(workoutObj, currentUser)
  }

  const targetAreaDropdownList = (targetArea, setTargetArea) => {
    return (
      <Picker
        selectedValue={targetArea}
        style={{ width: 150 }}
        mode={"dropdown"}
        onValueChange={itemValue => setTargetArea(itemValue)}
      >
        <Picker.Item label="Shoulders" value="shoulders" />
        <Picker.Item label="Chest" value="chest" />
        <Picker.Item label="Arms" value="arms" />
        <Picker.Item label="Back" value="back" />
        <Picker.Item label="Waist" value="waist" />
        <Picker.Item label="Legs" value="legs" />
      </Picker>
    )
  }

  return (
    <ScrollView>
      <Formik
        initialValues={{
          [DURATION]: '',
          [WORKOUT_NAME]: ''
        }}
        validationSchema={workoutQuestionsValidations}
      >
      {({isValid, errors, handleChange, values}) => (
        <View>
          <Title>Name:</Title>
        <TextInput
          mode="outlined"
          placeholder="My workout name here!"
          value={values.name}
          onChangeText={handleChange('name')}
        />
        {errors.name &&
          <Text style={styles.error}>{errors.name}</Text>}

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

          <Text>Flexibility</Text>
          <Switch
            value={workoutFlexibilityFocus}
            onValueChange={() => setWorkoutFlexibilityFocus(!workoutFlexibilityFocus)}
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

          <Title>Workout Target Areas</Title>
          <Headline>First Target Area: </Headline>
          {targetAreaDropdownList(firstTargetArea, setFirstTargetArea)}
          <Headline>Second Target Area: </Headline>
          {targetAreaDropdownList(secondTargetArea, setSecondTargetArea)}

          <View style={styles.button}>
            <Button
              mode="contained"
              onPress={() => handleSubmit(values)}
              disabled={!isValid || (!workoutBeginner && !workoutIntermediate && !workoutAdvanced) ||
                (!workoutStrFocus && !workoutCardioFocus && !workoutFlexibilityFocus) || values.duration.length < 2}
              >Generate New Workout
            </Button>
          </View>
        </View>
      )}
      </Formik>
    </ScrollView>
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

const mapStateToProps = store => ({ currentUser: store.currentUser })
const mapDispatchToProps = dispatch => { return { submitWorkoutQuestionnaire: (answers, currentUser) => dispatch(submitWorkoutQuestionnaire(answers, currentUser)) } }

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutQuestionForm)