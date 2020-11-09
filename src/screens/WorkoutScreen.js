import React from 'react'
import { Text, List, Divider } from 'react-native-paper'
import { connect } from "react-redux"

const WorkoutScreen = () => {
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

const mapStateToProps = store => ({ loading: store.loading })

export default connect(mapStateToProps)(WorkoutScreen)