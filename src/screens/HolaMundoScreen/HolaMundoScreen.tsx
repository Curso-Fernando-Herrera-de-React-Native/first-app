import React from 'react'
import { Button, Text, View } from 'react-native'

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        alignItems: 'center'
      }}  
    >
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center'
        }}
      >
        🙋🏻‍♂️ Hola! Golosa
      </Text>
    </View>
  )
}
