import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LoadingIndicator from './LoadingIndicator'

const WorkoutPageLoading = ({ workouts, loading, navigation }) => {

  useEffect(() => {
    if (!loading)
    
    navigation.navigate("Workout", { workoutId: workouts[workouts.length - 1].id })
  }, [loading])

  return <LoadingIndicator />
}

const mapStateToProps = store => ({ loading: store.loading, workouts: store.workouts })

export default connect(mapStateToProps)(WorkoutPageLoading)