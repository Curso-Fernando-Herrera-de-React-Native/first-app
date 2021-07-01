import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

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
        
      <TouchableOpacity
        onPress={ () => setCounter( lastCount => lastCount - 1) }
        style={ styles.floatLeft }
      >
        <View style={styles.button}>
          <Text>
            -1
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => setCounter( lastCount => lastCount + 1) }
        style={ styles.floatRigth }  
      >
        <View style={styles.button}>
          <Text>
            +1
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    
  )
}
