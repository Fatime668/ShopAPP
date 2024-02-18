import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigation/stack/MainStack'
import { Provider } from 'react-redux'
import { store } from './src/redux'



const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <MainStack/>
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})