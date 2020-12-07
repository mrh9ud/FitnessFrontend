import React, { useEffect, useState } from 'react'
import { Subheading, Checkbox, Searchbar, List, Button, Title, RadioButton } from 'react-native-paper'
import { View, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { fetchMuscleRelatedInfo } from '../../redux/actions/workouts/actionCreators'
import LoadingIndicator from '../../components/LoadingIndicator'
import { fetchExercises, queryExercises } from '../../redux/actions/exercises/actionCreators'

const WorkoutCreationForm = ({ fetchMuscleRelatedInfo, queryExercises, loading, fetchExercises, muscleCategories, exercises, navigation }) => {
  const numColumns = 3
  const exerciseFocus = [{id: 1, focus: 'strength'}, {id: 2, focus: 'cardio'}, {id: 3, focus: 'flexibility'}]
  const exerciseDifficulty = [{id: 1, name: 'beginner'}, {id: 2, name: 'intermediate'}, {id: 3, name: 'advanced'}]

  useEffect(() => {
    fetchMuscleRelatedInfo()
    fetchExercises()
  }, [])

  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = query => setSearchQuery(query)
  const [focus, setFocus] = useState([])
  const [muscleGroups, setMuscleGroups] = useState([])
  const [difficulty, setDifficulty] = useState('beginner')

  const onChangeMuscleGroups = name => {
    if (muscleGroups.length === 0) {
      setMuscleGroups([ ...muscleGroups, name ])
    } else {
      let groupToRemove = muscleGroups.find(muscleGroup => muscleGroup === name)
      if (groupToRemove) 
        setMuscleGroups(muscleGroups.filter(muscleGroup => muscleGroup !== groupToRemove)) 
      else
        setMuscleGroups([ ...muscleGroups, name ])
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
          status={muscleGroups.includes(item.name) ? 'checked' : 'unchecked'} 
          mode={'android' | 'ios'} 
          onPress={() => onChangeMuscleGroups(item.name)}
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

  const renderExercises = () => exercises.map(exercise => <List.Item key={exercise.id} title={exercise.name} description={exercise.focus}/>)

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Subheading>Search Exercises</Subheading>
        <Searchbar 
          placeholder="Barbell Bench Press"
          value={searchQuery}
          onChangeText={onChangeSearch}
        />
        <Subheading>Focus</Subheading>
        <FlatList
          style={styles.container}
          renderItem={renderExerciseFocus}
          data={exerciseFocus}
          numColumns={numColumns}
        />
        <Subheading>Difficulty Level</Subheading>
        <RadioButton.Group onValueChange={value => setDifficulty(value)} value={difficulty}>
          <FlatList
            style={styles.container}
            renderItem={renderDifficulty}
            data={exerciseDifficulty}
            numColumns={numColumns}
          />
        </RadioButton.Group>
        <Subheading>Muscle Groups</Subheading>
        {muscleCategories
        ?
        <>
        <FlatList
          style={styles.container}
          renderItem={renderMuscleGroups}
          data={muscleCategories.muscle_groups}
          numColumns={numColumns}
        />
        <Button
          mode="contained"
          loading={loading}
          disabled={loading}
          onPress={() => queryExercises(muscleGroups, focus, searchQuery)}
          >Search Exercises
        </Button>
        </>
        :
        <LoadingIndicator />
        }
      <Title>Exercise Search Results</Title>
      {renderExercises()}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5
  }
})

const mapStateToProps = store => ({ muscleCategories: store.muscleCategories, exercises: store.exercises, loading: store.loading })
const mapDispatchToProps = dispatch => { 
  return { 
    fetchMuscleRelatedInfo: () => dispatch(fetchMuscleRelatedInfo()),
    fetchExercises: () => dispatch(fetchExercises()),
    queryExercises: (muscleGroups, focus, searchQuery) => dispatch(queryExercises(muscleGroups, focus, searchQuery))
  } }

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreationForm)