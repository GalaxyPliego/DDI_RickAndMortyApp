import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Favoritos from '../screen/Favoritos';
import Personaje from '../screen/Personaje';
import BackIcon from "../assets/iconBack.png";

export default function NavigationFavoritos() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favoritos' component={Favoritos} options={{
                                                                          title:'Favoritos', 
                                                                          headerStyle: {backgroundColor: 'transparent'},
                                                                          headerTintColor: 'white',
                                                                          headerTitleStyle: {fontWeight: 'bold', letterSpacing: 3, textAlign: 'center'},
                                                                          headerBackground: () => (<LinearGradient
                                                                            colors={['rgba(29, 245, 92, 1)', 'rgba(3, 4, 42, 1)']}
                                                                            style={{ flex: 1 }}
                                                                          />)
                                                                          }}/>
    <Stack.Screen name = "PersonajeFav" component={ Personaje}  options={{
              title:'', 
              headerTransparent: true,
              headerTitleStyle: {
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              },
              headerBackImage: () => (
                <Image
                  source={BackIcon}
                  style={{ width: 34, height: 40, marginLeft: 10 }}
                />
              ), 
          }}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    headerStyles: {
        backgroundColor: '#03042A',
    }
})