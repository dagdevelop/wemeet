import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'

const HeaderNav = ({ title, leftElement, rigthElement, navigation, titleStyle, show = true }) => {

    return (
        <>
            {show && (
                <View style={styles.headerNav.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        {leftElement}
                    </TouchableOpacity>
                    <Text style={titleStyle ? titleStyle : styles.headerNav.title}> {title} </Text>
                    {rigthElement}
                </View>
            )}
        </>
    )
}

export default HeaderNav