import { View, Text, Pressable, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import HeaderNav from '../components/HeaderNav'

const MyEvent = ({ navigation }) => {
 
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNav
        leftElement={<Text style = {styles.headerNav.element}>{'< Home'}</Text>}
        navigation={navigation}
        rigthElement={<TouchableOpacity onPress={() => alert('Sauvegardé !')}><Text style = {styles.headerNav.element}>sauver</Text></TouchableOpacity>}
        title={'My Event'}
      />
      <Text>MyEvent</Text>
    </SafeAreaView>
  )
}

export default MyEvent