import React from 'react'
import { Dialog, Portal } from 'react-native-paper'

const WorkoutModal = ({ visible, closeModal, potentialExercises }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={closeModal}>
        <Dialog.Title>{potentialExercises[0].name}</Dialog.Title>
      </Dialog>
    </Portal>
  )
}

export default WorkoutModal