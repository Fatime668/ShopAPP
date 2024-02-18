import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreen from '../screens/SignUpScreen'
import TabMain from '../tab'

type AuthenticationStackParamList = {
   SignUp:undefined;
   TabMain:undefined
  };

const Stack = createNativeStackNavigator<AuthenticationStackParamList>()

const MainStack = () => {
  return (
<Stack.Navigator>
        <Stack.Screen
          name='SignUp'
          component={SignUpScreen}
          options={{
            headerShown: false,
            headerTitle:''
          }}
        />
        <Stack.Screen
          name='TabMain'
          component={TabMain}
          options={{
            headerShown: false
          }}
        />
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})