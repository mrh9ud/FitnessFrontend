import React from 'react'
import { Text } from 'react-native-paper'

const ExerciseDescription = ({ focus, primary, secondary }) => {
    return (
        <>
        <Text style={{fontWeight: 'bold'}} >Focus: </Text><Text>{focus}</Text>
        {'\n'}
        <Text style={{fontWeight: 'bold'}} >Primary Muscle Group{primary.length === 1 ? ": " : "s: "}</Text><Text>{primary.join(", ")}</Text>
        {'\n'}
        <Text style={{fontWeight: 'bold'}} >Secondary Muscle Group{secondary.length === 1 ? ": " : "s: "}</Text><Text>{secondary.length === 0 ? "none" : secondary.join(", ")}</Text>
        </>
    )
}

export default ExerciseDescription