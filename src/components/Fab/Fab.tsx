import React from 'react'
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface Props {
  title: string,
  position?: 'left' | 'right'
  onPress: () => void,
}

export const Fab = ({ title, onPress, position = 'right' }: Props) => {
  const android = () => {
    return (
      <View
        style={[
          styles.floatButton,
          position  === 'right' ? styles.right : styles.left
        ]}
      >
      <TouchableNativeFeedback
        onPress={onPress}
        background={ TouchableNativeFeedback.Ripple('#f0f0f0', false, 30) }
      >
        <View style={styles.button}>
          <Text>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
    )
  }

  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.floatButton,
          position  === 'right' ? styles.right : styles.left
        ]}
      >
        <View style={styles.button}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return Platform.OS === 'ios' ? ios() : android()
}
