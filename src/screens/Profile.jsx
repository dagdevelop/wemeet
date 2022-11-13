import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { primaryColor, styles } from '../style/styles';
import { CloseIcon, EditIcon, EventUnknown, NextIcon, ProfileIcon, WemeetIcon } from '../../assets/icon';

const emailApi = 'vially@mail.com';
const defaultPadding = 6;


const Profile = ({navigation}) => {
  const [toEdit, setToEdit] = useState(false);
  const [lastName, setLastName] = useState("Dag");
  const [firstName, setFirstName] = useState("Vially");
  const [email, setEmail] = useState(emailApi);
  const [address, setAdress] = useState("Rue lucien namêche 43");
  const [postalCode, setPostalCode] = useState(5000);


  return (
    <KeyboardAvoidingView behavior='padding'>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={[styles.profile.container]}>

          <ImageBackground source={WemeetIcon} blurRadius={16} fadeDuration={6000} style={styles.profile.header.container}>
            <Image style={styles.profile.header.image} source={ProfileIcon} />
            <Text style={styles.profile.header.name}> {firstName} {lastName} </Text>
            <Text style={[styles.defaultText, styles.shadow]}> {email} </Text>

            <View style={styles.profile.recap.container}>

              <View style={styles.profile.recap.item}>
                <Text style={styles.profile.recap.item.number}>0</Text>
                <Text style={[styles.defaultText, styles.shadow]}>Events organisés</Text>
              </View>

              <View style={styles.profile.recap.item}>
                <Text style={styles.profile.recap.item.number}>4</Text>
                <Text style={[styles.defaultText, styles.shadow]}>Participations</Text>
              </View>

            </View>
          </ImageBackground>

          <View style={styles.profile.body.container}>
            <TouchableOpacity onPress={() => navigation.navigate('MyEvent')} style={styles.profile.body.onglet}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image style={{ width: 40, height: 40, tintColor: 'orange' }} source={EventUnknown} />
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.subTitle}>Créer une Rencontre</Text>
                  <Text style={[styles.defaultText, { color: "black" }]}>Organisez votre propre évènement</Text>
                </View>
              </View>
              <Image source={NextIcon} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>

            {/*  INFORMATIONS PERSONNELLES */}

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 12 }}>
              <Text style={styles.title}>Informations personnelles</Text>
              <TouchableOpacity onPress={() => setToEdit(!toEdit)}>
                {toEdit ? <Image style={{ width: 31, height: 31, tintColor: primaryColor }} source={CloseIcon} /> : <Image style={{ width: 21, height: 21 }} source={EditIcon} />}
              </TouchableOpacity>
            </View>

            <View style={styles.profile.detail.container}>
              <View style={styles.profile.detail.item}>
                <Text style={[styles.defaultText, { color: "black", paddingBottom: defaultPadding }]}>Prénom</Text>
                {!toEdit ? (
                  <Text style={styles.text}> {firstName} </Text>
                ) : (
                  <TextInput textContentType='name' onChangeText={(e => setFirstName(e))} style={styles.input} value={firstName} />
                )}
              </View>

              <View style={styles.profile.detail.item}>
                <Text style={[styles.defaultText, { color: "black", paddingBottom: defaultPadding }]}>Nom</Text>
                {!toEdit ? (
                  <Text style={styles.text}> {lastName} </Text>
                ) : (
                  <TextInput textContentType='familyName' onChangeText={(e => setLastName(e))} style={styles.input} value={lastName} />
                )}
              </View>

              <View style={styles.profile.detail.item}>
                <Text style={[styles.defaultText, { color: "black", paddingBottom: defaultPadding }]}>E-mail</Text>
                {!toEdit ? (
                  <Text style={styles.text}> {email} </Text>
                ) : (
                  <TextInput textContentType='emailAddress' onChangeText={(e => setEmail(e))} style={styles.input} value={email} />
                )}
              </View>

              <View style={styles.profile.detail.item}>
                <Text style={[styles.defaultText, { color: "black", paddingBottom: defaultPadding }]}>Adresse</Text>
                {!toEdit ? (
                  <Text style={styles.text}> {address} </Text>
                ) : (
                  <TextInput textContentType='streetAddressLine1' onChangeText={(e => setAdress(e))} style={styles.input} value={address} />
                )}
              </View>

              <View style={styles.profile.detail.item}>
                <Text style={[styles.defaultText, { color: "black", paddingBottom: defaultPadding }]}>Code postal</Text>
                {!toEdit ? (
                  <Text style={styles.text}> {postalCode} </Text>
                ) : (
                  <TextInput keyboardType='numeric' onChangeText={(e => setPostalCode(e))} style={styles.input} value={postalCode} />
                )}
              </View>

              {toEdit && <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Enregistrer</Text>
              </TouchableOpacity>}

            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Profile;