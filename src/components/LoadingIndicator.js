import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { StatusBar, StyleSheet, View } from "react-native";

const LoadingIndicator = () => {
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

export default LoadingIndicator