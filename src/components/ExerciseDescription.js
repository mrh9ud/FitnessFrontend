import React from 'react'
import { Text } from 'react-native-paper'

const ExerciseDescription = ({ focus }) => {
    return (
        <>
        <Text>Focus: {focus}</Text>
        {'\n'}
        <Text>Primary Muscle Groups: </Text>
        </>
    )
}

export default ExerciseDescription