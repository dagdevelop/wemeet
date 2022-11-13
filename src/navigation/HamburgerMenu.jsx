import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { WemeetIcon } from '../../assets/icon';
import MenuBottom from './MenuBottom';
import Home from '../screens/Home';
import MyEvent from '../screens/MyEvent';
import { styles } from '../style/styles';
import Login from '../screens/Login';
import ConnectionStack from './ConnectionStack';

const Drawer = createDrawerNavigator();

/*const DrawerContent = (props) => {
    return (
        <View>
            <ImageBackground source={WemeetIcon}>
                <Text>Username</Text>
            </ImageBackground>
            <View>
                <DrawerItem {...props} />
            </View>
        </View>
    );
}*/

const options = {
    drawerActiveBackgroundColor : 'orange',
    drawerActiveTintColor : 'black',
    drawerStatusBarAnimation : 'fade',
    freezeOnBlur: true,


}

const HamburgerMenu = () => {
  return (
    <Drawer.Navigator  useLegacyImplementation ={true}>
        <Drawer.Screen name='HomeMenu' component={MenuBottom} options={{headerShown: false, ...options}} />
        <Drawer.Screen name='Logout' component={ConnectionStack} 
        options={{headerShown: false, ...options}} />
    </Drawer.Navigator>
  )
}



export default HamburgerMenu;