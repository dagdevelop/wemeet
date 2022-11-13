import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const Loading = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    isConnected ? navigation.navigate('Menu') : navigation.navigate('Login');
  }, []);
  return (
    <View>
      
      <Text>Loading</Text>
    </View>
  )
}

export default Loading