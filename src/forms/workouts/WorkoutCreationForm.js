import React, { useState } from 'react'
import { Subheading, Checkbox, Searchbar, List, Button, Title, RadioButton, Colors, Text } from 'react-native-paper'
import { View, StyleSheet, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { queryExercises, setExercise, clearExercise, addPotentialExercise } from '../../redux/actions/exercises/actionCreators'
import ExerciseDescription from '../../components/ExerciseDescription'
import ExerciseModal from '../../components/ExerciseModal'
import { exerciseFocus, exerciseDifficulty, muscleGroupArray } from '../../helpers/Functions'

const WorkoutCreationForm = ({ exercise, setExercise, clearExercise, queryExercises, loading, exercises }) => {
  const numColumns = 3

  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = query => setSearchQuery(query)
  const [focus, setFocus] = useState([])
  const [muscleGroups, setMuscleGroups] = useState([])
  const [difficulty, setDifficulty] = useState('all')
  const [visible, setVisible] = useState(false)
  const closeModal = () => setVisible(false)

  const onChangeMuscleGroups = (name, id) => {
    if (muscleGroups.length === 0) {
      setMuscleGroups([ ...muscleGroups, { name, id } ])
    } else {
      let muscleGroupToRemove = muscleGroups.find(muscleGroup => muscleGroup.id === id)
      if (muscleGroupToRemove) {
        setMuscleGroups(muscleGroups.filter(muscleGroup => muscleGroup.id !== muscleGroupToRemove.id)) 
      }
      else {
        setMuscleGroups([ ...muscleGroups, { name, id } ])
      }
    }     
  }

  const onChangeFocus = focusType => {
    if (focus.length === 0) {
      setFocus([ ...focus, focusType ])
    } else {
      let focusToRemove = focus.find(focus => focus === focusType)
      if (focusToRemove)
        setFocus(focus.filter(focus => focus !== focusToRemove))
      else
        setFocus([ ...focus, focusType ])
    }
  }

  const renderMuscleGroups = ({ item }) => {
    return (
      <View>
        <Checkbox.Item 
          label={item.name} 
          status={muscleGroups.some(muscleGroup => muscleGroup.name === item.name) ? 'checked' : 'unchecked'}
          mode={'android' | 'ios'} 
          onPress={() => onChangeMuscleGroups(item.name, item.id)}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }

  const renderExerciseFocus = ({ item }) => {
    return (
      <View>
        <Checkbox.Item
          label={item.focus}
          status={focus.includes(item.focus) ? 'checked' : 'unchecked'}
          mode={'android' | 'ios'}
          onPress={() => onChangeFocus(item.focus)}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }

  const renderDifficulty = ({ item }) => <RadioButton.Item label={item.name} value={item.name} />

  const renderExercises = () => exercises.map(exercise => {
    return (
      <List.Item 
        key={exercise.id} 
        title={exercise.name} 
        description={<ExerciseDescription focus={exercise.focus} primary={exercise.primary} />}
        onPress={() => {
          setExercise(exercise)
          setVisible(true)
        }}
        right={props => <TouchableOpacity onPress={() => addPotentialExercise(exercise)}>
                          <List.Icon {...props} color={Colors.black500} icon="plus-box"/>
                        </TouchableOpacity>}
      />
  )})

return (
    <>
    {visible
    ?
    <ExerciseModal 
      visible={visible}
      closeModal={closeModal}
      exercise={exercise}
    />
    :
    null
    }
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Subheading>Search Exercises by Name</Subheading>
        <Searchbar 
          placeholder="Barbell Bench Press"
          value={searchQuery}
          onChangeText={onChangeSearch}
          onSubmitEditing={() => queryExercises(muscleGroups, focus, searchQuery, difficulty)}
        />
        <Subheading>Filter by Focus</Subheading>
        <FlatList
          style={styles.container}
          renderItem={renderExerciseFocus}
          data={exerciseFocus}
          numColumns={numColumns}
        />
        <Subheading>Filter by Difficulty Level</Subheading>
        <RadioButton.Group onValueChange={value => setDifficulty(value)} value={difficulty}>
          <FlatList
            style={styles.container}
            renderItem={renderDifficulty}
            data={exerciseDifficulty}
            numColumns={numColumns}
          />
        </RadioButton.Group>
        <Subheading>Filter by Muscle Groups</Subheading>
        <FlatList
          style={styles.container}
          renderItem={renderMuscleGroups}
          data={muscleGroupArray}
          numColumns={numColumns}
        />
        <Button
          mode="contained"
          loading={loading}
          disabled={loading}
          onPress={() => queryExercises(muscleGroups, focus, searchQuery, difficulty)}
          >Search Exercises
        </Button>
      <Title>Exercise Search Results</Title>
      {exercises.length === 0
      ?
      <Text>No Results</Text>
      :
      null
      }
      {renderExercises()}
      </ScrollView>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5
  }
})

const mapStateToProps = store => ({ 
  exercises: store.exercises, 
  loading: store.loading,
  exercise: store.exercise
})
const mapDispatchToProps = dispatch => { 
  return { 
    queryExercises: (muscleGroups, focus, searchQuery, difficulty) => dispatch(queryExercises(muscleGroups, focus, searchQuery, difficulty)),
    addPotentialExercise: exercise => dispatch(addPotentialExercise(exercise)),
    setExercise: exercise => dispatch(setExercise(exercise)),
    clearExercise: () => dispatch(clearExercise())
  } }

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreationForm)