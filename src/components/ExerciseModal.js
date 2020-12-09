import React from 'react'
import { Portal, Dialog, Button, Paragraph, Subheading } from 'react-native-paper'
import { ScrollView } from 'react-native'

const ExerciseModal = ({ exercise, closeModal, visible }) => {
  return (
  <ScrollView>
    <Portal>
      <Dialog visible={visible} onDismiss={closeModal}>
      <Dialog.Title>{exercise.name}</Dialog.Title>
      <Dialog.Content>
        <Subheading>Difficulty Level: {exercise.difficulty}</Subheading>
        <Subheading>Focus: {exercise.focus}</Subheading>
        <Subheading>Instructions:</Subheading>
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