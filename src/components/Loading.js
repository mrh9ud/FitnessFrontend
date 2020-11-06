import React, { useEffect } from 'react'
import PageLoading from './PageLoading'
import { connect } from 'react-redux'
import { verifyUserData } from '../redux/actions/users/actionCreators'

const Loading = ({ route, currentUser }) => {

  // useEffect( () => {
  //   const { values } = route.params
  //   verifyData(values)
  // }, [])

  // const verifyData = async (values) => {
  //   if (currentUser) {
  //     const loggedIn = verifyUserData(values)
  //     console.log(loggedIn)
  //     if (loggedIn === 'SUCCESS') rootNavigation.navigate('App')
  //     else if (loggedIn === 'PASSWORD_RESET') navigation.navigate('Reset Password')
  //   }
  // }

  return (
    <PageLoading />
  )
}

const mapStateToProps = store => ({ passwordResetting: store.passwordResetting, currentUser: store.currentUser })
const mapDispatchToProps = dispatch => { return ({ verifyUserData: (userData) => dispatch(verifyUserData(userData)) }) }

export default connect(mapStateToProps, mapDispatchToProps)(Loading)