import React, { useState } from 'react'
import { Portal, Dialog, Button, Subheading, Text } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { sanitizeFocus } from '../helpers/Functions'

const ExerciseModal = ({ exercise, closeModal, visible, addPotentialExercise }) => {

  const [fullText, showFullText] = useState(false)
  const toggleText = () => showFullText(!fullText)

  return (
  <ScrollView>
    <Portal>
      <Dialog visible={visible} onDismiss={closeModal}>
      <Dialog.Title>{exercise.name}</Dialog.Title>
      <Dialog.Content>
        <Subheading style={{fontWeight: 'bold'}} >Difficulty Level:</Subheading>
        <Text style={{fontSize: 15}}>{exercise.difficulty}</Text>
        <Subheading style={{fontWeight: 'bold'} }>Focus:</Subheading>
        <Text style={{fontSize: 15}}>{sanitizeFocus(exercise.focus)}</Text>
        <Subheading style={{fontWeight: "bold"}}>Instructions:</Subheading>
        <Text numberOfLines={fullText ? exercise.instructions.length : 3} >{exercise.instructions}</Text>
        <Text style={{color: '#0000ff'}} onPress={() => toggleText(true)}>{fullText ? 'Read Less' : 'Read More' }</Text>
      </Dialog.Content>
      <Dialog.Actions>
        {addPotentialExercise
        ?
        <Button
          mode="contained"
          onPress={() => addPotentialExercise(exercise)}
          >Add Exercise
        </Button>
        :
        null
        }
        <Button
          mode="contained"
          onPress={closeModal}
          >Close
        </Button>
      </Dialog.Actions>
      </Dialog>
    </Portal>
  </ScrollView>
  )
}

export default ExerciseModal