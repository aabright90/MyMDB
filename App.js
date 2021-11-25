import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './screens/Home'

const App = () => {

  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default App


