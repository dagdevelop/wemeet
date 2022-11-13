import React, { useState } from 'react';
import {Image, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../style/styles';
import Header from '../components/Header';


//const LogoView 

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleConnect = () => {
        setPassword('');
        setEmail('');
        navigation.navigate('Home');
    }

    const handleClick = () => {
        navigation.navigate('Registration');
    }


    return (
        <KeyboardAvoidingView behavior='padding' style={{backgroundColor: 'white'}}>
            <ScrollView>
                <View style={[styles.container]} >
                    <Header title={'Wemeet'} />
                    <View style={styles.logo.view}>
                        <Image style={styles.logo.image} source={require('../../assets/logo2.jpg')} />
                    </View>
                    <View>
                        <View style={styles.field}>
                            <Image style={styles.icon} source={require('../../assets/mail.png')} />
                            <TextInput style={styles.input} textContentType='emailAddress' value={email} onChangeText={(e) => setEmail(e)} placeholder={'Adresse mail'} />
                        </View>
                        <View style={styles.field}>
                            <Image style={styles.icon} source={require('../../assets/password.png')} />
                            <TextInput secureTextEntry={true} textContentType='password' style={styles.input} value={password} onChangeText={(p) => setPassword(p)} placeholder={'Mot de passe'} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => handleConnect()}>
                        <View style={[styles.button]}><Text style={styles.text}>Se connecter</Text></View>
                    </TouchableOpacity>
                    
                    <Pressable onPress={() => handleClick()}>
                        <Text style={[styles.link]}>Besoin d'un compte ? S'inscrire !</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;