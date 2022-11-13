import { View, ActivityIndicator, FlatList, Text } from 'react-native'
import React from 'react'
import Event from './Event';
import { styles } from '../style/styles';

const EventListe = ({ events }) => {


  //bien le styliser
  const listEmpty = () => {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Oups !</Text>
        <Text style={[styles.defaultText, { color: 'black', alignSelf: 'center', margin: 30 }]}>
          Dommage, aucun évènement ne correspond à votre recherche
        </Text>
      </View>
    )
  }

  return (
    events ? (
      <View style={[styles.container, styles.eventListe.container]}>
        <FlatList
          ListEmptyComponent={listEmpty}
          refreshing={true}
          showsVerticalScrollIndicator={false}
          data={events}
          renderItem={({ item }) => {
            return <Event eventProp={item} />
          }}


        />
      </View>
    ) : (
      <ActivityIndicator color={'orange'} accessibilityLabel='Chargement' size={'large'} />
    )
  )
}

export default EventListe