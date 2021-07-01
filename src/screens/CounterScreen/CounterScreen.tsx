import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Fab } from '../../components/Fab/Fab'
import { styles } from './styles'

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View style={ styles.screen }>
      <Text style={ styles.title }>Counter</Text>
      <Text style={ styles.number }>{counter}</Text>
      <Fab
        title="-1"
        onPress={ () => setCounter(lastCount => lastCount - 1) }
        position='left'
        />
      <Fab
        title="+1"
        onPress={ () => setCounter(lastCount => lastCount + 1) }
        position='right'
      />
    </View>
  )
}
