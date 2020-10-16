import React from 'react'
import  { Card, Title, Paragraph, Button } from "react-native-paper";
import NavBar from "../navigations/NavBar";
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <NavBar title='Home' drawerNavigation={navigation} />
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

function Home() {
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