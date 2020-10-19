import React from 'react'
import MainNavigator from './MainNavigator'
import { connect } from 'react-redux'
import { verifyToken } from '../redux/actions/actionCreators'
import * as SplashScreen from 'expo-splash-screen';
import * as encryptor from '../encryption/SecureStore.js'
import AccountNavigator from './AccountNavigator'

class SwitchNavigator extends React.Component {
    state = {
        appIsReady: false,
        userPresent: false
      }

    async componentDidMount() {
        try {
          await SplashScreen.preventAutoHideAsync();
        } catch (error) {
          console.warn(error);
        }
        this.prepareResources();
      }
      
      prepareResources = async () => {
        try {
          let response = await this.checkToken()
          if (response) {
            this.setState(prevState => ({
                appIsReady: !prevState.appIsReady,
                userPresent: !prevState.userPresent }), async function() {
                    await SplashScreen.hideAsync()
                })
          } else {
              this.setState(prevState => ({
                  appIsReady: !prevState.appIsReady }), async function() {
                      await SplashScreen.hideAsync()
                  })
          }
        } catch(error) {
            console.warn(error)
        }
      }
      
      async checkToken() {
        const token = await encryptor.getCredentials()
        if (token) {
          let response = await this.props.verifyToken(token)
          return response.payload
        }
      }

    render() {
        if (!this.state.appIsReady) { return null }
        
        else if (this.state.appIsReady && this.state.userPresent) {
            return <MainNavigator />
        } else {
            return <AccountNavigator />
        }
    }
}

const mapDispatchToProps = dispatch => { return { verifyToken: token => dispatch(verifyToken(token)) } }

export default connect(null, mapDispatchToProps)(SwitchNavigator)