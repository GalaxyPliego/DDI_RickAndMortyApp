import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'
import starsBack from '../assets/starsBack.png'
import useAuth from '../hooks/UseAuth'


export default function Account() {

  const { auth } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageBack} source={starsBack}/>
      <Image style={styles.imageBack2} source={starsBack}/>
      {auth ? <UserData/> : <LoginForm/>}
    </SafeAreaView>
  )
}

styles = StyleSheet.create({
    container: {
        backgroundColor: '#03042A',
        height: '100%',
    },
    imageBack: {
      position: 'absolute',
      width: 420,
    },
    imageBack2: {
      position: 'absolute',
      bottom: 0,
      width: 420,
    },
})