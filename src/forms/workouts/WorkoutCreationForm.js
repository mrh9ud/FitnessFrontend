import React, { useState } from 'react'
import { Subheading, Checkbox, Searchbar, List, Button, Title, RadioButton, Colors, Text, Divider, FAB } from 'react-native-paper'
import { View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { queryExercises, setExercise, removePotentialExercise, addPotentialExercise } from '../../redux/actions/exercises/actionCreators'
import ExerciseDescription from '../../components/ExerciseDescription'
import ExerciseModal from '../../components/ExerciseModal'
import { exerciseFocus, exerciseDifficulty, muscleGroupArray, includesPotentialExercise, sanitizeFocus, keyExtractor } from '../../helpers/Functions'
import WorkoutModal from '../../components/WorkoutModal'
import LoadingIndicator from '../../components/LoadingIndicator'

const WorkoutCreationForm = ({ exercise, setExercise, pageNum, loadingExtraData, removePotentialExercise, addPotentialExercise, potentialExercises, queryExercises, loading, exercises }) => {
  const numColumns = 3
  const LIST_ITEM_HEIGHT = 120

  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = query => setSearchQuery(query)
  const [focus, setFocus] = useState([])
  const [muscleGroups, setMuscleGroups] = useState([])
  const [difficulty, setDifficulty] = useState('all')
  const [exerciseVisible, setExerciseVisible] = useState(false)
  const closeExerciseModal = () => setExerciseVisible(false)
  const [potentialWorkoutVisible, setPotentialWorkoutVisible] = useState(false)
  const closePotentialWorkoutModal = () => setPotentialWorkoutVisible(false)

  const renderFooter = () => {
    if (!loadingExtraData)
      return null
    else
      return <LoadingIndicator />
  }

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

  function renderExercises({ item }) {
    return (
      <>
      <List.Item 
        title={item.name} 
        description={<ExerciseDescription focus={sanitizeFocus(item.focus)} primary={item.primary_muscle_groups} secondary={item.secondary_muscle_groups} difficulty={item.difficulty} />}
        descriptionNumberOfLines={10}
        titleStyle={{color: "#0000cd"}}
        style={{ height: LIST_ITEM_HEIGHT }}
        onPress={() => {
          setExercise(item)
          setExerciseVisible(true)
        }}
        right={props => <TouchableOpacity onPress={includesPotentialExercise(potentialExercises, item.id) 
                                                  ? 
                                                  () => removePotentialExercise(item.id)
                                                  :
                                                  () => {
                                                    if (potentialExercises.length <= 12)
                                                      addPotentialExercise(item)
                                                    else
                                                      alert(`${potentialExercises.length} Exercises is likely enough for now!`)
                                                  }}
                        >
                          <List.Icon {...props} color={includesPotentialExercise(potentialExercises, item.id) ? Colors.red500 : Colors.green500} icon={includesPotentialExercise(potentialExercises, item.id) ? 'minus-box' : "plus-box"} />
                        </TouchableOpacity>}
      />
      <Divider />
      </>
  )}

  function headerForm() {
    return (
      <>
      <Subheading style={styles.subheading} >Search Exercises by Name</Subheading>
      <Searchbar
        placeholder="Barbell Bench Press"
        value={searchQuery}
        onChangeText={onChangeSearch}
        onSubmitEditing={() => queryExercises(muscleGroups, focus, searchQuery, difficulty, 0, true)}
      />
      <Subheading style={styles.subheading} >Filter by Focus</Subheading>
      <FlatList
        listKey={'focus'}
        style={styles.container}
        keyExtractor={keyExtractor}
        renderItem={renderExerciseFocus}
        data={exerciseFocus}
        numColumns={numColumns}
      />
      <Subheading style={styles.subheading} >Filter by Difficulty Level</Subheading>
      <RadioButton.Group onValueChange={value => setDifficulty(value)} value={difficulty}>
        <FlatList
          listKey={'difficulty'}
          style={styles.container}
          renderItem={renderDifficulty}
          data={exerciseDifficulty}
          numColumns={numColumns}
          keyExtractor={keyExtractor}
        />
      </RadioButton.Group>
      <Subheading style={styles.subheading} >Filter by Muscle Groups</Subheading>
      <FlatList
        listKey={'muscleGroups'}
        style={styles.container}
        renderItem={renderMuscleGroups}
        data={muscleGroupArray}
        numColumns={numColumns}
        keyExtractor={keyExtractor}
      />
      <Button
        mode="contained"
        loading={loading}
        disabled={loading}
        onPress={() => {

          queryExercises(muscleGroups, focus, searchQuery, difficulty, 0, true)
        }}
        >Search Exercises
      </Button>
      <Title style={styles.subheading} >Exercise Search Results</Title>
      {exercises.length === 0
      ?
      <Text>No Results</Text>
      :
      null
      }
      </>
    )
  }

  return (
    <>
    {potentialWorkoutVisible
    ?
    <WorkoutModal 
      visible={potentialWorkoutVisible}
      closeModal={closePotentialWorkoutModal}
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
      addPotentialExercise={addPotentialExercise}
      potentialExercises={potentialExercises}
    />
    :
    null
    }
    <SafeAreaView>
      <FlatList
        listKey={'exercises'}
        windowSize={4}
        initialNumToRender={5}
        getItemLayout={(data, index) => (
          {length: LIST_ITEM_HEIGHT, offset: LIST_ITEM_HEIGHT * index, index}
        )}
        ListHeaderComponent={headerForm()}
        data={exercises}
        extraData={exercises}
        renderItem={item => renderExercises(item)}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={() => queryExercises(muscleGroups, focus, searchQuery, difficulty, pageNum += 1, false)}
        ListFooterComponent={renderFooter}
        refreshing={loadingExtraData}
      />
    </SafeAreaView>
    <FAB 
      onPress={() => setPotentialWorkoutVisible(true)}
      style={styles.FAB}
      label={`${potentialExercises.length} added`}
      color={"#000000"}
    />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5
  },
  FAB: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      margin: 10,
  },
  subheading: {
    marginHorizontal: 5
  }
})

const mapStateToProps = store => ({ 
  pageNum: store.potentialExercises.pageNum,
  exercises: store.exercises, 
  loading: store.loading.loading,
  loadingExtraData: store.loading.loadingExtraData,
  exercise: store.exercise,
  potentialExercises: store.potentialExercises.exercises
})
const mapDispatchToProps = dispatch => { 
  return { 
    queryExercises: (muscleGroups, focus, searchQuery, difficulty, pageNum, newQuery) => dispatch(queryExercises(muscleGroups, focus, searchQuery, difficulty, pageNum, newQuery)),
    addPotentialExercise: exercise => dispatch(addPotentialExercise(exercise)),
    setExercise: exercise => dispatch(setExercise(exercise)),
    removePotentialExercise: exerciseId => dispatch(removePotentialExercise(exerciseId)),
  } }

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreationForm)