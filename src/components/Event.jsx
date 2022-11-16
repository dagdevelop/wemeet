import { View, Text, Image, ActivityIndicator, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { EventIcon, EventUnknown, LocationIcon } from '../../assets/icon'
import { useState } from 'react'
import { useEffect } from 'react'

const Event = (props) => {
  const [event, setEvent] = useState(props.eventProp);

  useEffect(() => {
    setEvent(props.eventProp);
  }, [props.eventProp]);

  const handleClick = () => {
    alert(event.label);
  }



  return (
    event ? (
      <TouchableOpacity onPress={handleClick} style={[styles.event_component.container]}>
        <View >
          <View style={[styles.field, {justifyContent: 'flex-end'}]}>
            <Image style={styles.icon} source={EventUnknown} />
            <Text style={styles.event_component.label}> {event.label} </Text>
          </View>
          
          <View style={[styles.field, {justifyContent: 'flex-end'}]}>
            <Image style={styles.icon} source={LocationIcon} />
            <Text style={styles.event_component.city}> {event.city_name} </Text>
          </View>
          <Text style={styles.event_component.description}> {event.description} </Text>
        </View>
      </TouchableOpacity>
    ) : (
      <ActivityIndicator />
    )
  )
}

export default Event