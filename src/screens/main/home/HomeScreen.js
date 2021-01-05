import React from 'react'
import { Card, Title, Button } from "react-native-paper";
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const HomeScreen = ({ navigation, currentUser }) => {
  return (
    <View>
      <View style={styleSheet.cards}>
        <Title>Welcome {currentUser.first_name}!</Title>
        <Card elevation={2}>
          <Card.Content>
            <Title>Generate a Workout</Title>
            <Card.Actions>
              <Button mode="outlined" onPress={() => navigation.navigate("Workout Questionnaire")}>Start Now</Button>
            </Card.Actions>

            <Title>Create Your Own Workout</Title>
            <Card.Actions>
              <Button mode="outlined" onPress={() => navigation.navigate("Create a Workout")}>Start Now</Button>
            </Card.Actions>
            
            <Title>Your Workouts</Title>
            <Card.Actions>
              <Button mode="outlined" onPress={() => navigation.navigate("My Workouts", { screen: "My Workout"})} >View Now</Button>
            </Card.Actions>

            <Title>Workout Statistics</Title>
            <Card.Actions>
              <Button mode="outlined" onPress={() => navigation.navigate("Stats", { screen: "Statistics" })}>View Now</Button>
            </Card.Actions>
          </Card.Content>
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

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(HomeScreen)