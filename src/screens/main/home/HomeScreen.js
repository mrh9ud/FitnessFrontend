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

            <Title>Generate a Workout</Title>
            <Card.Actions>
              <Button mode="outlined" onPress={() => navigation.navigate("Workout Questionnaire")}>Start Now</Button>
            </Card.Actions>

            <Title>Create Your Own Workout</Title>
            <Card.Actions>
              <Button mode="outlined" onPress={() => navigation.navigate("Create a Workout")}>Start Now</Button>
            </Card.Actions>

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
    paddingHorizontal: '3%',
    paddingVertical: '5%'
  }
})

export default HomeScreen