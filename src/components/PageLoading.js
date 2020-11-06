import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { StatusBar, StyleSheet, View } from "react-native";
import { connect } from 'react-redux'
import { emailSent, clearLoginError, clearResetPasswordFormError } from "../redux/actions/users/actionCreators"

const PageLoading = ({ emailPending, clearResetPasswordFormError, clearLoginError, error, currentUser, resetPassEmailExpired, emailSent, route, passwordResetting, navigation }) => {
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

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator animating={true} />
      <StatusBar barStyle='default' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center"
  },
  horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
  }
});

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

export default connect(mapStateToProps, mapDispatchToProps)(PageLoading)