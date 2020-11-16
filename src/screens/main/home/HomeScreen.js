import React from 'react'
import { Card, Title, Button } from "react-native-paper";
import { View, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styleSheet.cards}>
        <Card elevation={2}>
          <Card.Title title="Today's Workout" subtitle="Arms, Lower Back"/>
          <Card.Content>
            <Title>Want a New Workout?</Title>
            <Button onPress={() => navigation.navigate("Workout Questionnaire")}>Start Now</Button>
          </Card.Content>
          <Card.Actions>
            <Button>View</Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  )
}

const styleSheet = StyleSheet.create({
  cards: {
    paddingHorizontal: '5%',
    paddingVertical: '2%'
  }
})

export default HomeScreen