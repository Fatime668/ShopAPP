import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigation/stack/MainStack'



const App = () => {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})