import React from 'react'
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { View, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <View style={styleSheet.cards}>
        <Card elevation={2}>
          <Card.Title title="Today's Workout" subtitle="Arms, Lower Back"/>
          <Card.Content>
            <Title>skldfjsd</Title>
            <Paragraph>jslkdfjslkjsdlfksjf</Paragraph>
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