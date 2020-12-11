import React from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const ExerciseDescription = ({ focus, primary, secondary, difficulty }) => {
    return (
        <>
        <Text style={styles.bold} >Difficulty: </Text><Text>{difficulty}</Text>
        {'\n'}
        <Text style={styles.bold} >Focus: </Text><Text>{focus}</Text>
        {'\n'}
        <Text style={styles.bold} >Primary Muscle Group{primary.length === 1 ? ": " : "s: "}</Text><Text>{primary.join(", ")}</Text>
        {'\n'}
        <Text style={styles.bold} >Secondary Muscle Group{secondary.length === 1 ? ": " : "s: "}</Text><Text>{secondary.length === 0 ? "none" : secondary.join(", ")}</Text>
        </>
    )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  }
})

export default ExerciseDescription