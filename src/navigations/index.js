import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator'

import { Context } from '../context/Provider';
import { View, Text } from 'react-native';


const AppNavContainer = () => {

    const {authState: {isLoggedIn}} = useContext(Context)
    console.log(isLoggedIn)

    return (
   
             <NavigationContainer>
                 
                 {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}                 
             </NavigationContainer>
     
    )
}

export default AppNavContainer
