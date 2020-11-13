import React from 'react'
import {Text} from "react-native-paper";
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from "../components/WorkoutCard";

const MyWorkoutScreen = ({ workouts, navigation }) => {
  return (
    <ScrollView bounces={true}>
      {workouts.length !== 0 ?
        workouts.map(workout => <WorkoutCard workout={workout} key={Math.random()} navigation={navigation} />)
      :
        <Text>You currently don't have any workouts. Click the button below to generate a new workout.</Text>
      }
    </ScrollView>
  )
}

const mapStateToProps = store => ({ workouts: store.workouts })

export default connect(mapStateToProps)(MyWorkoutScreen)
