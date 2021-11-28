import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from './assets/styles';
import Home from './screens/Home'

const App = () => {

  return (
    <View style={styles.mainContainer}>
      <Home/>
    </View>
  );
}




export default App


