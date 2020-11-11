import React from 'react'
import {Text} from "react-native-paper";
import { View } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from "../components/WorkoutCard";

const MyWorkoutScreen = ({ workouts, navigation }) => {
  return (
    <>
      {workouts.length !== 0 ?
        // <Text>You have workouts!</Text>
        workouts.map(workout => <WorkoutCard workout={workout} navigation={navigation} />)
      :
        <Text>You currently don't have any workouts. Click the button below to generate a new workout.</Text>
      }
    </>
  )
}

const mapStateToProps = store => ({
  workouts: store.workouts
})

export default connect(mapStateToProps)(MyWorkoutScreen)
