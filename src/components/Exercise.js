import React, { useState } from 'react'
import { List } from 'react-native-paper'
import ExerciseModal from './ExerciseModal'

const Exercise = ({ exercise }) => {

  const [visible, setVisible] = useState(false)
  const closeModal = () => setVisible(false)

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
    <List.Item 
      title={exercise.name}
      description="Press for more info."
      onPress={() => setVisible(true)}
    />
    }
    </>
  )
}

export default Exercise