import { View, Image, TextInput } from 'react-native';
import React from 'react';
import { styles } from '../style/styles';
import { SearchIcon } from '../../assets/icon';

const SearchBarApp = ({ searchCity, setSearchCity }) => {
    
    
    return (
        <View style={styles.searchBar.container}>
            <View
                style={styles.searchBar.unclicked}
            >
                <Image source={SearchIcon} style={[styles.icon, {marginLeft: 1}]} />
                <TextInput
                    style={styles.searchBar.input}
                    placeholder = 'Search'
                    value={searchCity}
                    onChangeText={setSearchCity}
                />
            </View>
        </View>
    )
}

export default SearchBarApp