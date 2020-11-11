import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { emailSent, clearLoginError, clearResetPasswordFormError } from "../redux/actions/users/actionCreators"
import LoadingIndicator from './LoadingIndicator';

const LoginPageLoading = ({ emailPending, clearResetPasswordFormError, clearLoginError, error, currentUser, resetPassEmailExpired, emailSent, route, passwordResetting, navigation }) => {
  const { rootNavigation } = route.params

  useEffect(() => {
    if (emailPending) {
      navigation.navigate("Login")
      emailSent()
    } else if (passwordResetting) {
      navigation.navigate("Reset Password")
    } else if (currentUser) {
      rootNavigation.navigate("App")
    } else if (error.login) {
      navigation.navigate("Login")
      clearLoginError()
    } else if (resetPassEmailExpired) {
      navigation.navigate("Reset Password")
    } else if (error.resetPasswordForm) {
      navigation.navigate("Reset Password")
      clearResetPasswordFormError()
    }
  }, [emailPending, error, currentUser, resetPassEmailExpired, passwordResetting])

  return <LoadingIndicator />
}

const mapStateToProps = store => ({ 
  emailPending: store.emailPending, 
  passwordResetting: store.passwordResetting, 
  currentUser: store.currentUser,
  error: store.error,
  resetPassEmailExpired: store.resetPassEmailExpired
})
const mapDispatchToProps = dispatch => { 
  return { 
    emailSent: () => dispatch(emailSent()), 
    clearLoginError: () => dispatch(clearLoginError()),
    clearResetPasswordFormError: () => dispatch(clearResetPasswordFormError())
  } }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageLoading)