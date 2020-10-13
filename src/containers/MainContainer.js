import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const MainContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>testing main container</Text>
        <StatusBar style="auto" />
        <Button 
          title="Go To Login" 
          onPress={() => navigation.navigate("Login", { exampleInfo: "You can pass info here as params"})}
        />
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