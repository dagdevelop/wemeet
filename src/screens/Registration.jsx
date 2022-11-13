import { View, Text, TextInput, ScrollView, SafeAreaView, Pressable, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { styles } from '../style/styles'

const Registration = ({navigation}) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPwd, setConfirmedPwd] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");


  const handleClick = () => {
    navigation.navigate("Login");
  }
  const handleRegistration = () => {
    Alert.alert('inscription réussie !');
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior='padding'>
      <ScrollView>
        <View style={[styles.container]}>
          <View style={{ justifyContent: 'flex-start' }}><View><Header title={'Registration'} /></View></View>
          <View style={styles.field}>

            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={(f) => setFirstName(f)}
              placeholder={'Prénom'}
              textContentType='name'
            />

          </View>

          <View style={styles.field}>

            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={(l) => setLastName(l)}
              placeholder={'Nom'}
              textContentType='familyName'
            />
          </View>

          <View style={styles.field}>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(e) => setEmail(e)}
              placeholder={'Adresse E-mail'}
              textContentType='emailAddress'
            />
          </View>

          <View style={styles.field}>

            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(p) => setPassword(p)}
              placeholder={'Mot de passe'}
              textContentType="newPassword"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.field}>

            <TextInput
              style={styles.input}
              value={confirmedPwd}
              onChangeText={(c) => setConfirmedPwd(c)}
              placeholder={'Confirmer le mot de passe'}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.field}>

            <TextInput
              style={styles.input}
              value={address}
              onChangeText={(a) => setAddress(a)}
              placeholder={'Rue et numéro'}
              textContentType="streetAddressLine1"
            />
          </View>

          <View style={styles.field}>

            <TextInput
              style={styles.input}
              value={postalCode}
              onChangeText={(c) => setPostalCode(c)}
              placeholder={'Code postal'}
              textContentType="postalCode"
            />
          </View>

          <TouchableOpacity onPress={handleRegistration}><View style={styles.button}><Text>S'inscrire</Text></View></TouchableOpacity>
          <Pressable onPress={handleClick}><Text style={styles.link}>Besoin d'un compte ? Se connecter ! </Text></Pressable>


        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Registration