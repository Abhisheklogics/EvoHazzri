/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 
 */

import React from 'react';

import {
  


  Text,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

//navigation

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './screens/Face';
import App from './screens/home';
import Multiple from './screens/Multiple';
export type RootStackParamList={
  Home:undefined
  App:undefined,
  Multiple:undefined
}

const Stack=createNativeStackNavigator<RootStackParamList>()
function Section() {
 
  return (
  
    <NavigationContainer>
 
      <Stack.Navigator screenOptions={{
   headerStyle:{
    backgroundColor:'white'
   },
   headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}
     
      initialRouteName='Home'>

        <Stack.Screen  name='Home' component={Home} 
       
        />
       
         <Stack.Screen  name='App' component={App}
       
       />
       <Stack.Screen name='Multiple' component={Multiple}
       
       />
   
      </Stack.Navigator>
      
    </NavigationContainer>

      );
}



export default Section;





