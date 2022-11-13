import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuBottom from "./MenuBottom";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import HamburgerMenu from "./HamburgerMenu";

const Stack = createNativeStackNavigator();


const ConnectionStack = () => {
  return (

    <Stack.Navigator >
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ title: 'Login', headerShown: false }}
      />
      <Stack.Screen
        name='Registration'
        component={Registration}
        options={{ title: 'Registration', headerShown: false}}

      />
      <Stack.Screen
        name='Home'
        component={HamburgerMenu}
        options={{ title: 'Home', headerShown: false, gestureEnabled: false }}

      />
    </Stack.Navigator>
  );
}

export default ConnectionStack;