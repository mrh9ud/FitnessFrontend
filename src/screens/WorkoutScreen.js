import React from 'react'
import { Text } from 'react-native-paper'
import { connect } from "react-redux"

const WorkoutScreen = () => {
    return (
        <Text>Testing Workout Screen</Text>
    )
}

const mapStateToProps = store => ({ loading: store.loading })

export default connect(mapStateToProps)(WorkoutScreen)