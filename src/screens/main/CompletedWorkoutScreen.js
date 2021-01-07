import React from 'react'
import { Button, Text } from "react-native-paper";
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from "../../components/WorkoutCard";

const CompletedWorkoutScreen = ({ workouts, navigation }) => {
  return (
    <ScrollView bounces={true}>
      {/*{workouts.length !== 0*/}
      {/*  ?*/}
      {/*  workouts.map(workout => <WorkoutCard workout={workout} key={Math.random()} navigation={navigation} />)*/}
      {/*  :*/}
      {/*  <Text>You currently don't have any completed workouts.</Text>*/}
      <Text>STUB. Implement when completed workouts are added.</Text>
    </ScrollView>
  )
}

const mapStateToProps = store => ({ workouts: store.workouts })

export default connect(mapStateToProps)(CompletedWorkoutScreen)
