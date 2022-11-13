import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'

const Header = ({title}) => {
  return (
    <View style={[styles.container, styles.header.container]}>
      <Text style={styles.header.title}>{title}</Text>
    </View>
  )
}

export default Header