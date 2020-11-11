import React from 'react'
import { connect } from 'react-redux'
import LoadingIndicator from './LoadingIndicator'

const WorkoutPageLoading = ({ loading }) => {

  return (
    <>
    {loading ? <LoadingIndicator /> : null}
    </>
  )
}

const mapStateToProps = store => ({ loading: store.loading})

export default connect(mapStateToProps)(WorkoutPageLoading)