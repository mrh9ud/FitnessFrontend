import React from 'react'
import { Text, Portal, Dialog, Button, Paragraph } from 'react-native-paper'
import { ScrollView } from 'react-native'

const ExerciseModal = ({ exercise, closeModal, visible }) => {

  return (
    <ScrollView>
      <Portal>
        <Dialog visible={visible} onDismiss={closeModal}>
        <Dialog.Title>{exercise.name}</Dialog.Title>
        <Dialog.Content>
          <Text>Difficulty Level: {exercise.difficulty}</Text>
          <Text>Focus: {exercise.focus}</Text>
          <Text>Instructions:</Text>
          <Paragraph>{exercise.instructions}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
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