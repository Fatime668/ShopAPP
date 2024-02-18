import { StyleProp, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'


interface Props{
    children:any,
    localStyles? : StyleProp<any>
}

const RowComponent = (props:Props) => {
    const {children,localStyles} = props
  return (
    <View style={[
        localStyles,
        styles.tabBarContainer,
        {
            flexDirection:'row',
            paddingHorizontal:8,
            paddingVertical:4
        }
    ]}>
      {children}
    </View>
  )
}

export default RowComponent

const styles = StyleSheet.create({
    tabBarContainer:{
        borderRadius:100
      }
})