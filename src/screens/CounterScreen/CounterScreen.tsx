import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0'
    }}>

      <Text style={{
        fontSize: 28,
        textAlign: 'center',
        color: '#161616'
      }}>
        Counter
      </Text>

      <Text style={{
        fontSize: 60,
        textAlign: 'center',
        color: '#161616'
      }}>
        {counter}
      </Text>

      <View style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        top: 200
      }}>
        
          <Button
            onPress={ () => setCounter(lastCount => lastCount - 1) }
            title='-'
            />
          <Button
            onPress={ () => setCounter(lastCount => lastCount + 1) }
            title='+'
            />
      </View>
    </View>
  )
}
