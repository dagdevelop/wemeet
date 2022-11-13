
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MenuBottom from './src/navigation/MenuBottom';
import Loading from './src/components/Loading';
import ConnectionStack from './src/navigation/ConnectionStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HamburgerMenu from './src/navigation/HamburgerMenu';
//import { Provider } from 'react-redux';
//import { store } from './src/redux_wemeet/Store';


const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      Login: ConnectionStack,
      App: MenuBottom,
      Menu : HamburgerMenu, 
    },
    { initialRouteName: "Loading" },

  )
)


export default function App() {
  return (
    /*<Provider store={store}>*/


    <SafeAreaProvider>
      <StatusBar style='auto' />
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </SafeAreaProvider>


    /*</Provider>*/
  );
}


