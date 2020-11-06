import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { StatusBar, StyleSheet, View } from "react-native";import * as encryptor from '../encryption/SecureStore'
import { verifyToken } from "../redux/actions/users/actionCreators";
import { connect } from "react-redux";

class AuthLoadingScreen extends React.Component {

  componentDidMount() { this._bootstrapAsync() }

  _bootstrapAsync = async () => {
    const tokenResponse = await this.checkToken()
    this.props.navigation.navigate(tokenResponse ? 'App' : 'Auth')
  }

  async checkToken() {
    const token = await encryptor.getCredentials('token')
    if (token) {
      let response = await this.props.verifyToken(token)
      return response.payload
    }
  }

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator animating={true} />
        <StatusBar barStyle='default' />
      </View>
    )
  }
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
})

const mapDispatchToProps = dispatch => { return { verifyToken: token => dispatch(verifyToken(token)) } }

export default connect(null, mapDispatchToProps)(AuthLoadingScreen)
