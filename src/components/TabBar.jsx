import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../style/styles';
import { MenuIcon } from '../../assets/icon';
import SearchBarApp from './SearchBarApp';


const TabBar = ({ searchCity, setSearchCity, title, navigation }) => {
    return (

        <View style={styles.menuBar.container}>
            <View style={[styles.menuBar.elements]}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image source={MenuIcon} style={[styles.icon, { tintColor: 'whitesmoke' }]} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'whitesmoke', marginLeft: 6 }}>{title}</Text>
            </View>
            <View>
                <SearchBarApp
                    searchCity={searchCity}
                    setSearchCity={setSearchCity}
                />
            </View>
        </View>

    )
}

export default TabBar