import React from 'react'
import { Text } from 'react-native-paper'

const ExerciseDescription = ({ focus, primary }) => {
    return (
        <>
        <Text>Focus: {focus}</Text>
        {'\n'}
        <Text>Muscle Groups: {primary.join(", ")}</Text>
        </>
    )
}

export default ExerciseDescription