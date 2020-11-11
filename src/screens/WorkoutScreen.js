import React from 'react'
import { List, Divider } from 'react-native-paper'
import { connect } from "react-redux"

const WorkoutScreen = ({ workouts, currentUser }) => {
    console.log(workouts)
    return (
      <>
        <List.Section
          title="Workout 1"
        />
        <Divider />
        <List.Item
          title="Overhead Press"
          description="Click for more info"
        />
        <Divider />
        <List.Item
          title="Squats"
          description="Click for more info"
        />
        <Divider />

      </>
    )
}

const mapStateToProps = store => ({ workouts: store.workouts, currentUser: store.currentUser })

export default connect(mapStateToProps)(WorkoutScreen)