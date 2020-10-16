import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./splash.png')} style={{ width: 305, height: 300 }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

export default LoadingScreen