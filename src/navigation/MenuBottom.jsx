import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { AddIcon, EventIcon, HomeIcon, PersonIcon } from '../../assets/icon';
import { Image } from 'react-native';
import { styles } from '../style/styles';
import Profile from '../screens/Profile';
import NewEvent from '../screens/NewEvent';
import MyEvent from '../screens/MyEvent';


const Tab = createBottomTabNavigator();

const MenuBottom = () => {
    return (

       
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let icon;

                        if (route.name === 'Search') {
                            icon = HomeIcon;
                        } else if (route.name === 'NewEvent') {
                            icon = AddIcon;
                        } else if (route.name === 'MyEvent') {
                            icon = EventIcon;
                        } else if (route.name === 'Profile') {
                            icon = PersonIcon;
                        }

                        return <Image source={icon} style={focused ? styles.iconSelected : styles.icon} />;
                       
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveBackgroundColor : 'orange'

                })}
            >
                <Tab.Screen
                    name='Search'
                    component={Home}
                    options={{ title: 'Home', headerShown : false }}
                />
                <Tab.Screen
                    name='NewEvent'
                    component={NewEvent}
                    options={{ title: 'New Event', headerShown : false }}
                />
                <Tab.Screen
                    name='MyEvent'
                    component={MyEvent}
                    options={{ title: 'My Event', headerShown : false }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{ title: 'Profile', headerShown : false }}
                />
            </Tab.Navigator>
      

    )
}

export default MenuBottom;