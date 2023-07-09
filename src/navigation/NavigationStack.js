import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Personaje from "../screen/Personaje";
import BackIcon from "../assets/iconBack.png";
import RickAndMortyList from "../components/RickAndMortyList";


export default function NavigationStack() {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Rickandmorty">
      <Stack.Screen name = "Rickandmorty" component={ RickAndMortyList } options={{
                                                                          title:'', 
                                                                          headerStyle: {backgroundColor: 'transparent', height: 50},
                                                                          headerTintColor: 'white',
                                                                          headerTitleStyle: {fontWeight: 'bold', letterSpacing: 3, textAlign: 'center'},
                                                                          headerBackground: () => (<LinearGradient
                                                                            colors={['rgba(29, 245, 92, 1)', 'rgba(3, 4, 42, 1)']}
                                                                            style={{ flex: 1 }}
                                                                          />)
                                                                          }}/>
        <Stack.Screen name = "Personaje" component={ Personaje}  options={{
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
  );
}
