import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const MainContainer = () => {
    return (
        <View style={styles.container}>
            <Text>testing main container</Text>
            <StatusBar style="auto" />
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
  });

export default MainContainer