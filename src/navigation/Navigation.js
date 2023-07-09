import { Image, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import NavigationAccount from './NavigationAccount';
import NavigationFavoritos from './NavigationFavoritos';
import NavigationStack from './NavigationStack';

export default function Navigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
        initialRouteName="Rickandmorty"
        tabBarOptions={{
            style: styles.mainContainer,
            labelStyle: styles.tabBarLabelStyle,
        }}>
        <Tab.Screen 
            name='Account' 
            component={NavigationAccount}
            options={{
                tabBarLabel:"Mi cuenta",
                tabBarIcon:() => renderIconUser()
            }}
        />
        <Tab.Screen 
            name='Rickandmorty' 
            component={NavigationStack}
            options={{
                tabBarLabel:"",
                tabBarIcon: () => renderIconRM(),
            }}
        />
        <Tab.Screen 
            name='Favoritos' 
            component={NavigationFavoritos }
            options={{
                tabBarLabel:"Favoritos",
                tabBarIcon:() => renderIconStar(),
            }}

        />
        
    </Tab.Navigator>
  )
}

const renderIconRM=()=>{
    return(
        <Image
            source={require('../assets/iconoram.png')}
            style={{width:75, height:75, backgroundColor: '#03042A', borderRadius: 50, marginTop: -20}}
        />
    )
}
const renderIconUser=()=>{
    return(
        <Image
            source={require('../assets/iconUser.png')}
            style={{width:28, height:32}}
        />
    )
}
const renderIconStar=()=>{
    return(
        <Image
            source={require('../assets/iconStar.png')}
            style={{width:33, height:32}}
        />
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        bottom: 8,
        borderRadius: 50,
        padding: 8,
        marginHorizontal: 16,
        backgroundColor: '#1DF55C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarLabelStyle: {
        color: '#03042A',
        fontSize: 12,
    },
})