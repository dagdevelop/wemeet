import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../style/styles';
import HeaderNav from '../components/HeaderNav';

const NewEvent = ( {navigation} ) => {
  return (
    <View >
      <HeaderNav
        leftElement={<Text style = {styles.headerNav.element}>{'< Home'}</Text>}
        navigation={navigation}
        rigthElement={<TouchableOpacity onPress={() => alert('Sauvegardé !')}><Text style = {styles.headerNav.element}>sauver</Text></TouchableOpacity>}
        title={'New Event'}>
        </HeaderNav>
      <Text>NewEvent</Text>
    </View>
  )
}

export default NewEvent;