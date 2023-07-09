import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Account from '../screen/Account';
import UserData from '../components/Auth/UserData';

export default function NavigationAccount() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name='Account' component={Account} options={{
                                                                          title:'Login', 
                                                                          headerStyle: {backgroundColor: 'transparent'},
                                                                          headerTintColor: 'white',
                                                                          headerTitleStyle: {fontWeight: 'bold', letterSpacing: 3, textAlign: 'center'},
                                                                          headerBackground: () => (<LinearGradient
                                                                            colors={['rgba(29, 245, 92, 1)', 'rgba(3, 4, 42, 1)']}
                                                                            style={{ flex: 1 }}
                                                                          />)
                                                                          }}/>
        {/* <Stack.Screen name='UserData' component={UserData} options={{
                                                                          title:'', 
                                                                          headerStyle: {backgroundColor: 'transparent'},
                                                                          headerTintColor: 'white',
                                                                          headerTitleStyle: {fontWeight: 'bold', letterSpacing: 3, textAlign: 'center'},
                                                                          headerBackground: () => (<LinearGradient
                                                                            colors={['rgba(29, 245, 92, 1)', 'rgba(3, 4, 42, 1)']}
                                                                            style={{ flex: 1 }}
                                                                          />)
                                                                          }}/> */}
    </Stack.Navigator>
  )
}